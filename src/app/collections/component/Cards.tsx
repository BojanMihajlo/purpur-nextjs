'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Link from 'next/link';

interface Post {
  slug: string;
  content: { rendered: string };
}

interface MainProps {
  data: Post[];
  coverImages: string[];
}

interface CardItemProps {
  img: string;
  slug: string;
  transform: { x: number; y: number; rotate: number };
  scrollProgress: MotionValue<number>;
}

const CardItem: React.FC<CardItemProps> = ({ img, slug, transform, scrollProgress }) => {
  const x = useTransform(scrollProgress, [0, 1], [transform.x, 0]);
  const y = useTransform(scrollProgress, [0, 1], [transform.y, 0]);
  const rotate = useTransform(scrollProgress, [0, 1], [transform.rotate, 0]);
  const opacity = useTransform(scrollProgress, [0, 0.1], [0, 1]);

  return (
    <Link href={`/collections/${slug}`}>
      <motion.div
        style={{
          x,
          y,
          rotate,
          opacity,
          backgroundImage: `url(${img})`,
        }}
        className="border-b-4 border-r-4 rounded-xl bg-cover bg-no-repeat bg-center cursor-pointer transition-transform duration-300
                   h-50 w-36   md:h-80 md:w-56"
      />
    </Link>
  );
};

const Cards: React.FC<MainProps> = ({ data, coverImages }) => {
  const [transforms, setTransforms] = useState<
    { x: number; y: number; rotate: number }[]
  >([]);

  const wrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const randoms = coverImages.map(() => ({
      x: Math.floor(Math.random() * 300 - 300),
      y: Math.floor(Math.random() * 300 - 300),
      rotate: Math.floor(Math.random() * 60 - 30),
    }));
    setTransforms(randoms);
  }, [coverImages]);

  if (transforms.length === 0) return null;

  return (
    <div className="min-h-screen bg-red-700 rounded-tl-full px-4 py-20 sm:p-10">
      <div ref={wrapperRef} className="h-[420vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">

            {coverImages.map((img, i) => (
              
              <CardItem
                key={i}
                img={img}
                slug={data[i]?.slug || ''}
                transform={transforms[i]}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
