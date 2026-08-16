"use client";

import Link from "next/link";
import Logo from "@/components/layout/Logo";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart, User, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import clsx from "clsx";

const NavbarBrand = () => (
  <Link href="/" className="flex-shrink-0" aria-label="LayerForge — home">
    <Logo
      priority
      className="text-[21px] sm:text-[25px] transition-all duration-300"
      sizes="(min-width: 1024px) 180px, 150px"
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

  const isActive = (link: string) =>
    link === "/" ? pathname === "/" : pathname.startsWith(link);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 transition-all duration-300",
        "w-full flex justify-center",
        // Off-White ground with a Slate hairline — never pure white.
        "bg-background/85 backdrop-blur-lg border-b",
        scrolled ? "border-border shadow-brand" : "border-transparent",
      )}
    >
      {/* NAV CONTAINER */}
      <nav
        className={clsx(
          "flex items-center h-16 px-4",
          "transition-all duration-300 ease-in-out",
          "w-full md:rounded-xl",
          scrolled && !disableResize ? "md:w-[85%]" : "md:w-full",
        )}
      >
        {/* LEFT */}
        <div className="flex-shrink-0">
          <NavbarBrand />
        </div>

        {/* CENTER */}
        <div className="hidden md:flex flex-1 justify-center min-w-0">
          <div className="flex gap-7 whitespace-nowrap">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                aria-current={isActive(item.link) ? "page" : undefined}
                className={clsx(
                  // Lufga for navigation — it is brand voice, not body copy.
                  "link-underline font-heading text-sm font-medium transition-colors",
                  isActive(item.link)
                    ? "text-primary after:w-full"
                    : "text-foreground/70 hover:text-primary",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-shrink-0 flex items-center space-x-2">
          {/* <Link href="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cta text-cta-foreground text-xs h-5 w-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="icon" aria-label="User">
              <User className="h-5 w-5" />
            </Button>
          </Link> */}

          {/* The one Blaze Orange element in the chrome. */}
          <Link href="/contact" className="hidden md:inline-flex">
            <Button variant="cta" size="sm">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden ml-1 p-2 text-primary"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <div className="space-y-1.5">
                <span className="block h-0.5 w-6 rounded-full bg-primary" />
                <span className="block h-0.5 w-6 rounded-full bg-cta" />
                <span className="block h-0.5 w-6 rounded-full bg-primary" />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 w-full bg-background border-t border-border shadow-brand">
          <div className="p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                aria-current={isActive(item.link) ? "page" : undefined}
                className={clsx(
                  "flex items-center gap-3 rounded-md px-3 py-3 font-heading text-base font-medium transition-colors",
                  isActive(item.link)
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/80 hover:bg-secondary hover:text-primary",
                )}
                onClick={() => setMobileOpen(false)}
              >
                <span
                  className={clsx(
                    "h-4 w-0.5 rounded-full transition-colors",
                    isActive(item.link) ? "bg-cta" : "bg-border",
                  )}
                />
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block pt-3"
              onClick={() => setMobileOpen(false)}
            >
              <Button variant="cta" className="w-full">
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
