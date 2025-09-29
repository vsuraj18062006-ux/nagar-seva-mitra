import { Camera, MapPin, Bell, BarChart3, Users, Shield } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "One-Tap Reporting",
    description: "Capture and report civic issues instantly with AI-powered image recognition and automatic categorization."
  },
  {
    icon: MapPin,
    title: "GPS Location Tracking",
    description: "Automatic location tagging ensures precise issue reporting and efficient resource allocation by authorities."
  },
  {
    icon: Bell,
    title: "Real-time Updates",
    description: "Stay informed with push notifications and SMS alerts about your reported issues and their resolution status."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track community impact with detailed analytics, resolution times, and municipal performance metrics."
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "Vote on issues, validate reports, and collaborate with fellow citizens to prioritize community needs."
  },
  {
    icon: Shield,
    title: "Government Integration",
    description: "Direct integration with municipal systems ensures your reports reach the right departments quickly."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Powerful Features for Better Cities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with citizen engagement 
            to create more responsive and efficient local governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-card border shadow-card-custom hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-16 w-16 rounded-2xl bg-gradient-civic flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;