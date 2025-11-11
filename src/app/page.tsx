"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Printer, Zap, Shield, Clock, CheckCircle2, Star } from "lucide-react";
import { Boxes } from "@/components/ui/background-boxes";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { cn } from "@/lib/utils";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: <Printer className="h-8 w-8" />,
      title: "Advanced Technology",
      description: "State-of-the-art 3D printers delivering precision and quality"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Turnaround",
      description: "Quick production times without compromising on quality"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assured",
      description: "Every print meets our rigorous quality standards"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your printing needs"
    }
  ];

  const services = [
    {
      title: "Custom 3D Printing",
      description: "Upload your design and get instant quotes",
      image: "🎨",
      price: "From $10",
      link: "/services#custom"
    },
    {
      title: "Pre-designed Models",
      description: "Choose from our extensive library",
      image: "📦",
      price: "From $5",
      link: "/products"
    },
    {
      title: "Prototyping",
      description: "Rapid prototyping for product development",
      image: "⚙️",
      price: "Custom",
      link: "/services#prototyping"
    },
    {
      title: "Mass Production",
      description: "Large-scale manufacturing solutions",
      image: "🏭",
      price: "Quote",
      link: "/services#production"
    }
  ];

  const testimonials = [
    {
      quote: "PrintX transformed my designs into reality. The quality is outstanding! Their attention to detail and commitment to excellence is unmatched in the industry.",
      name: "Sarah Johnson",
      designation: "Product Designer",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop"
    },
    {
      quote: "Fast turnaround and excellent customer service. Highly recommended! They helped bring my product vision to life with incredible precision and professionalism.",
      name: "Michael Chen",
      designation: "Entrepreneur",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
    },
    {
      quote: "Perfect for architectural models. The precision is incredible. PrintX has become an essential partner in our design process, delivering consistent quality every time.",
      name: "Emily Davis",
      designation: "Architect",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white pt-16 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20"
        >
          <div className="text-center space-y-8">
            <motion.div variants={fadeInUp} className="space-y-4">
              <TypewriterEffectSmooth 
                words={[
                  {
                    text: "Where",
                    className: "text-slate-900"
                  },
                  {
                    text: "Imagination",
                    className: "text-slate-900"
                  },
                  {
                    text: "Takes",
                    className: "text-slate-900"
                  },
                  {
                    text: "Shape",
                    className: "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                  },
                ]}
                className="text-5xl md:text-7xl font-bold tracking-tight justify-center"
                cursorClassName="bg-purple-600"
              />
              <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto">
                At Layerforge Technologies, we fuse creativity and technology to transform your boldest ideas into precision-built reality — one layer at a time.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/products">
                <Button size="lg" className="text-lg px-8">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <PointerHighlight
                rectangleClassName="border-purple-600"
                pointerClassName="text-purple-600"
              >
                <Link href="/services">
                  <Button size="lg" variant="outline" className="text-lg px-8 relative z-10">
                    Our Services
                  </Button>
                </Link>
              </PointerHighlight>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="pt-12 flex justify-center gap-12 text-center flex-wrap"
            >
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">10K+</div>
                <div className="text-slate-600">Orders Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">5K+</div>
                <div className="text-slate-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">99%</div>
                <div className="text-slate-600">Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 text-6xl opacity-10 z-10"
        >
          🎨
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-10 text-6xl opacity-10 z-10"
        >
          ⚙️
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">PrintX</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Industry-leading 3D printing with unmatched quality
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive 3D printing solutions for every need
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HoverEffect 
              items={services.map(service => ({
                title: service.title,
                description: service.description,
                link: service.link,
                image: service.image,
                price: service.price
              }))}
              className="max-w-7xl mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to bring your ideas to life
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                step: "01",
                title: "Choose or Upload",
                description: "Select from our designs or upload your own 3D model"
              },
              {
                step: "02",
                title: "Customize & Quote",
                description: "Select materials, colors, and get instant pricing"
              },
              {
                step: "03",
                title: "We Print & Ship",
                description: "We print your model and deliver it to your door"
              }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative flex items-center gap-4">
                <CardSpotlight 
                  className="h-full text-center p-8 bg-white dark:bg-neutral-950 border-gray-200 flex-1"
                  radius={400}
                  color="rgba(168, 85, 247, 0.3)"
                >
                  <div className="text-6xl font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-base text-muted-foreground">
                    {item.description}
                  </p>
                  <CheckCircle2 className="h-12 w-12 text-primary mx-auto mt-6" />
                </CardSpotlight>
                {index < 2 && (
                  <div className="hidden md:block flex-shrink-0">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by thousands of satisfied customers
            </p>
          </motion.div>

          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of satisfied customers and bring your ideas to life today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
