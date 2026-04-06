import React from 'react'
import GradientLayer from './GradientLayer'
import { isPrenupPlaceholder } from '../data/prenupImages'

const ImageBanner = ({
  src,
  alt = 'Banner image',
  subtitle = 'The',
  title = 'Details'
}) => {
  const placeholderBanner = isPrenupPlaceholder(src)
  return (
    <div className="relative z-20 w-screen" style={{ width: '100vw' }}>
      <div className="relative w-full h-[250px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
          <img 
            src={src} 
            alt={alt} 
            className={
              placeholderBanner
                ? 'h-full w-full bg-sage object-contain object-center px-6 py-4'
                : 'h-full w-full object-cover object-center'
            }
          />
          {/* Cream-tinted overlay — keeps photo readable; body below stays cream-forward */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sage/70 via-transparent to-sage/35" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-gold/14" aria-hidden />
          <GradientLayer height="h-32" opacity={0.55} gradientId="whiteGradient1" />
          <GradientLayer height="h-24" opacity={0.4} gradientId="whiteGradient2" />
          <GradientLayer height="h-12" opacity={0.35} gradientId="whiteGradient3" />
          <GradientLayer height="h-8" opacity={0.28} gradientId="whiteGradient4" />
          <GradientLayer height="h-6" opacity={0.22} gradientId="whiteGradient5" />
          <GradientLayer height="h-4" opacity={0.18} gradientId="whiteGradient6" />
          
          <svg 
            className="absolute bottom-0 left-0 w-full h-[12px] pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 1200 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="solidTransition" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(240, 231, 222, 0.85)" />
                <stop offset="50%" stopColor="rgba(240, 231, 222, 0.95)" />
                <stop offset="100%" stopColor="rgba(240, 231, 222, 1)" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#solidTransition)" />
          </svg>
          
          <div className="absolute bottom-0 left-0 w-full flex flex-col justify-center items-center pb-0.5 z-10">
            <div className="w-full text-center">
              <h1 className="font-ballet text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 text-gold-dark drop-shadow-sm">
                {subtitle}
              </h1>
              <h2 className="font-tebranos text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase mb-4 -mt-6 text-white drop-shadow-md">
                {title}
              </h2>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ImageBanner
