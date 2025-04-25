'use client';

import { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBasketShopping, FaBars, FaXmark } from "react-icons/fa6";
import { useCartStore } from "../../../lib/cartStore";

type Path = '/' | '/about' | '/collections' | '/contact' | '/shopcart';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path: Path) => pathname === path;

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Desktop Menu */}
        <ul className="hidden md:flex text-3xl space-x-5">
          <li><Link href='/' className={`hover:text-red-500 ${isActive('/') ? 'text-amber-100':'text-black'}`}>Home</Link></li>
          <li><Link href='/about' className={`hover:text-red-500 ${isActive('/about') ? 'text-amber-100':'text-black'}`}>About</Link></li>
          <li><Link href='/collections' className={`hover:text-red-600 ${isActive('/collections') ? 'text-amber-100':'text-black'}`}>Collections</Link></li>
          <li><Link href='/contact' className={`hover:text-red-600 ${isActive('/contact') ? 'text-amber-100':'text-black'}`}>Contact</Link></li>
        </ul>

        {/* Hamburger Button */}
        <button className="md:hidden text-3xl text-black hover:text-red-500" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* Cart Icon */}
        <Link href='/shopcart' className={`relative hover:text-red-600 ${isActive('/shopcart') ? 'text-amber-100':'text-black'}`}>
          <FaBasketShopping className="text-4xl" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 px-6 pb-4 text-2xl md:hidden">
          <li><Link href='/' className={`hover:text-red-500 ${isActive('/') ? 'text-amber-100':'text-black'}`} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href='/about' className={`hover:text-red-500 ${isActive('/about') ? 'text-amber-100':'text-black'}`} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link href='/collections' className={`hover:text-red-600 ${isActive('/collections') ? 'text-amber-100':'text-black'}`} onClick={() => setMenuOpen(false)}>Collections</Link></li>
          <li><Link href='/contact' className={`hover:text-red-600 ${isActive('/contact') ? 'text-amber-100':'text-black'}`} onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
