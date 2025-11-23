"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Cookie, Users, FileText, Mail, MapPin } from "lucide-react";

export default function PrivacyPolicyPage() {
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
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your privacy and data security are our top priorities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardContent className="pt-6 space-y-4 text-muted-foreground">
                <p className="text-sm text-muted-foreground">Effective Date: November 11, 2025</p>
                <p>
                  At LayerForge, we value your privacy and are committed to protecting your personal information. 
                  This policy explains how we collect, use, and safeguard the data you share with us through our website, email, and services.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 1. Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  1. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>We may collect the following information when you interact with our website or services:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Name, email address, phone number, and business details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Project-related files, 3D models, or design assets uploaded by you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Billing, payment, and shipping details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Technical data such as IP address, browser type, and usage analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* 2. How We Use Your Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-6 w-6 text-primary" />
                  2. How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>Your information is used to:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Process orders and deliver products or services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Communicate project updates, quotes, and invoices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Improve our services and user experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Send relevant updates, offers, or newsletters (only with consent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Ensure legal compliance and prevent misuse</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* 3. Data Confidentiality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-6 w-6 text-primary" />
                  3. Data Confidentiality
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p className="font-semibold text-foreground">
                  All client files, 3D models, and proprietary designs are treated as strictly confidential.
                </p>
                <p>
                  We do not share, sell, or reproduce any client data or designs without written permission.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 4. Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  4. Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  We use secure servers, encryption, and limited internal access to protect your personal and project information 
                  from unauthorized use, alteration, or disclosure.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 5. Cookies & Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cookie className="h-6 w-6 text-primary" />
                  5. Cookies & Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Our website may use cookies and analytics tools to enhance browsing experience and track performance. 
                  You can manage or disable cookies in your browser settings.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 6. Third-Party Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  6. Third-Party Services
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  We may use trusted third-party services (such as payment gateways or courier partners) to fulfill your order. 
                  These partners have their own privacy policies and only receive essential data to perform their functions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 7. Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  7. Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  You may request to access, update, or delete your personal data by contacting us. 
                  We will respond to all valid requests in accordance with applicable data protection laws.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 8. Policy Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  8. Policy Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  LayerForge reserves the right to update or modify this Privacy Policy at any time. 
                  The updated version will be posted on this page with a revised effective date.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 9. Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-6 w-6 text-primary" />
                  9. Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For any questions or concerns about this Privacy Policy or your personal data, please contact:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground">info@layerforgetech.com</span>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">LayerForge</p>
                      <p className="text-sm text-muted-foreground">Varanasi, Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
