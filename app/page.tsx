"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Menu,
  X,
} from "lucide-react";

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
  email: "Donhitesh@hirva.com",
  whatsapp: "91123456789",
};

/* ================= FLAVORS DATA ================= */
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
  {
    id: 4,
    name: "Belgian Dark",
    category: "Premium",
    desc: "Luxury Belgian dark chocolate.",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  },
];

export default function IceCreamWebsite() {
  const [page, setPage] = useState("home");
  const [filter, setFilter] = useState("All");
  const [mobileMenu, setMobileMenu] = useState(false);

  const filteredFlavors =
    filter === "All"
      ? flavorsData
      : flavorsData.filter((f) => f.category === filter);

  /* ================= NAVIGATION ================= */
  const Navigation = () => (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1
          className="text-2xl font-bold text-red-600 cursor-pointer"
          onClick={() => setPage("home")}
        >
          {BRAND.name}
        </h1>

        <div className="hidden md:flex gap-6 font-medium">
          {["home", "about", "flavors", "contact"].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className="hover:text-red-600 capitalize"
            >
              {p}
            </button>
          ))}
        </div>

        <div className="md:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X /> : <Menu />}
        </div>
      </div>

      {mobileMenu && (
        <div className="md:hidden bg-white shadow p-4 space-y-3">
          {["home", "about", "flavors", "contact"].map((p) => (
            <button
              key={p}
              onClick={() => {
                setPage(p);
                setMobileMenu(false);
              }}
              className="block w-full text-left capitalize"
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  /* ================= HERO ================= */
  const Hero = () => (
    <section className="min-h-screen bg-gradient-to-r from-red-600 to-pink-400 text-white flex flex-col justify-center items-center text-center px-6 pt-24">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        Scoop Happiness in Every Bite 🍦
      </motion.h1>
      <p className="max-w-xl mb-6 text-lg">
        Premium handcrafted ice creams made for families, kids & young hearts.
      </p>
      <button
        onClick={() => setPage("flavors")}
        className="bg-white text-red-600 px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
      >
        Explore Flavors
      </button>
    </section>
  );

  /* ================= FLAVORS ================= */
  const Flavors = () => (
    <section className="py-20 px-6 pt-32">
      <h2 className="text-4xl font-bold text-center mb-8">Our Flavors</h2>

      <div className="flex justify-center gap-4 mb-10">
        {["All", "Classic", "Premium", "Fruit", "Chocolate"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className="px-4 py-2 bg-red-100 rounded-full hover:bg-red-200 transition"
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {filteredFlavors.map((flavor) => (
          <div
            key={flavor.id}
            className="bg-white rounded-2xl shadow p-4 text-center"
          >
            <img
              src={`${flavor.img}?auto=format&fit=crop&w=400&q=80`}
              alt={flavor.name}
              className="rounded-xl mb-4 h-48 w-full object-cover"
            />
            <h3 className="font-bold">{flavor.name}</h3>
            <p className="text-sm text-gray-600">{flavor.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );

  /* ================= CONTACT ================= */
  const Contact = () => (
    <section className="py-20 px-6 bg-pink-100 pt-32">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow text-center">
        <p className="flex items-center justify-center gap-2 mb-2">
          <Phone size={18} /> {BRAND.phone}
        </p>
        <p className="flex items-center justify-center gap-2 mb-2">
          <Mail size={18} /> {BRAND.email}
        </p>
        <p className="flex items-center justify-center gap-2">
          <MapPin size={18} /> {BRAND.city}, {BRAND.country}
        </p>
      </div>
    </section>
  );

  return (
    <div className="font-sans text-gray-800">
      <Navigation />

      {page === "home" && <Hero />}
      {page === "flavors" && <Flavors />}
      {page === "contact" && <Contact />}

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20would%20like%20to%20know%20more%20about%20your%20ice%20cream`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        WhatsApp
      </a>

      {/* Footer */}
      <footer className="bg-red-600 text-white py-6 text-center mt-10">
        <p>© 2026 {BRAND.name}. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-3">
          <Instagram />
        </div>
      </footer>
    </div>
  );
}