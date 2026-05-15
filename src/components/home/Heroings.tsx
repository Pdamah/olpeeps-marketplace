import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";

interface HeroProps {
  setView: (view: "home" | "shop" | "dashboard" | "checkout") => void;
}

export const Heroings = ({ setView }: HeroProps) => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <img 
        src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/c0f04a65-d660-4a5c-b918-d97f7cbc5302/hero-image-9a6a08fc-1778805539434.webp"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-transparent" />
      
      <div className="container relative h-full mx-auto px-4 flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Style and Substance for <span className="text-emerald-400">Everyone.</span>
          </h1>
          <p className="text-xl mb-10 text-emerald-50/80">
            Discover a curated collection of premium products. From trendy fashion to daily essentials, 
            OLPEEPS & MORE brings quality to your doorstep.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 h-14 px-8 text-lg"
              onClick={() => setView("shop")}
            >
              Shop Now <ShoppingCart className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 h-14 px-8 text-lg text-white"
              onClick={() => setView("dashboard")}
            >
              Sell with Us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};