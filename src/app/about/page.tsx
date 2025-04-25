

import AboutHero from "./components/AboutHero";
import * as cheerio from 'cheerio';
import MainAbout from "./components/MainAbout";
import { Blogs } from "../../../types";


export default async function About() {
 
  const res = await fetch(`${process.env.MY_WP_URL}/pages?slug=about`)
  const data:Blogs[] = await res.json()

  const $ = cheerio.load(data[0].content.rendered);
      // const imageUrls: string[] = $('img')
      // .map((_, img) => $(img).attr('src'))
      // .get();
      
      const firstText: string[] = $('p').eq(0)
      .map((_, p) => $(p).text().trim())
      .get();

      const secondText: string[] = $('p').eq(1)
      .map((_, p) => $(p).text().trim())
      .get();

      const thirdText: string[] = $('p').eq(2)
      .map((_, p) => $(p).text().trim())
      .get();


  return (
    <>
    <div className="bg-amber-100 pb-8">

        <AboutHero/>      
        <MainAbout data={data} secondText={secondText} firstText={firstText} thirdText={thirdText}/>
        
        
    </div>
      
    </>
  )
}

