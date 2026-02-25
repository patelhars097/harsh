"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Instagram } from "lucide-react";

/* ================= BRAND CONFIG ================= */
const BRAND = {
  name: "Hirva Ice Cream",
  city: "Ahmedabad",
  country: "India",
  phone: "+91 98765 43210",
  email: "hello@hirva.com",
  whatsapp: "919876543210", // without +
};

/* ================= FLAVORS ================= */
const flavors = [
  {
    name: "American Nuts",
    img: "https://images.unsplash.com/photo-1589712235276-47c0b93f2d3a",
  },
  {
    name: "Kaju Draskh",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
  },
  {
    name: "Mango",
    img: "https://images.unsplash.com/photo-1599785209791-33d0c83b35ef",
  },
];

export default function HirvaWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="font-sans text-gray-800">

      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

          {/* LOGO */}
          <img
            src="/logo.png"
            alt="Hirva Ice Cream"
            className="h-10 w-auto cursor-pointer"
            onClick={() => scrollToSection("home")}
          />

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-sm font-medium relative">

            <button onClick={() => scrollToSection("home")} className="relative group">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d71a21] transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* FLAVORS DROPDOWN */}
            <div className="relative group">
              <button className="relative">
                Flavors
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d71a21] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 min-w-[180px]">
                {flavors.map((flavor) => (
                  <button
                    key={flavor.name}
                    onClick={() => scrollToSection("flavors")}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {flavor.name}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => scrollToSection("about")} className="relative group">
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d71a21] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button onClick={() => scrollToSection("contact")} className="relative group">
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d71a21] transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* MOBILE MENU */}
          <div className="md:hidden">
            {mobileOpen ? (
              <X size={26} onClick={() => setMobileOpen(false)} />
            ) : (
              <Menu size={26} onClick={() => setMobileOpen(true)} />
            )}
          </div>
        </div>

        {/* MOBILE NAV */}
        {mobileOpen && (
          <div className="md:hidden bg-white shadow-md p-4 space-y-4">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left">Home</button>
            <button onClick={() => scrollToSection("flavors")} className="block w-full text-left">Flavors</button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left">About</button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left">Contact</button>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Premium Handcrafted Ice Cream
        </h1>
        <p className="max-w-xl text-gray-600 mb-6">
          Simple. Fresh. Joyful. Made with love in Ahmedabad.
        </p>
        <button
          onClick={() => scrollToSection("flavors")}
          className="px-6 py-2 border border-gray-800 rounded-md hover:bg-gray-100 transition"
        >
          Explore Flavors
        </button>
      </section>

      {/* ================= FLAVORS ================= */}
      <section id="flavors" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-10">Our Flavors</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {flavors.map((flavor) => (
            <div key={flavor.name}>
              <img
                src={`${flavor.img}?auto=format&fit=crop&w=600&q=80`}
                alt={flavor.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-medium">{flavor.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          {BRAND.name} brings premium handcrafted flavors made for families and celebrations.
          We focus on quality ingredients and joyful experiences.
        </p>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>

        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-sm">
          <p className="flex justify-center items-center gap-2 mb-3">
            <Phone size={16} /> {BRAND.phone}
          </p>
          <p className="flex justify-center items-center gap-2 mb-3">
            <Mail size={16} /> {BRAND.email}
          </p>
          <p className="flex justify-center items-center gap-2 mb-3">
            <MapPin size={16} /> {BRAND.city}, {BRAND.country}
          </p>
        </div>

        {/* GOOGLE MAP */}
        <div className="max-w-5xl mx-auto mt-8 px-6">
          <iframe
            src="https://www.google.com/maps?q=Ahmedabad,India&output=embed"
            className="w-full h-64 rounded-lg border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* ================= WHATSAPP FLOAT BUTTON ================= */}
      <a
        href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20would%20like%20to%20order%20ice%20cream`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-md text-sm hover:bg-green-600 transition"
      >
        WhatsApp
      </a>

      {/* ================= FOOTER ================= */}
      <footer className="py-6 text-center text-sm text-gray-600 border-t">
        © 2026 {BRAND.name}. All Rights Reserved.
        <div className="flex justify-center gap-4 mt-3">
          <Instagram size={18} />
        </div>
      </footer>
    </div>
  );
}