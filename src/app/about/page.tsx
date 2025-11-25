"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award, Users, TrendingUp, Heart, Lightbulb, Palette, Building, Megaphone, Cpu, GraduationCap } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Human Creativity Meets Industrial Precision",
      description: "Combining artistic vision with cutting-edge manufacturing technology"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Design Assistance",
      description: "From concept to print, our team guides you every step of the way"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Wide Material & Finish Options",
      description: "Extensive selection to match your specific project needs"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Scalable Production",
      description: "Solutions for individuals and enterprises alike"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Fast Turnaround",
      description: "Quick delivery with guaranteed quality standards"
    }
  ];

  const clients = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Product Designers & Innovators",
      description: "Bringing innovative product concepts to life"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Artists, Sculptors & Makers",
      description: "Creating artistic and sculptural masterpieces"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Architects & Interior Designers",
      description: "Building detailed architectural models and prototypes"
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Advertising & Creative Agencies",
      description: "Producing eye-catching promotional materials"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Hardware Startups & Prototypers",
      description: "Rapid prototyping for product development"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Educational & Research Institutions",
      description: "Supporting academic and research projects"
    }
  ];

  const team = [
    {
      name: "Ankit Sharma",
      role: "Founder & CEO",
      emoji: "👨‍💼",
      bio: ""
    }
    // {
    //   name: "Sarah Chen",
    //   role: "Head of Design",
    //   emoji: "👩‍🎨",
    //   bio: "Award-winning industrial designer"
    // },
    // {
    //   name: "Mike Rodriguez",
    //   role: "Technical Director",
    //   emoji: "👨‍🔧",
    //   bio: "Expert in 3D printing technologies"
    // },
    // {
    //   name: "Emma Williams",
    //   role: "Customer Success",
    //   emoji: "👩‍💻",
    //   bio: "Dedicated to client satisfaction"
    // }
  ];

  const stats = [
    { number: "10,000+", label: "Projects Completed" },
    { number: "5,000+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Years Experience" }
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
              About <span className="text-gradient">LayerForge</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A creative tech studio built for innovators, designers, and dreamers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-primary/10 to-transparent">
                <CardHeader>
                  <Eye className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-3xl">Our Mission</CardTitle>
                  <CardDescription className="text-base mt-4">
                    We believe that the future of creation lies at the intersection of art, engineering, and digital fabrication. 
                    Our mission is to make that future accessible — by offering professional 3D printing, design, and prototyping 
                    services that empower creators to turn vision into reality.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-[#094ba0]/10 to-transparent">
                <CardHeader>
                  <Target className="h-12 w-12 text-[#094ba0] mb-4" />
                  <CardTitle className="text-3xl">Our Philosophy</CardTitle>
                  <CardDescription className="text-base mt-4">
                    Design boldly. Build intelligently. Create beautifully.
                    <br /><br />
                    Whether you&apos;re designing a new product, building an architectural model, or fabricating an artistic installation, 
                    we provide the tools, expertise, and craftsmanship to make it happen.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">LayerForge</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The advantages that set us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                      {value.icon}
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Who We <span className="text-gradient">Work With</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Serving diverse industries and creative professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/10 to-[#094ba0]/10 flex items-center justify-center text-primary mx-auto mb-4">
                      {client.icon}
                    </div>
                    <CardTitle className="text-lg">{client.title}</CardTitle>
                    <CardDescription>{client.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The experts behind your 3D printing success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-xl transition-all hover:-translate-y-2">
                  <CardHeader>
                    <div className="text-7xl mb-4">{member.emoji}</div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="font-semibold text-primary">
                      {member.role}
                    </CardDescription>
                    <CardDescription className="mt-2">
                      {member.bio}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-3xl">About Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  LayerForge is a creative tech studio built for innovators, designers, and dreamers. 
                  We believe that the future of creation lies at the intersection of art, engineering, and digital fabrication.
                </p>
                <p>
                  Our mission is to make that future accessible — by offering professional 3D printing, design, and prototyping 
                  services that empower creators to turn vision into reality.
                </p>
                <p>
                  Whether you&apos;re designing a new product, building an architectural model, or fabricating an artistic installation, 
                  we provide the tools, expertise, and craftsmanship to make it happen.
                </p>
                <div className="pt-4">
                  <h4 className="font-semibold text-foreground text-lg mb-2">Our Philosophy:</h4>
                  <p className="text-lg italic">Design boldly. Build intelligently. Create beautifully.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
