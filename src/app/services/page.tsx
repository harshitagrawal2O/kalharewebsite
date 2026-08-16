"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  Printer,
  Pencil,
  Zap,
  Package,
  Users,
  Sparkles,
  Shield,
  Clock,
  Check,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      icon: <Printer className="h-12 w-12" />,
      title: "3D Printing Services",
      description:
        "Professional 3D printing with various materials and finishes",
      features: [
        "Multiple material options",
        "Various color choices",
        "Different finish types",
        "High precision printing",
      ],
    },
    {
      icon: <Printer className="h-12 w-12" />,
      title: "3D Printing Services",
      description:
        "Professional 3D printing with various materials and finishes",
      features: [
        "Multiple material options",
        "Various color choices",
        "Different finish types",
        "High precision printing",
      ],
    },
    {
      icon: <Pencil className="h-12 w-12" />,
      title: "Custom Design",
      description: "Expert designers bring your ideas to life",
      features: [
        "Professional CAD modeling",
        "Design consultation",
        "Unlimited revisions",
        "Fast turnaround",
      ],
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Rapid Prototyping",
      description: "Fast iterations for product development",
      features: [
        "24-48 hour turnaround",
        "Multiple iterations",
        "Design feedback",
        "Testing support",
      ],
    },
    {
      icon: <Package className="h-12 w-12" />,
      title: "Mass Production",
      description: "Scale your production with our industrial solutions",
      features: [
        "Bulk pricing",
        "Quality consistency",
        "Fast production",
        "Logistics support",
      ],
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Consulting",
      description: "Expert guidance for your 3D printing projects",
      features: [
        "Technology selection",
        "Material advice",
        "Design optimization",
        "Cost reduction",
      ],
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Post-Processing",
      description: "Professional finishing for perfect results",
      features: [
        "Sanding & smoothing",
        "Painting & coating",
        "Assembly services",
        "Quality inspection",
      ],
    },
  ];

  const materials = [
    {
      name: "PLA",
      description: "Eco-friendly, easy to print",
      image: "/images/pla.png",
    },
    {
      name: "ABS",
      description: "Strong and durable",
      image: "/images/abs.png",
    },
    {
      name: "PETG",
      description: "Weather resistant",
      image: "/images/petg.png",
    },
    {
      name: "Resin",
      description: "High detail finish",
      image: "/images/resin.png",
    },
    // {
    //   name: "Nylon",
    //   description: "Flexible and tough",
    //   image: "/images/nylon.png"
    // },
    {
      name: "TPU",
      description: "Rubber-like flexibility",
      image: "/images/tpu.png",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/60 py-20">
        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-cta/10 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="eyebrow mb-5">What We Do</span>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-display mb-6">
              Our <span className="text-cta">Services</span>
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
                  <CardBody className="bg-card relative group/card border-border w-auto sm:w-[25rem] h-auto rounded-lg p-6 border transition-shadow duration-300 hover:shadow-brand-lg">
                    <CardItem
                      translateZ="50"
                      className="font-heading text-xl font-bold text-primary mb-2"
                    >
                      {service.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-muted-foreground text-sm max-w-sm mt-2 mb-4"
                    >
                      {service.description}
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mb-4">
                      <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center text-primary transition-colors group-hover/card:bg-accent group-hover/card:text-cta-strong">
                        {service.icon}
                      </div>
                    </CardItem>
                    <CardItem translateZ="80" className="w-full mb-6">
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-cta mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardItem>
                    <div className="flex justify-end items-center pt-4 border-t border-border">
                      <CardItem translateZ="60" as="div">
                        <HoverBorderGradient
                          as="button"
                          onClick={() => {
                            const message = `Hello! I am interested in your ${service.title} service. Please provide me with a quote.`;
                            const whatsappUrl = `https://api.whatsapp.com/send?phone=9129958671&text=${encodeURIComponent(message)}`;
                            window.open(whatsappUrl, "_blank");
                          }}
                          containerClassName="rounded-xl"
                        >
                          <span className="text-sm font-semibold">
                            Get Quote
                          </span>
                        </HoverBorderGradient>
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
            <h2 className="text-4xl font-extrabold tracking-display mb-4">
              Available <span className="text-cta">Materials</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose from a wide range of high-quality materials
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group text-center transition-all overflow-hidden hover:shadow-brand hover:border-cta/50">
                  <CardContent className="pt-6">
                    <div className="h-20 w-20 rounded-full mx-auto mb-4 overflow-hidden bg-secondary ring-2 ring-border transition-all group-hover:ring-cta/60 relative">
                      <Image
                        src={material.image}
                        alt={material.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-primary">
                      {material.name}
                    </h3>
                    <p className="text-sm text-foreground">
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
            <h2 className="text-4xl font-extrabold tracking-display mb-4">
              Our <span className="text-cta">Process</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Simple, transparent, and efficient
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              {
                icon: <Pencil />,
                title: "Design",
                desc: "Upload or create your design",
              },
              {
                icon: <Shield />,
                title: "Review",
                desc: "We check and optimize",
              },
              {
                icon: <Printer />,
                title: "Print",
                desc: "Professional 3D printing",
              },
              {
                icon: <Package />,
                title: "Deliver",
                desc: "Fast shipping to your door",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full transition-all duration-300 group hover:-translate-y-2 hover:shadow-brand-lg border-2 hover:border-cta/50">
                    <CardContent className="pt-6 relative overflow-hidden">
                      {/* Animated background gradient on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-accent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                      />

                      {/* Step number */}
                      <motion.div
                        className="absolute top-4 right-4 font-heading text-6xl font-extrabold tracking-display text-cta/15 group-hover:text-cta/30 transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        {index + 1}
                      </motion.div>

                      {/* Icon with advanced animations */}
                      <motion.div
                        className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center text-primary mx-auto mb-4 relative z-10"
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                          backgroundColor: "rgba(248, 100, 0, 0.16)",
                        }}
                        transition={{
                          rotate: { duration: 0.6, ease: "easeInOut" },
                          scale: { duration: 0.2 },
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {step.icon}
                        </motion.div>

                        {/* Pulse ring effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-cta opacity-0 group-hover:opacity-100"
                          initial={{ scale: 1, opacity: 0 }}
                          whileHover={{
                            scale: [1, 1.5, 1.5],
                            opacity: [0, 0.5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeOut",
                          }}
                        />
                      </motion.div>

                      {/* Title with slide-in effect */}
                      <motion.h3
                        className="font-bold text-lg mb-2 relative z-10"
                        whileHover={{ scale: 1.05, color: "#C24E00" }}
                        transition={{ duration: 0.2 }}
                      >
                        {step.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        className="text-sm text-muted-foreground relative z-10"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {step.desc}
                      </motion.p>

                      {/* Progress indicator */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-cta"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Connector arrow between steps (not on last item) */}
                {index < 3 && (
                  <motion.div
                    className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-30"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <motion.svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-brand-slate drop-shadow-lg"
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <path
                        d="M5 12h14m-7-7l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </motion.div>
                )}
              </div>
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
            <Card className="relative overflow-hidden border-0 bg-brand-gradient text-brand-offwhite shadow-brand-lg">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cta/20 blur-3xl" />
              <CardHeader className="relative z-10 text-center">
                <CardTitle className="font-heading text-3xl font-extrabold tracking-display text-brand-offwhite mb-4">
                  Ready to Start Your Project?
                </CardTitle>
                <CardDescription className="text-brand-offwhite/80 text-lg">
                  Get a free quote and consultation today
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="cta" className="w-full sm:w-auto">
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-brand-offwhite/30 bg-transparent text-brand-offwhite hover:border-cta hover:bg-brand-offwhite/10 hover:text-brand-offwhite"
                  >
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
