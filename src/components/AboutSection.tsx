
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <div className="py-16 px-14 relative overflow-hidden">
      <div className="absolute -left-8 bottom-0">
        <svg className="w-36 h-36 text-primary-light opacity-60" viewBox="0 0 200 200" fill="currentColor">
          <path d="M186.4,56.6c-12.4-28.8-41.2-49-74.4-49c-33.3,0-62,20.2-74.4,49C15.3,56.6,0,71.9,0,91c0,19.1,15.3,34.4,34.4,34.4c0,0,0.1,0,0.1,0c10.3,17.7,28.8,30.4,50.2,33.3c0.3,0,0.5,0.1,0.8,0.1c0.8,0.1,1.6,0.1,2.3,0.2c1.3,0.1,2.7,0.1,4.1,0.1c2.7,0,5.4-0.2,8-0.5c21.6-2.7,40.5-15.4,50.9-33.2c19.1,0,34.4-15.3,34.4-34.4C185.2,71.9,169.9,56.6,150.8,56.6z"></path>
        </svg>
      </div>
      
      <div className="absolute right-0 top-10">
        <svg className="w-24 h-24 text-secondary-light" viewBox="0 0 200 200" fill="currentColor">
          <path d="M46.4,24c0,0,54.6,44.9,52.4,99.6c-2.3,54.7-102.5,97.9-88.5,143.8s134.5,10.7,186-37.8S291.5,90.8,248.2,53C204.9,15.2,46.4,24,46.4,24z"></path>
        </svg>
      </div>
      
      <h2 className="text-3xl font-bold text-center mb-6">About us</h2>
      
      <div className="text-center mb-8">
        <p className="text-primary text-3xl font-script mb-6">SustainSell</p>
        
        <p className="max-w-3xl mx-auto text-sm mb-8">
          At GreenFly, we are more than just an e-commerce website; we are a passionate community dedicated to fostering a sustainable and eco-friendly lifestyle. 
          Our mission is to empower environmentally conscious consumers by offering a curated selection of high-quality, sustainable products 
          that inspire positive change and make a difference in the world.
        </p>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Mission Statement</h3>
          <p className="max-w-3xl mx-auto text-sm italic">
            "To be the leading platform for sustainable living, providing eco-friendly products and fostering a green community 
            that promotes conscious consumption and environmental responsibility."
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="font-semibold mb-2">Vision Statement</h3>
          <p className="max-w-3xl mx-auto text-sm italic">
            "To create a greener future for generations to come, where every choice matters, and sustainability is at the core of everyday living.
            We envision a world where eco-friendly practices are the norm, and together, we can make a significant impact on the health of our planet."
          </p>
        </div>
        
        <Button className="bg-primary text-white hover:bg-primary-dark">
          READ MORE
        </Button>
      </div>
    </div>
  );
}
