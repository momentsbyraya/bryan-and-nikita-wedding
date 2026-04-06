import React from 'react'

const SecondaryButton = ({ children, href, onClick, className = '', target, rel, icon: Icon }) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm sm:text-base font-albert font-medium transition-all duration-300 shadow-sm hover:shadow-md bg-gold text-[#fff4e6] border border-gold-dark/35 hover:bg-gold-dark hover:text-[#fff4e6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark'

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={`${baseClasses} no-underline hover:no-underline ${className}`}>
        {children}
        {Icon && <Icon className="h-4 w-4 shrink-0" />}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
      {Icon && <Icon className="h-4 w-4 shrink-0" />}
    </button>
  )
}

export default SecondaryButton
