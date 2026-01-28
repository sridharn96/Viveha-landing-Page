import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Headphones, Send } from "lucide-react";
import supportAgent from "@/assets/support-agent.png";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's <span className="font-serif-italic text-primary">Connect</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have questions about our billing or inventory modules? Our team is here to help you scale your business operations effortlessly.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium">Full Name</Label>
                    <Input 
                      id="fullName" 
                      placeholder="John Doe" 
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="john@example.com" 
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+91 98765 43210"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-medium">Address</Label>
                  <Textarea
                    id="address"
                    placeholder="Your full address..."
                    className="bg-background min-h-[80px] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry" className="text-sm font-medium">What are you looking for?</Label>
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Billing System Inquiry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="billing">Billing System Inquiry</SelectItem>
                      <SelectItem value="inventory">Inventory Management</SelectItem>
                      <SelectItem value="pricing">Pricing Information</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    className="bg-background min-h-[120px] resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-coral-dark text-primary-foreground btn-shadow">
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              {/* Dedicated Support Card */}
              <div className="bg-coral-light rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">Dedicated Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Our customer success team is available 24/7 to ensure your billing operations never stop.
                  </p>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-5 card-shadow">
                  <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center mb-3">
                    <Mail className="w-5 h-5 text-info" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="text-sm text-muted-foreground">support@viveha.ai</p>
                </div>

                <div className="bg-card rounded-xl p-5 card-shadow">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <p className="text-sm text-muted-foreground">+91 (800) 123-4567</p>
                </div>
              </div>

              {/* Support Agent Illustration */}
              <div className="bg-teal-bg rounded-2xl p-6 relative overflow-hidden min-h-[300px]">
                <img 
                  src={supportAgent} 
                  alt="Customer Support" 
                  className="w-full h-full object-contain"
                />
                {/* System Online Badge */}
                <div className="absolute bottom-4 right-4 bg-card rounded-full px-4 py-2 flex items-center gap-2 card-shadow">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                  <span className="text-sm font-medium">System Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
