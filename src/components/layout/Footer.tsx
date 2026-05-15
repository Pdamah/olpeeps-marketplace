import React from "react";
import { Phone, MessageCircle, Send, ShoppingBag } from "lucide-react";

export const Footer = () => {
  const contactInfo = {
    phone: "+2348134817733",
    whatsapp: "https://wa.me/2348134817733",
    telegram: "https://t.me/+2348134817733",
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                <ShoppingBag className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">OLPEEPS & MORE</span>
            </div>
            <p className="max-w-md mb-8">
              Your one-stop destination for premium fashion, accessories, and home essentials. 
              We bring quality closer to you with seamless shopping experiences.
            </p>
            <div className="flex gap-4">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors text-white"
                title="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors text-white"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors text-white"
                title="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Shop All</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Become a Seller</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>+234 813 481 7733</span>
              </li>
              <li>Lagos, Nigeria</li>
              <li>info@olpeepsmore.com</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>© {new Date().getFullYear()} OLPEEPS & MORE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};