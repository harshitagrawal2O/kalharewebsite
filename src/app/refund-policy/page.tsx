"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw, XCircle, CheckCircle, Mail } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/60 py-20">
        <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-cta/10 blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <RefreshCw className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-display mb-6">
              Refund &{" "}
              <span className="text-cta">Cancellation Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding our refund and cancellation terms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Refund Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground">
                <p>
                  At LayerForge, each project is custom-produced based on client
                  specifications. As a result, we follow a{" "}
                  <span className="font-semibold text-foreground">
                    strict no-refund policy once an order has been confirmed and
                    production has begun.
                  </span>
                </p>
                <p>
                  However, clients may request order cancellation before
                  printing starts, provided no material has been processed or
                  purchased. In such cases, a partial refund may be issued after
                  deducting administrative and processing costs.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <XCircle className="h-6 w-6 text-destructive" />
                  Refunds are Not Applicable For
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">
                      Completed or in-progress prints
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">
                      Design or modeling services already rendered
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">
                      Delays caused by courier or logistics partners
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  Quality Guarantee
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  If an order is found to have a manufacturing defect or quality
                  issue directly attributable to LayerForge, we will offer a{" "}
                  <span className="font-semibold text-foreground">
                    reprint or suitable replacement at no additional cost
                  </span>
                  , after verification.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Mail className="h-6 w-6 text-primary" />
                  Contact Us for Refund or Replacement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  For refund or replacement requests, please contact us at:
                </p>
                <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">
                      info@layerforgetech.com
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Within 48 hours of receiving your order
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
