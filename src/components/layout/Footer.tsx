import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react";
import { IconBrandReddit, IconBrandTwitter } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-[#001c3d] border-t border-border text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 text-center">
          {/* Company Info */}
          <div className="space-y-4 flex flex-col items-center">
            <Link href="/" className="inline-block">
              <Image src="/images/logo.svg" alt="LayerForge" width={160} height={80} className="h-20 w-40" />
            </Link>
            <p className="text-sm text-white/90">
              Let&apos;s Build Something Extraordinary Together
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://x.com/layerforge" target="_blank" rel="noopener noreferrer" aria-label="Twitter (X)" className="text-white hover:text-primary transition-colors">
                <IconBrandTwitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@layerforgetechnologies?si=nRNDV3DbBDFLzvOA" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.reddit.com/u/Disastrous_Bird5618/s/Vnrk7n191V" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <IconBrandReddit className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/layerforge.tech?igsh=M3ZkcmMwdDcxc2lm" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/layerforge-technologies-363a19398?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Products", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-semibold mb-4 text-lg">Our Services</h4>
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
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Refund & Cancellation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm text-white/80 whitespace-nowrap">
                  Varanasi, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+919129958671" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap">
                  +91 91299 58671
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@layerforgetech.com" className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap">
                  info@layerforgetech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-sm text-white/90">
              © {new Date().getFullYear()} LayerForge. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-white/80">
              <Link href="/terms" className="text-white hover:text-primary transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link href="/privacy-policy" className="text-white hover:text-primary transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/refund-policy" className="text-white hover:text-primary transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
