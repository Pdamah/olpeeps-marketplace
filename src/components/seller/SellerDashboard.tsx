import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Plus, 
  Package, 
  BarChart3, 
  Settings, 
  Image as ImageIcon,
  Trash2,
  Edit2
} from "lucide-react";
import { toast } from "sonner";

export const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState<"inventory" | "upload">("inventory");
  const [products, setProducts] = useState([
    { id: 1, name: "Premium Leather Watch", price: "₦12,500", stock: 45, status: "Active" },
    { id: 2, name: "Minimalist Sneakers", price: "₦28,000", stock: 12, status: "Low Stock" },
    { id: 3, name: "Denim Jacket", price: "₦18,500", stock: 0, status: "Out of Stock" },
  ]);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Product uploaded successfully!");
    setActiveTab("inventory");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Seller Dashboard</h1>
          <p className="text-slate-500">Manage your store, inventory, and sales</p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant={activeTab === "inventory" ? "default" : "outline"}
            onClick={() => setActiveTab("inventory")}
            className={activeTab === "inventory" ? "bg-emerald-900" : ""}
          >
            <Package className="mr-2 w-4 h-4" /> Inventory
          </Button>
          <Button 
            variant={activeTab === "upload" ? "default" : "outline"}
            onClick={() => setActiveTab("upload")}
            className={activeTab === "upload" ? "bg-emerald-600" : ""}
          >
            <Plus className="mr-2 w-4 h-4" /> New Product
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <Card className="border-none shadow-sm">
            <CardContent className="p-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start text-emerald-600 bg-emerald-50">
                <BarChart3 className="mr-3 w-4 h-4" /> Analytics
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Package className="mr-3 w-4 h-4" /> My Products
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-3 w-4 h-4" /> Store Settings
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-sm bg-emerald-900 text-white">
            <CardContent className="p-6">
              <p className="text-emerald-200 text-sm mb-1">Total Revenue</p>
              <h3 className="text-3xl font-bold mb-4">₦1,250,000</h3>
              <div className="h-2 bg-emerald-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400 w-3/4" />
              </div>
              <p className="text-xs text-emerald-300 mt-2">75% of monthly target</p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          {activeTab === "inventory" ? (
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle>Inventory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-100 text-sm text-slate-500">
                        <th className="pb-4 font-medium">Product</th>
                        <th className="pb-4 font-medium">Price</th>
                        <th className="pb-4 font-medium">Stock</th>
                        <th className="pb-4 font-medium">Status</th>
                        <th className="pb-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {products.map((product) => (
                        <tr key={product.id} className="border-b border-slate-50 last:border-0">
                          <td className="py-4 font-medium">{product.name}</td>
                          <td className="py-4 text-slate-600">{product.price}</td>
                          <td className="py-4 font-medium">{product.stock} pcs</td>
                          <td className="py-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                              product.status === "Active" ? "bg-emerald-50 text-emerald-700" : 
                              product.status === "Low Stock" ? "bg-orange-50 text-orange-700" : 
                              "bg-red-50 text-red-700"
                            }`}>
                              {product.status}
                            </span>
                          </td>
                          <td className="py-4">
                            <div className="flex gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600">
                                <Edit2 className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-none shadow-sm">
              <CardHeader>
                <CardTitle>Upload New Product</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUpload} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Product Name</Label>
                      <Input placeholder="e.g. Premium Leather Belt" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Price (₦)</Label>
                      <Input type="number" placeholder="5000" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Input placeholder="Fashion, Electronics, etc." />
                    </div>
                    <div className="space-y-2">
                      <Label>Initial Stock</Label>
                      <Input type="number" placeholder="10" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Product Description</Label>
                    <Textarea placeholder="Describe your product details..." className="min-h-[120px]" required />
                  </div>

                  <div className="space-y-2">
                    <Label>Product Images</Label>
                    <div className="border-2 border-dashed border-emerald-100 rounded-lg p-12 text-center hover:bg-emerald-50/50 transition-colors cursor-pointer group">
                      <ImageIcon className="mx-auto w-12 h-12 text-emerald-200 group-hover:text-emerald-400 mb-4 transition-colors" />
                      <p className="text-sm font-medium text-slate-600">Click to upload or drag and drop</p>
                      <p className="text-xs text-slate-400 mt-1">PNG, JPG or WebP (max. 2MB)</p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <Button variant="outline" type="button" onClick={() => setActiveTab("inventory")}>Cancel</Button>
                    <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700 px-8">Publish Product</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};