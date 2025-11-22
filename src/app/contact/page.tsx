"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: ["Varanasi, Uttar Pradesh", "India"]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+91 91299 58671", "Mon-Sat, 9AM-9PM IST"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["hello@gmail.com", "www.layerforgetech.com"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Saturday: 9AM - 7PM", "Sunday: Closed"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a question or project in mind? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone (Optional)</label>
                    <Input type="tel" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="How can we help you?" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project or inquiry..." 
                      rows={6}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Upload File (Optional)</label>
                    <Input type="file" />
                    <p className="text-xs text-muted-foreground">
                      Supported formats: STL, OBJ, 3MF (Max 50MB)
                    </p>
                  </div>

                  <Button size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
                      {info.icon}
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-48 bg-secondary/50 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Map Location</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "What file formats do you accept?",
                a: "We accept STL, OBJ, 3MF, and STEP files for 3D printing."
              },
              {
                q: "How long does printing take?",
                a: "Most orders are completed within 3-5 business days."
              },
              {
                q: "Do you offer rush orders?",
                a: "Yes, we offer 24-48 hour rush service for an additional fee."
              },
              {
                q: "What&apos;s your return policy?",
                a: "We offer a 30-day satisfaction guarantee on all prints."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                  <CardDescription>{faq.a}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
