
import Collection from './component/Collection';
import { Posts } from '../../../../types';

// type Props = {
//   params: {
//     slug: string;
//   };
// };

const formatSlug = (slug: string) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default async function Page(props: {
  params: Promise<{ slug: string }>;
 }
) {
  const params = await props.params;
  const auth = Buffer.from(
    `${process.env.WO_API_KEY}:${process.env.WO_API_SECRET_KEY}`
  ).toString('base64');

  const res = await fetch(
    `${process.env.MY_WO_URL}/products?per_page=100`,
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const products: Posts[] = await res.json();

  const matchingProducts = products.filter(product =>
    product.tags.some(tag => tag.slug === params.slug)
  );

  if (matchingProducts.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No products found with the tag <strong>{formatSlug(params.slug)}</strong>
      </div>
    );
  }

  const imageHtml = matchingProducts.map(product => {
    return (Array.isArray(product.images) ? product.images : []).map((img, i) => {
      if (!img || !img.src) return '';
      return `
        <a 
         href="/product/${product.id}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="block mb-4 break-inside-avoid"
        >
          <img 
            src="${img.src}" 
            alt="${img.alt || `product-image-${i}`}" 
            class="w-full h-auto rounded-xl shadow-md hover:scale-103 transition-all"
          />
        </a>
      `;
    }).join('');
  }).join('');

  return (
    <div>
      <Collection formatSlug={formatSlug(params.slug)} imageHtml={imageHtml} />
    </div>
  );
}
