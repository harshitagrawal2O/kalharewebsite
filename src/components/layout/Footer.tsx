import Link from "next/link";
import Logo from "@/components/layout/Logo";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";
import { IconBrandReddit, IconBrandTwitter } from "@tabler/icons-react";

export default function Footer() {
  return (
    // Teal Blue ground — the palette's "structure / authority" role, closing
    // the page. The only Blaze Orange here is the top hairline and hovers.
    <footer className="relative z-10 bg-brand-teal text-brand-offwhite">
      <div className="h-1 w-full bg-cta" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 text-center">
          {/* Company Info */}
          <div className="space-y-4 flex flex-col items-center">
            <Link href="/" className="inline-block" aria-label="LayerForge — home">
              {/* onDark recolours "Forge." and the tagline to Off-White. They
                  are Teal Blue by default, which is this footer's own
                  background — no plate or knockout asset needed. */}
              <Logo onDark className="text-[30px]" />
            </Link>
            <p className="text-sm text-brand-offwhite/80">
              Let&apos;s Build Something Extraordinary Together
            </p>
            <div className="flex space-x-2 mt-2">
              <a
                href="https://x.com/Layerforge_tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter (X)"
                className="rounded-full border border-white/15 p-2 text-brand-offwhite transition-colors hover:border-cta hover:bg-cta hover:text-cta-foreground"
              >
                <IconBrandTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@layerforgetechnologies?si=nRNDV3DbBDFLzvOA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="rounded-full border border-white/15 p-2 text-brand-offwhite transition-colors hover:border-cta hover:bg-cta hover:text-cta-foreground"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/layerforge.tech?igsh=M3ZkcmMwdDcxc2lm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-white/15 p-2 text-brand-offwhite transition-colors hover:border-cta hover:bg-cta hover:text-cta-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/layerforge-technologies-363a19398?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/15 p-2 text-brand-offwhite transition-colors hover:border-cta hover:bg-cta hover:text-cta-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.16em] text-cta">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Products", "Services", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-sm text-brand-offwhite/70 hover:text-cta transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.16em] text-cta">
              Our Services
            </h4>
            <ul className="space-y-2">
              {[
                "3D Printing",
                "Custom Design",
                "Prototyping",
                "Mass Production",
                "Consulting",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-brand-offwhite/70 hover:text-cta transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.16em] text-cta">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-brand-offwhite/70 hover:text-cta transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-brand-offwhite/70 hover:text-cta transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-sm text-brand-offwhite/70 hover:text-cta transition-colors"
                >
                  Refund & Cancellation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-[0.16em] text-cta">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-cta" />
                <span className="text-sm text-brand-offwhite/70 whitespace-nowrap">
                  Varanasi, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-cta" />
                <a
                  href="tel:+919129958671"
                  className="text-sm text-brand-offwhite/70 hover:text-cta transition-colors whitespace-nowrap"
                >
                  +91 91299 58671
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-cta" />
                <a
                  href="mailto:info@layerforgetech.com"
                  className="text-sm text-brand-offwhite/70 hover:text-cta transition-colors whitespace-nowrap"
                >
                  info@layerforgetech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-sm text-brand-offwhite/70">
              © {new Date().getFullYear()} LayerForge. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-brand-offwhite/70">
              <Link
                href="/terms"
                className="transition-colors hover:text-cta"
              >
                Terms
              </Link>
              <span className="text-brand-slate/40">•</span>
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-cta"
              >
                Privacy
              </Link>
              <span className="text-brand-slate/40">•</span>
              <Link
                href="/refund-policy"
                className="transition-colors hover:text-cta"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
