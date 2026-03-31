import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { entourage, couple } from '../data'
import { themeConfig } from '../config/themeConfig'
import './pages/Entourage.css'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const EntourageSection = () => {
  const headerRef = useRef(null)
  const groomRef = useRef(null)
  const brideRef = useRef(null)
  const parentsRef = useRef(null)
  const principalSponsorsRef = useRef(null)
  const secondarySponsorsRef = useRef(null)
  const bestmanRef = useRef(null)
  const maidOfHonorRef = useRef(null)
  const bibleBearerRef = useRef(null)
  const ringBearerRef = useRef(null)
  const coinBearerRef = useRef(null)
  const flowerBoysRef = useRef(null)
  const flowerGirlsRef = useRef(null)
  const hereComesTheBrideRef = useRef(null)
  const veilSponsorsRef = useRef(null)
  const cordSponsorsRef = useRef(null)
  const candleSponsorsRef = useRef(null)
  const juniorFlowerGirlsRef = useRef(null)
  const littleFlowerGirlsRef = useRef(null)

  useEffect(() => {
    // Collect all names from Parents down to Flower Girls for sequential row-by-row animation
    const allNameRows = []
    let currentTime = 0
    
    // Parents section - collect rows (animate even if only one side has names)
    if (parentsRef.current) {
      const groomParents = parentsRef.current.querySelectorAll('.flex-1:first-child p.font-poppins')
      const brideParents = parentsRef.current.querySelectorAll('.flex-1:last-child p.font-poppins')
      
      if (groomParents.length > 0 || brideParents.length > 0) {
        const maxLength = Math.max(groomParents.length, brideParents.length)
        gsap.set([...groomParents, ...brideParents], { opacity: 0, y: 20 })
        
        for (let i = 0; i < maxLength; i++) {
          const row = []
          if (groomParents[i]) row.push(groomParents[i])
          if (brideParents[i]) row.push(brideParents[i])
          if (row.length > 0) {
            allNameRows.push({ elements: row, time: currentTime })
            currentTime += 0.2
          }
        }
      }
    }

    // Bestman and Maid of Honor - collect rows (right after Parents)
    if (bestmanRef.current && maidOfHonorRef.current) {
      const bestmanNames = bestmanRef.current.querySelectorAll('p.font-poppins')
      const maidOfHonorNames = maidOfHonorRef.current.querySelectorAll('p.font-poppins')
      
      if (bestmanNames.length > 0 || maidOfHonorNames.length > 0) {
        const maxLength = Math.max(bestmanNames.length, maidOfHonorNames.length)
        gsap.set([...bestmanNames, ...maidOfHonorNames], { opacity: 0, y: 20 })
        
        for (let i = 0; i < maxLength; i++) {
          const row = []
          if (bestmanNames[i]) row.push(bestmanNames[i])
          if (maidOfHonorNames[i]) row.push(maidOfHonorNames[i])
          if (row.length > 0) {
            allNameRows.push({ elements: row, time: currentTime })
            currentTime += 0.2
          }
        }
      }
    }

    // Principal Sponsors - collect rows
    if (principalSponsorsRef.current) {
      const ninongElements = principalSponsorsRef.current?.querySelectorAll('.ninong-item')
      const ninangElements = principalSponsorsRef.current?.querySelectorAll('.ninang-item')
      
      if (ninongElements && ninangElements && (ninongElements.length > 0 || ninangElements.length > 0)) {
        const maxLength = Math.max(ninongElements.length, ninangElements.length)
        gsap.set([...ninongElements, ...ninangElements], { opacity: 0, y: 20 })
        
        // Collect paired rows
        for (let i = 0; i < maxLength; i++) {
          const row = []
          if (ninongElements[i]) row.push(ninongElements[i])
          if (ninangElements[i]) row.push(ninangElements[i])
          if (row.length > 0) {
            allNameRows.push({ elements: row, time: currentTime })
            currentTime += 0.2
    }
    }

        // Collect unpaired ninangs
        const unpairedNinangs = principalSponsorsRef.current?.querySelectorAll('.mt-4 .ninang-item')
        if (unpairedNinangs && unpairedNinangs.length > 0) {
          gsap.set(unpairedNinangs, { opacity: 0, y: 20 })
          Array.from(unpairedNinangs).forEach(ninang => {
            allNameRows.push({ elements: [ninang], time: currentTime })
            currentTime += 0.1
      })
    }
      }
    }

    // Secondary Sponsors - collect Candle, Veil, Cord Sponsors (single column - one name per row)
    const sponsorRefs = [candleSponsorsRef, veilSponsorsRef, cordSponsorsRef].filter(ref => ref.current)
    sponsorRefs.forEach(ref => {
      const names = ref.current.querySelectorAll('p.font-poppins')
      if (names.length > 0) {
        gsap.set(names, { opacity: 0, y: 20 })
        Array.from(names).forEach(name => {
          allNameRows.push({ elements: [name], time: currentTime })
          currentTime += 0.1
        })
      }
    })
    
    // Ring, Bible, Coin, Flower Boy(s), Flower Girls - collect (single column - matches page order)
    const bearerRefs = [ringBearerRef, bibleBearerRef, coinBearerRef, flowerBoysRef, flowerGirlsRef].filter(ref => ref.current)
      bearerRefs.forEach(ref => {
        const names = ref.current.querySelectorAll('p.font-poppins')
      if (names.length > 0) {
        gsap.set(names, { opacity: 0, y: 20 })
        Array.from(names).forEach(name => {
          allNameRows.push({ elements: [name], time: currentTime })
          currentTime += 0.1
        })
      }
    })
    
    // Groomsmen + Bridesmaids - collect rows
    if (secondarySponsorsRef.current) {
      const groomsmenElements = secondarySponsorsRef.current?.querySelectorAll('.groomsmen-item')
      const bridesmaidsElements = secondarySponsorsRef.current?.querySelectorAll('.bridesmaids-item')
      
      if (groomsmenElements && bridesmaidsElements && (groomsmenElements.length > 0 || bridesmaidsElements.length > 0)) {
        const maxLength = Math.max(groomsmenElements.length, bridesmaidsElements.length)
        gsap.set([...groomsmenElements, ...bridesmaidsElements], { opacity: 0, y: 20 })
        
        for (let i = 0; i < maxLength; i++) {
          const row = []
          if (groomsmenElements[i]) row.push(groomsmenElements[i])
          if (bridesmaidsElements[i]) row.push(bridesmaidsElements[i])
          if (row.length > 0) {
            allNameRows.push({ elements: row, time: currentTime })
            currentTime += 0.2
          }
        }
      }
    }

    // Junior Flower Girls - collect (single column - one name per row)
    if (juniorFlowerGirlsRef.current) {
      const names = juniorFlowerGirlsRef.current.querySelectorAll('p.font-poppins')
      if (names.length > 0) {
        gsap.set(names, { opacity: 0, y: 20 })
        Array.from(names).forEach(name => {
          allNameRows.push({ elements: [name], time: currentTime })
          currentTime += 0.1
              })
      }
    }

    // Little Flower Girls - collect (single column - one name per row)
    if (littleFlowerGirlsRef.current) {
      const names = littleFlowerGirlsRef.current.querySelectorAll('p.font-poppins')
      if (names.length > 0) {
        gsap.set(names, { opacity: 0, y: 20 })
        Array.from(names).forEach(name => {
          allNameRows.push({ elements: [name], time: currentTime })
          currentTime += 0.1
        })
      }
    }

    // Here comes the bride - collect (single column - one name per row)
    if (hereComesTheBrideRef.current) {
      const names = hereComesTheBrideRef.current.querySelectorAll('p.font-poppins')
      if (names.length > 0) {
        gsap.set(names, { opacity: 0, y: 20 })
        Array.from(names).forEach(name => {
          allNameRows.push({ elements: [name], time: currentTime })
          currentTime += 0.1
        })
      }
    }
    
    // Animate all collected rows sequentially when section comes into view
    if (allNameRows.length > 0 && parentsRef.current) {
        ScrollTrigger.create({
        trigger: parentsRef.current,
          start: "top 80%",
          onEnter: () => {
          const masterTl = gsap.timeline()
          allNameRows.forEach(({ elements, time }) => {
            masterTl.to(elements, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out"
            }, time)
            })
          },
          toggleActions: "play none none reverse"
        })
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const officiatingMinister = entourage.entourageList.find(item => item.category === "Officiating Minister")
  const principalSponsors = entourage.entourageList.find(item => item.category === "Principal Sponsors")
  const secondarySponsors = entourage.entourageList.find(item => item.category === "Secondary Sponsors")
  const bestman = entourage.entourageList.find(item => item.category === "Bestman")
  const maidOfHonor = entourage.entourageList.find(item => item.category === "Maid of Honor")
  const matron = entourage.entourageList.find(item => item.category === "Matron")
  const bibleBearer = entourage.entourageList.find(item => item.category === "Bible Bearer")
  const ringBearer = entourage.entourageList.find(item => item.category === "Ring Bearer")
  const coinBearer = entourage.entourageList.find(item => item.category === "Coin Bearer")
  const flowerBoys = entourage.entourageList.find(item => item.category === "Flower Boys")
  const hereComesTheBride = entourage.entourageList.find(item => item.category === "Here comes the bride")
  const veilSponsors = entourage.entourageList.find(item => item.category === "Veil Sponsors")
  const cordSponsors = entourage.entourageList.find(item => item.category === "Cord Sponsors")
  const candleSponsors = entourage.entourageList.find(item => item.category === "Candle Sponsors")
  const juniorFlowerGirls = entourage.entourageList.find(item => item.category === "Junior Flower Girls")
  const littleFlowerGirls = entourage.entourageList.find(item => item.category === "Little Flower Girls")
  const flowerGirls = entourage.entourageList.find(item => item.category === "Flower Girls")
  const littleBride = entourage.entourageList.find(item => item.category === "Little Bride")

  return (
    <section
      id="entourage"
      data-section="entourage"
      className="w-full overflow-x-clip bg-white"
    >
      <div className="m-0 p-0 max-w-none overflow-x-clip" style={{ width: '100vw', margin: 0, padding: 0 }}>
        <img
          ref={headerRef}
          src="/assets/images/entourage/BACK%20VISUAL%20-%201ST%20PAGE%20%28restructured%29.png"
          alt="Wedding entourage visual page 1"
          className="m-0 p-0 border-0 align-middle block h-auto max-w-none"
          style={{ width: '100vw', margin: 0, padding: 0, display: 'block' }}
          loading="lazy"
        />
        <img
          src="/assets/images/entourage/FRONT%20VISUAL%20-%202ND%20PAGE.png"
          alt="Wedding entourage visual page 2"
          className="m-0 p-0 border-0 align-middle block h-auto max-w-none"
          style={{ width: '100vw', margin: 0, padding: 0, display: 'block' }}
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default EntourageSection
