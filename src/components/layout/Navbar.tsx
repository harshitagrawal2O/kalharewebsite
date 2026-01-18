"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import clsx from "clsx";

const NavbarBrand = () => (
  <Link href="/" className="flex-shrink-0">
    <Image
      src="/images/logo-2.png"
      alt="LayerForge Technologies"
      width={160}
      height={48}
      priority
      className="h-10 w-auto max-w-[140px] lg:max-w-[160px] object-contain transition-all duration-300"
    />
  </Link>
);

export default function Navbar() {
  const { cartCount } = useCart();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const disableResize = pathname === "/custom-print";

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Manufact. Services", link: "/custom-print" },
    { name: "Capabilities", link: "/products" },
    { name: "Applications", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 transition-all duration-300",
        "w-full flex justify-center",
        "bg-background/80 backdrop-blur-lg border-b border-border",
      )}
    >
      {/* NAV CONTAINER */}
      <nav
        className={clsx(
          "flex items-center h-16 px-4",
          "transition-all duration-300 ease-in-out",
          "w-full md:rounded-xl",
          scrolled && !disableResize ? "md:w-[80%] shadow-lg" : "md:w-full",
        )}
      >
        {/* LEFT */}
        <div className="flex-shrink-0">
          <NavbarBrand />
        </div>

        {/* CENTER */}
        <div className="hidden md:flex flex-1 justify-center min-w-0">
          <div className="flex gap-6 whitespace-nowrap">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-sm text-foreground/80 hover:text-foreground transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-shrink-0 flex items-center space-x-2">
          <Link href="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs h-5 w-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="icon" aria-label="User">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden ml-1"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-foreground" />
              <span className="block h-0.5 w-6 bg-foreground" />
              <span className="block h-0.5 w-6 bg-foreground" />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 w-full bg-background border-t border-border">
          <div className="p-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="block py-2 text-foreground/80 hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
