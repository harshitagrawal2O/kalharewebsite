"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

export default function ProductsPage() {
  const [filter, setFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Geometric Vase",
      category: "home",
      price: 29.99,
      rating: 4.8,
      image: "🏺",
      description: "Modern geometric design vase"
    },
    {
      id: 2,
      name: "Phone Stand",
      category: "tech",
      price: 15.99,
      rating: 4.9,
      image: "📱",
      description: "Adjustable phone holder"
    },
    {
      id: 3,
      name: "Desk Organizer",
      category: "office",
      price: 24.99,
      rating: 4.7,
      image: "📎",
      description: "Multi-compartment organizer"
    },
    {
      id: 4,
      name: "Plant Pot",
      category: "home",
      price: 18.99,
      rating: 4.6,
      image: "🪴",
      description: "Self-watering plant pot"
    },
    {
      id: 5,
      name: "Cable Manager",
      category: "tech",
      price: 12.99,
      rating: 4.8,
      image: "🔌",
      description: "Keep cables organized"
    },
    {
      id: 6,
      name: "Bookend Set",
      category: "office",
      price: 34.99,
      rating: 4.9,
      image: "📚",
      description: "Elegant bookend pair"
    },
    {
      id: 7,
      name: "Wall Hook",
      category: "home",
      price: 9.99,
      rating: 4.5,
      image: "🪝",
      description: "Decorative wall hook"
    },
    {
      id: 8,
      name: "Headphone Stand",
      category: "tech",
      price: 22.99,
      rating: 4.7,
      image: "🎧",
      description: "Premium headphone holder"
    }
  ];

  const categories = [
    { name: "All", value: "all" },
    { name: "Home", value: "home" },
    { name: "Tech", value: "tech" },
    { name: "Office", value: "office" }
  ];

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Browse our collection of pre-designed 3D printed items
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <Button
              key={cat.value}
              variant={filter === cat.value ? "default" : "outline"}
              onClick={() => setFilter(cat.value)}
            >
              {cat.name}
            </Button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="text-7xl mb-4 text-center">{product.image}</div>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                    <Badge>{product.category}</Badge>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gradient">
                    ${product.price}
                  </span>
                  <Button size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Design CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl">
                Don&apos;t see what you need?
              </CardTitle>
              <CardDescription className="text-lg">
                Upload your own 3D design and get an instant quote
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg">Upload Custom Design</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
