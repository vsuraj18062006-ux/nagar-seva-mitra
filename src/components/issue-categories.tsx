import { Construction, Lightbulb, Trash2, Droplets, Car, TreePine } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Construction,
    title: "Roads & Infrastructure",
    description: "Potholes, broken pavements, road damage",
    color: "bg-orange-500",
    count: "2,847"
  },
  {
    icon: Lightbulb,
    title: "Street Lighting",
    description: "Non-functional lights, dark areas",
    color: "bg-yellow-500",
    count: "1,234"
  },
  {
    icon: Trash2,
    title: "Waste Management",
    description: "Garbage collection, littering, dump sites",
    color: "bg-green-500",
    count: "3,421"
  },
  {
    icon: Droplets,
    title: "Water & Drainage",
    description: "Leaks, flooding, sewage issues",
    color: "bg-blue-500",
    count: "1,876"
  },
  {
    icon: Car,
    title: "Traffic & Transport",
    description: "Signal issues, parking, traffic violations",
    color: "bg-red-500",
    count: "987"
  },
  {
    icon: TreePine,
    title: "Parks & Environment",
    description: "Green spaces, air quality, noise pollution",
    color: "bg-emerald-500",
    count: "654"
  }
];

const IssueCategoriesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Report Issues by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive categories to ensure your civic issues 
            reach the right department for faster resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer p-6 rounded-2xl bg-card border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className={`h-12 w-12 rounded-xl ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {category.count} reports
                    </span>
                    <Button size="sm" variant="ghost" className="h-8 px-3 text-xs">
                      Report →
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="min-w-48" asChild>
            <Link to="/report">
              Start Reporting
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IssueCategoriesSection;