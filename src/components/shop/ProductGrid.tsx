import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, ShoppingCart, Star } from "lucide-react";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    name: "Classic Silk Shirt",
    price: 15000,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1596755094514-f87034a7a241?auto=format&fit=crop&q=80&w=400",
    rating: 4.8
  },
  {
    id: 2,
    name: "Wireless Earbuds Pro",
    price: 32000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400",
    rating: 4.5
  },
  {
    id: 3,
    name: "Leather Minimalist Wallet",
    price: 8500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=400",
    rating: 4.9
  },
  {
    id: 4,
    name: "Ceramic Coffee Set",
    price: 12000,
    category: "Home",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400",
    rating: 4.7
  },
  {
    id: 5,
    name: "Cotton Canvas Tote",
    price: 4500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400",
    rating: 4.6
  },
  {
    id: 6,
    name: "Geometric Floor Lamp",
    price: 45000,
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473884658-6697bc93f051?auto=format&fit=crop&q=80&w=400",
    rating: 4.4
  }
];

interface ProductGridProps {
  addToCart: (product: any) => void;
}

export const ProductGrid = ({ addToCart }: ProductGridProps) => {
  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Featured Products</h2>
          <p className="text-slate-500">Quality products, handpicked for you</p>
        </div>
        <div className="flex gap-2">
          {["All", "Fashion", "Home", "Tech"].map((cat) => (
            <Button key={cat} variant="ghost" size="sm" className="rounded-full px-4">
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="group border-none shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur-sm text-xs font-semibold px-2 py-1 rounded-md text-emerald-700 uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
            </div>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-slate-800 line-clamp-1">{product.name}</h3>
                <div className="flex items-center text-orange-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-xs ml-1 font-medium">{product.rating}</span>
                </div>
              </div>
              <p className="text-2xl font-black text-emerald-900">₦{product.price.toLocaleString()}</p>
            </CardContent>
            <CardFooter className="pb-6">
              <Button 
                className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors group"
                onClick={() => handleAddToCart(product)}
              >
                <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform" /> 
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};