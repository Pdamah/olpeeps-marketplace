import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Trash2, 
  CreditCard, 
  ChevronRight, 
  CheckCircle2, 
  Copy,
  ArrowLeft,
  Building2
} from "lucide-react";
import { toast } from "sonner";

interface CheckoutProps {
  cart: any[];
  removeFromCart: (index: number) => void;
  clearCart: () => void;
  setView: (view: "home" | "shop" | "dashboard" | "checkout") => void;
}

export const Checkout = ({ cart, removeFromCart, clearCart, setView }: CheckoutProps) => {
  const [step, setStep] = useState<"cart" | "payment" | "success">("cart");
  
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = subtotal > 0 ? 2500 : 0;
  const total = subtotal + deliveryFee;

  const bankDetails = {
    accountName: "Peter Yohanna Damah",
    accountNumber: "0007236204",
    bank: "Access Bank"
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  const handleCompleteOrder = () => {
    toast.success("Order request sent!");
    setStep("success");
    clearCart();
  };

  if (cart.length === 0 && step === "cart") {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CreditCard className="w-10 h-10 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Explore our curated collections!</p>
        <Button onClick={() => setView("shop")} className="bg-emerald-600">Start Shopping</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-10">
        <Button variant="ghost" size="sm" onClick={() => setView("shop")} className="text-slate-500">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
        </Button>
        <div className="h-1 w-1 bg-slate-300 rounded-full" />
        <h1 className="text-2xl font-bold">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {step === "cart" && (
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4 bg-white p-4 rounded-xl border border-emerald-50 shadow-sm items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800">{item.name}</h3>
                    <p className="text-sm text-slate-500">{item.category}</p>
                    <p className="font-bold text-emerald-700 mt-1">₦{item.price.toLocaleString()}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(index)} className="text-red-400 hover:text-red-600 hover:bg-red-50">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          {step === "payment" && (
            <Card className="border-none shadow-md overflow-hidden">
              <div className="bg-emerald-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Bank Transfer Payment</h3>
                </div>
                <p className="text-emerald-50/80 text-sm">Transfer the total amount to the account below to confirm your order.</p>
              </div>
              <CardContent className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Account Name</label>
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <span className="font-semibold text-slate-800">{bankDetails.accountName}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => copyToClipboard(bankDetails.accountName)}>
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Account Number</label>
                      <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                        <span className="font-mono text-xl font-bold text-emerald-900 tracking-wider">{bankDetails.accountNumber}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-emerald-600" onClick={() => copyToClipboard(bankDetails.accountNumber)}>
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Bank Name</label>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 font-semibold text-slate-800">
                        {bankDetails.bank}
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 flex flex-col justify-center">
                    <h4 className="font-bold text-orange-900 mb-2">Instructions</h4>
                    <ul className="text-sm text-orange-800 space-y-2 list-disc pl-4">
                      <li>Use your order ID or full name as the transfer reference.</li>
                      <li>Take a screenshot of the transaction receipt.</li>
                      <li>Share receipt with us on WhatsApp for faster verification.</li>
                    </ul>
                    <Button variant="outline" className="mt-6 border-orange-200 text-orange-900 hover:bg-orange-100" asChild>
                      <a href="https://wa.me/2348134817733" target="_blank" rel="noopener noreferrer">
                        Share on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {step === "success" && (
            <div className="bg-white p-12 rounded-3xl border border-emerald-50 shadow-xl text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Order Successful!</h2>
              <p className="text-slate-500 mb-10 max-w-md mx-auto">
                Thank you for shopping with OLPEEPS & MORE. Your order is being processed and we'll contact you shortly for confirmation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setView("dashboard")} className="bg-emerald-600 h-12 px-8">Go to Dashboard</Button>
                <Button variant="outline" onClick={() => setView("home")} className="h-12 px-8">Return Home</Button>
              </div>
            </div>
          )}
        </div>

        {step !== "success" && (
          <div className="lg:col-span-1">
            <Card className="border-none shadow-md sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Delivery Fee</span>
                  <span className="font-semibold">₦{deliveryFee.toLocaleString()}</span>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between text-lg font-bold text-slate-900">
                  <span>Total</span>
                  <span className="text-emerald-700">₦{total.toLocaleString()}</span>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-3">
                {step === "cart" ? (
                  <Button className="w-full bg-emerald-600 h-12" onClick={() => setStep("payment")}>
                    Proceed to Payment <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                ) : (
                  <Button className="w-full bg-emerald-900 h-12" onClick={handleCompleteOrder}>
                    Confirm Payment Transfer
                  </Button>
                )}
                <p className="text-[10px] text-center text-slate-400 mt-2">
                  By completing your purchase, you agree to our Terms of Service and Privacy Policy.
                </p>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};