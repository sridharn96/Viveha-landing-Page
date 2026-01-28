import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Package, CreditCard, Play, ArrowRight, MessageCircle } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import billingHero from "@/assets/billing-hero.png";


const Index = () => {
  const features = [
    {
      icon: FileText,
      title: "Effortless Billing",
      description: "Create invoices in seconds with fast SKU entry and voice-to-text input. Supports normal, GST, and quotation billing with default product lists to reduce manual setup.",
      imageSrc: "/Billing.png",
    },
    {
      icon: Package,
      title: "Smart Inventory",
      description: "Never run out of stock with automatic low-stock alerts and smart reorder lists. Needed items are auto-added to dealer lists so you can share orders instantly.",
      imageSrc: "/Smart Inventory.png",
    },
    {
      icon: CreditCard,
      title: "Track Every Pending",
      description: "Monitor pending customer payments and dealer payables with automated reminders. Easily share payment reports for quick follow-ups and smooth management.",
      imageSrc: "/Pending Image.png",
    },
  ];

  const faqs = [
    {
      question: "Is Viveha.ai compatible with GST?",
      answer: "Yes, Viveha.ai is fully GST compliant. You can generate GST-ready invoices, manage tax categories, and export reports directly for your CA or tax filing.",
    },
    {
      question: "Can I use it on multiple devices?",
      answer: "Absolutely! Viveha.ai is cloud-based and works seamlessly across desktop, tablet, and mobile devices. Your data syncs in real-time.",
    },
    {
      question: "How secure is my business data?",
      answer: "We use bank-level encryption and secure cloud infrastructure to protect your data. Regular backups ensure you never lose important information.",
    },
    {
      question: "Does it support multi-user access?",
      answer: "Yes, you can invite team members with different access levels. Owners, managers, and staff can each have appropriate permissions.",
    },
    {
      question: "Is there a mobile app?",
      answer: "Yes, we offer native mobile apps for both iOS and Android, giving you full functionality on the go.",
    },
    {
      question: "Can I import my existing product list?",
      answer: "Definitely! You can easily import your existing products via Excel or CSV files. Our system will map your data automatically.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-8 ml-8 lg:ml-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-coral-light text-primary px-4 py-2 rounded-full text-sm font-medium animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
                <span>NEW: AI-Powered Tax Filing</span>
                <span>✨</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
                The ultimate tool for{" "}
                <span className="font-serif-italic text-primary relative inline-block">
                  effortless
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
                <br />
                billing.
              </h1>

              {/* Description */}
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
                Viveha.ai simplifies your business operations with automated invoicing, real-time inventory tracking, and seamless payment collection. Built for modern businesses.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
                <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-coral-dark text-primary-foreground btn-shadow rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

              </div>

              {/* Trust */}

            </div>

            {/* Dashboard Preview */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 animate-fade-in opacity-0" style={{ animationDelay: "500ms" }}>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 relative animate-float hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={billingHero}
                  alt="Billing Hero"
                  className="rounded-lg w-full shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-up opacity-0">
            <h2 className="text-3xl font-bold text-foreground mb-4">Everything you need to grow</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive suite of tools helps you manage your retail or service business with zero friction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                className="animate-fade-up opacity-0"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-fade-up opacity-0" style={{ animationDelay: '600ms' }}>
            <Button size="lg" className="bg-primary hover:bg-coral-dark text-primary-foreground btn-shadow rounded-full px-8 h-12 text-lg hover:scale-105 transition-transform duration-300">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -left-4 top-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-4 bottom-1/4 w-72 h-72 bg-coral-light/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <div className="text-center mb-16 animate-fade-up opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need to know about <span className="text-primary font-medium">Viveha.ai</span>.
              Can't find the answer you're looking for? Chat with our friendly team.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group bg-card hover:bg-card/80 border border-border/50 rounded-xl px-6 py-2 card-shadow transition-all duration-300 data-[state=open]:border-primary/50 data-[state=open]:ring-2 data-[state=open]:ring-primary/10 data-[state=open]:shadow-lg animate-fade-up opacity-0"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline group-hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions CTA */}
          <div className="mt-16 text-center animate-fade-up opacity-0" style={{ animationDelay: '800ms' }}>
            <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto shadow-sm relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                  <p className="text-muted-foreground">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                </div>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-primary hover:bg-coral-dark text-primary-foreground btn-shadow rounded-full h-12 px-6">
                    <MessageCircle className="mr-2 w-5 h-5" /> Get in touch
                  </Button>
                </div>
              </div>

              {/* Background decoration for CTA */}
              <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
