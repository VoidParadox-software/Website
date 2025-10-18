"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase";
import { doc, onSnapshot, updateDoc, arrayRemove } from "firebase/firestore";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plus, Minus, Trash2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isUpdating, setIsUpdating] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (!user) return;

    const cartRef = doc(db, "carts", user.uid);
    const unsubscribe = onSnapshot(cartRef, (doc) => {
      if (doc.exists()) {
        setCartItems(doc.data().items || []);
      } else {
        setCartItems([]);
      }
    });

    return () => unsubscribe();
  }, [user]);

  const updateItemQuantity = async (itemId: string, newQuantity: number) => {
    if (!user || newQuantity < 1) return;
    setIsUpdating(itemId);
    const cartRef = doc(db, "carts", user.uid);
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    await updateDoc(cartRef, { items: updatedItems });
    setIsUpdating(null);
  };

  const removeItem = async (itemToRemove: CartItem) => {
    if (!user) return;
    setIsUpdating(itemToRemove.id);
    const cartRef = doc(db, "carts", user.uid);
    await updateDoc(cartRef, {
      items: arrayRemove(itemToRemove),
    });
    toast({
      title: "Item Removed",
      description: `${itemToRemove.name} has been removed from your cart.`,
    });
    setIsUpdating(null);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const taxes = subtotal * 0.05; // 5% tax estimate
  const total = subtotal + taxes;

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-16 w-16 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-8">
            Your Shopping Cart
          </h1>
          {cartItems.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card>
                  <CardContent className="p-6 space-y-6">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="font-bold">{item.name}</p>
                            <p className="text-sm text-muted-foreground">
                              ${item.price.toFixed(2)} each
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 border rounded-md p-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity - 1)
                              }
                              disabled={isUpdating === item.id}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span>{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity + 1)
                              }
                              disabled={isUpdating === item.id}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <p className="font-bold w-20 text-right">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item)}
                            disabled={isUpdating === item.id}
                          >
                            <Trash2 className="h-5 w-5 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes (Est.)</span>
                      <span>${taxes.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <Button className="w-full" disabled>
                      Proceed to Checkout
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
