"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Boxes } from "@/components/ui/background-boxes";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

const videos = ['/videos/printing.mp4', '/videos/printing2.mp4'];

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
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
      icon: "/icons/technology.gif",
      title: "Advanced Technology",
      description: "State-of-the-art 3D printers delivering precision and quality"
    },
    {
      icon: "/icons/fast.gif",
      title: "Fast Turnaround",
      description: "Quick production times without compromising on quality"
    },
    {
      icon: "/icons/high-quality.gif",
      title: "Quality Assured",
      description: "Every print meets our rigorous quality standards"
    },
    {
      icon: "/icons/helpdesk.gif",
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your printing needs"
    }
  ];

  const services = [
    {
      title: "Custom 3D Printing",
      description: "Upload your design and get instant quotes",
      image: "/images/custom.png",
      link: "/services#custom"
    },
    {
      title: "Pre-designed Models",
      description: "Choose from our extensive library",
      image: "/images/predesigned-models.png",
      link: "/products"
    },
    {
      title: "Prototyping",
      description: "Rapid prototyping for product development",
      image: "/images/prototype.png",
      link: "/services#prototyping"
    },
    {
      title: "Mass Production",
      description: "Large-scale manufacturing solutions",
      image: "/images/mass-production.png",
      link: "/services#production"
    }
  ];

  const testimonials = [
    {
      quote: "LayerForge transformed my designs into reality. The quality is outstanding! Their attention to detail and commitment to excellence is unmatched in the industry.",
      name: "Anurag Singh",
      designation: "Product Designer",
      src: "https://media.licdn.com/dms/image/v2/D5603AQEFuNOySAf3xA/profile-displayphoto-scale_400_400/B56ZmvjPJ7IYAg-/0/1759586875670?e=1766016000&v=beta&t=nfoOZPWx-xYyqYJhix0YnFH0UxnBdxotrnWYTqpLyEo"
    },
    {
      quote: "Fast turnaround and excellent customer service. Highly recommended! They helped bring my product vision to life with incredible precision and professionalism.",
      name: "Harshit Agrawal",
      designation: "Entrepreneur",
      src: "https://media.licdn.com/dms/image/v2/D5603AQHGIbaTVhguDw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715881696505?e=1766016000&v=beta&t=ZRbmEouRQeoaEw1AjJtx48TGaxz-0QlCWzBqb9PWtSY"
    },
    {
      quote: "LayerForge delivered exceptional results — fast, reliable, and the surface finish was flawless. I will be using them for all future prototypes and highly recommend their services.",
      name: "Sanya Sharma",
      designation: "Entrepreneur",
      src: "https://th.bing.com/th/id/OIP.n2KTVjAP5M8JEq6iEiNgKwHaHa?w=171&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3"
    },
    {
      quote: "Perfect for architectural models. The precision is incredible. LayerForge has become an essential partner in our design process, delivering consistent quality every time.",
      name: "Rahul Verma",
      designation: "Architect",
      src: "https://th.bing.com/th/id/OIP.ui7WXb215uL4YUjd48qGKwAAAA?w=179&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 relative z-20 w-full"
        >
          <div className="text-center space-y-6 sm:space-y-8">
            <motion.div variants={fadeInUp} className="space-y-3 sm:space-y-4">
              <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight justify-center font-heading text-slate-900 dark:text-slate-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Where Imagination Takes{" "}
                <span className="text-[#094ba0] block w-full sm:inline-block sm:w-auto mt-2 sm:mt-0">
                  Shape
                </span>
              </motion.h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground max-w-3xl mx-auto px-4">
                At LayerForge, we fuse creativity and technology to transform your boldest ideas into precision-built reality — one layer at a time.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            >
              <Link href="/custom-print" className="w-full sm:w-auto">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto h-12 sm:h-11">
                  Custom Print
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <PointerHighlight
                rectangleClassName="border-[#094ba0]"
                pointerClassName="text-[#094ba0]"
              >
                <Link href="/services" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 relative z-10 w-full sm:w-auto h-12 sm:h-11">
                    Our Services
                  </Button>
                </Link>
              </PointerHighlight>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="pt-8 sm:pt-12 flex justify-center gap-6 sm:gap-8 md:gap-12 text-center flex-wrap px-4"
            >
              <div className="min-w-[100px]">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">1500+</div>
                <div className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">Orders Completed</div>
              </div>
              <div className="min-w-[100px]">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">1000+</div>
                <div className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">Happy Clients</div>
              </div>
              <div className="min-w-[100px]">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">99%</div>
                <div className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">Satisfaction</div>
              </div>
            </motion.div>
          </div>
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
                image: service.image
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
                  Precision <span className="text-[#094ba0]">in Motion</span>
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
      <section className="py-20 bg-gradient-to-r from-[#094ba0] to-[#4975d5]">
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
            <Link href="/custom-print">
              <Button size="lg" variant="secondary" className="text-lg px-8 bg-white hover:bg-white/90 text-[#1a365d]">
                Custom Print
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10">
                Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
