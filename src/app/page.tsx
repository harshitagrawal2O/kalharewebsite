"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Boxes } from "@/components/ui/background-boxes";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const videos = ['/printing.mp4', '/printing2.mp4'];
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleVideoEnd = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideo((prev) => (prev + 1) % videos.length);
        setIsTransitioning(false);
      }, 500);
    };
    
    video.addEventListener('ended', handleVideoEnd);
    return () => video.removeEventListener('ended', handleVideoEnd);
  }, [currentVideo]);
  
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
      icon: "/technology.gif",
      title: "Advanced Technology",
      description: "State-of-the-art 3D printers delivering precision and quality"
    },
    {
      icon: "/fast.gif",
      title: "Fast Turnaround",
      description: "Quick production times without compromising on quality"
    },
    {
      icon: "/high-quality.gif",
      title: "Quality Assured",
      description: "Every print meets our rigorous quality standards"
    },
    {
      icon: "/helpdesk.gif",
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your printing needs"
    }
  ];

  const services = [
    {
      title: "Custom 3D Printing",
      description: "Upload your design and get instant quotes",
      image: "/custom.png",
      price: "From ₹500",
      link: "/services#custom"
    },
    {
      title: "Pre-designed Models",
      description: "Choose from our extensive library",
      image: "/predesigned-models.png",
      price: "From ₹250",
      link: "/products"
    },
    {
      title: "Prototyping",
      description: "Rapid prototyping for product development",
      image: "/prototype.png",
      price: "Custom",
      link: "/services#prototyping"
    },
    {
      title: "Mass Production",
      description: "Large-scale manufacturing solutions",
      image: "/mass-production.png",
      price: "Quote",
      link: "/services#production"
    }
  ];

  const testimonials = [
    {
      quote: "LayerForge transformed my designs into reality. The quality is outstanding! Their attention to detail and commitment to excellence is unmatched in the industry.",
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
      quote: "Perfect for architectural models. The precision is incredible. LayerForge has become an essential partner in our design process, delivering consistent quality every time.",
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
                    className: "text-slate-900 dark:text-slate-100"
                  },
                  {
                    text: "Imagination",
                    className: "text-slate-900 dark:text-slate-100"
                  },
                  {
                    text: "Takes",
                    className: "text-slate-900 dark:text-slate-100"
                  },
                  {
                    text: "Shape",
                    className: "text-[#4c9aff]"
                  },
                ]}
                className="text-5xl md:text-7xl font-bold tracking-tight justify-center"
                cursorClassName="bg-[#4c9aff]"
              />
              <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto">
                At LayerForge, we fuse creativity and technology to transform your boldest ideas into precision-built reality — one layer at a time.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/custom-print">
                <Button size="lg" className="text-lg px-8">
                  Custom Print
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <PointerHighlight
                rectangleClassName="border-[#4c9aff]"
                pointerClassName="text-[#4c9aff]"
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
                <div className="text-4xl font-bold text-gradient">10K+</div>
                <div className="text-slate-600 dark:text-slate-400">Orders Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient">5K+</div>
                <div className="text-slate-600 dark:text-slate-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient">99%</div>
                <div className="text-slate-600 dark:text-slate-400">Satisfaction</div>
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
              Why Choose <span className="text-gradient">LayerForge</span>
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
              <motion.div key={index} variants={fadeInUp} className="h-full">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className="h-full"
                />
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
                  color="rgba(76, 154, 255, 0.25)"
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

      {/* Video Showcase Section */}
      <section className="relative py-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          {/* Video container */}
          <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] bg-black">
            <motion.video
              key={currentVideo}
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: isTransitioning ? 0 : 1,
                scale: isTransitioning ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              <source src={videos[currentVideo]} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>
            
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center px-4 z-10"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  Precision <span className="text-[#4c9aff]">in Motion</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
                  Watch innovation come to life, layer by layer
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
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
      <section className="py-20 bg-gradient-to-r from-[#4c9aff] to-[#2563eb]">
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
              <Button size="lg" variant="secondary" className="text-lg px-8 bg-white hover:bg-white/90 text-[#1a365d]">
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
