/** @format */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  insertContactSubmissionSchema,
  type InsertContactSubmission,
} from "@/lib/schema";

export default function Home() {
  const { toast } = useToast();
  const [accordionValue, setAccordionValue] = useState(["item-1"]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContactSubmission) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "We'll respond within 24 hours to discuss your needs.",
    });
    form.reset();
    setIsSubmitting(false);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero Section */}
      <div className="p-6">
        <Card
          className="relative overflow-hidden rounded-2xl border-0"
          style={{ height: "80vh" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            // style={{
            //   backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80')`,
            // }}
          >
            <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
          </div>

          <div className="relative z-10 flex flex-col h-full">
            {/* Logo */}
            <div className="flex justify-start px-3 py-6 lg:px-8 lg:py-10">
              <img
                src="/logo-light.png"
                alt="Ynot Advisory"
                className="h-36 lg:h-48 w-auto"
              />
            </div>

            {/* Hero Content */}
            <div className="flex-1 flex items-end px-8 pb-12 lg:px-16 lg:pb-20">
              <div className="max-w-2xl">
                <h1 className="text-4xl lg:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
                  <span className="block text-secondary lg:mb-2">
                    Strategic Growth.
                  </span>
                  <span className="block text-white">Simplified.</span>
                </h1>
                <p className="text-l lg:text-2xl text-gray-200 mb-4 lg:mb-8 leading-relaxed">
                  A Singapore-based consultancy helping businesses navigate
                  complexity and scale with clarity.
                </p>
                <p className="text-l lg:text-2xl text-gray-200 mb-4 lg:mb-8 leading-relaxed">
                  We partner with founders, teams, and organisations to shape
                  strategy, streamline operations, and turn insight into action.
                </p>
                <Button
                  onClick={scrollToContact}
                  className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-base lg:text-lg font-semibold hover:bg-white/30 transition-all duration-100 shadow-lg h-auto border border-white/30"
                >
                  Start Your Journey
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Who We Are Section */}
      <section className="py-24 bg-neutral text-center">
        <div className="max-w-4xl mx-auto px-8 lg:px-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
            Who We Are
          </h2>
          <p className="text-xl text-primary leading-relaxed mb-8">
            Founded by <strong>Sidne Yeo</strong>, Ynot Advisory is a
            Singapore-based consultancy that transforms how businesses approach
            growth and innovation. We believe every challenge is an opportunity
            waiting to be unlocked.
          </p>
          <p className="text-xl text-primary leading-relaxed mb-8">
            Our approach combines strategic thinking with practical execution,
            helping founders and business leaders navigate complex decisions
            with clarity and confidence. From early-stage ventures to
            established enterprises, we partner closely to deliver measurable
            results.
          </p>
          <p className="text-xl text-primary leading-relaxed">
            <i>
              "Why not take the leap? Why not pursue ambitious goals? Because
              Ynot?"
            </i>{" "}
            - This philosophy drives everything we do.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <div className="p-6 pb-0">
        <Card className="relative overflow-hidden rounded-2xl border-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            // style={{
            //   backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80')`,
            // }}
          >
            <div className="absolute inset-0 bg-secondary bg-opacity-80"></div>
          </div>

          <div className="relative z-10 py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-8 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Column: Header and Description */}
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-secondary-foreground mb-8">
                    Why Choose Us?
                  </h2>
                  <p className="text-xl text-secondary-foreground leading-relaxed">
                    Our proven track record, innovative methodologies, and
                    commitment to your success set us apart. We don't just
                    provide recommendations—we partner with you to ensure
                    implementation and lasting results.
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
                          <div className="flex items-center gap-3">
                            <Target className="h-5 w-5 text-secondary-foreground" />
                            <span className="text-lg font-bold text-secondary-foreground">
                              Proven Track Record
                            </span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pl-8">
                        <p className="text-secondary-foreground leading-relaxed">
                          Over 200 successful projects across Fortune 500
                          companies and emerging startups, with an average ROI
                          increase of 40% within the first year of
                          implementation.
                        </p>
                      </AccordionContent>
                      <div className="border-b border-gray-600"></div>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-0">
                      <AccordionTrigger className="py-6 hover:no-underline text-left">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-secondary-foreground" />
                            <span className="text-lg font-bold text-secondary-foreground">
                              Industry Expertise
                            </span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pl-8">
                        <p className="text-secondary-foreground leading-relaxed">
                          Deep knowledge across technology, healthcare, finance,
                          manufacturing, and retail sectors, enabling us to
                          provide contextually relevant solutions tailored to
                          your industry's unique challenges.
                        </p>
                      </AccordionContent>
                      <div className="border-b border-gray-600"></div>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-0">
                      <AccordionTrigger className="py-6 hover:no-underline text-left">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3">
                            <Lightbulb className="h-5 w-5 text-secondary-foreground" />
                            <span className="text-lg font-bold text-secondary-foreground">
                              Collaborative Approach
                            </span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pl-8">
                        <p className="text-secondary-foreground leading-relaxed">
                          We work alongside your team, not in isolation. Our
                          collaborative methodology ensures knowledge transfer
                          and builds internal capabilities for sustained
                          success.
                        </p>
                      </AccordionContent>
                      <div className="border-b border-gray-600"></div>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border-0">
                      <AccordionTrigger className="py-6 hover:no-underline text-left">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3">
                            <TrendingUp className="h-5 w-5 text-secondary-foreground" />
                            <span className="text-lg font-bold text-secondary-foreground">
                              Measurable Results
                            </span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pl-8">
                        <p className="text-secondary-foreground leading-relaxed">
                          Every engagement includes clear KPIs, regular progress
                          reviews, and detailed reporting to ensure transparency
                          and accountability throughout the project lifecycle.
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
            // style={{
            //   backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')`,
            // }}
          >
            <div className="absolute inset-0 bg-primary bg-opacity-75"></div>
          </div>

          <div className="relative z-10 py-16 lg:py-20">
            <div className="max-w-4xl mx-auto px-8 lg:px-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-200">
                  Let's discuss how we can help you achieve your strategic
                  objectives.
                </p>
              </div>

              {/* Contact Form */}
              <Card className="p-6 lg:p-8 max-w-2xl mx-auto border-0">
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-primary mb-2"
                      >
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        {...form.register("firstName")}
                        className="rounded-xl border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                      {form.formState.errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-primary mb-2"
                      >
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        {...form.register("lastName")}
                        className="rounded-xl border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                      {form.formState.errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="block text-sm font-semibold text-primary mb-2"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      className="rounded-xl border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="block text-sm font-semibold text-primary mb-2"
                    >
                      How can we help you? *
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      {...form.register("message")}
                      className="rounded-xl border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent resize-vertical"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-white py-4 rounded-xl font-semibold text-lg hover:bg-accent-hover transition-colors duration-100 shadow-lg h-auto"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-neutral py-16">
        <div className="px-12 lg:px-16 text-center">
          {/* Logo Column */}
          <div className="flex justify-center mb-8">
            <img
              src="/logo-dark.png"
              alt="Ynot Advisory"
              className="h-48 lg:h-56 w-auto"
            />
          </div>
          <p className="text-gray-700 mb-8">Because Ynot?</p>
        </div>
      </footer>
    </div>
  );
}
