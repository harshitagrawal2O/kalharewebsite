"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

const NavbarBrand = ({ visible }: { visible?: boolean }) => {
  return (
    <Link href="/" className="flex items-center space-x-2 relative z-20">
      <div className="font-bold flex flex-col leading-tight font-logo">
        <span className={`text-[#3aba24] transition-all duration-300 ${visible ? 'text-lg' : 'text-xl'}`}>LayerForge</span>
        <span 
          className={`text-[#2c3e50] dark:text-[#94a3b8] transition-all duration-300 origin-top-left ${
            visible 
              ? 'h-0 opacity-0 scale-0 overflow-hidden' 
              : 'h-auto opacity-100 scale-100 text-xl'
          }`}
        >
          Technologies.
        </span>
      </div>
    </Link>
  );
};

export default function Navbar() {
  const { cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Disable resize on custom-print page
  const disableResize = pathname === "/custom-print";

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Custom Print", link: "/custom-print" },
    { name: "Products", link: "/products" },
    { name: "Services", link: "/services" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      {disableResize ? (
        // Static navbar for custom-print page
        <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <NavbarBrand />

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.link}
                    className="text-foreground/80 hover:text-foreground transition-colors relative group text-sm"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </Link>
                ))}
              </div>

              {/* Right Side Actions */}
              <div className="hidden md:flex items-center space-x-2">
                <Link href="/cart">
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => {}}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-background border-b border-border">
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item, idx) => (
                  <Link
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-2 border-t border-border">
                  <Link href="/cart" className="block">
                    <Button variant="outline" className="w-full relative justify-start">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Cart
                      {cartCount > 0 && (
                        <span className="ml-auto bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5">
                          {cartCount}
                        </span>
                      )}
                    </Button>
                  </Link>
                  <Link href="/" className="block">
                    <Button variant="ghost" className="w-full justify-start">
                      <User className="mr-2 h-4 w-4" />
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      ) : (
        // Resizable navbar for other pages
        <ResizableNavbar disableResize={disableResize}>
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo */}
        <NavbarBrand />

        {/* Navigation Items */}
        <NavItems items={navItems} />

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2 relative z-20">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Logo */}
          <NavbarBrand />

          {/* Mobile Menu Toggle */}
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              className="block w-full py-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 space-y-2 w-full border-t border-neutral-200 dark:border-neutral-800">
            <Link href="/cart" className="block w-full">
              <Button variant="outline" className="w-full relative justify-start">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Cart
                {cartCount > 0 && (
                  <span className="ml-auto bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link href="/" className="block w-full">
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </Link>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
      )}
    </>
  );
}
