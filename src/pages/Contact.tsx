import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Headphones, Send, CheckCircle, AlertCircle } from "lucide-react";
import supportAgent from "@/assets/support-agent.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    inquiry: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzDVnIDklQZ_bDaMf_r-wsERYWP4D3JUnwZg8RO5Xtfm0-bC39ktnkZK00rvRvMTqPo/exec",
      {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      }
    );

    const result = await response.json();

    if (result.status === "success") {
      setSubmitStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        inquiry: "",
        message: "",
      });
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};


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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium">Full Name</Label>
                    <Input
                      id="fullName"
                      
                      className="bg-background"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      
                      className="bg-background"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    
                    className="bg-background"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-sm font-medium">Address</Label>
                  <Textarea
                    id="address"
                    placeholder="Your full address..."
                    className="bg-background min-h-[80px] resize-none"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry" className="text-sm font-medium">What are you looking for?</Label>
                  <Select value={formData.inquiry} onValueChange={(value) => handleInputChange('inquiry', value)}>
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
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-coral-dark text-primary-foreground btn-shadow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      Sending... <div className="ml-2 w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-success bg-success/10 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-destructive bg-destructive/10 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">Failed to send message. Please try again or contact us directly.</span>
                  </div>
                )}
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
                  <p className="text-sm text-muted-foreground">connect@isaii.in</p>
                </div>

                <div className="bg-card rounded-xl p-5 card-shadow">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <p className="text-sm text-muted-foreground">+91 90036 72804</p>
                </div>
              </div>

              {/* Support Agent Illustration */}
              <div className="bg-teal-bg rounded-2xl p-6 relative overflow-hidden min-h-[300px] hidden sm:block">
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
