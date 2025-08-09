import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[30vh] text-gray-600">
      <FaShoppingCart className="text-6xl mb-4 text-blue-400" />
      <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
      <p className="mb-4 text-center max-w-md">Looks like you haven’t added anything to your cart yet.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Continue Shopping
      </Link>
    </div>
  )
}

export default EmptyCart
