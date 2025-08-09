import React from 'react';
import { Link } from 'react-router-dom';

const ProductUI = React.memo(({ product }) => {
  return (
    <Link to={`/Product2/${product.id}`} >
      <div className="bg-white rounded-sm border border-gray-200 shadow-sm p-2 w-[192px] h-[250px] flex flex-col items-center hover:shadow-md transition-all duration-200 ease-in-out">
        <div className="w-36 h-36 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={product.images?.[0] || "https://via.placeholder.com/150"}
            alt={product.title || "Product Image"}
            className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <h2 className="text-base font-semibold text-gray-800 mt-3 text-center line-clamp-2">
          {product.title}
        </h2>

        {/* Optional Details */}
        <p className="text-sm text-gray-500 mt-1">${product.price}</p>
        {product.rating && (
          <div className="text-yellow-500 text-sm mt-1">
            ⭐ {product.rating.toFixed(1)}
          </div>
        )}
      </div>
    </Link>
  );
});

export default ProductUI;
