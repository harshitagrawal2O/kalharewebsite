"use client";

import { useState, useRef, useId, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { useCart } from "@/contexts/CartContext";
import { useOutsideClick } from "@/hooks/use-outside-click";
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
  Info,
  Download,
  Sparkles
} from "lucide-react";
import Image from "next/image";

export default function CustomPrint() {
  const router = useRouter();
  const { addToCart } = useCart();
  const { data: session } = useSession();
  
  // Tab state
  const [activeTab, setActiveTab] = useState<"3d-print" | "lithophane">("3d-print");
  
  // 3D Print states
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<Array<{ name: string; size: number; url: string }>>([]);
  const [uploading, setUploading] = useState(false);
  const [permissionChecked, setPermissionChecked] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFinish, setSelectedFinish] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState("");
  const [expandedMaterial, setExpandedMaterial] = useState<string | null>(null);
  const materialCardRef = useRef<HTMLDivElement>(null);
  
  // Lithophane states
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [uploadedImages, setUploadedImages] = useState<Array<{ name: string; size: number; url: string }>>([]);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imageUploadProgress, setImageUploadProgress] = useState(0);
  const [lithoFrame, setLithoFrame] = useState<"with-frame" | "without-frame">("with-frame");
  const [lithoColor, setLithoColor] = useState<"multicolor" | "white">("white");
  const [lithoQuantity, setLithoQuantity] = useState(1);
  const [lithoCustomMessage, setLithoCustomMessage] = useState("");
  
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setExpandedMaterial(null);
      }
    }

    if (expandedMaterial) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [expandedMaterial]);

  useOutsideClick(materialCardRef, () => setExpandedMaterial(null));

  const materials = [
    { 
      id: "pla", 
      name: "PLA", 
      description: "Most popular, eco-friendly",
      icon: "🌱",
      image: "/images/pla.png",
      detailedContent: "PLA (Polylactic Acid) is a biodegradable thermoplastic derived from renewable resources like corn starch or sugarcane. It's the most popular 3D printing material due to its ease of use, low warping, and environmental friendliness. PLA produces minimal odor during printing and offers excellent detail resolution. Ideal for prototypes, decorative items, and general-purpose prints. However, it has lower heat resistance (starts softening around 60°C) and is more brittle compared to other materials.",
      price: 10
    },
    { 
      id: "abs", 
      name: "ABS", 
      description: "Strong, heat resistant",
      icon: "💪",
      image: "/images/abs.png",
      detailedContent: "ABS (Acrylonitrile Butadiene Styrene) is a petroleum-based thermoplastic known for its strength, durability, and heat resistance. It can withstand temperatures up to 100°C, making it suitable for functional parts and mechanical components. ABS is impact-resistant and can be smoothed with acetone vapor for a glossy finish. However, it requires a heated bed for printing and produces stronger fumes. Commonly used in automotive parts, toys (like LEGO bricks), and enclosures.",
      price: 12
    },
    { 
      id: "petg", 
      name: "PETG", 
      description: "Durable, flexible",
      icon: "🔧",
      image: "/images/petg.png",
      detailedContent: "PETG (Polyethylene Terephthalate Glycol) combines the best properties of PLA and ABS. It offers excellent layer adhesion, durability, and chemical resistance while being easier to print than ABS. PETG is food-safe (when properly printed), weather-resistant, and has good flexibility. It's transparent in its natural form and can be colored easily. Perfect for mechanical parts, outdoor applications, protective cases, and functional prototypes that need to withstand stress.",
      price: 15
    },
    { 
      id: "resin", 
      name: "Resin", 
      description: "High detail, smooth finish",
      icon: "✨",
      image: "/images/resin.png",
      detailedContent: "Resin (Photopolymer) is used in SLA/DLP 3D printing, cured by UV light. It produces incredibly smooth surfaces with fine details down to 25 microns layer height. Ideal for miniatures, jewelry, dental models, and highly detailed prototypes. Resin prints require post-processing (washing and curing) and are generally more brittle than FDM materials. Various types include standard, tough, flexible, castable, and dental resins. Note: Uncured resin is toxic and requires careful handling.",
      price: 20
    },
    // { 
    //   id: "nylon", 
    //   name: "Nylon", 
    //   description: "Industrial strength",
    //   icon: "⚙️",
    //   image: "/images/nylon.png",
    //   detailedContent: "Nylon (Polyamide) is an engineering-grade material offering exceptional strength, flexibility, and wear resistance. It has excellent layer adhesion and can withstand repeated stress and friction. Nylon is hygroscopic (absorbs moisture from air), which can affect print quality if not stored properly. It requires high printing temperatures (240-260°C) and works best with an enclosed printer. Perfect for gears, hinges, functional parts, tools, and applications requiring durability and toughness.",
    //   price: 25
    // },
    { 
      id: "tpu", 
      name: "TPU", 
      description: "Flexible, rubber-like",
      icon: "🔮",
      image: "/images/tpu.png",
      detailedContent: "TPU (Thermoplastic Polyurethane) is a flexible, rubber-like material that can bend and compress without breaking. It offers excellent elasticity, abrasion resistance, and impact absorption. TPU can stretch up to 3 times its original length and bounce back to shape. It's resistant to oil, grease, and abrasion. Ideal for phone cases, wearables, seals, gaskets, and any application requiring flexibility. Printing TPU requires slower speeds and careful calibration due to its flexible nature.",
      price: 18
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
    { id: "multicolor", name: "Multicolor", hex: "linear-gradient(135deg, #EF4444 0%, #F59E0B 25%, #10B981 50%, #3B82F6 75%, #A855F7 100%)" }
    // { id: "transparent", name: "Transparent", hex: "repeating-conic-gradient(#ccc 0% 25%, transparent 0% 50%)" }
  ];

  const finishes = [
    { id: "standard", name: "Standard", description: "Layer lines visible", price: 0 },
    { id: "smooth", name: "Smooth", description: "Sanded & polished", price: 50 },
    { id: "painted", name: "Painted", description: "Professional paint job", price: 100 }
  ];

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Require explicit permission checkbox before uploading
    if (!permissionChecked) {
      alert('Please allow read/write permission for uploaded files by checking the box below.');
      return;
    }

    // Check if user is signed in
    if (!session || !session.accessToken) {
      alert('Please sign in with Google to upload files');
      signIn('google');
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      const file = files[0];
      
      // 1. Initiate Resumable Upload
      const initResponse = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: file.name,
          mimeType: file.type,
          parents: ["root"],
        }),
      });

      if (!initResponse.ok) {
        if (initResponse.status === 401) {
           throw new Error("Session expired. Please sign in again.");
        }
        const errorText = await initResponse.text();
        throw new Error(`Failed to initiate upload: ${errorText}`);
      }

      const uploadUrl = initResponse.headers.get('Location');
      if (!uploadUrl) throw new Error('No upload URL received from Google Drive');

      // 2. Upload File Content using XMLHttpRequest for progress tracking
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', uploadUrl);
      
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          setUploadProgress(Math.round(percentComplete));
        }
      };

      const uploadPromise = new Promise<any>((resolve, reject) => {
        xhr.onload = () => {
          if (xhr.status === 200 || xhr.status === 201) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(new Error('Upload failed'));
          }
        };
        xhr.onerror = () => reject(new Error('Network error during upload'));
      });

      xhr.send(file);
      const fileData = await uploadPromise;
      const fileId = fileData.id;

      // 3. Make File Publicly Accessible
      await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: 'reader',
          type: 'anyone',
        }),
      });

      // 4. Get File Details (webContentLink)
      const fileDetailsResponse = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?fields=id,name,mimeType,size,webViewLink,webContentLink`, {
        headers: {
          'Authorization': `Bearer ${session.accessToken}`,
        },
      });
      
      const finalFileData = await fileDetailsResponse.json();

      const uploadedFile = {
        name: finalFileData.name,
        size: parseInt(finalFileData.size || "0"),
        url: finalFileData.webContentLink || finalFileData.webViewLink
      };
      
      setUploadedFiles([...uploadedFiles, uploadedFile]);
      
      setTimeout(() => {
        setUploading(false);
        setUploadProgress(0);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }, 500);
      
    } catch (error: any) {
      console.error('Upload error:', error);
      alert('Upload failed: ' + error.message);
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  // Image upload handler for Lithophane
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Require explicit permission checkbox before uploading
    if (!permissionChecked) {
      alert('Please allow read/write permission for uploaded files by checking the box below.');
      return;
    }

    // Check if user is signed in
    if (!session || !session.accessToken) {
      alert('Please sign in with Google to upload files');
      signIn('google');
      return;
    }

    setUploadingImage(true);
    setImageUploadProgress(0);

    try {
      const file = files[0];
      
      // Validate image file
      if (!file.type.startsWith('image/')) {
        throw new Error('Please upload a valid image file');
      }
      
      // 1. Initiate Resumable Upload
      const initResponse = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=resumable', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: file.name,
          mimeType: file.type,
          parents: ["root"],
        }),
      });

      if (!initResponse.ok) {
        if (initResponse.status === 401) {
           throw new Error("Session expired. Please sign in again.");
        }
        const errorText = await initResponse.text();
        throw new Error(`Failed to initiate upload: ${errorText}`);
      }

      const uploadUrl = initResponse.headers.get('Location');
      if (!uploadUrl) throw new Error('No upload URL received from Google Drive');

      // 2. Upload File Content using XMLHttpRequest for progress tracking
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', uploadUrl);
      
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          setImageUploadProgress(Math.round(percentComplete));
        }
      };

      const uploadPromise = new Promise<any>((resolve, reject) => {
        xhr.onload = () => {
          if (xhr.status === 200 || xhr.status === 201) {
            resolve(JSON.parse(xhr.responseText));
          } else {
            reject(new Error('Upload failed'));
          }
        };
        xhr.onerror = () => reject(new Error('Network error during upload'));
      });

      xhr.send(file);
      const fileData = await uploadPromise;
      const fileId = fileData.id;

      // 3. Make File Publicly Accessible
      await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/permissions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: 'reader',
          type: 'anyone',
        }),
      });

      // 4. Get File Details (webContentLink)
      const fileDetailsResponse = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?fields=id,name,mimeType,size,webViewLink,webContentLink`, {
        headers: {
          'Authorization': `Bearer ${session.accessToken}`,
        },
      });
      
      const finalFileData = await fileDetailsResponse.json();

      const uploadedImage = {
        name: finalFileData.name,
        size: parseInt(finalFileData.size || "0"),
        url: finalFileData.webContentLink || finalFileData.webViewLink
      };
      
      setUploadedImages([...uploadedImages, uploadedImage]);
      
      setTimeout(() => {
        setUploadingImage(false);
        setImageUploadProgress(0);
        if (imageInputRef.current) {
          imageInputRef.current.value = '';
        }
      }, 500);
      
    } catch (error: any) {
      console.error('Upload error:', error);
      alert('Upload failed: ' + error.message);
      setUploadingImage(false);
      setImageUploadProgress(0);
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index));
  };

  const calculateEstimate = () => {
    if (activeTab === "3d-print") {
      if (uploadedFiles.length === 0 || !selectedMaterial) return 0;
      
      const material = materials.find(m => m.id === selectedMaterial);
      const finish = finishes.find(f => f.id === selectedFinish);
      
      // Estimate based on file size (simplified calculation)
      const totalFileSizeInMB = uploadedFiles.reduce((sum, file) => sum + file.size / (1024 * 1024), 0);
      const materialCost = (material?.price || 0) * totalFileSizeInMB * 100;
      const finishCost = finish?.price || 0;
      
      return (materialCost + finishCost) * quantity;
    } else {
      // Lithophane estimation
      if (uploadedImages.length === 0) return 0;
      
      const basePrice = 500; // Base price per lithophane
      const frameCost = lithoFrame === "with-frame" ? 300 : 0;
      const colorCost = lithoColor === "multicolor" ? 200 : 0;
      
      return (basePrice + frameCost + colorCost) * lithoQuantity;
    }
  };

  const handleAddToCart = () => {
    if (uploadedFiles.length === 0 || !selectedMaterial || !selectedColor) {
      alert('Please complete all required fields');
      return;
    }
    
    const material = materials.find(m => m.id === selectedMaterial);
    const color = colors.find(c => c.id === selectedColor);
    const finish = finishes.find(f => f.id === selectedFinish);
    const estimate = calculateEstimate();

    addToCart({
      name: `Custom Print - ${uploadedFiles.map(f => f.name).join(', ')}`,
      price: estimate,
      quantity: quantity,
      material: material?.name,
      color: color?.name,
      finish: finish?.name || 'Standard',
      notes: notes,
      fileName: uploadedFiles.map(f => f.name).join(', ')
    });

    // Navigate to cart page
    router.push('/cart');
  };

  const handleWhatsAppQuote = () => {
    if (activeTab === "3d-print") {
      if (uploadedFiles.length === 0 || !selectedMaterial || !selectedColor) {
        alert('Please complete all required fields');
        return;
      }

      const material = materials.find(m => m.id === selectedMaterial);
      const color = colors.find(c => c.id === selectedColor);
      const finish = finishes.find(f => f.id === selectedFinish);

      // Create file list with download URLs
      const fileList = uploadedFiles.map((file, index) => 
        `📁 *File ${index + 1}:* ${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)\n🔗 Download: ${file.url}`
      ).join('\n\n');

      const message = `*3D Printing Quote Request*

Hello! I would like to request a quote for custom 3D printing with the following specifications:

*Project Details:*
${fileList}

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

      const whatsappNumber = '919129958671';
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      // Lithophane quote
      if (uploadedImages.length === 0) {
        alert('Please upload at least one image');
        return;
      }

      const imageList = uploadedImages.map((img, index) => 
        `🖼️ *Image ${index + 1}:* ${img.name} (${(img.size / (1024 * 1024)).toFixed(2)} MB)\n🔗 Download: ${img.url}`
      ).join('\n\n');

      const message = `*Lithophane Print Quote Request*

Hello! I would like to request a quote for custom lithophane printing with the following specifications:

*Project Details:*
${imageList}

*Lithophane Specifications:*
🖼️ *Frame:* ${lithoFrame === "with-frame" ? "With Frame" : "Without Frame"}
🎨 *Color:* ${lithoColor === "multicolor" ? "Multicolor" : "White"}
📦 *Quantity:* ${lithoQuantity} unit${lithoQuantity > 1 ? 's' : ''}
${lithoCustomMessage ? `
💬 *Custom Message:*
${lithoCustomMessage}` : ''}

*Next Steps:*
Please review my requirements and provide:
• Accurate price quotation
• Expected delivery timeline
• Preview of the lithophane design

Thank you!`;

      const whatsappNumber = '919129958671';
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
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

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12 px-4"
        >
          <div className="relative flex items-center bg-white dark:bg-slate-950 rounded-full p-1 sm:p-1.5 border border-slate-200 dark:border-slate-800 shadow-sm w-full max-w-md sm:max-w-lg">
            {/* Sliding Background */}
            <motion.div
              className="absolute top-1 bottom-1 sm:top-1.5 sm:bottom-1.5 rounded-full bg-[#094ba0] shadow-md"
              initial={false}
              animate={{
                left: activeTab === "3d-print" ? "0.25rem" : "50%",
                right: activeTab === "3d-print" ? "50%" : "0.25rem",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
            />
            
            <button
              onClick={() => setActiveTab("3d-print")}
              className={`relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 flex-1 ${
                activeTab === "3d-print" ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>3D Print</span>
            </button>
            
            <button
              onClick={() => setActiveTab("lithophane")}
              className={`relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 flex-1 ${
                activeTab === "lithophane" ? "text-white" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Lithophane</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 3D Print Service */}
          {activeTab === "3d-print" && (
          <>
          {/* Left Column - Configuration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
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
                {!session ? (
                  <div className="border-2 border-dashed border-primary/50 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold text-foreground mb-2">
                      Sign in to upload files
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Connect with Google Drive to upload your 3D files
                    </p>
                    <Button
                      onClick={() => signIn('google')}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Sign in with Google
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">Signed in as {session.user?.email}</span>
                      </div>
                      <Button
                        onClick={() => signOut()}
                        variant="ghost"
                        size="sm"
                      >
                        Sign out
                      </Button>
                    </div>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".stl,.obj,.3mf,.step,.stp"
                      onChange={handleFileUpload}
                      disabled={uploading}
                      className="hidden"
                    />
                    
                    <div 
                      onClick={() => {
                        if (uploading) return;
                        if (!permissionChecked) {
                          alert('Please allow read/write permission for uploaded files by checking the box below.');
                          return;
                        }
                        fileInputRef.current?.click();
                      }}
                      className={`border-2 border-dashed border-primary/50 rounded-lg p-8 text-center hover:border-primary hover:bg-primary/5 transition-all ${uploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-lg font-semibold text-foreground mb-2">
                        {uploading ? 'Uploading...' : 'Click to upload 3D files'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Supports: STL, OBJ, 3MF, STEP, STP (No size restrictions)
                      </p>
                    </div>

                    {uploading && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Uploading...</span>
                          <span className="font-semibold text-primary">{uploadProgress}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-primary h-full transition-all duration-300 ease-out"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Permission checkbox required for Drive read/write */}
                    <div className="mt-4 flex items-start gap-2">
                      <input
                        id="drive-permission"
                        type="checkbox"
                        checked={permissionChecked}
                        onChange={(e) => setPermissionChecked(e.target.checked)}
                        className="mt-1 h-4 w-4"
                      />
                      <label htmlFor="drive-permission" className="text-sm text-muted-foreground">
                        I give permission to read and write files on my Google Drive for uploading and sharing this file.
                      </label>
                    </div>
                  </>
                )}

                {uploadedFiles.length > 0 && (
                  <div className="space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="border-2 border-primary/50 rounded-lg p-4 bg-primary/5">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3 flex-1">
                            <FileText className="h-6 w-6 text-primary flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-foreground truncate">{file.name}</p>
                              <p className="text-sm text-muted-foreground">
                                Size: {(file.size / (1024 * 1024)).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => window.open(file.url, '_blank')}
                              variant="outline"
                              size="sm"
                              className="flex-shrink-0"
                              title="View/Download file"
                            >
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button
                              onClick={() => removeFile(index)}
                              variant="ghost"
                              size="sm"
                              className="text-destructive hover:text-destructive hover:bg-destructive/10 flex-shrink-0"
                              title="Remove file"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
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
                <AnimatePresence>
                  {expandedMaterial && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/50 h-full w-full z-50"
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {expandedMaterial && materials.find(m => m.id === expandedMaterial) && (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                      <motion.button
                        key={`button-${expandedMaterial}-${id}`}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.05 } }}
                        className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-[110]"
                        onClick={() => setExpandedMaterial(null)}
                      >
                        <X className="h-4 w-4 text-black" />
                      </motion.button>
                      <motion.div
                        layoutId={`card-${expandedMaterial}-${id}`}
                        ref={materialCardRef}
                        className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl"
                      >
                        <div className="relative w-full h-48 overflow-hidden bg-muted">
                          <Image
                            src={materials.find(m => m.id === expandedMaterial)?.image || ""}
                            alt={materials.find(m => m.id === expandedMaterial)?.name || ""}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <motion.h3
                                layoutId={`title-${expandedMaterial}-${id}`}
                                className="text-2xl font-bold text-neutral-700 dark:text-neutral-200"
                              >
                                {materials.find(m => m.id === expandedMaterial)?.name}
                              </motion.h3>
                              <motion.p
                                layoutId={`description-${expandedMaterial}-${id}`}
                                className="text-neutral-600 dark:text-neutral-400"
                              >
                                {materials.find(m => m.id === expandedMaterial)?.description}
                              </motion.p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="hidden lg:flex"
                              onClick={() => setExpandedMaterial(null)}
                            >
                              <X className="h-5 w-5" />
                            </Button>
                          </div>
                          <div className="pt-4 relative">
                            <motion.div
                              layout
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="text-neutral-600 text-sm md:text-base max-h-[400px] pb-6 overflow-auto dark:text-neutral-400 [scrollbar-width:thin]"
                            >
                              <h4 className="font-semibold mb-3 flex items-center gap-2 text-primary">
                                <Info className="h-5 w-5" />
                                Material Details
                              </h4>
                              <p className="leading-relaxed">
                                {materials.find(m => m.id === expandedMaterial)?.detailedContent}
                              </p>
                            </motion.div>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button
                              onClick={() => {
                                setSelectedMaterial(expandedMaterial);
                                setExpandedMaterial(null);
                              }}
                              className="flex-1"
                            >
                              Select This Material
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => setExpandedMaterial(null)}
                            >
                              Close
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr">
                  {materials.map((material) => (
                    <motion.div
                      key={material.id}
                      layoutId={`card-${material.id}-${id}`}
                      className="relative h-full"
                    >
                      {material.id === 'pla' && (
                        <div className="absolute top-0 left-0 z-10 overflow-hidden w-20 h-20 pointer-events-none">
                          <div className="absolute top-3 -left-7 w-28 h-7 bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 transform -rotate-45 shadow-lg flex items-center justify-center">
                            <span className="text-white text-[11px] font-bold tracking-widest uppercase drop-shadow-sm">
                              Popular
                            </span>
                          </div>
                        </div>
                      )}
                      <button
                        onClick={() => setSelectedMaterial(material.id)}
                        className={`w-full h-full flex flex-col rounded-xl border text-left transition-all duration-300 overflow-hidden group ${
                          selectedMaterial === material.id
                            ? 'border-primary shadow-lg shadow-primary/20 bg-primary/5'
                            : 'border-border/50 hover:border-primary/50 hover:shadow-md bg-card'
                        }`}
                      >
                        <div className="relative w-full h-28 overflow-hidden bg-muted/50">
                          <Image
                            src={material.image}
                            alt={material.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-3 flex flex-col flex-1 w-full">
                          <motion.h3
                            layoutId={`title-${material.id}-${id}`}
                            className="font-semibold mb-1 text-sm"
                          >
                            {material.name}
                          </motion.h3>
                          <motion.p
                            layoutId={`description-${material.id}-${id}`}
                            className="text-xs text-muted-foreground mb-3"
                          >
                            {material.description}
                          </motion.p>
                          <div className="w-full flex justify-end mt-auto">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-primary hover:text-primary hover:bg-primary/10 h-5 px-1.5 text-[10px] gap-0.5"
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedMaterial(material.id);
                              }}
                            >
                              Know More
                              <svg 
                                className="w-3 h-3" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                />
                              </svg>
                            </Button>
                          </div>
                        </div>
                      </button>
                    </motion.div>
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
                      <p className="text-xs text-muted-foreground">
                        {finish.description}
                      </p>
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
          </>
          )}

          {/* Lithophane Service */}
          {activeTab === "lithophane" && (
          <>
          {/* Left Column - Configuration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Image Upload */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Image for Lithophane
                </CardTitle>
                <CardDescription>
                  Upload high-quality images (JPEG, PNG, etc.)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!session ? (
                  <div className="border-2 border-dashed border-primary/50 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold text-foreground mb-2">
                      Sign in to upload images
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Connect with Google Drive to upload your images
                    </p>
                    <Button
                      onClick={() => signIn('google')}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Sign in with Google
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">Signed in as {session.user?.email}</span>
                      </div>
                      <Button
                        onClick={() => signOut()}
                        variant="ghost"
                        size="sm"
                      >
                        Sign out
                      </Button>
                    </div>

                    <input
                      ref={imageInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploadingImage}
                      className="hidden"
                    />
                    
                    <div 
                      onClick={() => {
                        if (uploadingImage) return;
                        if (!permissionChecked) {
                          alert('Please allow read/write permission for uploaded files by checking the box below.');
                          return;
                        }
                        imageInputRef.current?.click();
                      }}
                      className={`border-2 border-dashed border-primary/50 rounded-lg p-8 text-center hover:border-primary hover:bg-primary/5 transition-all ${uploadingImage ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-lg font-semibold text-foreground mb-2">
                        {uploadingImage ? 'Uploading...' : 'Click to upload images'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Supports: JPG, PNG, GIF and other image formats
                      </p>
                    </div>

                    {uploadingImage && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Uploading...</span>
                          <span className="font-semibold text-primary">{imageUploadProgress}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                          <div 
                            className="bg-primary h-full transition-all duration-300 ease-out"
                            style={{ width: `${imageUploadProgress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Permission checkbox */}
                    <div className="mt-4 flex items-start gap-2">
                      <input
                        id="drive-permission-litho"
                        type="checkbox"
                        checked={permissionChecked}
                        onChange={(e) => setPermissionChecked(e.target.checked)}
                        className="mt-1 h-4 w-4"
                      />
                      <label htmlFor="drive-permission-litho" className="text-sm text-muted-foreground">
                        I give permission to read and write files on my Google Drive for uploading and sharing this image.
                      </label>
                    </div>
                  </>
                )}

                {uploadedImages.length > 0 && (
                  <div className="space-y-2">
                    {uploadedImages.map((file, index) => (
                      <div key={index} className="border-2 border-primary/50 rounded-lg p-4 bg-primary/5">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3 flex-1">
                            <FileText className="h-6 w-6 text-primary flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-foreground truncate">{file.name}</p>
                              <p className="text-sm text-muted-foreground">
                                Size: {(file.size / (1024 * 1024)).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeImage(index)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Frame Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Frame Option</CardTitle>
                <CardDescription>Choose if you want a frame with your lithophane</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setLithoFrame('with-frame')}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      lithoFrame === 'with-frame'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <h3 className="font-semibold mb-1">With Frame</h3>
                    <p className="text-xs text-muted-foreground">
                      Includes decorative frame (+₹300)
                    </p>
                  </button>
                  <button
                    onClick={() => setLithoFrame('without-frame')}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      lithoFrame === 'without-frame'
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <h3 className="font-semibold mb-1">Without Frame</h3>
                    <p className="text-xs text-muted-foreground">
                      Just the lithophane panel
                    </p>
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Color Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Color Option</CardTitle>
                <CardDescription>Choose the color style for your lithophane</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2" style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px)' }}>
                  {[
                        { id: "multicolor", name: "Multicolor", hex: "linear-gradient(135deg, #EF4444 0%, #F59E0B 25%, #10B981 50%, #3B82F6 75%, #A855F7 100%)" },

                 //   { id: 'multicolor', name: 'Multicolor', hex: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', price: 200 },
                    { id: 'white', name: 'White', hex: '#ffffff', price: 0 }
                  ].map((color) => (
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
                        onClick={() => setLithoColor(color.id as 'multicolor' | 'white')}
                        data-color={color.name}
                        className="relative w-full h-10 border-none outline-none bg-transparent cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)] hover:scale-150 hover:-translate-y-2 hover:z-[99999] [&:hover+*]:scale-[1.3] [&:hover+*]:-translate-y-1 [&:hover+*]:z-[9999] has-[+*:hover]:scale-[1.3] has-[+*:hover]:-translate-y-1 has-[+*:hover]:z-[9999] active:scale-95"
                      >
                        <div 
                          className={`absolute inset-0 w-10 h-10 rounded-lg pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)] shadow-md ${
                            lithoColor === color.id 
                              ? 'scale-110 ring-[3px] ring-primary shadow-xl' 
                              : ''
                          } ${
                            color.id === 'multicolor' 
                              ? 'border-2 border-white dark:border-gray-800' 
                              : color.id === 'white'
                              ? 'border-2 border-gray-300'
                              : ''
                          }`}
                          style={{
                            background: color.hex
                          }}
                        />
                        <div 
                          className="absolute left-1/2 -translate-x-1/2 bottom-[52px] text-[10px] leading-[14px] px-2 py-1 bg-black text-white rounded-md pointer-events-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)] whitespace-nowrap z-[1000]"
                        >
                          {color.name}
                        </div>
                      </button>
                      {lithoColor === color.id && (
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

            {/* Quantity and Custom Message */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="litho-quantity">Quantity</Label>
                  <Input
                    id="litho-quantity"
                    type="number"
                    min="1"
                    max="1000"
                    value={lithoQuantity}
                    onChange={(e) => setLithoQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="litho-message">Custom Message (Optional)</Label>
                  <Textarea
                    id="litho-message"
                    placeholder="Add a personal message or special instructions..."
                    value={lithoCustomMessage}
                    onChange={(e) => setLithoCustomMessage(e.target.value)}
                    className="mt-1"
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
          </>
          )}

          {/* Right Column - Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeTab === "3d-print" ? (
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Files:</span>
                      <span className="font-medium truncate ml-2 max-w-[150px]">
                        {uploadedFiles.length > 0 ? `${uploadedFiles.length} file${uploadedFiles.length > 1 ? 's' : ''}` : 'Not uploaded'}
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
                ) : (
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Images:</span>
                      <span className="font-medium truncate ml-2 max-w-[150px]">
                        {uploadedImages.length > 0 ? `${uploadedImages.length} image${uploadedImages.length > 1 ? 's' : ''}` : 'Not uploaded'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Frame:</span>
                      <span className="font-medium">
                        {lithoFrame === 'with-frame' ? 'With Frame (+₹300)' : 'Without Frame'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Color:</span>
                      <span className="font-medium">
                        {lithoColor === 'multicolor' ? 'Multicolor (+₹200)' : 'White'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Quantity:</span>
                      <span className="font-medium">{lithoQuantity}</span>
                    </div>
                    {lithoCustomMessage && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Message:</span>
                        <span className="font-medium truncate ml-2 max-w-[150px]">Added</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="border-t pt-4">
                  <div className="flex items-start gap-2 p-3 bg-primary/5 border border-primary/20 rounded-lg mb-4">
                    <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold text-foreground mb-1">Get Your Quote</p>
                      <p className="text-muted-foreground">
                        Send your requirements via WhatsApp and we&apos;ll provide an accurate quote with delivery timeline.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button
                      onClick={handleWhatsAppQuote}
                      className="w-full"
                      size="lg"
                      disabled={
                        activeTab === "3d-print"
                          ? uploadedFiles.length === 0 || !selectedMaterial || !selectedColor
                          : uploadedImages.length === 0
                      }
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
