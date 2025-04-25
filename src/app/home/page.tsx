import React from 'react'
import Main from './Main'
import * as cheerio from 'cheerio';
import { Blogs } from '../../../types';

export default async function Home() {
    const res = await fetch(`${process.env.MY_WP_URL}/pages?slug=home`)
    const data:Blogs[] = await res.json()

    const $ = cheerio.load(data[0].content.rendered);
    const imageUrls: string[] = $('img')
    .map((_, img) => $(img).attr('src'))
    .get();
    
    
  return (
    <div>
          
         <Main data={data} imageUrls={imageUrls}  />
         

    </div>
  )
}
