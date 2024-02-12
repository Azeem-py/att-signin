import React, { useState } from 'react'

const Modal = ({ isOpen, onClose, children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  // Listen for window resize event to update isMobile state
  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth < 768)
  })

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? 'visible' : 'invisible'
      }`}
    >
      <div
        className={`absolute w-full h-full bg-gray-900 opacity-50 ${
          isOpen ? 'visible' : 'invisible'
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`bg-white rounded-lg shadow-lg p-8 ${
          isMobile ? 'w-full' : 'w-1/2'
        }`}
      >
        <div className='flex justify-end'>
          <button
            className='text-gray-500 hover:text-gray-700 focus:outline-none'
            onClick={onClose}
          >
            <svg
              className='h-6 w-6 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 1 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 1.414-1.414L10 8.586z' />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
