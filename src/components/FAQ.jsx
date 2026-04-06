import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { faq as faqData } from '../data'
import './pages/Details.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const FAQ = () => {
  const faqRef = useRef(null)
  const faqTitleRef = useRef(null)
  const faqItems = faqData

  // Helper function to parse answer text and convert phone numbers to clickable links
  const parseAnswerWithPhoneNumbers = (answer) => {
    // Phone number pattern: matches 10-11 digit numbers (Philippine format)
    const phonePattern = /(\d{10,11})/g
    
    const parts = []
    let lastIndex = 0
    let match
    
    while ((match = phonePattern.exec(answer)) !== null) {
      // Add text before the phone number
      if (match.index > lastIndex) {
        parts.push(answer.substring(lastIndex, match.index))
      }
      
      // Add the phone number as a link
      const phoneNumber = match[0]
      // Format phone number for tel: protocol (remove leading 0 and add country code for better compatibility)
      // Keep original format for display, but use international format for tel: link
      const telNumber = phoneNumber.startsWith('0') ? `+63${phoneNumber.slice(1)}` : phoneNumber
      parts.push(
        <a
          key={match.index}
          href={`tel:${telNumber}`}
          className="faq-phone-link"
          aria-label={`Call ${phoneNumber}`}
        >
          {phoneNumber}
        </a>
      )
      
      lastIndex = match.index + phoneNumber.length
    }
    
    // Add remaining text after the last phone number
    if (lastIndex < answer.length) {
      parts.push(answer.substring(lastIndex))
    }
    
    // If no phone numbers were found, return the original answer
    return parts.length > 0 ? parts : answer
  }

  useEffect(() => {
    // FAQ section animation - title first, then items one after the other
    if (faqRef.current && faqTitleRef.current) {
      // Set initial states
      gsap.set(faqTitleRef.current, { opacity: 0, y: 30 })
        
        ScrollTrigger.create({
          trigger: faqRef.current,
          start: "top 80%",
          onEnter: () => {
          // 1. Animate title first
          gsap.to(faqTitleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
              // 2. After title animation, find and animate items one after the other
              const faqItemsContainer = faqRef.current.querySelector('.faq-items')
              if (faqItemsContainer) {
                const faqItems = Array.from(faqItemsContainer.children).filter(child => child.tagName === 'DIV')
                
                if (faqItems.length > 0) {
                  // Set initial states for items
                  gsap.set(faqItems, { opacity: 0, y: 30 })
                  
                  // Animate items one after the other
            gsap.to(faqItems, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
                    stagger: 0.2
            })
                }
              }
          }
        })
      }
      })
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="relative z-20 faq-section bg-gold">
      <div ref={faqRef} className="relative z-10 w-full px-8 sm:px-12 md:px-8 lg:px-16">
        <h3 ref={faqTitleRef} className="relative inline-block px-6 py-3 mb-12 text-center w-full">
          <span 
            className="font-foglihten text-3xl sm:text-4xl md:text-5xl lg:text-6xl inline-block leading-none capitalize text-[#fff4e6]"
          >
            Frequently Asked Questions
          </span>
        </h3>
        {faqItems && faqItems.faqData && (
          <div className="faq-items max-w-[600px] mx-auto">
            {faqItems.faqData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border-b border-forest/15 pb-6 pt-6 first:pt-0 last:border-b-0"
                >
                  <div className="mb-2">
                    <p className="text-base sm:text-lg font-albert text-[#fff4e6] mb-2 faq-question-bold">
                      Q: {item.question}
                    </p>
                    <p className="text-sm sm:text-base font-albert font-thin text-[#fff4e6] whitespace-pre-line">
                      A: {parseAnswerWithPhoneNumbers(item.answer)}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default FAQ
