
import { Image } from "lucide-react";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      <div className="w-24 h-24 rounded-full bg-secondary-light border-4 border-white flex items-center justify-center mb-4">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export function Features() {
  return (
    <div className="py-16 px-14 relative">
      <div className="absolute left-10 top-20">
        <img src="https://images.unslash.com/photo-1452960962994-acf4fd70b632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Sustainable farming concept" className="w-32" />
      </div>
      
      <div className="text-center mb-12 flex justify-center items-center flex-col">
        <h2 className="text-3xl font-bold mb-4">Why Choose SustainSell?</h2>
        <Image className="text-primary" size={32} />
      </div>
      
      <div className="flex justify-between gap-8 mt-8">
        <Feature 
          icon="https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" 
          title="Sustainable Products" 
          description="Explore our carefully curated selection of sustainable products, each designed to reduce your carbon footprint"
        />
        <Feature 
          icon="https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
          title="Eco-Friendly Choices" 
          description="Make conscious choices with our eco-friendly products, knowing that your purchases promote ethical sourcing and responsible manufacturing practices."
        />
        <Feature 
          icon="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
          title="High-Quality Selection" 
          description="Invest in long-lasting and reliable products that meet our stringent quality standards, ensuring your satisfaction and the longevity of your purchases."
        />
        <Feature 
          icon="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
          title="Sustainable Packaging" 
          description="Our sustainable packaging ensures that your orders arrive safely while minimizing their impact on the planet."
        />
      </div>
    </div>
  );
}
