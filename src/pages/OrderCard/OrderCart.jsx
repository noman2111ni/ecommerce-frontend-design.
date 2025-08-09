import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decrementQuantity, incrementQuantity, removeFromCart } from '../../store/cartSlice'
import EmptyCart from '../../components/Main/emptyCart/EmptyCart'
import { useNavigate } from 'react-router-dom'

const OrderCart = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart)

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)

  // Calculate total discount
  const totalDiscount = cart.reduce((sum, item) => {
    const quantity = item.quantity || 1
    const discount = item.price * (item.discountPercentage || 0) / 100
    return sum + discount * quantity
  }, 0)

  const removeHnadle = (id) => {
    dispatch(removeFromCart(id))
  }

  // Handle increment and decrement
  const increment = (id) => {
    dispatch(incrementQuantity(id))
  }

  const decrement = (id) => {
    dispatch(decrementQuantity(id))
  }
  const Remove = () => {
    dispatch(clearCart())
  }
  return (

    <div className="py-8 px-2 min-h-screen ">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-2xl font-bold  text-gray-700">
          My Cart <span className="">({cart.length})</span>
        </h1>
      </div>
      <div className="max-w-5xl mx-auto p-6  ">
        {cart.length === 0 ? (

          <div className="text-center text-gray-500 py-10">
            <EmptyCart />
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row justify-between gap-6 ">
            {/* 🛍 Cart Items */}
            <div className="flex-1 min-w-0 gap-6 flex flex-col bg-white rounded-lg shadow-md p-3">

              {cart.map(item => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow p-4"
                >
                  <img
                    src={item.images?.[0] || "https://via.placeholder.com/130"}
                    alt={item.title}
                    className="h-32 w-32 border object-contain rounded mb-4 md:mb-0 md:mr-6 bg-white"
                  />
                  <div className="flex-1 flex flex-col justify-center items-start">
                    <h2 className="font-semibold text text-blue-800 mb-2">{item.title}</h2>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between w-full gap-2">
                      <div className='flex items-center gap-2'>
                        <button
                          className="border text-red-500 px-3 py-1 hover:text-black rounded hover:bg-red-200 transition"
                          onClick={() => removeHnadle(item.id)}
                        >
                          Remove
                        </button>
                        <div className="ml-4">
                          <span className="text-gray-700 font-semibold">${item.price}</span>
                          {item.discountPercentage > 0 && (
                            <span className="text-red-500 ml-2 text-sm line-through">
                              ${(item.price * (1 - item.discountPercentage / 100)).toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 bg-green-50 border border-green-200 px-2 py-1 rounded-full">
                        <button
                          className="text-green-600 hover:text-green-800 font-bold px-2"
                          onClick={() => decrement(item.id)}
                        >
                          -
                        </button>

                        <span className="text-green-800 font-medium min-w-[20px] text-center">
                          {item.quantity || 1}
                        </span>

                        <button
                          className="text-green-600 hover:text-green-800   font-bold px-2 rounded-full"
                          onClick={() => increment(item.id)}
                        >
                          +
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
              <div className='flex justify-between '>
                <button
                  onClick={() => navigate(-1)}
                  className="mb-4 text-white bg-blue-500 hover:text-white border  hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-8 py-2 text-center transition"
                >
                  Back to shop
                </button>
                <button
                  className="mb-4 text-blue-700 hover:text-white border border-gray-300 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2 text-center transition"

                  onClick={Remove}
                >Remove all</button>
              </div>
            </div>

            {/* 💵 Order Summary */}
            <div className="w-full h-83 lg:w-[250px] bg-white rounded-2xl shadow-xl p-6 mt-8 lg:mt-0">
              <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">Order Summary</h2>

              {/* Items */}
              <div className="flex justify-between text-gray-600 mb-3">
                <span>Items</span>
                <span className="font-medium text-gray-800">{cart.length}</span>
              </div>

              {/* Subtotal */}
              <div className="flex justify-between text-gray-600 mb-3">
                <span>Subtotal</span>
                <span className="font-medium text-gray-800">${total.toFixed(2)}</span>
              </div>

              {/* Total Discount */}
              <div className="flex justify-between text-gray-600 mb-3">
                <span>Total Discount</span>
                <span className="font-medium text-green-600">- ${totalDiscount.toFixed(2)}</span>
              </div>

              {/* Divider */}
              <hr className="my-4 border-gray-200" />

              {/* Final Total */}
              <div className="flex justify-between text-lg font-semibold text-blue-700">
                <span>Final Total</span>
                <span>${(total - totalDiscount).toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <button
                className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
                onClick={() => alert('Proceed to Checkout')}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default OrderCart
