import React from "react";
import { ShoppingBag, User, LogOut, Menu, Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserRole } from "@/App";

interface HeaderProps {
  isAuthenticated: boolean;
  userRole: UserRole;
  setView: (view: "home" | "shop" | "dashboard" | "checkout") => void;
  cartCount: number;
  handleLogout: () => void;
}

export const Header = ({ isAuthenticated, userRole, setView, cartCount, handleLogout }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setView("home")}
        >
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
            <ShoppingBag className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-emerald-900">OLPEEPS & MORE</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => setView("home")} className="text-sm font-medium hover:text-emerald-600 transition-colors">Home</button>
          <button onClick={() => setView("shop")} className="text-sm font-medium hover:text-emerald-600 transition-colors">Shop</button>
          {isAuthenticated && (
            <button onClick={() => setView("dashboard")} className="text-sm font-medium hover:text-emerald-600 transition-colors">Dashboard</button>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => setView("checkout")}
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </Button>
          
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => setView("dashboard")} className="hidden sm:flex">
                <User className="w-4 h-4 mr-2" />
                {userRole === "seller" ? "Seller Panel" : "Account"}
              </Button>
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="w-4 h-4 text-red-500" />
              </Button>
            </div>
          ) : (
            <Button size="sm" onClick={() => setView("dashboard")} className="bg-emerald-600 hover:bg-emerald-700">
              Sign In
            </Button>
          )}
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};