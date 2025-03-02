"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartIcon() {
  const { getCartQuantity } = useCart();
  const totalItems = getCartQuantity();

  return (
    <Link href="/Cart" className="nav-link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-cart"
        viewBox="0 0 16 16"
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
      </svg>{" "}
      {/* Or any cart icon (SVG, FontAwesome, etc.) */}
      {totalItems > 0 && (
    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-black  text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
    {totalItems}
</span>
      )}
    </Link>
  );
}
