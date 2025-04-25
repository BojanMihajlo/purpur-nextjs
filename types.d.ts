type Blogs = {
    id:number,
    slug:string,
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
    
  }

  type Posts = {
    id:number | string,
    name:string,
    slug:string,
    description:string,
    images:string,
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
    tags:{
      id:number,
      name:string,
      slug:string,
    }[]
  }

  export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    images: {
      src: string;
      alt?: string;
    }[];
  }
  
  export type CartItem = Product & { quantity: number };