import { useEffect, useState } from "react"
import Card from "./Card"

const Section4 = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const fetchProducts = async () => {
        try {
            let res = await fetch('https://fakestoreapi.com/products')
            let products = await res.json()
            const LastEight = products.slice(-6)
            // let filtered = products.filter(item => item.category === 'jewelery')
            setData(LastEight)
           

        } catch (err) {
            setError('Failed to fetch products', err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div className="bg-white  flex flex-col lg:flex-row rounded-sm shadow-md mb-6 border border-gray-200 overflow-hidden ">
            {/* Banner Section */}
            <div className='bg-red-200 bg-[url("https://images.unsplash.com/photo-1753102542049-42c67a9406f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center bg-blend-multiply w-full lg:w-[25%] min-h-[220px] lg:min-h-full p-6 flex flex-col '>
                <h1 className="text-xl md:text-2xl font-bold text-black mb-4 md:text-left text-center">Home And <br />Outdoor</h1>

                <button className="bg-white font-medium text-sm md:text-base px-4 py-2 rounded-md w-fit hover:bg-gray-100 transition-colors">
                    Source now!
                </button>
            </div>
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 flex-1">
                {loading && (
                    <div className="col-span-full flex justify-center items-center h-64">
                        <div className="animate-pulse text-gray-500">Loading products...</div>
                    </div>
                )}
                {error && (
                    <div className="col-span-full text-red-500 text-center py-8">
                        {error}
                    </div>
                )}
                {data.map((item) => (
                    <Card key={item.id} items={item} />
                ))}
            </div>
        </div>
    )
}

export default Section4