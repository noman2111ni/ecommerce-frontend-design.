import React from 'react'
import ContactForm from './ContactForm'

const LastSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12 mb-5 px-4 gap-3 w-full">
      <h1 className="text-2xl md:text-3xl font-bold text-center">Subscribe The Newsletter</h1>
      <h2 className="text-lg md:text-xl text-gray-500 text-center max-w-1xl">
        Get daily news on upcoming offers from many suppliers all over the world
      </h2>
      <div className="w-full max-w-md">
        <ContactForm />
      </div>
    </div>
  )
}

export default LastSection