'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingImage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-amber-100">
        <motion.img
          src="/images/yarn31.webp"
          alt="Loading"
          className="w-55 h-55"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        />
        <p className="mt-4 text-2xl  font-bold text-gray-600">Loading...</p>
      </div>
    );
  }

  // return (
  //   <main className="flex items-center justify-center h-screen bg-gray-50">
  //     <h1 className="text-3xl font-bold text-gray-800"></h1>
  //   </main>
  // );
}
