import React from 'react'

const Footer = () => {
  const handleFooterClick = () => {
    window.open('https://www.facebook.com/profile.php?id=61571540978411', '_blank', 'noopener,noreferrer')
  }

  return (
    <footer 
      className="w-full bg-forest pb-4 pt-2 transition-colors duration-300 hover:bg-forest/95 active:bg-forest cursor-pointer border-t border-gold/25"
      onClick={handleFooterClick}
    >
      <div className="text-center">
        <p className="text-sm sm:text-base font-albert font-thin text-gold transition-colors duration-300 hover:text-white active:text-white">
          Made with <ion-icon name="heart" className="inline-block mx-1 align-middle text-gold" style={{ fontSize: '1em', verticalAlign: 'middle' }}></ion-icon> by Moments by Raya
        </p>
      </div>
    </footer>
  )
}

export default Footer
