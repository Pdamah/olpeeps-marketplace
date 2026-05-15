import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserRole } from "@/App";
import { toast } from "sonner";

interface AuthFormProps {
  onAuthSuccess: (role: UserRole) => void;
}

export const AuthForm = ({ onAuthSuccess }: AuthFormProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent, role: UserRole) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success(`Welcome back as a ${role}!`);
      onAuthSuccess(role);
    }, 1500);
  };

  return (
    <Card className="shadow-xl border-emerald-100">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-emerald-900">Get Started</CardTitle>
        <CardDescription>Secure login for buyers and sellers</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="buyer" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="buyer">Buyer</TabsTrigger>
            <TabsTrigger value="seller">Seller</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buyer">
            <form onSubmit={(e) => handleSubmit(e, "buyer")} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="buyer-email">Email</Label>
                <Input id="buyer-email" type="email" placeholder="name@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="buyer-password">Password</Label>
                <Input id="buyer-password" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={loading}>
                {loading ? "Signing in..." : "Sign in as Buyer"}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="seller">
            <form onSubmit={(e) => handleSubmit(e, "seller")} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="seller-email">Email</Label>
                <Input id="seller-email" type="email" placeholder="seller@olpeeps.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="seller-password">Password</Label>
                <Input id="seller-password" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-emerald-900 hover:bg-emerald-950" disabled={loading}>
                {loading ? "Signing in..." : "Sign in as Seller"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 text-center">
        <p className="text-sm text-slate-500">
          Don't have an account? <a href="#" className="text-emerald-600 font-medium">Sign up</a>
        </p>
      </CardFooter>
    </Card>
  );
};