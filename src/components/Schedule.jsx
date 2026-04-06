import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { couple, schedule as scheduleData } from '../data'
import './pages/Details.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Schedule = () => {
  const scheduleTitleRef = useRef(null)
  const timelineRef = useRef(null)
  const lineRef = useRef(null)
  const eventsRef = useRef(null)

  useEffect(() => {
    // Schedule title animation
    if (scheduleTitleRef.current) {
      ScrollTrigger.create({
        trigger: scheduleTitleRef.current,
        start: "top 80%",
        animation: gsap.fromTo(scheduleTitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        ),
        toggleActions: "play none none reverse"
      })
    }

    // Timeline line expansion from top to bottom
    if (lineRef.current) {
      ScrollTrigger.create({
        trigger: timelineRef.current,
        start: "top 70%",
        animation: gsap.fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: 'top center' },
          { scaleY: 1, transformOrigin: 'top center', duration: 1.5, ease: 'power2.out' }
        ),
        toggleActions: "play none none reverse"
      })
    }

    // Events animate in with stagger
    if (eventsRef.current) {
      const eventItems = eventsRef.current.querySelectorAll('div.flex.items-center')
      if (eventItems.length > 0) {
        gsap.set(eventItems, { opacity: 0, y: 30 })
        ScrollTrigger.create({
          trigger: eventsRef.current,
          start: "top 70%",
          onEnter: () => {
            gsap.to(eventItems, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.2
            })
          }
        })
      }
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars && (
          trigger.vars.trigger === scheduleTitleRef.current ||
          trigger.vars.trigger === timelineRef.current ||
          trigger.vars.trigger === eventsRef.current
        )) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <div className="relative program-section">
      {/* Program Title */}
      <div ref={scheduleTitleRef} className="relative z-10 mb-12 sm:mb-16 program-title-container">
        <h3 className="px-6 py-3">
          <span 
            className="font-foglihten text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none capitalize program-title-text"
          >
            Order of Events
          </span>
        </h3>
        <p className="text-sm sm:text-base md:text-lg font-albert text-obsidian/85 text-center mt-4 mx-auto px-4 program-description">
          Join us as we celebrate this special day together
        </p>
      </div>

      {/* Vertical Timeline */}
      <div ref={timelineRef} className="relative z-10 mx-auto w-full max-w-md sm:max-w-xl lg:max-w-2xl timeline-container">
        {/* Centering wrapper: GSAP scaleY must not replace translateX (would break line position). */}
        <div
          className="pointer-events-none absolute inset-y-0 left-1/2 z-[1] w-0 -translate-x-1/2"
          aria-hidden
        >
          <div
            ref={lineRef}
            className="h-full w-0.5 rounded-full bg-wedding-400/80"
            style={{ transformOrigin: 'top center' }}
          />
        </div>

        {/* Timeline Events */}
        <div ref={eventsRef} className="relative z-[2] space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
           {scheduleData.events.map((event, index) => {
             const isLeft = event.position === 'left'
             return (
               <div key={index} className="flex items-center relative min-h-[60px]">
                 {isLeft ? (
                   <>
            <div className="w-1/2 pr-6 text-right flex flex-col justify-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl alice-regular mb-1 timeline-event-time">
                         {event.time}
              </div>
              <div className="mb-1 border-b border-dashed border-wedding-400/65"></div>
              <div className="text-sm sm:text-base md:text-lg font-albert timeline-event-description">
                         {event.description}
              </div>
            </div>
            <div
              className="absolute left-1/2 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-wedding-400 bg-wedding-200 shadow-sm ring-2 ring-wedding-200/70"
              aria-hidden
            />
                     <div className="w-1/2 pl-6 text-left"></div>
                   </>
                 ) : (
                   <>
                     <div className="w-1/2 pr-6 text-right"></div>
            <div
              className="absolute left-1/2 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-wedding-400 bg-wedding-200 shadow-sm ring-2 ring-wedding-200/70"
              aria-hidden
            />
            <div className="w-1/2 pl-6 text-left flex flex-col justify-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl alice-regular mb-1 timeline-event-time">
                         {event.time}
              </div>
              <div className="mb-1 border-b border-dashed border-wedding-400/65"></div>
              <div className="text-sm sm:text-base md:text-lg font-albert timeline-event-description">
                         {event.description}
              </div>
            </div>
                   </>
                 )}
          </div>
             )
           })}
        </div>
      </div>
    </div>
  )
}

export default Schedule
