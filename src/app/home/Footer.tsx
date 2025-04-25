
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className=" text-white py-10 px-4 md:rounded-bl-full  h-150 bg-[url(/images/yarn3.jpg)] bg-cover bg-no-repeat md:bg-top bg-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-2xl font-bold">
          <Link href="/">
           <Image
            src="/images/logoPur.png"
         alt='photo'
         width={320}
         height={320}
           />
          </Link>
        </div>

        {/* Navigation */}
        <ul className="flex space-x-6 text-2xl">
          <li>
            <Link href="/about" className="hover:text-gray-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/collections" className="hover:text-gray-400 transition">
              Collections
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={30} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center md:text-xl text-amber-50 mt-25 font-bold shadow-2xl ">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
}

