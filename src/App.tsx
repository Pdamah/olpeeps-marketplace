import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Heroings } from "./components/home/Heroings";
import { AuthForm } from "./components/auth/AuthForm";
import { BuyerDashboard } from "./components/buyer/BuyerDashboard";
import { SellerDashboard } from "./components/seller/SellerDashboard";
import { ProductGrid } from "./components/shop/ProductGrid";
import { Checkout } from "./components/shop/Checkout";

export type UserRole = "buyer" | "seller" | null;

function App() {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [view, setView] = useState<"home" | "shop" | "dashboard" | "checkout">("home");
  const [cart, setCart] = useState<any[]>([]);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setIsAuthenticated(true);
    setView("dashboard");
  };

  const handleLogout = () => {
    setUserRole(null);
    setIsAuthenticated(false);
    setView("home");
  };

  const addToCart = (product: any) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setCart([]);

  return (
    <div className="min-h-screen bg-emerald-50/30 text-slate-900 font-sans">
      <Header 
        isAuthenticated={isAuthenticated} 
        userRole={userRole} 
        setView={setView} 
        cartCount={cart.length}
        handleLogout={handleLogout}
      />
      
      <main>
        {view === "home" && (
          <>
            <Heroings setView={setView} />
            <ProductGrid addToCart={addToCart} />
          </>
        )}

        {view === "shop" && (
          <ProductGrid addToCart={addToCart} />
        )}

        {!isAuthenticated && (view === "dashboard" || view === "checkout") && (
          <div className="py-20 px-4 max-w-md mx-auto">
            <AuthForm onAuthSuccess={handleLogin} />
          </div>
        )}

        {isAuthenticated && userRole === "buyer" && view === "dashboard" && (
          <BuyerDashboard setView={setView} />
        )}

        {isAuthenticated && userRole === "seller" && view === "dashboard" && (
          <SellerDashboard />
        )}

        {view === "checkout" && (
          <Checkout cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} setView={setView} />
        )}
      </main>

      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;