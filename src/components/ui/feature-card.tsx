"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
        "group relative overflow-hidden rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:shadow-brand hover:border-cta/60",
        className
      )}
    >
      {/* Blaze Orange rail that fills on hover — energy on approach. */}
      <div className="absolute inset-x-0 top-0 h-0.5 w-0 bg-cta transition-all duration-500 group-hover:w-full" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col h-full items-center text-center">
        <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-lg bg-secondary transition-all duration-300 group-hover:scale-110 shadow-sm overflow-hidden relative">
          {typeof icon === "string" ? (
            <Image
              src={icon}
              alt={title}
              fill
              // The feature icons are animated GIFs. Next cannot optimise those
              // and warns on every request unless we opt out explicitly.
              unoptimized={icon.endsWith(".gif")}
              className="object-cover"
            />
          ) : (
            <div className="text-primary transition-colors group-hover:text-cta">
              {icon}
            </div>
          )}
        </div>
        <h3 className="mb-3 text-xl font-bold tracking-tight text-primary">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-cta/10" />
      <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />
    </motion.div>
  );
};
