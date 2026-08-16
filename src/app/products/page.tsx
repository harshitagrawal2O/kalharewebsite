"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Clock, Bell, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/60 py-20">
        <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-cta/10 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <Package className="h-32 w-32 text-primary mx-auto animate-pulse" />
                <Sparkles className="h-8 w-8 text-cta absolute -top-2 -right-2 animate-bounce" />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-extrabold tracking-display mb-6"
            >
              Products <span className="text-cta">Coming Soon</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              We&apos;re working hard to bring you an amazing collection of pre-designed 3D models. 
              Stay tuned for our product launch!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/custom-print">
                <Button size="lg" variant="cta">
                  Try Custom Printing Instead
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get Notified
                  <Bell className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-extrabold tracking-display mb-4">
              What to <span className="text-cta">Expect</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Coming features in our product store
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Package className="h-12 w-12" />,
                title: "Curated Collection",
                description: "Handpicked 3D models from professional designers across various categories"
              },
              {
                icon: <Clock className="h-12 w-12" />,
                title: "Instant Download",
                description: "Purchase and download your favorite models immediately after checkout"
              },
              {
                icon: <Sparkles className="h-12 w-12" />,
                title: "Premium Quality",
                description: "Every model tested and optimized for perfect 3D printing results"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full text-center transition-all hover:shadow-brand hover:border-cta/50">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center text-primary mx-auto mb-4 transition-colors group-hover:bg-accent">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="border-t-4 border-t-cta shadow-brand">
              <CardHeader>
                <Bell className="h-12 w-12 text-cta mx-auto mb-4" />
                <CardTitle className="text-3xl mb-4">Be the First to Know</CardTitle>
                <CardDescription className="text-base">
                  Want to get notified when our product store launches? Contact us and we&apos;ll keep you updated.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/contact">
                  <Button size="lg" variant="cta">
                    Notify Me at Launch
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
