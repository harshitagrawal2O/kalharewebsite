"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { 
  Printer, 
  Pencil, 
  Zap, 
  Package, 
  Users, 
  Sparkles, 
  Shield, 
  Clock,
  Check
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: <Printer className="h-12 w-12" />,
      title: "3D Printing Services",
      description: "Professional 3D printing with various materials and finishes",
      features: [
        "Multiple material options",
        "Various color choices",
        "Different finish types",
        "High precision printing"
      ],
      price: "From $10"
    },
    {
      icon: <Pencil className="h-12 w-12" />,
      title: "Custom Design",
      description: "Expert designers bring your ideas to life",
      features: [
        "Professional CAD modeling",
        "Design consultation",
        "Unlimited revisions",
        "Fast turnaround"
      ],
      price: "From $50"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Rapid Prototyping",
      description: "Fast iterations for product development",
      features: [
        "24-48 hour turnaround",
        "Multiple iterations",
        "Design feedback",
        "Testing support"
      ],
      price: "Custom Quote"
    },
    {
      icon: <Package className="h-12 w-12" />,
      title: "Mass Production",
      description: "Scale your production with our industrial solutions",
      features: [
        "Bulk pricing",
        "Quality consistency",
        "Fast production",
        "Logistics support"
      ],
      price: "Custom Quote"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Consulting",
      description: "Expert guidance for your 3D printing projects",
      features: [
        "Technology selection",
        "Material advice",
        "Design optimization",
        "Cost reduction"
      ],
      price: "Hourly Rate"
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Post-Processing",
      description: "Professional finishing for perfect results",
      features: [
        "Sanding & smoothing",
        "Painting & coating",
        "Assembly services",
        "Quality inspection"
      ],
      price: "From ₹1000"
    }
  ];

  const materials = [
    {
      name: "PLA",
      description: "Eco-friendly, easy to print",
      color: "bg-green-500"
    },
    {
      name: "ABS",
      description: "Strong and durable",
      color: "bg-blue-500"
    },
    {
      name: "PETG",
      description: "Weather resistant",
      color: "bg-purple-500"
    },
    {
      name: "Resin",
      description: "High detail finish",
      color: "bg-orange-500"
    },
    {
      name: "Nylon",
      description: "Flexible and tough",
      color: "bg-pink-500"
    },
    {
      name: "TPU",
      description: "Rubber-like flexibility",
      color: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-purple-500/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive 3D printing solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CardContainer containerClassName="py-0">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
                    >
                      {service.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-4"
                    >
                      {service.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mb-4">
                      <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {service.icon}
                      </div>
                    </CardItem>
                    <CardItem translateZ="80" className="w-full mb-6">
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-neutral-600 dark:text-neutral-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardItem>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <CardItem
                        translateZ="70"
                        className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                      >
                        {service.price}
                      </CardItem>
                      <CardItem
                        translateZ="60"
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        Get Quote
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Available <span className="text-gradient">Materials</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose from a wide range of high-quality materials
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <div className={`h-16 w-16 rounded-full ${material.color} mx-auto mb-4`} />
                    <h3 className="font-bold text-lg mb-2">{material.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {material.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, transparent, and efficient
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Pencil />, title: "Design", desc: "Upload or create your design" },
              { icon: <Shield />, title: "Review", desc: "We check and optimize" },
              { icon: <Printer />, title: "Print", desc: "Professional 3D printing" },
              { icon: <Package />, title: "Deliver", desc: "Fast shipping to your door" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="pt-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                      {step.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-primary to-purple-600 text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-4">
                  Ready to Start Your Project?
                </CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Get a free quote and consultation today
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                    Browse Products
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
