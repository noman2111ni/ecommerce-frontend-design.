import React from 'react';

const Prodxuct = () => {
    const ProductList = [
        {
            id: 1,
            name: "Headphones",
            image: "https://media.istockphoto.com/id/1246138278/photo/silver-metallic-white-wireless-headphones-in-the-air-isolated-on-white-background-music.webp?a=1&b=1&s=612x612&w=0&k=20&c=yaQ6l4WHU8cHGcfbybzI2z-k4OSnAj3WYjmbZrK1fcQ=",
            price: 49.99,
            discount: 20
        },
        {
            id: 2,
            name: "Smart Watch",
            image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U21hcnQlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D",
            price: 89.95,
            discount: 15
        },
        {
            id: 3,
            name: "Gaming Mouse",
            image: "https://media.istockphoto.com/id/1091778794/photo/computer-mouse-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=mz9hEchw_YivG0RuQB0F4PrJh3moh4AdAY7-rY55NwI=",
            price: 29.50,
            discount: 30
        }
    ];

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-5    '>
            {ProductList.map(product => (
                <div 
                    key={product.id} 
                    className='flex flex-col items-center p-4  border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300'
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className='w-36 h-36 object-contain mb-4'
                    />
                    <h3 className='text-lg font-semibold text-gray-800 text-center'>{product.name}</h3>
                    <div className='mt-2 flex items-center'>
                        <span className='text-gray-500 line-through mr-2'>${product.price.toFixed(2)}</span>
                        <span className='text-red-500 font-semibold'>
                            ${(product.price * (1 - product.discount/100)).toFixed(2)}
                        </span>
                    </div>
                    <span className='mt-2 text-sm font-semibold bg-red-100 text-red-600 py-1 px-3 rounded-full'>
                        -{product.discount}%
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Prodxuct;