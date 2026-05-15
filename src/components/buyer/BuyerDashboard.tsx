import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Heart, Package, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BuyerDashboardProps {
  setView: (view: "home" | "shop" | "dashboard" | "checkout") => void;
}

export const BuyerDashboard = ({ setView }: BuyerDashboardProps) => {
  const stats = [
    { label: "Total Orders", value: "12", icon: ShoppingBag, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Wishlist", value: "8", icon: Heart, color: "text-pink-600", bg: "bg-pink-50" },
    { label: "In Transit", value: "2", icon: Package, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "Reviews", value: "5", icon: Clock, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  const recentOrders = [
    { id: "ORD-7721", date: "Oct 12, 2023", total: "₦45,000", status: "Delivered" },
    { id: "ORD-8823", date: "Oct 08, 2023", total: "₦12,500", status: "In Transit" },
    { id: "ORD-9912", date: "Sep 28, 2023", total: "₦67,800", status: "Delivered" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome back, Peter!</h1>
          <p className="text-slate-500">Track your orders and manage your profile</p>
        </div>
        <Button onClick={() => setView("shop")} className="bg-emerald-600">
          Start Shopping <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100 text-sm text-slate-500">
                    <th className="pb-4 font-medium">Order ID</th>
                    <th className="pb-4 font-medium">Date</th>
                    <th className="pb-4 font-medium">Total</th>
                    <th className="pb-4 font-medium">Status</th>
                    <th className="pb-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {recentOrders.map((order, i) => (
                    <tr key={i} className="border-b border-slate-50 last:border-0">
                      <td className="py-4 font-medium">{order.id}</td>
                      <td className="py-4 text-slate-600">{order.date}</td>
                      <td className="py-4 font-semibold">{order.total}</td>
                      <td className="py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          order.status === "Delivered" ? "bg-emerald-50 text-emerald-700" : "bg-orange-50 text-orange-700"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <Button variant="ghost" size="sm" className="text-emerald-600">View</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-slate-500">Our customer support is available 24/7 to assist you with any issues.</p>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="https://wa.me/2348134817733" target="_blank" rel="noopener noreferrer">
                <span className="bg-emerald-50 text-emerald-600 p-2 rounded-md mr-3">
                  <Package className="w-4 h-4" />
                </span>
                Track Package
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="https://wa.me/2348134817733" target="_blank" rel="noopener noreferrer">
                <span className="bg-blue-50 text-blue-600 p-2 rounded-md mr-3">
                  <ShoppingBag className="w-4 h-4" />
                </span>
                Request Refund
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};