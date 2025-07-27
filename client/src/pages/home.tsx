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
      <div className="p-4">
        <Card className="relative overflow-hidden shadow-xl min-h-screen rounded-2xl border-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
          </div>
          
          <div className="relative z-10 flex flex-col h-screen">
            {/* Logo */}
            <div className="flex justify-start p-8">
              <div className="bg-white px-6 py-3 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-primary">StrategicCo</h1>
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="flex-1 flex items-end pb-16 pl-8 pr-8 lg:pl-16 lg:pr-16">
              <div className="max-w-2xl">
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Transform Your Business Strategy
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                  Expert consultancy services that drive measurable results and sustainable growth for forward-thinking organizations.
                </p>
                <Button 
                  onClick={scrollToContact}
                  className="bg-accent text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg h-auto"
                >
                  Start Your Transformation
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Who We Are Section */}
      <section className="py-20 bg-neutral text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
            Who We Are
          </h2>
          <p className="text-xl text-secondary leading-relaxed">
            We are a team of seasoned strategists, industry experts, and innovation catalysts who partner with ambitious organizations to unlock their full potential. With decades of combined experience across diverse sectors, we bring deep insights, proven methodologies, and a relentless focus on delivering tangible business outcomes that matter.
          </p>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center mb-16">
            How We Drive Success
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Strategic Planning Card */}
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Strategic planning and business analysis" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-primary mb-4">Strategic Planning</h3>
              <p className="text-secondary leading-relaxed">
                Develop comprehensive roadmaps that align your vision with market opportunities and operational capabilities.
              </p>
            </Card>

            {/* Process Optimization Card */}
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Modern office workspace optimization" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-primary mb-4">Process Optimization</h3>
              <p className="text-secondary leading-relaxed">
                Streamline operations, eliminate inefficiencies, and implement scalable systems that drive productivity.
              </p>
            </Card>

            {/* Digital Transformation Card */}
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <img 
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Digital transformation and technology integration" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-primary mb-4">Digital Transformation</h3>
              <p className="text-secondary leading-relaxed">
                Navigate technological evolution with confidence through strategic digital initiatives and change management.
              </p>
            </Card>

            {/* Growth Strategy Card */}
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Business growth analytics and strategy" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-primary mb-4">Growth Strategy</h3>
              <p className="text-secondary leading-relaxed">
                Identify and capitalize on expansion opportunities through data-driven market analysis and strategic positioning.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Header and Description */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
                Why Choose Us?
              </h2>
              <p className="text-xl text-secondary leading-relaxed">
                Our proven track record, innovative methodologies, and commitment to your success set us apart. We don't just provide recommendations—we partner with you to ensure implementation and lasting results.
              </p>
            </div>

            {/* Right Column: Accordion */}
            <div>
              <Accordion 
                type="multiple" 
                value={accordionValue} 
                onValueChange={setAccordionValue}
                className="space-y-4"
              >
                <AccordionItem value="item-1" className="border border-gray-200 rounded-xl overflow-hidden">
                  <AccordionTrigger className="p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 hover:no-underline">
                    <span className="text-lg font-semibold text-primary">Proven Track Record</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 bg-white">
                    <p className="text-secondary leading-relaxed">
                      Over 200 successful projects across Fortune 500 companies and emerging startups, with an average ROI increase of 40% within the first year of implementation.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200 rounded-xl overflow-hidden">
                  <AccordionTrigger className="p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 hover:no-underline">
                    <span className="text-lg font-semibold text-primary">Industry Expertise</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 bg-white">
                    <p className="text-secondary leading-relaxed">
                      Deep knowledge across technology, healthcare, finance, manufacturing, and retail sectors, enabling us to provide contextually relevant solutions tailored to your industry's unique challenges.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200 rounded-xl overflow-hidden">
                  <AccordionTrigger className="p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 hover:no-underline">
                    <span className="text-lg font-semibold text-primary">Collaborative Approach</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 bg-white">
                    <p className="text-secondary leading-relaxed">
                      We work alongside your team, not in isolation. Our collaborative methodology ensures knowledge transfer and builds internal capabilities for sustained success.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200 rounded-xl overflow-hidden">
                  <AccordionTrigger className="p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 hover:no-underline">
                    <span className="text-lg font-semibold text-primary">Measurable Results</span>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 bg-white">
                    <p className="text-secondary leading-relaxed">
                      Every engagement includes clear KPIs, regular progress reviews, and detailed reporting to ensure transparency and accountability throughout the project lifecycle.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="p-4" id="contact">
        <Card className="relative overflow-hidden shadow-xl rounded-2xl border-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')`
            }}
          >
            <div className="absolute inset-0 bg-primary bg-opacity-75"></div>
          </div>
          
          <div className="relative z-10 py-20">
            <div className="max-w-4xl mx-auto px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-200">
                  Let's discuss how we can help you achieve your strategic objectives.
                </p>
              </div>

              {/* Contact Form */}
              <Card className="p-8 shadow-2xl max-w-2xl mx-auto border-0">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="block text-sm font-semibold text-primary mb-2">
                        First Name *
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
                      <Label htmlFor="lastName" className="block text-sm font-semibold text-primary mb-2">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        {...form.register("lastName")}
                        className="rounded-xl border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <Label htmlFor="company" className="block text-sm font-semibold text-primary mb-2">
                        Company
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        {...form.register("company")}
                        className="rounded-xl border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                      How can we help you? *
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      {...form.register("message")}
                      placeholder="Tell us about your business challenges and objectives..."
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
                  
                  <p className="text-sm text-muted text-center">
                    We'll respond within 24 hours to discuss your needs.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Logo Column */}
            <div>
              <h3 className="text-2xl font-bold mb-6">StrategicCo</h3>
              <p className="text-gray-300 leading-relaxed">
                Transforming businesses through strategic excellence and innovative solutions.
              </p>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Strategic Planning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Process Optimization</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Digital Transformation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Growth Strategy</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Our Team</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Case Studies</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Careers</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-3">
                <li><button onClick={scrollToContact} className="text-gray-300 hover:text-white transition-colors duration-200">Get in Touch</button></li>
                <li><a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors duration-200">+1 (234) 567-890</a></li>
                <li><a href="mailto:hello@strategicco.com" className="text-gray-300 hover:text-white transition-colors duration-200">hello@strategicco.com</a></li>
                <li className="text-gray-300">New York, NY</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 StrategicCo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
