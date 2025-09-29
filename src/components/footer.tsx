import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-civic flex items-center justify-center">
                <span className="text-sm font-bold text-white">CW</span>
              </div>
              <span className="font-semibold text-xl">CivicWatch India</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Empowering citizens to build better cities through technology-driven civic engagement and transparent governance.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-background cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-background cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-background cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-background cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/report" className="text-muted-foreground hover:text-background transition-colors">Report Issue</Link></li>
              <li><Link to="/dashboard" className="text-muted-foreground hover:text-background transition-colors">Dashboard</Link></li>
              <li><Link to="/admin" className="text-muted-foreground hover:text-background transition-colors">Admin Portal</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/help" className="text-muted-foreground hover:text-background transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Issue Reporting</span></li>
              <li><span className="text-muted-foreground">Community Engagement</span></li>
              <li><span className="text-muted-foreground">Analytics Dashboard</span></li>
              <li><span className="text-muted-foreground">Government Integration</span></li>
              <li><span className="text-muted-foreground">Mobile Application</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+91 1800-CIVIC-01</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">support@civicwatch.in</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground">
                  Digital India Initiative<br />
                  New Delhi, India 110001
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 CivicWatch India. All rights reserved. | Part of Digital India Initiative
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-background text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-background text-sm transition-colors">Terms of Service</Link>
            <Link to="/accessibility" className="text-muted-foreground hover:text-background text-sm transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;