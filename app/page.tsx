"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Menu, X } from "lucide-react";

/* ================= TYPES ================= */
type Flavor = {
  id: number;
  name: string;
  category: string;
  desc: string;
  img: string;
};

/* ================= BRAND CONFIG ================= */
const BRAND = {
  name: "Hirva Ice Cream",
  city: "Ahmedabad",
  country: "India",
  phone: "+91 123456789",
  email: "donhitesh@hirva.com",
  whatsapp: "91123456789",
};

/* ================= FLAVORS ================= */
const flavorsData: Flavor[] = [
  {
    id: 1,
    name: "Classic Vanilla",
    category: "Classic",
    desc: "Rich & creamy Madagascar vanilla.",
    img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a",
  },
  {
    id: 2,
    name: "Chocolate Heaven",
    category: "Chocolate",
    desc: "Intense cocoa indulgence.",
    img: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
  },
  {
    id: 3,
    name: "Strawberry Bliss",
    category: "Fruit",
    desc: "Fresh strawberry swirl delight.",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
  },
];

export default function IceCreamWebsite() {
  const [filter, setFilter] = useState("All");
  const [mobileMenu, setMobileMenu] = useState(false);

  const filteredFlavors =
    filter === "All"
      ? flavorsData
      : flavorsData.filter((f) => f.category === filter);

  return (
    <div className="font-sans text-gray-800">

      {/* ================= NAVIGATION ================= */}
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 relative">
          <h1 className="text-2xl font-semibold text-[#d71a21]">
            {BRAND.name}
          </h1>

          {/* Havmor Logo Right */}
          <img
            src="/havmor-logo.png"
            alt="Havmor"
            className="h-8 hidden md:block absolute right-6"
          />

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-[#d71a21]">Home</a>
            <a href="#flavors" className="hover:text-[#d71a21]">Flavors</a>
            <a href="#contact" className="hover:text-[#d71a21]">Contact</a>
          </div>

          <div className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X /> : <Menu />}
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-r from-[#f5b6b6] via-[#f28e8e] to-[#f3a3b3]"
      >
        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 items-center gap-10">
          
          {/* LEFT TEXT */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              Scoop Happiness <br /> in Every Bite 🍦
            </h1>

            <p className="mb-6 text-lg text-white/90 max-w-md">
              Premium handcrafted ice creams made for families, kids & young hearts.
            </p>

            <a
              href="#flavors"
              className="bg-white text-[#d71a21] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Explore Flavors
            </a>
          </div>

          {/* FLOATING IMAGE */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1599785209707-28d2c8c13b80"
              alt="Ice Cream"
              className="w-80 md:w-96 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= FLAVORS ================= */}
      <section id="flavors" className="py-24 bg-[#f9f5f2]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            Our Flavors
          </h2>

          <div className="space-y-10">
            {filteredFlavors.map((flavor) => (
              <div
                key={flavor.id}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden grid md:grid-cols-2"
              >
                <img
                  src={`${flavor.img}?auto=format&fit=crop&w=900&q=80`}
                  alt={flavor.name}
                  className="h-72 w-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-3">
                    {flavor.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {flavor.desc}
                  </p>

                  <a
                    href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20want%20${flavor.name}`}
                    target="_blank"
                    className="inline-block bg-[#d71a21] text-white px-6 py-2 rounded-md hover:bg-red-700 transition w-fit"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <p className="flex justify-center gap-2 mb-2">
          <Phone size={18} /> {BRAND.phone}
        </p>
        <p className="flex justify-center gap-2 mb-2">
          <Mail size={18} /> {BRAND.email}
        </p>
        <p className="flex justify-center gap-2">
          <MapPin size={18} /> {BRAND.city}, {BRAND.country}
        </p>
      </section>

      {/* ================= WHATSAPP FLOAT ================= */}
      <a
        href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20would%20like%20to%20know%20more`}
        target="_blank"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-md hover:bg-[#1ebe5d] transition"
      >
        WhatsApp
      </a>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#d71a21] text-white py-6 text-center">
        <p>© 2026 {BRAND.name}. All rights reserved.</p>
        <div className="flex justify-center mt-3">
          <Instagram />
        </div>
      </footer>
    </div>
  );
}