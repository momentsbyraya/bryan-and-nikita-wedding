import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { couple, venues, prenupImages } from '../data'

const Hero = () => {
  const coupleTogetherRef = useRef(null)
  const dateRef = useRef(null)
  const venueRef = useRef(null)

  const formatDate = () => {
    const { day, year, month } = couple.wedding
    const monthUpper = month.toUpperCase()
    const dayFormatted = String(day).padStart(2, '0')
    return `${monthUpper}.${dayFormatted}.${year}`
  }

  const venueName = venues.ceremony.name

  useEffect(() => {
    gsap.set(coupleTogetherRef.current, { opacity: 0, y: 30 })
    gsap.set(dateRef.current, { opacity: 0, y: 20 })
    gsap.set(venueRef.current, { opacity: 0, y: 20 })

    const tl = gsap.timeline({ delay: 0.3 })

    if (dateRef.current) {
      tl.to(dateRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      })
    }

    if (venueRef.current) {
      tl.to(venueRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.3")
    }

    if (coupleTogetherRef.current) {
      tl.to(coupleTogetherRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power2.out"
      }, "-=0.2")
    }

  }, [])

  const heroAlt = couple.together.replace('&', 'and')

  return (
    <div className="relative w-full overflow-hidden bg-forest" style={{ height: '100vh' }}>
      <img
        src={prenupImages.hero}
        alt={heroAlt}
        className="absolute left-1/2 top-1/2 h-[102%] w-[102%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-center"
        fetchPriority="high"
        decoding="async"
      />

      <svg
        className="pointer-events-none absolute -top-2 left-1/2 z-10 h-[calc(16rem+16px)] w-[calc(100%+24px)] max-w-none -translate-x-1/2 sm:h-[calc(20rem+16px)] md:h-[calc(24rem+16px)] lg:h-[calc(28rem+20px)]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="heroBlurTop">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>
          <linearGradient id="topGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(31, 43, 32, 1)" />
            <stop offset="12%" stopColor="rgba(31, 43, 32, 0.95)" />
            <stop offset="40%" stopColor="rgba(31, 43, 32, 0.72)" />
            <stop offset="70%" stopColor="rgba(31, 43, 32, 0.35)" />
            <stop offset="100%" stopColor="rgba(31, 43, 32, 0)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#topGradient)" filter="url(#heroBlurTop)" />
      </svg>
      
      <div className="absolute top-0 left-0 right-0 pt-8 sm:pt-12 md:pt-16 lg:pt-20 px-4 sm:px-6 md:px-8 z-20">
        <div className="max-w-4xl mx-auto text-center">
          <p ref={dateRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-foglihten text-white" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.25)' }}>
            {formatDate()}
          </p>
          <p ref={venueRef} className="text-xs sm:text-sm md:text-base font-albert mt-2 sm:mt-3 text-gold" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.45)' }}>
            {venueName}
          </p>
        </div>
      </div>

      <svg
        className="pointer-events-none absolute -bottom-2 left-1/2 z-10 h-[calc(16rem+16px)] w-[calc(100%+24px)] max-w-none -translate-x-1/2 sm:h-[calc(20rem+16px)] md:h-[calc(24rem+16px)] lg:h-[calc(28rem+20px)]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="heroBlurBottom">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>
          <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(31, 43, 32, 0)" />
            <stop offset="30%" stopColor="rgba(31, 43, 32, 0.38)" />
            <stop offset="60%" stopColor="rgba(31, 43, 32, 0.75)" />
            <stop offset="88%" stopColor="rgba(31, 43, 32, 0.96)" />
            <stop offset="100%" stopColor="rgba(31, 43, 32, 1)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#bottomGradient)" filter="url(#heroBlurBottom)" />
      </svg>

      <div className="absolute bottom-0 left-0 right-0 pb-10 sm:pb-12 md:pb-14 lg:pb-16 px-4 sm:px-6 md:px-8 z-20">
        <div className="max-w-4xl mx-auto text-center">
          <p
            ref={coupleTogetherRef}
            className="font-foglihten text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-gold"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.45), 0 0 24px rgba(0,0,0,0.2)' }}
          >
            {couple.together}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
