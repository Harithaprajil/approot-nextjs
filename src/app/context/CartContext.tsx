'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

// Define types for cart items
interface CartItem {
    id: number;
    Title: string;
    Price: number;
    Image: any;
    quantity: number;
    index:any;
}

// Define the context type
interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart:(id:number)=> void;
    getCartQuantity: () => number;
}

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider Component
export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {

        setCart((prev) => {
            const existingItem = prev.find((p) => p.id === item.id);
            if (existingItem) {
                return prev.map((p) =>
                    p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => {
            const existingItem = prev.find((p) => p.id === id);
            if (existingItem && existingItem.quantity > 1) {
                return prev.map((p) =>
                    p.id === id ? { ...p, quantity: p.quantity - 1 } : p
                );
            }
            return prev.filter((p) => p.id !== id);
        });
    };

    const getCartQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart,removeFromCart,getCartQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

// Custom Hook to use Cart Context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
