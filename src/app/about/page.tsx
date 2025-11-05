"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award, Users, TrendingUp, Heart } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge 3D printing technology"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality",
      description: "Uncompromising standards in every print we deliver"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer First",
      description: "Your satisfaction drives everything we do"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Sustainability",
      description: "Eco-friendly materials and practices"
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      emoji: "👨‍💼",
      bio: "15 years in additive manufacturing"
    },
    {
      name: "Sarah Chen",
      role: "Head of Design",
      emoji: "👩‍🎨",
      bio: "Award-winning industrial designer"
    },
    {
      name: "Mike Rodriguez",
      role: "Technical Director",
      emoji: "👨‍🔧",
      bio: "Expert in 3D printing technologies"
    },
    {
      name: "Emma Williams",
      role: "Customer Success",
      emoji: "👩‍💻",
      bio: "Dedicated to client satisfaction"
    }
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
      <section className="bg-gradient-to-br from-primary/10 via-background to-purple-500/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">PrintX</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leading the revolution in 3D printing services since 2010
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
                    To democratize 3D printing technology and make it accessible to everyone.
                    We believe in empowering creators, entrepreneurs, and innovators to bring
                    their ideas to life with professional-grade 3D printing services.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-purple-500/10 to-transparent">
                <CardHeader>
                  <Target className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle className="text-3xl">Our Vision</CardTitle>
                  <CardDescription className="text-base mt-4">
                    To be the world&apos;s most trusted 3D printing service provider, known for
                    innovation, quality, and customer satisfaction. We envision a future where
                    3D printing transforms manufacturing and creative expression globally.
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
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Team Section */}
      <section className="py-20 bg-secondary/30">
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
                <CardTitle className="text-3xl">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010, PrintX started as a small workshop with a passion for
                  3D printing technology. What began as a dream to make 3D printing accessible
                  to everyone has grown into one of the leading 3D printing service providers.
                </p>
                <p>
                  Over the years, we&apos;ve served thousands of clients ranging from individual
                  creators to Fortune 500 companies. Our commitment to quality, innovation,
                  and customer satisfaction has remained unwavering.
                </p>
                <p>
                  Today, we operate state-of-the-art facilities with the latest 3D printing
                  technology, a team of expert designers and engineers, and a dedication to
                  pushing the boundaries of what&apos;s possible with additive manufacturing.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
