import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';
import { FcApprove } from "react-icons/fc";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { VscCodeReview } from "react-icons/vsc";
import ProductDetailSkeleton2 from '../../components/Sekelton/ProductDetailSkeleton2';
import { addToCart } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

const SingleCard4 = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);

      if (data?.thumbnail) {
        setSelectedImage(data.thumbnail);
      } else if (data?.images?.length > 0) {
        setSelectedImage(data.images[0]);
      }

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));

    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const productExists = existingCart.find(item => item.id === product.id);

    if (!productExists) {
      const updatedCart = [...existingCart, { ...product, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    console.log('Product added to Redux and localStorage');
  };

  if (loading) return <div className="text-center py-10"><ProductDetailSkeleton2 /></div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
  if (!product) return null;

  const galleryImages = Array.isArray(product.images) ? product.images.slice(0, 8) : [];

  return (
    <div className="max-w-7xl mx-auto p-4 ">
      <div className="bg-white rounded-lg shadow-md p-4 mb-10 flex justify-between flex-col lg:flex-row gap-6">

        {/* Image Gallery */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="rounded-sm overflow-hidden border border-gray-300 flex items-center justify-center mb-4 h-80">
            {selectedImage ? (
              <img src={selectedImage} alt="Selected" className="object-contain h-full p-3" />
            ) : (
              <div className="text-gray-400">No Image</div>
            )}
          </div>

          <div className="flex gap-2 flex-wrap">
            {galleryImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                className={`w-16 h-16 border border-gray-300 p-1 rounded cursor-pointer object-contain ${
                  selectedImage === img ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          <button
            onClick={() => handleAddToCart(product)}
            type="button"
            className="bg-blue-600 text-white font-medium text-sm px-6 py-2.5 rounded-sm hover:bg-blue-700 transition duration-200 mt-5 shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/3">
          <h2 className="mb-2 flex items-center text-green-500 gap-1 text-lg font-medium">
            <IoMdCheckmark /> {product.availabilityStatus}
          </h2>
          <p className="text-2xl font-semibold mb-2">{product.title}</p>

          <div className="flex items-center gap-4 text-yellow-500 ">
            <div className="flex items-center gap-1">
              <FaStar />
              <span>{product.rating}</span>
            </div>
            <div className="flex items-center gap-2 font-sans text-gray-500">
              <VscCodeReview className='text-xl' />
              <span className='mb-1'>{Math.floor(product.rating * 20)} reviews</span>
            </div>
          </div>

          <div className="bg-orange-300 flex flex-wrap sm:flex-nowrap justify-start items-center gap-6 p-3 rounded shadow-sm mb-4">
            <div className="flex flex-col text-gray-800">
              <span className="text-lg font-bold">${product.price}</span>
              <span className="text-sm">1-Pcs</span>
            </div>
            <div className="flex flex-col text-gray-800 border-l border-gray-500 pl-4">
              <span className="font-semibold">Discount</span>
              <span className="text-sm">{product.discountPercentage || '0% Off'}</span>
            </div>
            <div className="flex flex-col text-gray-800 border-l border-gray-500 pl-4">
              <span className="font-semibold">Stock</span>
              <span className="text-sm">{product.stock || 'N/A'} pcs</span>
            </div>
          </div>

          <div className="flex justify-between items-center w-full sm:w-60 py-2">
            <h2 className="text-sm font-medium text-gray-400">Category:</h2>
            <h1 className="text-base font-semibold text-gray-500 capitalize">{product.category}</h1>
          </div>

          <hr className="my-1 border-gray-200" />

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-medium text-gray-400">Types:</h2>
              <h1 className="text-base text-gray-600 capitalize">{product.sku}</h1>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-medium text-gray-400">Tags:</h2>
              <h1 className="text-base text-gray-600 capitalize">{product.tags?.[1]}</h1>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-medium text-gray-400">Brand:</h2>
              <h1 className="text-base text-gray-600 capitalize">{product.brand}</h1>
            </div>
          </div>

          <hr className="my-3 border-gray-200" />

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-medium text-gray-400">Return Policy:</h2>
              <h1 className="text-sm text-gray-600 capitalize">{product.returnPolicy}</h1>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-medium text-gray-400">Warranty:</h2>
              <h1 className="text-base text-gray-600 capitalize">{product.warrantyInformation}</h1>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-medium text-gray-400">Created At:</h2>
              <h1 className="text-sm font-semibold text-gray-600">
                {new Date(product.meta?.createdAt).toLocaleDateString()}
              </h1>
            </div>
          </div>
        </div>

        {/* Seller Info */}
        <div className='w-full lg:w-1/4'>
          <div className='border rounded-sm border-gray-300 py-3 p-4'>
            <div className="flex gap-2 p-1 w-fit">
              <FcApprove className="text-5xl" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Suliper</h3>
                <h3 className='text-lg font-semibold text-gray-400'>Pakistan Gk</h3>
              </div>
            </div>
            <hr className='border-gray-300' />
            <div className='p-2 flex flex-col gap-3'>
              <div className='flex items-center gap-7'>
                <img src="https://up.yimg.com/ib/th/id/OIP.tHioXi9Ik6dJ5hXVIk47_wHaEK?pid=Api&rs=1&c=1&qlt=95&w=167&h=93" alt="" width={25} />
                <h6 className='text-lg font-semibold text-gray-400'>Pakistan ,Gk</h6>
              </div>
              <div className='flex items-center gap-7'>
                <MdOutlineVerifiedUser className='text-2xl text-gray-500' />
                <h6 className='text-lg font-semibold text-gray-400'>Verified Seller</h6>
              </div>
              <div className='flex items-center gap-7'>
                <TbWorld className='text-2xl text-gray-500' />
                <h6 className='text font-semibold text-gray-400'>World Shipping</h6>
              </div>
            </div>
            <button className='bg-blue-500 text-white mt-4 py-2 w-full rounded-md text-sm font-semibold'>Send Inquiry</button>
            <button className='border border-gray-300 text-blue-600 mt-4 py-2 w-full rounded-sm text-sm font-semibold'>
              Seller's Profile
            </button>
          </div>

          <div className='p-4 rounded-md'>
            <div className='flex items-center justify-center text-xl gap-1 text-blue-700 font-semibold'>
              <CiHeart className='text-3xl' />
              <p className='text-[17px] font-semibold mb-1'>Save to Wishlist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard4;
