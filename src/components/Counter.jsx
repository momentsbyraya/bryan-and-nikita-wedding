import React, { useRef } from 'react'

const Counter = ({ countdown }) => {
  const sectionRef = useRef(null)
  const countdownRef = useRef(null)

  return (
    <div
      ref={sectionRef}
      className="relative w-full"
      style={{ marginTop: '2rem' }}
    >
      <div ref={countdownRef} className="flex justify-center items-center space-x-3 px-4 text-forest">
        <div className="text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-albert font-semibold mb-1 countdown-number tabular-nums">
            {countdown.days}
          </div>
          <div className="text-xs sm:text-sm font-medium text-wedding-600">Days</div>
        </div>
        
        <div className="text-2xl sm:text-3xl md:text-4xl font-albert font-thin text-gold-dark">:</div>
        
        <div className="text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-albert font-semibold mb-1 countdown-number tabular-nums">
            {countdown.hours}
          </div>
          <div className="text-xs sm:text-sm font-medium text-wedding-600">Hours</div>
        </div>
        
        <div className="text-2xl sm:text-3xl md:text-4xl font-albert font-thin text-gold-dark">:</div>
        
        <div className="text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-albert font-semibold mb-1 countdown-number tabular-nums">
            {countdown.minutes}
          </div>
          <div className="text-xs sm:text-sm font-medium text-wedding-600">Minutes</div>
        </div>
        
        <div className="text-2xl sm:text-3xl md:text-4xl font-albert font-thin text-gold-dark">:</div>
        
        <div className="text-center">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-albert font-semibold mb-1 countdown-number tabular-nums">
            {countdown.seconds}
          </div>
          <div className="text-xs sm:text-sm font-medium text-wedding-600">Seconds</div>
        </div>
      </div>
    </div>
  )
}

export default Counter
