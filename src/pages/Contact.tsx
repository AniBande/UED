
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 px-14">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-center mb-8 max-w-2xl mx-auto">
          Have questions about our products or sustainable practices? 
          We're here to help! Fill out the form below, and our team will get back to you as soon as possible.
        </p>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  placeholder="Your name" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  placeholder="Your email" 
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <input 
                type="text" 
                id="subject" 
                className="w-full p-2 border border-gray-300 rounded-md" 
                placeholder="Message subject" 
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full p-2 border border-gray-300 rounded-md" 
                placeholder="Your message" 
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <Button className="bg-primary hover:bg-primary-dark px-8">
                SEND MESSAGE
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
