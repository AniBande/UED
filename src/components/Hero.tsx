
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="flex justify-between items-center px-14 py-8 relative">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Welcome to SustainSell</h1>
        <div className="space-y-2">
          <p className="text-2xl">Your Sustainable</p>
          <p className="text-4xl text-primary font-bold">Shopping</p>
          <p className="text-4xl text-primary font-bold">Destination</p>
        </div>
        
        <p className="mt-4">
          "Discover Sustainability, Embrace <span className="font-semibold">SustainSell</span>
        </p>
        <p className="mb-4">Your Eco-Friendly Haven for Conscious Shopping."</p>
        
        <Button asChild className="w-36 bg-primary hover:bg-primary-dark">
          <Link to="/shop">SHOP NOW</Link>
        </Button>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-primary rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
        <div className="bg-secondary-light rounded-lg p-3">
          <img 
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1613&q=80" 
            alt="Sustainable organic products" 
            className="w-[350px] h-[350px] rounded-lg object-cover" 
          />
        </div>
      </div>
    </div>
  );
}
