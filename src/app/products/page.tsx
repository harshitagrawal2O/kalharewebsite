"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Star, Search, Filter, X, Grid3x3, List, ChevronDown, Heart, Eye, Upload } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedMaterial, setSelectedMaterial] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(true);

  const products = [
    {
      id: 1,
      name: "Geometric Vase",
      category: "home",
      material: "PLA",
      price: 29.99,
      rating: 4.8,
      reviews: 127,
      image: "🏺",
      description: "Modern geometric design vase perfect for any room",
      tags: ["trending", "bestseller"]
    },
    {
      id: 2,
      name: "Phone Stand",
      category: "tech",
      material: "ABS",
      price: 15.99,
      rating: 4.9,
      reviews: 203,
      image: "📱",
      description: "Adjustable phone holder with cable management",
      tags: ["bestseller"]
    },
    {
      id: 3,
      name: "Desk Organizer",
      category: "office",
      material: "PETG",
      price: 24.99,
      rating: 4.7,
      reviews: 89,
      image: "📎",
      description: "Multi-compartment organizer for your workspace",
      tags: ["trending"]
    },
    {
      id: 4,
      name: "Plant Pot",
      category: "home",
      material: "PLA",
      price: 18.99,
      rating: 4.6,
      reviews: 156,
      image: "🪴",
      description: "Self-watering plant pot with drainage system",
      tags: []
    },
    {
      id: 5,
      name: "Cable Manager",
      category: "tech",
      material: "TPU",
      price: 12.99,
      rating: 4.8,
      reviews: 234,
      image: "🔌",
      description: "Keep cables organized and tangle-free",
      tags: ["bestseller"]
    },
    {
      id: 6,
      name: "Bookend Set",
      category: "office",
      material: "Resin",
      price: 34.99,
      rating: 4.9,
      reviews: 78,
      image: "📚",
      description: "Elegant bookend pair with premium finish",
      tags: ["trending"]
    },
    {
      id: 7,
      name: "Wall Hook",
      category: "home",
      material: "Nylon",
      price: 9.99,
      rating: 4.5,
      reviews: 312,
      image: "🪝",
      description: "Decorative wall hook with strong adhesive",
      tags: []
    },
    {
      id: 8,
      name: "Headphone Stand",
      category: "tech",
      material: "ABS",
      price: 22.99,
      rating: 4.7,
      reviews: 167,
      image: "🎧",
      description: "Premium headphone holder with RGB base",
      tags: ["trending"]
    },
    {
      id: 9,
      name: "Lamp Shade",
      category: "home",
      material: "PLA",
      price: 39.99,
      rating: 4.9,
      reviews: 94,
      image: "💡",
      description: "Artistic lamp shade with unique patterns",
      tags: ["bestseller", "trending"]
    },
    {
      id: 10,
      name: "Keyboard Wrist Rest",
      category: "tech",
      material: "TPU",
      price: 19.99,
      rating: 4.8,
      reviews: 189,
      image: "⌨️",
      description: "Ergonomic wrist rest for comfortable typing",
      tags: []
    },
    {
      id: 11,
      name: "Pen Holder",
      category: "office",
      material: "PETG",
      price: 14.99,
      rating: 4.6,
      reviews: 145,
      image: "✏️",
      description: "Stylish pen holder with multiple compartments",
      tags: []
    },
    {
      id: 12,
      name: "Coaster Set",
      category: "home",
      material: "Resin",
      price: 27.99,
      rating: 4.7,
      reviews: 223,
      image: "☕",
      description: "Set of 6 decorative coasters with holder",
      tags: ["bestseller"]
    }
  ];

  const categories = [
    { name: "All Categories", value: "all", icon: "🏠" },
    { name: "Home Decor", value: "home", icon: "🏺" },
    { name: "Tech Accessories", value: "tech", icon: "📱" },
    { name: "Office Supplies", value: "office", icon: "📎" }
  ];

  const materials = [
    { name: "All Materials", value: "all" },
    { name: "PLA", value: "PLA" },
    { name: "ABS", value: "ABS" },
    { name: "PETG", value: "PETG" },
    { name: "Resin", value: "Resin" },
    { name: "Nylon", value: "Nylon" },
    { name: "TPU", value: "TPU" }
  ];

  const sortOptions = [
    { name: "Most Popular", value: "popular" },
    { name: "Price: Low to High", value: "price-asc" },
    { name: "Price: High to Low", value: "price-desc" },
    { name: "Highest Rated", value: "rating" },
    { name: "Newest", value: "newest" }
  ];

  // Filter and search logic
  let filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesMaterial = selectedMaterial === "all" || product.material === selectedMaterial;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesMaterial && matchesPrice && matchesSearch;
  });

  // Sort logic
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "popular":
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50 dark:bg-background">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-6"
        >
          <Link href="/" className="hover:text-foreground transition-colors">Main</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Catalog</span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div className="flex items-center gap-3">
            <h1 className="text-4xl md:text-5xl font-bold">Catalog</h1>
            <Badge variant="secondary" className="text-lg px-3 py-1">{filteredProducts.length}</Badge>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 border rounded-lg p-1 bg-white dark:bg-card">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded transition-all ${
                  viewMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                }`}
              >
                <Grid3x3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded transition-all ${
                  viewMode === "list" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative flex-1 sm:flex-none">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none w-full sm:w-auto bg-white dark:bg-card border rounded-lg px-4 py-2.5 pr-10 text-sm cursor-pointer hover:border-primary transition-colors"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar - Filters */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white dark:bg-card rounded-2xl p-6 space-y-6 shadow-sm sticky top-24">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-gray-50 dark:bg-secondary/50 border-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full flex items-center justify-between text-base font-semibold mb-3"
                >
                  <span>Category</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {showFilters && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="space-y-2"
                    >
                      {categories.map((cat) => (
                        <label
                          key={cat.value}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-secondary/50 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategory === cat.value}
                            onChange={() => setSelectedCategory(cat.value)}
                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary accent-primary"
                          />
                          <span className="text-sm flex-1">{cat.name}</span>
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="text-base font-semibold mb-3">Price Range</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      placeholder="$5"
                      className="w-full bg-gray-50 dark:bg-secondary/50 border-none text-sm"
                    />
                    <span className="text-muted-foreground">-</span>
                    <Input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100])}
                      placeholder="$1000"
                      className="w-full bg-gray-50 dark:bg-secondary/50 border-none text-sm"
                    />
                  </div>
                  <div className="relative pt-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 dark:bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <h3 className="text-base font-semibold mb-3 flex items-center justify-between">
                  <span>Brand</span>
                  <ChevronDown className="h-4 w-4" />
                </h3>
              </div>

              {/* Material/Color Filter */}
              <div>
                <button
                  className="w-full flex items-center justify-between text-base font-semibold mb-3"
                >
                  <span>Color</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-secondary/50 cursor-pointer transition-colors">
                    <input type="checkbox" className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary accent-primary" />
                    <span className="text-sm">All</span>
                  </label>
                  {materials.slice(1).map((mat) => (
                    <label
                      key={mat.value}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-secondary/50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedMaterial === mat.value}
                        onChange={() => setSelectedMaterial(selectedMaterial === mat.value ? "all" : mat.value)}
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary accent-primary"
                      />
                      <span className="text-sm">{mat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Only in Stock Toggle */}
              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-sm font-medium">Only in Stock</span>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4 border-t">
                <Button className="w-full" size="lg">
                  {filteredProducts.length} items
                </Button>
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedMaterial("all");
                    setPriceRange([0, 100]);
                    setSearchQuery("");
                  }}
                >
                  Clear
                </Button>
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <div className="flex-1">

            {/* Products Grid/List */}
            <AnimatePresence mode="wait">
              {filteredProducts.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16"
                >
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedMaterial("all");
                      setPriceRange([0, 100]);
                      setSearchQuery("");
                    }}
                  >
                    Clear All Filters
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key={viewMode}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                      : "space-y-4"
                  }
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {viewMode === "grid" ? (
                        <div className="group bg-white dark:bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 relative">
                          {/* Heart Icon */}
                          <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-card/80 backdrop-blur-sm hover:bg-white dark:hover:bg-card transition-colors">
                            <Heart className={`h-5 w-5 ${product.tags.includes("bestseller") ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
                          </button>

                          {/* Discount Badge */}
                          {product.tags.includes("bestseller") && (
                            <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                              -50%
                            </div>
                          )}

                          {/* Special Badge */}
                          {product.tags.includes("trending") && (
                            <div className="absolute top-4 left-4 z-10 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                              Special
                            </div>
                          )}

                          {/* Product Image */}
                          <div className="relative bg-gray-100 dark:bg-secondary/30 p-12 flex items-center justify-center aspect-square overflow-hidden">
                            <div className="text-8xl group-hover:scale-110 transition-transform duration-300">
                              {product.image}
                            </div>
                          </div>

                          {/* Product Info */}
                          <div className="p-5">
                            <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {product.material}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col">
                                <span className="text-2xl font-bold">
                                  ${product.price}
                                </span>
                                {product.tags.includes("bestseller") && (
                                  <span className="text-sm text-muted-foreground line-through">
                                    ${(product.price * 2).toFixed(2)}
                                  </span>
                                )}
                              </div>
                              <Button 
                                size="icon"
                                className="rounded-full h-11 w-11 bg-primary hover:bg-primary/90"
                              >
                                <ShoppingCart className="h-5 w-5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="group bg-white dark:bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                          <div className="flex flex-col sm:flex-row gap-6 p-6">
                            <div className="relative overflow-hidden bg-gray-100 dark:bg-secondary/30 rounded-xl p-6 w-full sm:w-32 h-32 flex-shrink-0">
                              <div className="text-6xl text-center group-hover:scale-110 transition-transform duration-300">
                                {product.image}
                              </div>
                              {product.tags.length > 0 && (
                                <div className="absolute top-2 left-2">
                                  {product.tags[0] === "bestseller" ? (
                                    <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                      -50%
                                    </div>
                                  ) : (
                                    <div className="bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                      Special
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                            <div className="flex-1 flex flex-col sm:flex-row justify-between gap-4">
                              <div className="flex-1">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                                  {product.name}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-2">{product.material}</p>
                                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                  {product.description}
                                </p>
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-medium">{product.rating}</span>
                                  </div>
                                  <span className="text-xs text-muted-foreground">({product.reviews} reviews)</span>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end gap-3 sm:min-w-[180px]">
                                <button className="p-2 rounded-full hover:bg-secondary transition-colors self-end">
                                  <Heart className={`h-5 w-5 ${product.tags.includes("bestseller") ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
                                </button>
                                <div className="flex flex-col items-end gap-2">
                                  <span className="text-3xl font-bold">
                                    ${product.price}
                                  </span>
                                  {product.tags.includes("bestseller") && (
                                    <span className="text-sm text-muted-foreground line-through">
                                      ${(product.price * 2).toFixed(2)}
                                    </span>
                                  )}
                                </div>
                                <Button className="w-full">
                                  <ShoppingCart className="h-4 w-4 mr-2" />
                                  Add to Cart
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Load More Button */}
            {filteredProducts.length > 6 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center"
              >
                <Button variant="outline" size="lg" className="px-8">
                  Show {filteredProducts.length - 6} More
                </Button>
              </motion.div>
            )}

            {/* Custom Design CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Don&apos;t see what you need?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6">
                  Upload your own 3D design and get an instant quote
                </p>
                <Link href="/custom-print">
                  <Button size="lg" className="text-lg px-8">
                    <Upload className="mr-2 h-5 w-5" />
                    Upload Custom Design
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
