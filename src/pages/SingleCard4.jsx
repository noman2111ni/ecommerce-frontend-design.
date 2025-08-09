import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaHeart, FaStar, FaShareAlt } from 'react-icons/fa';
import { IoMdArrowRoundBack } from "react-icons/io";
import ProductDetailSkeleton from '../components/Sekelton/ProductDetailSkeleton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const SingleCard4 = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const Navigate = () => {
    // navigate(-1)
    navigate('/')
  }
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setSelectedImage(data.image);
      } catch (err) {
        setError('Failed to fetch product', err);
      } finally {
        setLoading(false);
      }
    };

    // Optional: Simulate loading delay
    setTimeout(fetchProduct, 300);
  }, [id]);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  if (loading) return <ProductDetailSkeleton />;
  if (error) return <div className="text-center text-red-500 py-20">{error}</div>;
  if (!product) return null;

  const galleryImages = [product.image];

  return (
    <div className="min-h-screen py-3 px-4 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white bg-opacity-90 backdrop-blur rounded-2xl shadow-2xl lg:p-10 relative">
        {/* Left: Image Gallery */}
        <IoMdArrowRoundBack onClick={Navigate} className=' text absolute top-5 left-5 text-2xl cursor-pointer text-gray-500' />
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="w-[300px] h-[300px] rounded-xl overflow-hidden flex items-center justify-center bg-gray-50 border">
            <img src={selectedImage} alt="Product" className="w-full h-[200px] object-contain transition-all duration-300" />
          </div>
          <div className="flex gap-3 mt-4 justify-center">
            {galleryImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`w-16 h-16 rounded-lg border cursor-pointer object-contain transition-all ${selectedImage === img ? ' scale-105 p-2' : 'hover:scale-105'
                  }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
            <div className="flex items-center text-yellow-500 gap-2 mb-4">
              <FaStar />
              <span className="text-gray-700 text-sm">({product.rating?.rate ?? 'N/A'})</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6 text-xs">{product.description}</p>

            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-semibold text-yellow-600">${product.price}</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm rounded-full capitalize">
                {product.category}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => handleAddToCart(product)}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-xl shadow-md transition-all">
              Add to Cart
            </button>
            <FaHeart className="text-xl text-gray-400 hover:text-red-500 cursor-pointer" title="Wishlist" />
            <FaShareAlt className="text-xl text-gray-400 hover:text-blue-500 cursor-pointer" title="Share" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard4;
