"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence, useAnimation } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState, useRef } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const resize = () => {
      // half width because we duplicate items for seamless loop
      setTrackWidth(el.scrollWidth / 2);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [testimonials]);

  useEffect(() => {
    if (!trackWidth) return;
    const duration = Math.max(12, trackWidth / 60); // duration scales with width
    controls.start({ x: [-0, -trackWidth], transition: { repeat: Infinity, ease: "linear", duration } });
  }, [trackWidth, controls]);

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => {
    if (!trackWidth) return;
    const duration = Math.max(12, trackWidth / 60);
    controls.start({ x: [-0, -trackWidth], transition: { repeat: Infinity, ease: "linear", duration } });
  };

  // build duplicated list for seamless loop
  const items = [...testimonials, ...testimonials];

  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex gap-6 items-stretch whitespace-nowrap"
            animate={controls}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {items.map((t, i) => (
              <div
                key={`${t.src}-${i}`}
                className="flex-shrink-0 w-80 md:w-96 p-6 bg-white dark:bg-neutral-900 border rounded-2xl shadow-md"
                aria-hidden={i >= testimonials.length}
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <Image src={t.src} alt={t.name} width={48} height={48} className="object-cover" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-foreground dark:text-white">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.designation}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground whitespace-normal">{t.quote}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
