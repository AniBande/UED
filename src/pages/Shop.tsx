
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductsSection } from "@/components/ProductsSection";

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="py-8 px-14">
          <h1 className="text-3xl font-bold mb-6">Shop Sustainable Products</h1>
          <p className="mb-8">Browse our wide selection of eco-friendly and sustainable products.</p>
        </div>
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
