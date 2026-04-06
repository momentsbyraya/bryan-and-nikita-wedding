import React from 'react'
import Hero from './Hero'
import Venue from './Venue'
import Schedule from './Schedule'
import DressCode from './DressCode'
import EntourageSection from './EntourageSection'
import RSVPSection from './RSVPSection'
import LoveStory from './LoveStory'
import Gallery from './Gallery'
import GiftRegistry from './GiftRegistry'
import FAQ from './FAQ'
import SaveTheDateCounter from './SaveTheDateCounter'
import FullBleedPhoto from './FullBleedPhoto'
import FullBleedPhotoSplit from './FullBleedPhotoSplit'
import { couple, prenupImages } from '../data'
import './pages/Details.css'

const photoAlt = couple.together.replace('&', 'and')

const Home = ({ onOpenRSVP }) => {
  return (
    <div className="relative w-full bg-sage">
      {/* Hero Section */}
      <Hero />

      <div>
        {/* Flower Banner - Top */}
        <div className="relative" style={{ width: '100vw' }}>
          <img
            src="/assets/images/graphics/flower-banner-2.png"
            alt="Flower banner"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto">
            {/* Venue Section */}
            <Venue />
          </div>
        </div>

        {/* Flower Banner - Bottom */}
        <div className="relative" style={{ width: '100vw' }}>
          <img
            src="/assets/images/graphics/flower-banner-3.png"
            alt="Flower banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <FullBleedPhoto
        src={prenupImages.pool[8]}
        alt={photoAlt}
      />

      <div>
        <div className="relative" style={{ width: '100vw' }}>
          <img
            src="/assets/images/graphics/flower-banner-3.png"
            alt="Flower banner"
            className="w-full h-auto object-contain"
            style={{ transform: 'scaleY(-1)' }}
          />
        </div>

        <div className="relative z-20 flex items-center justify-center">
          <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto">
            {/* Schedule Section */}
            <Schedule />
          </div>
        </div>

        <div className="relative" style={{ width: '100vw' }}>
          <img
            src="/assets/images/graphics/flower-banner-2.png"
            alt="Flower banner"
            className="w-full h-auto object-contain"
            style={{ transform: 'scaleY(-1)' }}
          />
        </div>
      </div>

      <FullBleedPhoto
        src={prenupImages.pool[4]}
        alt={photoAlt}
      />

      <div
        style={{
          backgroundImage: 'url(/assets/images/graphics/bg-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* RSVP Section */}
        <div className="relative z-20 flex items-center justify-center">
          <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto">
            <RSVPSection onOpenRSVP={onOpenRSVP} />
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto px-4 flex items-center gap-3">
          <div className="h-px bg-gold-dark/55 flex-1" />
          <div className="w-2 h-2 border border-gold-dark/60 rotate-45 flex-shrink-0" />
          <div className="h-px bg-gold-dark/55 flex-1" />
        </div>

        {/* Entourage Section */}
        <EntourageSection />

        <div className="w-full max-w-3xl mx-auto px-4 flex items-center gap-3">
          <div className="h-px bg-gold-dark/55 flex-1" />
          <div className="w-2 h-2 border border-gold-dark/60 rotate-45 flex-shrink-0" />
          <div className="h-px bg-gold-dark/55 flex-1" />
        </div>

        <div className="relative z-20 flex items-center justify-center">
          <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto">
            <GiftRegistry />
          </div>
        </div>
      </div>

      <FullBleedPhoto
        src={prenupImages.pool[10]}
        alt={photoAlt}
      />

      <div
        style={{
          backgroundImage: 'url(/assets/images/graphics/bg-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative" style={{ width: '100vw' }}>
          <img
            src="/assets/images/graphics/flower-banner-2.png"
            alt="Flower banner"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="relative z-20 flex items-center justify-center pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
          <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto">
            <DressCode />
          </div>
        </div>

        <div className="relative" style={{ width: '100vw' }}>
          <img
            src="/assets/images/graphics/flower-banner-3.png"
            alt="Flower banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <FullBleedPhoto
        src={prenupImages.pool[7]}
        alt={photoAlt}
      />

      <div
        style={{
          backgroundImage: 'url(/assets/images/graphics/bg-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative" style={{ width: '100vw' }}>
          <img
            src="/assets/images/graphics/flower-banner-3.png"
            alt="Flower banner"
            className="w-full h-auto object-contain"
            style={{ transform: 'scaleY(-1)' }}
          />
        </div>

        <div className="relative z-20 flex items-center justify-center">
          <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto">
            <LoveStory />
          </div>
        </div>

        <div className="relative" style={{ width: '100vw' }}>
          <img
            src="/assets/images/graphics/flower-banner-2.png"
            alt="Flower banner"
            className="w-full h-auto object-contain"
            style={{ transform: 'scaleY(-1)' }}
          />
        </div>
      </div>

      <div className="relative z-20 flex items-center justify-center">
        <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto">
          {/* Gallery - masonry-style grid + lightbox */}
          <Gallery />
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* Save The Date Counter Section */}
      <SaveTheDateCounter />
    </div>
  )
}

export default Home
