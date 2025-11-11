"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, AlertCircle } from "lucide-react";

export default function TermsPage() {
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
            <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  By using the services of Layerforge Technologies Private Limited, you agree to the following terms and conditions:
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p>
                      All 3D design files, models, and creative assets shared by clients remain their intellectual property.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p>
                      Layerforge ensures complete confidentiality and does not share or reproduce client designs without consent.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p>
                      Quotes are provided based on the design specifications, materials, and finishing requirements shared by the client.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="font-semibold text-foreground">
                      Once production has started, orders cannot be canceled or refunded.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p>
                      Delivery timelines are estimated and may vary depending on project complexity, material availability, and logistics.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p>
                      Layerforge is not liable for errors arising from incomplete, inaccurate, or faulty client-supplied designs.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="font-semibold text-foreground">
                      All payments must be cleared before dispatch or delivery of printed items.
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-foreground font-medium">
                      By proceeding with our services, clients acknowledge and accept these terms.
                    </p>
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
