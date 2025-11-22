"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FeatureCard = ({
  icon,
  title,
  description,
  className,
}: {
  icon: React.ReactNode | string;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/50",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative z-10 flex flex-col h-full items-center text-center">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-xl bg-primary/5 transition-all duration-300 group-hover:scale-110 shadow-sm overflow-hidden">
          {typeof icon === "string" ? (
            <img src={icon} alt={title} className="h-full w-full object-cover" />
          ) : (
            <div className="text-primary group-hover:text-primary">
              {icon}
            </div>
          )}
        </div>
        <h3 className="mb-3 text-xl font-bold tracking-tight">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />
      <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />
    </motion.div>
  );
};
