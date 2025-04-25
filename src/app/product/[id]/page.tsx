
import ProductShop from './component/ProductShop';



export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
 }
) {
  const params = await props.params;

  const auth = Buffer.from(
    `${process.env.WO_API_KEY}:${process.env.WO_API_SECRET_KEY}`
  ).toString('base64');

  const res = await fetch(`${process.env.MY_WO_URL}/products/${params.id}`, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
    cache: 'no-store',
  });
   
 
  if (!res.ok) {
    return <div className="p-8 text-red-500">Failed to load product.</div>;
  }

  const product = await res.json();

  return (
    <>
    <ProductShop product={product}/>
    </>
  );
}
