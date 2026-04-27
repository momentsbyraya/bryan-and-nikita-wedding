import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { paymentMethods as paymentMethodsData } from '../data'

const GiftRegistry = () => {
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false)
  const { paymentMethods } = paymentMethodsData

  return (
    <>
      <section
        id="gift"
        data-section="gift"
        className="w-full pt-16 pb-24 sm:pt-20 sm:pb-28"
      >
        <div className="max-w-xs sm:max-w-md lg:max-w-3xl w-full mx-auto text-center px-4">
          <h3 className="font-foglihten text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none capitalize text-gold-dark drop-shadow-sm">
            Gift Guide
          </h3>
          <p className="mt-4 text-sm sm:text-base md:text-lg font-albert text-obsidian/85 max-w-2xl mx-auto">
            Your presence is already a gift to us. 🤍 However, if you wish to bless us, a monetary gift would be truly
            appreciated as we begin our new journey together.
          </p>
          <button
            type="button"
            onClick={() => setIsGiftModalOpen(true)}
            className="mt-6 rounded-full border border-gold-dark/45 bg-gold px-6 py-2 text-sm sm:text-base font-albert text-[#fff4e6] transition-colors duration-200 hover:bg-gold-dark"
          >
            View QR Codes
          </button>
        </div>
      </section>

      {isGiftModalOpen && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsGiftModalOpen(false)}
          />

          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between p-6 border-b border-gray-200 rounded-t-2xl">
              <h3 className="text-2xl sm:text-3xl alice-regular font-black text-gray-800">Methods</h3>
              <button
                onClick={() => setIsGiftModalOpen(false)}
                className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {paymentMethods && paymentMethods.length > 0 && (
                <div className="flex flex-wrap items-start justify-center gap-6">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-2">
                      <p className="text-sm sm:text-base font-albert text-gray-700">{method.name}</p>
                      {method.image && (
                        <img
                          src={method.image}
                          alt={`${method.name} QR code`}
                          className="w-full max-w-md h-auto object-contain rounded-lg border border-gray-200"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

export default GiftRegistry
