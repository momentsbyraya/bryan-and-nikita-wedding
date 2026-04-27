import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { couple, prenupImages } from '../data'
import { isPrenupPlaceholder } from '../data/prenupImages'

const Hero = () => {
  const coupleNameRef = useRef(null)
  const dateRef = useRef(null)
  const formatDate = () => {
    const { day, year, month } = couple.wedding
    const monthUpper = month.toUpperCase()
    const dayFormatted = String(day).padStart(2, '0')
    return `${monthUpper}.${dayFormatted}.${year}`
  }

  useEffect(() => {
    gsap.set(coupleNameRef.current, { opacity: 0, y: 24 })
    gsap.set(dateRef.current, { opacity: 0, y: 20 })

    const tl = gsap.timeline({ delay: 0.3 })

    if (coupleNameRef.current) {
      tl.to(coupleNameRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power2.out"
      })
    }

    if (dateRef.current) {
      tl.to(dateRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.35")
    }

  }, [])

  const heroAlt = couple.together.replace('&', 'and')
  const heroPlaceholder = isPrenupPlaceholder(prenupImages.hero)
  const heroImgClass = heroPlaceholder
    ? 'absolute inset-0 h-full w-full max-w-none bg-sage object-contain object-center'
    : 'absolute left-1/2 top-1/2 h-[102%] w-[102%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-center md:inset-0 md:h-full md:w-full md:max-w-none md:translate-x-0 md:translate-y-0 md:object-[center_78%]'

  return (
    <div className="relative w-full overflow-hidden bg-sage" style={{ height: '100vh' }}>
      <img
        src={prenupImages.hero}
        alt={heroAlt}
        className={heroImgClass}
        fetchpriority="high"
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
            <stop offset="0%" stopColor="rgba(48, 38, 30, 0.72)" />
            <stop offset="25%" stopColor="rgba(48, 38, 30, 0.42)" />
            <stop offset="55%" stopColor="rgba(48, 38, 30, 0.12)" />
            <stop offset="100%" stopColor="rgba(48, 38, 30, 0)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#topGradient)" filter="url(#heroBlurTop)" />
      </svg>
      
      <div className="pointer-events-none absolute top-0 left-0 right-0 pt-6 sm:pt-10 md:pt-14 lg:pt-16 px-4 sm:px-6 md:px-8 z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={coupleNameRef}
            className="font-foglihten text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-gold-dark tracking-wide"
            style={{ textShadow: '0 0 20px rgba(240,231,222,0.95), 0 1px 2px rgba(255,255,255,0.9)' }}
          >
            {couple.together}
          </h1>
          <p ref={dateRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-foglihten text-gold-dark mt-3 sm:mt-4" style={{ textShadow: '0 1px 2px rgba(255,255,255,0.9), 0 0 24px rgba(240,231,222,0.95)' }}>
            {formatDate()}
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
            <stop offset="0%" stopColor="rgba(240, 231, 222, 0)" />
            <stop offset="35%" stopColor="rgba(240, 231, 222, 0.22)" />
            <stop offset="65%" stopColor="rgba(240, 231, 222, 0.62)" />
            <stop offset="88%" stopColor="rgba(240, 231, 222, 0.9)" />
            <stop offset="100%" stopColor="rgba(240, 231, 222, 0.97)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#bottomGradient)" filter="url(#heroBlurBottom)" />
      </svg>

    </div>
  )
}

export default Hero
