import { Link } from "react-router-dom";
import { Facebook, Instagram, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              
              </div>
              <span className="font-semibold text-lg text-card">isaii.ai</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering businesses with smart billing, real-time inventory tracking, and seamless payment management.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="hover:text-card transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-card transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-card transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-card mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-sm hover:text-card transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-sm hover:text-card transition-colors">Pricing</Link></li>
              <li><Link to="/services" className="text-sm hover:text-card transition-colors">Inventory</Link></li>
              <li><Link to="/services" className="text-sm hover:text-card transition-colors">Billing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-card mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-card transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-sm hover:text-card transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="text-sm hover:text-card transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-card transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-card mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm">✉️ support@viveha.ai</li>
              <li className="text-sm">📞 +91 98765 43210</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2026 viveha.ai. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success"></span>
            <span className="text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
