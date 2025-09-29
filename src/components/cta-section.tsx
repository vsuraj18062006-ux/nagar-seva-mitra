import { Button } from "./ui/button";
import { Smartphone, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-civic">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Community?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-12">
            Join thousands of citizens already making a difference. Start reporting issues today 
            and help build smarter, more responsive cities across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="secondary" className="min-w-48 bg-white text-primary hover:bg-white/90">
              <Smartphone className="mr-2 h-5 w-5" />
              Get Mobile App
            </Button>
            <Button size="lg" variant="outline" className="min-w-48 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/dashboard">
                <Globe className="mr-2 h-5 w-5" />
                Use Web Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm opacity-80">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              Available in 12 Indian languages
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              Works offline with sync capability
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
              Government verified platform
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;