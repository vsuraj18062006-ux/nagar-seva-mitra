import { Link } from "react-router-dom";
import { Button } from "./button";
import { Bell, Menu, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-civic flex items-center justify-center">
                <span className="text-sm font-bold text-white">CW</span>
              </div>
              <span className="font-semibold text-xl">CivicWatch India</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/report" className="text-sm font-medium hover:text-primary transition-colors">
                Report Issue
              </Link>
              <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/admin" className="text-sm font-medium hover:text-primary transition-colors">
                Admin Portal
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;