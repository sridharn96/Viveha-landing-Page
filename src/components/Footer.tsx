import { Link } from "react-router-dom";
import { Facebook, Instagram, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <img
                src="/isaii logo.jpeg"
                alt="isaii.ai Logo"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
              <span className="font-semibold text-base sm:text-lg text-card">isaii.ai</span>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed hidden sm:block">
              Empowering businesses with smart billing, real-time inventory tracking, and seamless payment management.
            </p>
            <div className="flex items-center gap-3 pt-1 sm:pt-2">
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

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-card mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-xs sm:text-sm">✉️ support@viveha.ai</li>
              <li className="text-xs sm:text-sm">📞 +91 98765 43210</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm">© 2026 viveha.ai. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success"></span>
            <span className="text-xs sm:text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
