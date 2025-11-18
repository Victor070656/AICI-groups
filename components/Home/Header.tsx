"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuToggle } from "@/components/icons";

export default function Header({ currentPage = "home" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubsidiaryMenuOpen, setIsSubsidiaryMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", key: "home" },
    { name: "About Us", href: "/about", key: "about" },
    { name: "Services", href: "/services", key: "services" },
    { name: "Subsidiaries", key: "subsidiaries" },
    { name: "Our Team", href: "/team", key: "team" },
    { name: "Blogs", href: "/blog", key: "blog" },
    { name: "Short-let", href: "/short-let", key: "short-let" },
    { name: "Learn", href: "/learning", key: "learning" },
    { name: "Contact", href: "/contact", key: "contact" },
  ];

  const subsidiaryItems = [
    { name: "AMC & FAS LTD", href: "/subsidiaries/amc-fas", key: "amc-fas" },
    { name: "AICMRCY", href: "/subsidiaries/aicmrcy", key: "aicmrcy" },
    { name: "AICI Properties", href: "/subsidiaries/aici-properties", key: "aici-properties" },
    { name: "AM-FOSLTD", href: "/subsidiaries/am-fosltd", key: "am-fosltd" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200/80 dark:border-gray-700/80 px-4 sm:px-8 lg:px-16 py-3 mx-auto">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="size-10 text-primary transform transition-transform duration-300 group-hover:rotate-12">
            <Image src={"/work/img/logo.png"} alt="" width={80} height={80} />
          </div>
          <h2 className="text-xl font-bold tracking-[-0.015em] font-display text-gray-900">
            AICI Group
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9 font-body">
            {navItems.map((item) =>
              item.key === "subsidiaries" ? (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setIsSubsidiaryMenuOpen(true)}
                  onMouseLeave={() => setIsSubsidiaryMenuOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-medium leading-normal transition-colors ${
                      currentPage.startsWith("subsidiaries")
                        ? "font-bold text-red-600 border-b-2 border-red-600"
                        : "hover:text-red-600 dark:hover:text-red-600"
                    }`}
                  >
                    {item.name}
                    <svg
                      className={`w-3 h-3 transform transition-transform duration-200 ${
                        isSubsidiaryMenuOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {isSubsidiaryMenuOpen && (
                    <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      {subsidiaryItems.map((subItem) => (
                        <Link
                          key={subItem.key}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.key}
                  href={item.href!}
                  className={`text-sm font-medium leading-normal transition-colors ${
                    currentPage === item.key
                      ? "font-bold text-red-600 border-b-2 border-red-600"
                      : "hover:text-red-600 dark:hover:text-red-600"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
          <Link href={"/login"} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-red-600 text-white text-sm font-bold leading-normal tracking-[0.015em] font-body shadow-sm hover:bg-red-600/90 transition-colors">
            <span className="truncate">Login</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <MenuToggle
          isOpen={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
        />
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navItems.map((item) =>
              item.key === "subsidiaries" ? (
                <div key={item.key}>
                  <button
                    onClick={() => setIsSubsidiaryMenuOpen(!isSubsidiaryMenuOpen)}
                    className="flex items-center gap-1 text-sm font-medium py-2 w-full text-left"
                  >
                    {item.name}
                    <svg
                      className={`w-3 h-3 transform transition-transform duration-200 ${
                        isSubsidiaryMenuOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {isSubsidiaryMenuOpen && (
                    <div className="pl-4">
                      {subsidiaryItems.map((subItem) => (
                        <Link
                          key={subItem.key}
                          href={subItem.href}
                          className="block text-sm font-medium py-2 text-gray-700 hover:text-secondary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.key}
                  href={item.href!}
                  className={`text-sm font-medium py-2 transition-colors ${
                    currentPage === item.key
                      ? "font-bold text-gray-600"
                      : "text-gray-700 hover:text-secondary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <Link href={"/login"} className="flex items-center justify-center rounded-lg h-10 px-4 bg-red-600 text-white text-sm font-bold shadow-sm hover:bg-red-600/90 transition-colors w-full mt-2">
              <span>Login</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
