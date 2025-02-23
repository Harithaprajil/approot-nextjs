'use client'
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';

interface GoToCartButtonProps {
    product: {
        id: number;
        name: string;
        price: number;
    };
}

export default function GoToCartButton({ product }: GoToCartButtonProps) {
    const router = useRouter();
    const { addToCart } = useCart();

    const handleGoToCart = () => {
        addToCart(product); // Add product to cart
        router.push('/Cart'); // Navigate to cart page
    };

    return (
        <button 
            onClick={handleGoToCart} 
            className="px-4 py-2 bg-blue-500 text-black rounded-md hover:bg-blue-600 transition-all"
            aria-label="Go to Cart"
        >
            Go To Cart
        </button>
    );
}
