import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CreditCard, FileText, Users, Package, ArrowRight, MessageCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Total Balance & Tracking",
      subtitle: "Visualized bank channels & history",
      icon: CreditCard,
      iconColor: "text-info",
      iconBg: "bg-info/10",
      image: "/Total balance.png",
      description: "Monitor all your financial channels in one place with our beautiful, real-time card visualizations. Get instant insights into your detailed transaction histories and manage your business cash flow effectively without the hassle of spreadsheet tracking.",
    },
    {
      title: "Smart Invoicing",
      subtitle: "Professional generation flow",
      icon: FileText,
      iconColor: "text-primary",
      iconBg: "bg-primary/10",
      image: "/Invoice.png",
      description: "Generate professional, GST-compliant invoices with your custom branding in seconds. Share them instantly via WhatsApp or email, and keep a digital record of every sale to simplify your tax filing and accounting processes.",
      badge: true
    },
    {
      title: "Dealer Management",
      subtitle: "Dealer-centric balances & history",
      icon: Users,
      iconColor: "text-info",
      iconBg: "bg-info/10",
      image: "/Dealer.png",
      description: "Manage dealer accounts with precision. Track outstanding balances, view detailed purchase histories, and analyze dealer performance at a glance. maintain healthy relationships with your suppliers through transparent transparent ledger tracking.",
    },
    {
      title: "Product Inventory",
      subtitle: "Stock tracking & SKU management",
      icon: Package,
      iconColor: "text-success",
      iconBg: "bg-success/10",
      image: "/Product Inventory.png",
      description: "Never run out of stock again. Our automatic low-stock alerts and smart reorder lists keep your business running smoothly. Manage thousands of SKUs effortlessly and sync your inventory across multiple specific sales channels.",
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            All-in-One Billing
            <br />
            <span className="font-serif-italic text-primary">Service Suite</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empower your business with real-time financial insights, seamless inventory tracking, and professional invoicing designed for modern retailers.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-card glass-card rounded-xl p-6 card-shadow hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-border/50 hover:border-primary/50 hover:-translate-y-2 animate-fade-up opacity-0"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                {service.badge && (
                  <div className="absolute -top-3 left-8 bg-gradient-to-r from-primary to-coral-dark text-primary-foreground px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold shadow-lg z-20 animate-fade-in">
                    <span>🎁</span>
                    <span className="tracking-wide">INVITE & EARN</span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-4 pt-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                </div>

                <div className="h-48 mb-6 rounded-xl overflow-hidden shadow-sm border border-border/50 relative transform transition-all duration-500 bg-muted/10 group-hover:shadow-md">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>

                <div className="flex items-center text-primary font-medium text-sm mt-auto group/link">
                  <span className="border-b border-transparent group-hover/link:border-primary transition-all duration-300">Explore Feature Details</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-info/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-up opacity-0" style={{ animationDelay: '800ms' }}>
            <div className="bg-gradient-to-r from-card via-card to-primary/5 border border-primary/20 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 max-w-6xl mx-auto shadow-2xl relative overflow-hidden backdrop-blur-sm">
              {/* Background decorative elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-info/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-primary/10 to-info/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                    Ready to Transform Your Business?
                  </h3>
                  <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                    Join thousands of retailers who have streamlined their operations with Viveha's comprehensive billing solution.
                  </p>
                </div>

                <div className="flex flex-col gap-4 justify-center items-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-info hover:from-primary/90 hover:to-info/90 text-primary-foreground btn-shadow rounded-full h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                      <MessageCircle className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
                      Start Your Free Trial
                    </Button>
                  </Link>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
