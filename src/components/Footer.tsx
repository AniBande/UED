
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-14">
      <div className="flex justify-between">
        <div>
          <h3 className="text-primary text-2xl font-script mb-4">SustainSell</h3>
          <p className="text-sm max-w-xs">
            Your one-stop destination for sustainable and eco-friendly products.
            Making a positive impact on our planet, one purchase at a time.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-4">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/category/home-decor">Home Decor</Link></li>
            <li><Link to="/category/personal-care">Personal Care</Link></li>
            <li><Link to="/category/fashion">Sustainable Fashion</Link></li>
            <li><Link to="/category/kitchen">Kitchen Essentials</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-4">Contact Information</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: contact@sustainsell.com</li>
            <li>Phone: +91 1234567890</li>
            <li>Address: Eco Street, Green Avenue, India</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-300 mt-8 pt-4 text-sm text-center">
        <p>&copy; 2025 SustainSell. All rights reserved.</p>
      </div>
    </footer>
  );
}
