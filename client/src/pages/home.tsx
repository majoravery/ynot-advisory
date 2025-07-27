import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Plus, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";

export default function Home() {
  const { toast } = useToast();
  const [accordionValue, setAccordionValue] = useState(["item-1"]);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll respond within 24 hours to discuss your needs.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    contactMutation.mutate(data);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero Section */}
      <div className="p-6">
        <Card className="relative overflow-hidden rounded-2xl border-0" style={{ height: '80vh' }}>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
          </div>
          
          <div className="relative z-10 flex flex-col h-full">
            {/* Logo */}
            <div className="flex justify-start px-12 py-12 lg:px-16 lg:py-16">
              <div className="bg-white px-6 py-3 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-primary">StrategicCo</h1>
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="flex-1 flex items-end px-12 pb-16 lg:px-16 lg:pb-20">
              <div className="max-w-2xl">
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Transform Your Business Strategy
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                  Expert consultancy services that drive measurable results and sustainable growth for forward-thinking organizations.
                </p>
                <Button 
                  onClick={scrollToContact}
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg h-auto border border-white/30"
                >
                  Start Your Transformation
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Who We Are Section */}
      <section className="py-24 bg-neutral text-center">
        <div className="max-w-4xl mx-auto px-12 lg:px-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
            Who We Are
          </h2>
          <p className="text-xl text-secondary leading-relaxed">
            We are a team of seasoned strategists, industry experts, and innovation catalysts who partner with ambitious organizations to unlock their full potential. With decades of combined experience across diverse sectors, we bring deep insights, proven methodologies, and a relentless focus on delivering tangible business outcomes that matter.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <div className="p-6">
        <Card className="relative overflow-hidden rounded-2xl border-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-primary bg-opacity-80"></div>
          </div>
          
          <div className="relative z-10 py-20">
            <div className="max-w-7xl mx-auto px-12 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Left Column: Header and Description */}
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                    Why Choose Us?
                  </h2>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    Our proven track record, innovative methodologies, and commitment to your success set us apart. We don't just provide recommendations—we partner with you to ensure implementation and lasting results.
                  </p>
                </div>

                {/* Right Column: Accordion */}
                <div>
                  <Accordion 
                    type="multiple" 
                    value={accordionValue} 
                    onValueChange={setAccordionValue}
                    className="space-y-1"
                  >
                    <AccordionItem value="item-1" className="border-0">
                      <AccordionTrigger className="py-6 hover:no-underline text-left">
                        <div className="flex items-center justify-between w-full">
                          <span className="text-lg font-bold text-white">Proven Track Record</span>
                          <div className="transition-transform duration-200 group-data-[state=open]/accordion-trigger:rotate-45">
                            {accordionValue.includes("item-1") ? (
                              <X className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Plus className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pl-8">
                        <p className="text-gray-300 leading-relaxed">
                          Over 200 successful projects across Fortune 500 companies and emerging startups, with an average ROI increase of 40% within the first year of implementation.
                        </p>
                      </AccordionContent>
                      <div className="border-b border-gray-600"></div>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-0">
                      <AccordionTrigger className="py-6 hover:no-underline text-left">
                        <div className="flex items-center justify-between w-full">
                          <span className="text-lg font-bold text-white">Industry Expertise</span>
                          <div className="transition-transform duration-200">
                            {accordionValue.includes("item-2") ? (
                              <X className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Plus className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pl-8">
                        <p className="text-gray-300 leading-relaxed">
                          Deep knowledge across technology, healthcare, finance, manufacturing, and retail sectors, enabling us to provide contextually relevant solutions tailored to your industry's unique challenges.
                        </p>
                      </AccordionContent>
                      <div className="border-b border-gray-600"></div>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-0">
                      <AccordionTrigger className="py-6 hover:no-underline text-left">
                        <div className="flex items-center justify-between w-full">
                          <span className="text-lg font-bold text-white">Collaborative Approach</span>
                          <div className="transition-transform duration-200">
                            {accordionValue.includes("item-3") ? (
                              <X className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Plus className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pl-8">
                        <p className="text-gray-300 leading-relaxed">
                          We work alongside your team, not in isolation. Our collaborative methodology ensures knowledge transfer and builds internal capabilities for sustained success.
                        </p>
                      </AccordionContent>
                      <div className="border-b border-gray-600"></div>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border-0">
                      <AccordionTrigger className="py-6 hover:no-underline text-left">
                        <div className="flex items-center justify-between w-full">
                          <span className="text-lg font-bold text-white">Measurable Results</span>
                          <div className="transition-transform duration-200">
                            {accordionValue.includes("item-4") ? (
                              <X className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Plus className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pl-8">
                        <p className="text-gray-300 leading-relaxed">
                          Every engagement includes clear KPIs, regular progress reviews, and detailed reporting to ensure transparency and accountability throughout the project lifecycle.
                        </p>
                      </AccordionContent>
                      <div className="border-b border-gray-600"></div>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Contact Section */}
      <div className="p-6" id="contact">
        <Card className="relative overflow-hidden rounded-2xl border-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-primary bg-opacity-75"></div>
          </div>
          
          <div className="relative z-10 py-20">
            <div className="max-w-4xl mx-auto px-12 lg:px-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-200">
                  Let's discuss how we can help you achieve your strategic objectives.
                </p>
              </div>

              {/* Contact Form */}
              <Card className="p-8 max-w-2xl mx-auto border-0">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Label htmlFor="firstName" className="block text-sm font-semibold text-primary mb-2">
                      Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      {...form.register("firstName")}
                      className="rounded-xl border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      className="rounded-xl border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                      How can we help you? *
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      {...form.register("message")}
                      className="rounded-xl border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent resize-vertical"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full bg-accent text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-600 transition-colors duration-300 shadow-lg h-auto"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-neutral py-16">
        <div className="max-w-7xl mx-auto px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Logo Column */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-primary">StrategicCo</h3>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-secondary hover:text-primary transition-colors duration-200">Privacy</a></li>
                <li><a href="#" className="text-secondary hover:text-primary transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-primary">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-secondary hover:text-primary transition-colors duration-200">About Us</a></li>
                <li><button onClick={scrollToContact} className="text-secondary hover:text-primary transition-colors duration-200">Contact</button></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8">
            <p className="text-muted text-sm">
              © 2024 StrategicCo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
