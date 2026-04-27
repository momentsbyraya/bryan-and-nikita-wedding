import React, { createContext, useContext, useRef, useState, useEffect } from 'react'
import { audio } from '../data'
import bundledBackgroundMusic from '../assets/music/background.mp3'

const AudioContext = createContext(null)

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null)
  const sourceIndexRef = useRef(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const getEncodedSources = () => {
    const baseUrl = window.location.origin
    const rawPath = audio.background.startsWith('/') ? audio.background : '/' + audio.background
    const fallbackPath = rawPath.replace(/^\/assets\//, '/')
    const rawSources = [...new Set([bundledBackgroundMusic, rawPath, fallbackPath])]

    return rawSources.map((source) => {
      if (typeof source === 'string' && /^https?:\/\//.test(source)) {
        return source
      }
      const encodedPath =
        '/' +
        source
          .split('/')
          .filter(Boolean)
          .map((segment) => encodeURIComponent(segment))
          .join('/')
      try {
        return new URL(encodedPath, baseUrl).href
      } catch (error) {
        console.warn('Failed to build absolute audio URL, using encoded path:', error)
        return encodedPath
      }
    })
  }

  const createAudioElement = (src) => {
    // Initialize audio with URL-safe encoding for special characters in file names.
    const audioSrc = src || getEncodedSources()[sourceIndexRef.current]

    let audioElement
    audioElement = new Audio(audioSrc)

    audioElement.preload = 'auto'
    audioElement.loop = false
    audioElement.volume = audio.volume

    return audioElement
  }

  useEffect(() => {
    audioRef.current = createAudioElement()

    const loopStart = typeof audio.loopStart === 'number' ? audio.loopStart : 0
    const loopEnd = typeof audio.loopEnd === 'number' ? audio.loopEnd : null

    const handleTimeUpdate = () => {
      if (!audioRef.current || loopEnd == null) return

      // When reaching the loop end (e.g. 2:39), jump back to loopStart (e.g. 0:02)
      if (audioRef.current.currentTime >= loopEnd) {
        audioRef.current.currentTime = loopStart
        // keep playing seamlessly if already playing
        if (!audioRef.current.paused) {
          // no await; best-effort
          audioRef.current.play().catch(() => {})
        }
      }
    }
    
    // Update playing state
    audioRef.current.addEventListener('play', () => setIsPlaying(true))
    audioRef.current.addEventListener('pause', () => setIsPlaying(false))
    audioRef.current.addEventListener('ended', () => setIsPlaying(false))
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
    
    // Cleanup audio on component unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate)
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const play = async () => {
    try {
      // Safety net: in case user taps before effect initialization completes.
      if (!audioRef.current) {
        audioRef.current = createAudioElement()
      }

      const loopStart = typeof audio.loopStart === 'number' ? audio.loopStart : 0
      audioRef.current.currentTime = loopStart
      await audioRef.current.play()
      setIsPlaying(true)
    } catch (error) {
      const sources = getEncodedSources()
      const nextIndex = sourceIndexRef.current + 1

      if (nextIndex < sources.length) {
        sourceIndexRef.current = nextIndex
        audioRef.current = createAudioElement(sources[nextIndex])
        try {
          const loopStart = typeof audio.loopStart === 'number' ? audio.loopStart : 0
          audioRef.current.currentTime = loopStart
          await audioRef.current.play()
          setIsPlaying(true)
          return
        } catch (retryError) {
          console.log('Could not play music after retry:', retryError)
        }
      }

      console.log('Could not play music:', error)
    }
  }

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const value = {
    audioRef,
    isPlaying,
    play,
    pause
  }

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  )
}

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}

