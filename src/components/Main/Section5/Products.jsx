import { useEffect, useState } from 'react';
import ProductUI from './ProductUI';

const Products = () => {
  const [data, setData] = useState([]);

  const ProductList = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products?limit=20');
      const result = await res.json();

      // Take the last 10 products from the fetched data
      const slicedProducts = result.products.slice(-10);
      setData(slicedProducts);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  useEffect(() => {
    ProductList();
  }, []);

  return (
    <>
      <h1 className="font-semibold text-2xl mb-4">Recommended Items</h1>
      <div className="flex flex-wrap gap-4 justify-center items-center my-3">
        {data.map((item, index) => (
          <ProductUI key={index} product={item} />
        ))}
      </div>
    </>
  );
};

export default Products;
