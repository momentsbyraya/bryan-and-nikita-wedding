import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { X } from 'lucide-react'
import { entourage } from '../data'

const getCategory = (label) => entourage.entourageList.find((item) => item.category === label)

const EntourageModal = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null)
  const contentRef = useRef(null)
  const scrollYRef = useRef(0)
  const officiant = getCategory('Officiant')
  const principalSponsors = getCategory('Principal Sponsors')
  const bestMan = getCategory('Best Man') || getCategory('Bestman')
  const maidOfHonor = getCategory('Maid of Honor')
  const secondarySponsors = getCategory('Secondary Sponsors')
  const veilSponsors = getCategory('Veil Sponsors')
  const cordSponsors = getCategory('Cord Sponsors')
  const candleSponsors = getCategory('Candle Sponsors')
  const flowerGirls = getCategory('Flower Girls')
  const ringBearer = getCategory('Ring Bearer')
  const coinBearer = getCategory('Coin Bearer')
  const bridesmaids = secondarySponsors?.bridesmaids || secondarySponsors?.bridesmaid || []
  const groomsmen = secondarySponsors?.groomsmen || []
  const ringAndCoinBearers = [...(ringBearer?.names || []), ...(coinBearer?.names || [])]

  useEffect(() => {
    if (isOpen) {
      scrollYRef.current = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollYRef.current}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'

      gsap.set([overlayRef.current, contentRef.current], { opacity: 0 })
      gsap.set(contentRef.current, { y: 20 })

      gsap.to(overlayRef.current, { opacity: 1, duration: 0.25, ease: 'power2.out' })
      gsap.to(contentRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' })
    }

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      if (isOpen) window.scrollTo(0, scrollYRef.current)
    }
  }, [isOpen])

  const handleClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.2, ease: 'power2.out' })
    gsap.to(contentRef.current, { opacity: 0, y: 20, duration: 0.2, ease: 'power2.out' }).then(() => onClose())
  }

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) handleClose()
  }

  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 z-[200]">
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/60"
        onClick={handleOverlayClick}
      />

      <div
        ref={contentRef}
        className="absolute inset-0 flex items-center justify-center p-4 sm:p-6"
        style={{
          backgroundImage: 'url(/assets/images/graphics/bg-2.png), url(/assets/images/graphics/bg-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="w-full max-w-4xl rounded-2xl border-2 border-gold-dark/35 bg-cream shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gold-dark/20 bg-cream/95 px-4 py-3 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-foglihten text-gold-dark drop-shadow-sm tracking-wide">
              Entourage
            </h2>
            <button
              onClick={handleClose}
              className="p-2 text-forest hover:text-black bg-white/70 hover:bg-white/90 rounded-full transition-colors duration-200"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            className="max-h-[80vh] overflow-y-auto overscroll-contain px-6 py-6 sm:px-8 sm:py-7 text-center"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="space-y-6 text-center">
              {officiant?.names?.length > 0 && (
                <div>
                  <h3 className="font-leckerli text-xl sm:text-2xl text-gold-dark">Officiant</h3>
                  {officiant.names.map((name) => (
                    <p key={name} className="font-albert text-sm sm:text-base mt-1">{name}</p>
                  ))}
                </div>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-leckerli text-xl sm:text-2xl text-gold-dark">Bride</h3>
                  <p className="font-albert text-sm sm:text-base mt-1">{entourage.couple.bride.name}</p>
                </div>
                <div>
                  <h3 className="font-leckerli text-xl sm:text-2xl text-gold-dark">Groom</h3>
                  <p className="font-albert text-sm sm:text-base mt-1">{entourage.couple.groom.name}</p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-leckerli text-xl sm:text-2xl text-gold-dark">Bride&apos;s Parents</h3>
                  <p className="font-albert text-sm sm:text-base mt-1">{entourage.parents.bride.father}</p>
                  <p className="font-albert text-sm sm:text-base">{entourage.parents.bride.mother}</p>
                </div>
                <div>
                  <h3 className="font-leckerli text-xl sm:text-2xl text-gold-dark">Groom&apos;s Parents</h3>
                  <p className="font-albert text-sm sm:text-base mt-1">{entourage.parents.groom.father}</p>
                  <p className="font-albert text-sm sm:text-base">{entourage.parents.groom.mother}</p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {maidOfHonor?.names?.length > 0 && (
                  <div>
                    <h3 className="font-leckerli text-xl sm:text-2xl text-gold-dark">Maid of Honor</h3>
                    {maidOfHonor.names.map((name) => (
                      <p key={name} className="font-albert text-sm sm:text-base mt-1">{name}</p>
                    ))}
                  </div>
                )}
                {bestMan?.names?.length > 0 && (
                  <div>
                    <h3 className="font-leckerli text-xl sm:text-2xl text-gold-dark">Best Man</h3>
                    {bestMan.names.map((name) => (
                      <p key={name} className="font-albert text-sm sm:text-base mt-1">{name}</p>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {bridesmaids.length > 0 && (
                  <div>
                    <h3 className="font-leckerli text-xl sm:text-2xl text-gold-dark">Bridesmaids</h3>
                    {bridesmaids.map((name) => (
                      <p key={name} className="font-albert text-sm sm:text-base mt-1">{name}</p>
                    ))}
                  </div>
                )}
                {groomsmen.length > 0 && (
                  <div>
                    <h3 className="font-leckerli text-xl sm:text-2xl text-gold-dark">Groomsmen</h3>
                    {groomsmen.map((name) => (
                      <p key={name} className="font-albert text-sm sm:text-base mt-1">{name}</p>
                    ))}
                  </div>
                )}
              </div>

              {(principalSponsors?.ninang?.length > 0 || principalSponsors?.ninong?.length > 0) && (
                <div>
                  <h3 className="font-leckerli text-xl sm:text-2xl text-gold-dark">Ninang and Ninongs (Primary Sponsors)</h3>
                  <div className="grid gap-6 sm:grid-cols-2 mt-1">
                    <div>
                      {principalSponsors.ninang?.map((name) => (
                        <p key={name} className="font-albert text-sm sm:text-base mt-1">{name}</p>
                      ))}
                    </div>
                    <div>
                      {principalSponsors.ninong?.map((name) => (
                        <p key={name} className="font-albert text-sm sm:text-base mt-1">{name}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {(veilSponsors?.names?.length > 0 || cordSponsors?.names?.length > 0 || candleSponsors?.names?.length > 0) && (
                <div>
                  <h3 className="font-leckerli text-xl sm:text-2xl text-gold-dark">Secondary Sponsors</h3>
                  {(veilSponsors?.names?.length > 0 || cordSponsors?.names?.length > 0) && (
                    <p className="font-albert text-sm sm:text-base mt-1">
                      Veil and Cord: {[
                        ...(veilSponsors?.names || []),
                        ...(cordSponsors?.names || []),
                      ].filter((name, index, arr) => arr.indexOf(name) === index).join(' and ')}
                    </p>
                  )}
                  {candleSponsors?.names?.length > 0 && (
                    <div className="mt-2">
                      <p className="font-albert text-sm sm:text-base">Candles:</p>
                      {candleSponsors.names.map((name) => (
                        <p key={name} className="font-albert text-sm sm:text-base">{name}</p>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {flowerGirls?.names?.length > 0 && (
                <div>
                  <h3 className="font-leckerli text-xl sm:text-2xl text-gold-dark">Flowergirls</h3>
                  {flowerGirls.names.map((name) => (
                    <p key={name} className="font-albert text-sm sm:text-base mt-1">{name}</p>
                  ))}
                </div>
              )}

              {ringAndCoinBearers.length > 0 && (
                <div>
                  <h3 className="font-leckerli text-xl sm:text-2xl text-gold-dark">Ring &amp; Coin Bearer</h3>
                  {[...new Set(ringAndCoinBearers)].map((name) => (
                    <p key={name} className="font-albert text-sm sm:text-base mt-1">{name}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default EntourageModal
