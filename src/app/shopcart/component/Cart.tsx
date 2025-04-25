'use client';

import Image from 'next/image';
import { useCartStore } from '../../../../lib/cartStore';
import Link from 'next/link';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-10  bg-amber-100 bg-[url(/images/shopBasket.png)] bg-center bg-cover min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Shopping Basket</h1>

      {cart.length === 0 ? (
        <div>
        <h1 className='text-xl'>Your shopping basket is empty.</h1>
        <Link href='/collections' >Go to shopping</Link>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.images[0]?.src || '/placeholder.png'}
                  alt={item.images[0]?.alt || 'Cart item'}
                  width={60}
                  height={60}
                  className="rounded"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.quantity} × {item.price} ден.
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">{item.quantity * item.price} ден.</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <div className="text-xl font-bold">Total: {total} ден.</div>
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
