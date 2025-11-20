"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FileUpload } from "@/components/ui/file-upload";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { useCart } from "@/contexts/CartContext";
import { 
  Upload, 
  FileText, 
  Palette, 
  Layers, 
  Ruler, 
  ShoppingCart, 
  MessageCircle,
  CheckCircle,
  X,
  Info
} from "lucide-react";

export default function CustomPrint() {
  const router = useRouter();
  const { addToCart } = useCart();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFinish, setSelectedFinish] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");

  const materials = [
    { 
      id: "pla", 
      name: "PLA", 
      description: "Most popular, eco-friendly",
      price: 0.05,
      icon: "🌱"
    },
    { 
      id: "abs", 
      name: "ABS", 
      description: "Strong, heat resistant",
      price: 0.07,
      icon: "💪"
    },
    { 
      id: "petg", 
      name: "PETG", 
      description: "Durable, flexible",
      price: 0.08,
      icon: "🔧"
    },
    { 
      id: "resin", 
      name: "Resin", 
      description: "High detail, smooth finish",
      price: 0.15,
      icon: "✨"
    },
    { 
      id: "nylon", 
      name: "Nylon", 
      description: "Industrial strength",
      price: 0.12,
      icon: "⚙️"
    },
    { 
      id: "tpu", 
      name: "TPU", 
      description: "Flexible, rubber-like",
      price: 0.10,
      icon: "🔮"
    }
  ];

  const colors = [
    { id: "white", name: "White", hex: "#FFFFFF" },
    { id: "black", name: "Black", hex: "#000000" },
    { id: "red", name: "Red", hex: "#EF4444" },
    { id: "blue", name: "Blue", hex: "#3B82F6" },
    { id: "green", name: "Green", hex: "#10B981" },
    { id: "yellow", name: "Yellow", hex: "#F59E0B" },
    { id: "purple", name: "Purple", hex: "#A855F7" },
    { id: "orange", name: "Orange", hex: "#F97316" },
    { id: "pink", name: "Pink", hex: "#EC4899" },
    { id: "gray", name: "Gray", hex: "#6B7280" },
    { id: "multicolor", name: "Multicolor", hex: "linear-gradient(135deg, #EF4444 0%, #F59E0B 25%, #10B981 50%, #3B82F6 75%, #A855F7 100%)" },
    { id: "transparent", name: "Transparent", hex: "repeating-conic-gradient(#ccc 0% 25%, transparent 0% 50%)" }
  ];

  const finishes = [
    { id: "standard", name: "Standard", description: "Layer lines visible", price: 0 },
    { id: "smooth", name: "Smooth", description: "Sanded & polished", price: 15 },
    { id: "painted", name: "Painted", description: "Professional paint job", price: 30 }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['.stl', '.obj', '.3mf', '.step', '.stp'];
      const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      
      if (validTypes.includes(fileExtension)) {
        setUploadedFile(file);
      } else {
        alert('Please upload a valid 3D file (.stl, .obj, .3mf, .step, .stp)');
      }
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  const calculateEstimate = () => {
    if (!uploadedFile || !selectedMaterial) return 0;
    
    const material = materials.find(m => m.id === selectedMaterial);
    const finish = finishes.find(f => f.id === selectedFinish);
    
    // Estimate based on file size (simplified calculation)
    const fileSizeInMB = uploadedFile.size / (1024 * 1024);
    const materialCost = (material?.price || 0) * fileSizeInMB * 100;
    const finishCost = finish?.price || 0;
    
    return (materialCost + finishCost) * quantity;
  };

  const handleAddToCart = () => {
    if (!uploadedFile || !selectedMaterial || !selectedColor) {
      alert('Please complete all required fields');
      return;
    }
    
    const material = materials.find(m => m.id === selectedMaterial);
    const color = colors.find(c => c.id === selectedColor);
    const finish = finishes.find(f => f.id === selectedFinish);
    const estimate = calculateEstimate();

    addToCart({
      name: `Custom Print - ${uploadedFile.name}`,
      price: estimate,
      quantity: quantity,
      material: material?.name,
      color: color?.name,
      finish: finish?.name || 'Standard',
      notes: notes,
      fileName: uploadedFile.name
    });

    // Navigate to cart page
    router.push('/cart');
  };

  const handleWhatsAppQuote = () => {
    if (!uploadedFile || !selectedMaterial || !selectedColor) {
      alert('Please complete all required fields');
      return;
    }

    const material = materials.find(m => m.id === selectedMaterial);
    const color = colors.find(c => c.id === selectedColor);
    const finish = finishes.find(f => f.id === selectedFinish);

    const message = `*3D Printing Quote Request*

Hello! I would like to request a quote for custom 3D printing with the following specifications:

*Project Details:*
📁 *File Name:* ${uploadedFile.name}
📏 *File Size:* ${(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB

*Print Specifications:*
🔧 *Material:* ${material?.name} (${material?.description})
🎨 *Color:* ${color?.name}
✨ *Finish:* ${finish?.name || 'Standard'} ${finish?.price ? `(+₹${finish.price})` : '(Included)'}
📦 *Quantity:* ${quantity} unit${quantity > 1 ? 's' : ''}
${notes ? `
📝 *Additional Notes:*
${notes}` : ''}

*Next Steps:*
Please review my requirements and provide:
• Accurate price quotation
• Expected delivery timeline
• Any file modifications needed

Thank you!`;

    const whatsappNumber = '919129958671'; // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const estimate = calculateEstimate();

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-background to-secondary/20 relative">
      <div className="fixed inset-0 w-full h-full opacity-40 pointer-events-none">
        <BackgroundRippleEffect rows={15} cols={30} cellSize={60} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative"
        >
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
              Custom <span className="text-gradient">3D Printing</span>
            </h1>
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <SparklesCore
                particleColor="#fbbf24"
                background="transparent"
                minSize={1}
                maxSize={3}
                speed={3}
                particleDensity={60}
                className="w-full h-full"
              />
            </div>
          </div>
          <p className="text-xl text-muted-foreground">
            Upload your design and customize your print
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Configuration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* File Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload 3D File
                </CardTitle>
                <CardDescription>
                  Supported formats: STL, OBJ, 3MF, STEP, STP
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!uploadedFile ? (
                  <FileUpload onChange={(files: File[]) => {
                    if (files.length > 0) {
                      const file = files[0];
                      const validTypes = ['.stl', '.obj', '.3mf', '.step', '.stp'];
                      const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
                      
                      if (validTypes.includes(fileExtension)) {
                        setUploadedFile(file);
                      } else {
                        alert('Please upload a valid 3D file (.stl, .obj, .3mf, .step, .stp)');
                      }
                    }
                  }} />
                ) : (
                  <div className="border-2 border-dashed border-primary/50 rounded-lg p-6 bg-primary/5">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground truncate">{uploadedFile.name}</p>
                          <p className="text-sm text-muted-foreground">Size: {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                          <Badge variant="default" className="mt-2">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            File uploaded successfully
                          </Badge>
                        </div>
                      </div>
                      <Button
                        onClick={removeFile}
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10 flex-shrink-0 ml-2"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Material Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5" />
                  Select Material *
                </CardTitle>
                <CardDescription>Choose the material for your print</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {materials.map((material) => (
                    <button
                      key={material.id}
                      onClick={() => setSelectedMaterial(material.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedMaterial === material.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="text-3xl mb-2">{material.icon}</div>
                      <h3 className="font-semibold mb-1">{material.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {material.description}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        ₹{material.price}/g
                      </Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Color Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Select Color *
                </CardTitle>
                <CardDescription>Choose your preferred color</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2" style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px)' }}>
                  {colors.map((color, index) => (
                    <div
                      key={color.id}
                      className="relative group"
                      style={{
                        flexShrink: 0,
                        width: '40px',
                        height: '48px',
                      }}
                    >
                      <button
                        onClick={() => setSelectedColor(color.id)}
                        data-color={color.name}
                        className="relative w-full h-10 border-none outline-none bg-transparent cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)] hover:scale-150 hover:-translate-y-2 hover:z-[99999] [&:hover+*]:scale-[1.3] [&:hover+*]:-translate-y-1 [&:hover+*]:z-[9999] [&:hover+*+*]:scale-[1.15] [&:hover+*+*]:-translate-y-0.5 [&:hover+*+*]:z-[999] has-[+*:hover]:scale-[1.3] has-[+*:hover]:-translate-y-1 has-[+*:hover]:z-[9999] has-[+*+*:hover]:scale-[1.15] has-[+*+*:hover]:-translate-y-0.5 has-[+*+*:hover]:z-[999] active:scale-95"
                        style={{
                          ['--color-bg' as string]: color.id === 'transparent' 
                            ? `repeating-conic-gradient(#ccc 0% 25%, transparent 0% 50%) 50% / 10px 10px`
                            : color.hex
                        }}
                      >
                        <div 
                          className={`absolute inset-0 w-10 h-10 rounded-lg pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)] shadow-md ${
                            selectedColor === color.id 
                              ? 'scale-110 ring-[3px] ring-primary shadow-xl' 
                              : ''
                          } ${
                            color.id === 'multicolor' 
                              ? 'border-2 border-white dark:border-gray-800' 
                              : ''
                          }`}
                          style={{
                            background: color.id === 'transparent' 
                              ? `repeating-conic-gradient(#ccc 0% 25%, transparent 0% 50%) 50% / 10px 10px`
                              : color.id === 'multicolor'
                              ? color.hex
                              : color.hex
                          }}
                        />
                        <div 
                          className="absolute left-1/2 -translate-x-1/2 bottom-[52px] text-[10px] leading-[14px] px-2 py-1 bg-black text-white rounded-md pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)] whitespace-nowrap z-[1000]"
                        >
                          {color.name}
                        </div>
                      </button>
                      {selectedColor === color.id && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 15
                          }}
                          className="absolute -top-1 -right-1 w-[18px] h-[18px] bg-primary rounded-full flex items-center justify-center text-white text-xs z-10"
                        >
                          ✓
                        </motion.span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Finish Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ruler className="h-5 w-5" />
                  Select Finish
                </CardTitle>
                <CardDescription>Choose post-processing options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {finishes.map((finish) => (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish.id)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedFinish === finish.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <h3 className="font-semibold mb-1">{finish.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {finish.description}
                      </p>
                      <Badge variant={finish.price === 0 ? "secondary" : "default"}>
                        {finish.price === 0 ? 'Included' : `+₹${finish.price}`}
                      </Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quantity and Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    max="1000"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    placeholder="Special requirements, dimensions, etc..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="mt-1"
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">File:</span>
                    <span className="font-medium truncate ml-2 max-w-[150px]">
                      {uploadedFile ? uploadedFile.name : 'Not uploaded'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Material:</span>
                    <span className="font-medium">
                      {selectedMaterial ? materials.find(m => m.id === selectedMaterial)?.name : 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Color:</span>
                    <span className="font-medium">
                      {selectedColor ? colors.find(c => c.id === selectedColor)?.name : 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Finish:</span>
                    <span className="font-medium">
                      {selectedFinish ? finishes.find(f => f.id === selectedFinish)?.name : 'Standard'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Quantity:</span>
                    <span className="font-medium">{quantity}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-start gap-2 p-3 bg-primary/5 border border-primary/20 rounded-lg mb-4">
                    <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold text-foreground mb-1">Get Your Quote</p>
                      <p className="text-muted-foreground">
                        Send your requirements via WhatsApp and we'll provide an accurate quote with delivery timeline.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button
                      onClick={handleWhatsAppQuote}
                      className="w-full"
                      size="lg"
                      disabled={!uploadedFile || !selectedMaterial || !selectedColor}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Get Quote on WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2 text-xs text-muted-foreground">
                  <p>✓ Free file analysis & optimization</p>
                  <p>✓ Quality guarantee on all prints</p>
                  <p>✓ Fast turnaround time</p>
                  <p>✓ Direct communication via WhatsApp</p>
                  <p>✓ Expert consultation available</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
