
import { Link } from "react-router-dom";
import { ShoppingCart, ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-primary text-3xl font-script">
        SustainSell
      </Link>
      
      <div className="flex gap-8">
        <Link to="/" className="font-medium">Home</Link>
        <Link to="/shop" className="font-medium">Shop</Link>
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="font-medium">Categories</span>
          <ChevronDown size={16} />
        </div>
        <Link to="/about" className="font-medium">About us</Link>
        <Link to="/contact" className="font-medium">Contact us</Link>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <ShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            2
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
            alt="User profile" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </nav>
  );
}
