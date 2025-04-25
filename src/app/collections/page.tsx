import React from 'react'
import * as cheerio from 'cheerio';
import Collect from './component/Collect'
import Cards from './component/Cards';
import { Posts } from '../../../types';

export default async function Collections() {

    const res = await fetch(`${process.env.MY_WP_URL}/posts`)
    const data: Posts[] = await res.json();

    const imageUrls: string[] = data.map(post => {
      const $ = cheerio.load(post.content.rendered);
      const firstImage = $('img').first().attr('src');
      return firstImage || ''; // fallback if no image
    });
    
    // Optional: filter out empty strings (if a post has no image)
    const coverImages = imageUrls.filter(Boolean);
    
    // console.log(filteredImageUrls);

  return (
    <div className='bg-amber-100'>

        <div>
           <Collect/>
           <Cards data={data} coverImages={coverImages}/>

        </div>


    </div>
  )
}
