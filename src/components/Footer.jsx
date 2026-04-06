import React from 'react'

const Footer = () => {
  const handleFooterClick = () => {
    window.open('https://www.facebook.com/profile.php?id=61571540978411', '_blank', 'noopener,noreferrer')
  }

  return (
    <footer 
      className="w-full pb-4 pt-2 transition-colors duration-300 cursor-pointer border-t border-forest/10 bg-wedding-100"
      onClick={handleFooterClick}
    >
      <div className="text-center">
        <p className="text-sm sm:text-base font-albert font-thin text-forest transition-colors duration-300 hover:text-forest/85 active:text-forest/85">
          Made with <ion-icon name="heart" className="inline-block mx-1 align-middle text-forest" style={{ fontSize: '1em', verticalAlign: 'middle' }}></ion-icon> by Moments by Raya
        </p>
      </div>
    </footer>
  )
}

export default Footer
