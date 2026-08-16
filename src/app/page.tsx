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

const videos = ["/videos/printing.mp4", "/videos/printing2.mp4"];

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

    video.addEventListener("ended", handleVideoEnd);
    return () => video.removeEventListener("ended", handleVideoEnd);
  }, [currentVideo]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const features = [
    {
      icon: "/icons/technology.gif",
      title: "Advanced Technology",
      description:
        "State-of-the-art 3D printers delivering precision and quality",
    },
    {
      icon: "/icons/fast.gif",
      title: "Fast Turnaround",
      description: "Quick production times without compromising on quality",
    },
    {
      icon: "/icons/high-quality.gif",
      title: "Quality Assured",
      description: "Every print meets our rigorous quality standards",
    },
    {
      icon: "/icons/helpdesk.gif",
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your printing needs",
    },
  ];

  const services = [
    {
      title: "Custom 3D Printing",
      description: "Upload your design and get instant quotes",
      image: "/images/custom.png",
      link: "/services#custom",
    },
    {
      title: "Prototyping",
      description: "Rapid prototyping for product development",
      image: "/images/prototype.png",
      link: "/services#prototyping",
    },
  ];

  const testimonials = [
    {
      quote:
        "LayerForge transformed my designs into reality. The quality is outstanding! Their attention to detail and commitment to excellence is unmatched in the industry.",
      name: "Anurag Singh",
      designation: "Product Designer",
      // Was a hotlinked LinkedIn CDN URL whose signature expired (403).
      // Empty src renders the initials monogram with no network request.
      // Drop a real headshot in /public/images/testimonials/ to restore a photo.
      src: "",
    },
    {
      quote:
        "Fast turnaround and excellent customer service. Highly recommended! They helped bring my product vision to life with incredible precision and professionalism.",
      name: "Harshit Agrawal",
      designation: "Entrepreneur",
      // Expired LinkedIn CDN signature — see note above.
      src: "",
    },
    {
      quote:
        "LayerForge delivered exceptional results — fast, reliable, and the surface finish was flawless. I will be using them for all future prototypes and highly recommend their services.",
      name: "Sanya Sharma",
      designation: "Entrepreneur",
      src: "https://th.bing.com/th/id/OIP.n2KTVjAP5M8JEq6iEiNgKwHaHa?w=171&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3",
    },
    {
      quote:
        "Perfect for architectural models. The precision is incredible. LayerForge has become an essential partner in our design process, delivering consistent quality every time.",
      name: "Rahul Verma",
      designation: "Architect",
      src: "https://th.bing.com/th/id/OIP.ui7WXb215uL4YUjd48qGKwAAAA?w=179&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-background pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-background z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 relative z-20 w-full"
        >
          <div className="text-center space-y-6 sm:space-y-8">
            <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-5">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="eyebrow"
              >
                Additive Manufacturing
              </motion.span>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-display justify-center font-heading text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Professional Additive Manufacturing &{" "}
                <span className="text-cta block w-full sm:inline-block sm:w-auto mt-2 sm:mt-0">
                  Rapid Prototyping
                </span>
              </motion.h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                From digital concepts to functional prototypes, built with
                precision.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
            >
              <Link href="/custom-print" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="cta"
                  className="w-full sm:w-auto"
                >
                  Get a Quote
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
              <PointerHighlight
                rectangleClassName="border-cta"
                pointerClassName="text-cta"
              >
                <Link href="/services" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="relative z-10 w-full sm:w-auto"
                  >
                    Our Services
                  </Button>
                </Link>
              </PointerHighlight>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="pt-8 sm:pt-12 flex justify-center items-stretch gap-6 sm:gap-8 md:gap-12 text-center flex-wrap px-4"
            >
              {[
                { value: "Precisely", label: "Accurate" },
                { value: "Happy", label: "Clients" },
                { value: "99%", label: "Satisfaction" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={cn(
                    "min-w-[100px] px-4 sm:px-6",
                    // Slate hairlines between stats — the colour's stated role.
                    i > 0 && "border-l border-border",
                  )}
                >
                  <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-display text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm md:text-base font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
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
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-display mb-4">
              Why Choose <span className="text-cta">LayerForge</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
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
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-display mb-4">
              Our <span className="text-cta">Services</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
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
              items={services.map((service) => ({
                title: service.title,
                description: service.description,
                link: service.link,
                image: service.image,
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
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-display mb-4">
              How It <span className="text-cta">Works</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
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
                description:
                  "Select from our designs or upload your own 3D model",
              },
              {
                step: "02",
                title: "Customize & Quote",
                description:
                  "Select materials, colors, and get instant pricing",
              },
              {
                step: "03",
                title: "We Print & Ship",
                description: "We print your model and deliver it to your door",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative flex items-center gap-4"
              >
                <CardSpotlight
                  className="h-full text-center p-8 bg-card border-border rounded-lg flex-1"
                  radius={400}
                  color="rgba(248, 100, 0, 0.18)"
                >
                  <div className="font-heading text-6xl font-extrabold tracking-display text-cta/30 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {item.description}
                  </p>
                  <CheckCircle2 className="h-12 w-12 text-cta mx-auto mt-6" />
                </CardSpotlight>
                {index < 2 && (
                  <div className="hidden md:block flex-shrink-0">
                    <ArrowRight className="h-8 w-8 text-brand-slate" />
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
          <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] bg-brand-teal">
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
                scale: isTransitioning ? 1.1 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <source src={videos[currentVideo]} type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>

            {/* Teal Blue scrim rather than neutral black, so the video sits
                inside the palette instead of beside it. */}
            <div className="absolute inset-0 bg-brand-teal/55" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center px-4 z-10"
              >
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-display text-brand-offwhite mb-4 drop-shadow-lg">
                  Precision <span className="text-cta">in Motion</span>
                </h2>
                <p className="text-xl md:text-2xl text-brand-offwhite/90 drop-shadow-md">
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
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-display mb-4">
              What Our <span className="text-cta">Clients Say</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Trusted by many customers
            </p>
          </motion.div>

          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 bg-brand-gradient">
        {/* A single Blaze Orange bloom — energy against the Teal ground. */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cta/20 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-display text-brand-offwhite mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-brand-offwhite/80 mb-8">
            Join thousands of satisfied customers and bring your ideas to life
            today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/custom-print">
              <Button size="lg" variant="cta" className="w-full sm:w-auto">
                Get a quote
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-brand-offwhite/30 bg-transparent text-brand-offwhite hover:border-cta hover:bg-brand-offwhite/10 hover:text-brand-offwhite"
              >
                Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
