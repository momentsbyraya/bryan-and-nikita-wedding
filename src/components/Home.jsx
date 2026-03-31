import React from 'react'
import Hero from './Hero'
import Venue from './Venue'
import Schedule from './Schedule'
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
          src="/assets/images/graphics/flower-banner-2.png" 
          alt="Flower banner"
          className="w-full h-auto object-contain"
          style={{ transform: 'scaleY(-1)' }}
        />
      </div>

      <FullBleedPhoto
        src={prenupImages.fullBleedMain}
        alt={photoAlt}
      />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center">
        <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto">
          {/* Schedule Section */}
          <Schedule />
        </div>
      </div>

      <FullBleedPhotoSplit
        leftSrc={prenupImages.splitA.left}
        rightSrc={prenupImages.splitA.right}
        leftAlt={photoAlt}
        rightAlt={photoAlt}
      />

      {/* Entourage Section - between Order of Events and Dress Code */}
      <EntourageSection />

      <FullBleedPhotoSplit
        invertLayout
        leftSrc={prenupImages.splitB.right}
        rightSrc={prenupImages.splitB.left}
        leftAlt={photoAlt}
        rightAlt={photoAlt}
      />

      <div className="relative z-20 flex items-center justify-center">
        <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto">
          <LoveStory />

          {/* Gallery — masonry-style grid + lightbox */}
          <Gallery />
        </div>
      </div>

      <div className="relative z-20 flex items-center justify-center pt-12">
        <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto">
          <GiftRegistry />
        </div>
      </div>

      <FullBleedPhoto
        src={prenupImages.splitB.right}
        alt={photoAlt}
      />

      <div className="relative z-20 flex items-center justify-center">
        <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto">
          <RSVPSection onOpenRSVP={onOpenRSVP} />
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
