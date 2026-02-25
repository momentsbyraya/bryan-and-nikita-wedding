import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Counter = ({ countdown }) => {
  const sectionRef = useRef(null)
  const countdownRef = useRef(null)

  useEffect(() => {
    // Countdown numbers stagger animation (run once so numbers stay visible)
    if (countdownRef.current) {
      const els = countdownRef.current.querySelectorAll(".countdown-number")
      gsap.fromTo(els,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15
        }
      )
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative w-full"
      style={{ marginTop: '2rem' }}
    >
      {/* Countdown Timer */}
      <div ref={countdownRef} className="flex justify-center items-center space-x-3 px-4">
        <div className="text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-albert font-semibold mb-1 countdown-number tabular-nums" style={{ color: '#4D0011' }}>
            {countdown.days}
          </div>
          <div className="text-xs sm:text-sm font-medium" style={{ color: '#4D0011', opacity: 0.9 }}>Days</div>
        </div>
        
        <div className="text-2xl sm:text-3xl md:text-4xl font-albert font-thin" style={{ color: '#4D0011' }}>:</div>
        
        <div className="text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-albert font-semibold mb-1 countdown-number tabular-nums" style={{ color: '#4D0011' }}>
            {countdown.hours}
          </div>
          <div className="text-xs sm:text-sm font-medium" style={{ color: '#4D0011', opacity: 0.9 }}>Hours</div>
        </div>
        
        <div className="text-2xl sm:text-3xl md:text-4xl font-albert font-thin" style={{ color: '#4D0011' }}>:</div>
        
        <div className="text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-albert font-semibold mb-1 countdown-number tabular-nums" style={{ color: '#4D0011' }}>
            {countdown.minutes}
          </div>
          <div className="text-xs sm:text-sm font-medium" style={{ color: '#4D0011', opacity: 0.9 }}>Minutes</div>
        </div>
        
        <div className="text-2xl sm:text-3xl md:text-4xl font-albert font-thin" style={{ color: '#4D0011' }}>:</div>
        
        <div className="text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-albert font-semibold mb-1 countdown-number tabular-nums" style={{ color: '#4D0011' }}>
            {countdown.seconds}
          </div>
          <div className="text-xs sm:text-sm font-medium" style={{ color: '#4D0011', opacity: 0.9 }}>Seconds</div>
        </div>
      </div>
    </div>
  )
}

export default Counter 