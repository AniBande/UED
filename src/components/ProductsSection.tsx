
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductProps {
  image: string;
  name: string;
  currentPrice: string;
  originalPrice: string;
  reviews: number;
}

function Product({ image, name, currentPrice, originalPrice, reviews }: ProductProps) {
  return (
    <div className="flex flex-col">
      <div className="rounded-lg overflow-hidden mb-2">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
      </div>
      <div className="mt-1">
        <p className="font-medium">{name}</p>
        <div className="flex items-center gap-2">
          <span className="font-bold">{currentPrice}</span>
          <span className="text-gray-500 line-through text-sm">{originalPrice}</span>
        </div>
        <p className="text-xs text-gray-500 mb-2">{reviews} Reviews</p>
        <Button className="w-full bg-primary text-white hover:bg-primary-dark text-sm py-1 h-8">
          BUY NOW
        </Button>
      </div>
    </div>
  );
}

export function ProductsSection() {
  return (
    <div className="py-12 px-14 bg-gray-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0">
        <svg className="w-40 h-40 text-secondary-light opacity-70" viewBox="0 0 200 200" fill="currentColor">
          <path d="M40,120 C40,120 80,80 120,120 C160,160 180,120 180,120 L180,180 L40,180 Z"></path>
        </svg>
      </div>
      
      <div className="text-center mb-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2">Our Best-Selling Sustainable Products</h2>
        <Image className="text-primary" size={32} />
      </div>
      
      <div className="grid grid-cols-3 gap-8 mb-8">
        <Product 
          image="https://images.unsplash.com/photo-1598030340352-35fb9e3055e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          name="Organic cotton tote bag" 
          currentPrice="50 Rs." 
          originalPrice="70 Rs."
          reviews={235}
        />
        <Product 
          image="https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
          name="Hemp backpack" 
          currentPrice="999 Rs." 
          originalPrice="1199 Rs."
          reviews={729}
        />
        <Product 
          image="https://images.unsplash.com/photo-1625191824516-63a0471687a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
          name="Organic cotton T-shirts" 
          currentPrice="499 Rs." 
          originalPrice="699 Rs."
          reviews={825}
        />
      </div>
      
      <div className="grid grid-cols-3 gap-8 mb-8">
        <Product 
          image="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          name="Bamboo toothbrush" 
          currentPrice="99 Rs." 
          originalPrice="149 Rs."
          reviews={248}
        />
        <Product 
          image="https://images.unsplash.com/photo-1602631049824-5c1fdb04fc4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          name="Bamboo pens and pencils" 
          currentPrice="49 Rs." 
          originalPrice="89 Rs."
          reviews={1256}
        />
        <Product 
          image="https://images.unsplash.com/photo-1592057802165-35789a3d931b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          name="Jute grocery bag" 
          currentPrice="59 Rs." 
          originalPrice="89 Rs."
          reviews={895}
        />
      </div>
      
      <div className="flex justify-center">
        <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-100">
          EXPLORE MORE
        </Button>
      </div>
    </div>
  );
}
