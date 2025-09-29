import { Button } from "./ui/button";
import { ArrowRight, Camera, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-infrastructure.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern Indian Infrastructure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Empowering Citizens to
            <span className="text-transparent bg-gradient-civic bg-clip-text"> Build Better Cities</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Report civic issues, track progress, and collaborate with your local government 
            to create cleaner, safer, and more efficient communities across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="min-w-48 shadow-civic" asChild>
              <Link to="/report">
                Report an Issue
                <Camera className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="min-w-48" asChild>
              <Link to="/dashboard">
                View Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur border shadow-card-custom">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">15,247</h3>
              <p className="text-muted-foreground">Issues Reported</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur border shadow-card-custom">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">12,891</h3>
              <p className="text-muted-foreground">Issues Resolved</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur border shadow-card-custom">
              <div className="h-12 w-12 rounded-full bg-civic-blue/10 flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-civic-blue" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">45,892</h3>
              <p className="text-muted-foreground">Active Citizens</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;