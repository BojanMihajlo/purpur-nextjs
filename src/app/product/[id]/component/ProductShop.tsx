'use client';

import Image from 'next/image';
import Navbar from '@/app/home/Navbar';
import { useCartStore } from '../../../../../lib/cartStore';
import { Product } from '../../../../../types';

interface MainProps {
  product: Product;
}

const ProductShop: React.FC<MainProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (product && product.id) {
      addToCart(product);
      console.log(`Added product ${product.name} to cart`);
    } else {
      console.error('Product is missing an ID');
    }
  };

  return (
    <div className="min-h-screen bg-amber-100">
      <Navbar />
      
      <div className="px-4 sm:px-6 lg:px-40 py-10 bg-[url(/images/shopBasket.png)] bg-cover flex justify-center items-start">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

          {/* Product Image */}
          {product.images && product.images.length > 0 && (
            <Image
              src={product.images[0].src}
              alt={product.images[0].alt || 'Product Image'}
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-xl shadow-lg"
              width={500}
              height={500}
            />
          )}

          {/* Product Info */}
          <div className="text-center lg:text-left max-w-xl">
            <h1 className="text-xl sm:text-2xl font-bold mb-3">{product.name}</h1>
            <div
              className="text-gray-700 text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
            <p className="text-lg sm:text-xl font-bold mt-4">{product.price}.00 ден.</p>

            <button
              className="mt-4 bg-black text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors duration-200 hover:cursor-pointer"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductShop;
