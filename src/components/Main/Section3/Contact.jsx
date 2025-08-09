import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        quantity: '',
        unit: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);setFormData

        // Add your form submission logic here
    };

    return (
        <div className="w-full min-h-[470px] md:h-[400px] bg-cover bg-center relative mb-6 rounded-sm"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1692451883681-0a9e95aabc8a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-50"></div>

            <div className='flex flex-col md:flex-row justify-between h-full text-white relative z-10 p-4 md:p-0'>
                {/* Left Content */}
                <div className='flex flex-col items-start w-full md:w-1/2 mt-4 md:mt-7 p-4 md:p-6'>
                    <h1 className='text-2xl md:text-3xl font-bold mb-4'>An easy way to send <br className="hidden md:block" />request to all suppliers</h1>
                    <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero expedita deleniti quia porro saepe dignissimos</p>
                </div>

                {/* Right Form */}
                <div className='w-full md:w-1/2 p-2 md:p-7 mt-6 md:mt-0'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 px-4 md:px-6 py-4 bg-[#ffffff] text-gray-700 bg-opacity-90 rounded-md focus:outline-none'>
                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium mb-1'>Your Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder='Enter your name'
                                onChange={handleChange}
                                value={formData.name}
                                className='w-full h-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                                required
                            />
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label htmlFor="message" className='block text-sm font-medium mb-1'>Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder='Enter your message'
                                onChange={handleChange}
                                value={formData.message}
                                className='w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                                required
                            />
                        </div>

                        {/* Quantity and Unit */}
                        <div className='grid grid-cols-2 gap-3'>
                            <div>
                                <label htmlFor="quantity" className='block text-sm font-medium mb-1'>Quantity</label>
                                <input
                                    id="quantity"
                                    name="quantity"
                                    type="number"
                                    placeholder='0'
                                    onChange={handleChange}
                                    value={formData.quantity}
                                    className='w-full h-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="unit" className='block text-sm font-medium mb-1'>Unit</label>
                                <select
                                    id="unit"
                                    name="unit"
                                    onChange={handleChange}
                                    value={formData.unit}
                                    className='w-full h-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all'
                                    required
                                >
                                    <option value="">Select unit</option>
                                    <option value="Pcs">Pieces</option>
                                    <option value="Kg">Kilograms</option>
                                    <option value="Ltr">Liters</option>
                                </select>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors mt-2'
                        >
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;