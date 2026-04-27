import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { createPortal } from 'react-dom'
import { loveStory, prenupImages } from '../data'
import { isPrenupPlaceholder } from '../data/prenupImages'
import './pages/Details.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const LoveStory = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const scrollYRef = useRef(0)
  const [showFullStory, setShowFullStory] = useState(false)

  // Split content into paragraphs
  const paragraphs = loveStory.content.split('\n\n').filter(p => p.trim())
  const summaryText = 'From a simple conversation at work to choosing each other for all the days to come.'

  const polaroidImages = prenupImages.loveStory

  // Title animation (once)
  useEffect(() => {
    if (!titleRef.current) return undefined

    const trigger = ScrollTrigger.create({
      trigger: titleRef.current,
      start: 'top 80%',
      animation: gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      ),
      toggleActions: 'play none none reverse',
    })

    return () => {
      trigger.kill()
    }
  }, [])

  // Full-story rows: animate when modal opens
  useEffect(() => {
    if (!showFullStory) return undefined

    scrollYRef.current = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollYRef.current}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'

    requestAnimationFrame(() => {
      const storyItems = document.querySelectorAll('.love-story-modal .story-item')
      if (storyItems.length > 0) {
        gsap.fromTo(
          storyItems,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
            stagger: 0.1,
          }
        )
      }
    })

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      window.scrollTo(0, scrollYRef.current)
    }
  }, [showFullStory])

  useEffect(() => {
    if (!showFullStory) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowFullStory(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [showFullStory])

  // Function to format paragraph text with styled quote
  const formatParagraph = (text) => {
    const quotePattern = /("I found him whom my soul loveth" – Song of Solomon 3:4)/
    const parts = text.split(quotePattern)

    return parts.map((part, i) => {
      if (quotePattern.test(part)) {
        return (
          <span key={i} className="font-bold italic">
            {part}
          </span>
        )
      }
      return part
    })
  }

  const Polaroid = ({ image, rotation = 0, index, size = 'normal', peekOnly = false }) => {
    const maxWidth = peekOnly
      ? '104px'
      : size === 'solo'
        ? '140px'
        : size === 'small'
          ? '150px'
          : '200px'

    const isPlaceholder = isPrenupPlaceholder(image)

    if (peekOnly) {
      return (
        <div
          className="love-story-polaroid love-story-polaroid-peek bg-white relative flex-shrink-0"
          style={{
            border: '3px solid white',
            borderBottom: '10px solid white',
            transform: `rotate(${rotation}deg)`,
            width: '100%',
            maxWidth,
            padding: '2px 2px 0 2px',
            overflow: 'hidden',
          }}
        >
          <div className="relative overflow-hidden rounded-[1px]" style={{ height: '3.75rem' }}>
            <img
              src={image}
              alt={`Love story photo ${index + 1}, preview`}
              className={
                isPlaceholder
                  ? 'absolute left-0 top-0 h-full w-full bg-sage object-contain object-center'
                  : 'absolute left-0 top-0 h-[220%] w-full object-cover object-top'
              }
              style={{
                border: '2px solid #d4bae8',
                borderBottom: 'none',
                display: 'block',
              }}
            />
          </div>
          <img
            src="/assets/images/graphics/stamp.png"
            alt=""
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
            aria-hidden
            style={{
              top: '-6%',
              width: '22%',
              height: 'auto',
            }}
          />
        </div>
      )
    }

    return (
      <div
        className="love-story-polaroid bg-white relative"
        style={{
          border: '4px solid white',
          borderBottom: '14px solid white',
          transform: `rotate(${rotation}deg)`,
          maxWidth,
          width: '100%',
          padding: '2px 2px 10px 2px',
        }}
      >
        <div className="relative">
          <img
            src={image}
            alt={`Love story moment ${index + 1}`}
            className={
              isPlaceholder
                ? 'aspect-square w-full bg-sage object-contain object-center'
                : 'aspect-square w-full object-cover object-center'
            }
            style={{
              border: '2px solid #d4bae8',
              borderBottom: 'none',
              display: 'block',
            }}
          />
          <img
            src="/assets/images/graphics/stamp.png"
            alt="Stamp"
            className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none"
            style={{
              top: '-8%',
              width: '20%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    )
  }

  // Curate image flow so photos match the story progression without changing text.
  const paragraphImageMap = [
    [0],      // where it began
    [1, 2],   // friendship to dates
    [3, 4],   // feelings deepened
    [5, 6],   // choosing each other
  ]

  const storySegments = paragraphs.map((paragraph, i) => {
    const mappedIndices = paragraphImageMap[i] || []
    const imageIndices = mappedIndices.filter((imgIdx) => Boolean(polaroidImages[imgIdx]))

    return {
      paragraph,
      index: i,
      imageCount: imageIndices.length,
      imageIndices,
    }
  })

  return (
    <div ref={sectionRef} className="relative pt-12 sm:pt-16 md:pt-20">
      <div className="mx-4 sm:mx-6 md:mx-8 mb-12 sm:mb-16 rounded-2xl bg-cream text-center shadow-lg border border-gold/20 px-4 py-8 sm:px-8 sm:py-10">
        <div className="flex justify-center mb-4">
          <img
            src="/assets/images/graphics/heart.png"
            alt="Heart decoration"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
          />
        </div>
        <h3 ref={titleRef} className="relative inline-block px-6 py-3">
          <span
            className="font-foglihten text-3xl sm:text-4xl md:text-5xl lg:text-6xl inline-block leading-none capitalize text-gold-dark drop-shadow-sm"
          >
            {loveStory.title}
          </span>
        </h3>
        <p className="text-base sm:text-lg font-albert font-thin text-forest leading-relaxed text-center max-w-3xl mx-auto mt-3">
          {summaryText}
        </p>
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => setShowFullStory(true)}
            aria-expanded={showFullStory}
            aria-haspopup="dialog"
            aria-controls="love-story-modal"
            className="px-5 py-2 rounded-full bg-gold text-[#fff4e6] border border-gold-dark/35 hover:bg-gold-dark hover:text-[#fff4e6] transition-colors duration-200 font-albert text-sm sm:text-base"
          >
            Read full story
          </button>
        </div>
      </div>

      {showFullStory &&
        createPortal(
          <div
            id="love-story-modal"
            className="love-story-modal fixed inset-0 z-[9999] bg-[#f0e7de] p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Our love story"
            onClick={() => setShowFullStory(false)}
          >
            <div
              className="mx-auto flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl border-2 border-gold-dark/45 ring-2 ring-gold/30 bg-cream shadow-[0_24px_70px_rgba(58,49,72,0.28)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-gold/20 px-4 py-3 sm:px-6">
                <h4 className="font-foglihten text-xl sm:text-2xl text-gold-dark">{loveStory.title}</h4>
                <button
                  type="button"
                  onClick={() => setShowFullStory(false)}
                  className="rounded-full border border-gold-dark/30 px-3 py-1 text-sm font-albert text-forest hover:bg-gold/15"
                >
                  Close
                </button>
              </div>
              <div className="relative overflow-y-auto overscroll-contain px-4 py-6 sm:px-6 md:px-8">
                <div className="relative z-10 space-y-16 sm:space-y-20 md:space-y-24 pb-2">
                  {storySegments.map(({ paragraph, index, imageCount, imageIndices }) => {
                    const isLast = index === paragraphs.length - 1

                    return (
                      <div key={index} className="story-item relative">
                        {!isLast && (
                          <div
                            className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none"
                            style={{
                              bottom: '-2.25rem',
                              width: '100px',
                              height: '4.5rem',
                              zIndex: 0,
                            }}
                          >
                            <svg
                              width="100"
                              height="100%"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              className="absolute inset-0"
                              style={{ overflow: 'visible' }}
                            >
                              <path
                                d="M 50 0 Q 32 22, 50 45 T 50 100"
                                stroke="#3a3148"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="4,4"
                                opacity="0.4"
                              />
                            </svg>
                            <div
                              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full"
                              style={{
                                backgroundColor: '#3a3148',
                                opacity: 0.45,
                              }}
                            />
                          </div>
                        )}

                        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                          {imageCount > 0 && (
                            <div
                              className={`flex justify-center flex-1 min-w-0 ${
                                imageCount === 2
                                  ? 'flex-row flex-nowrap gap-2 sm:gap-6'
                                  : 'flex-row'
                              }`}
                            >
                              {imageIndices.map((imgIdx, i) =>
                                polaroidImages[imgIdx] ? (
                                  <Polaroid
                                    key={imgIdx}
                                    image={polaroidImages[imgIdx]}
                                    rotation={imageCount === 1 ? -4 : i === 0 ? -5 : 5}
                                    index={imgIdx}
                                    size={imageCount === 1 ? 'solo' : 'normal'}
                                  />
                                ) : null
                              )}
                            </div>
                          )}
                          {paragraph && (
                            <div
                              className={`text-center sm:text-left ${imageCount > 0 ? 'flex-1' : 'w-full'}`}
                            >
                              <p className="text-base sm:text-lg font-albert font-thin text-forest leading-relaxed">
                                {formatParagraph(paragraph)}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  )
}

export default LoveStory
