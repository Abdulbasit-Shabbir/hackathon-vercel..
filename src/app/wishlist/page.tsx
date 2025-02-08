"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import next/image
import { motion } from "framer-motion";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";

type Product = {
    _id: string;
    productName: string;
    description: string;
    price: number;
    imageUrl: string;
};

export default function Wishlist() {
    const [wishlist, setWishlist] = useState<Product[]>([]);
    const [hearts, setHearts] = useState<number[]>([]); // Floating hearts animation
    const router = useRouter();

    useEffect(() => {
        // Load wishlist from localStorage and remove duplicates
        const savedWishlist: Product[] = JSON.parse(localStorage.getItem("wishlist") || "[]");

        // Remove duplicate items based on _id
        const uniqueWishlist = Array.from(new Map(savedWishlist.map(item => [item._id, item])).values());

        setWishlist(uniqueWishlist);
        localStorage.setItem("wishlist", JSON.stringify(uniqueWishlist)); // Persist cleaned list

        // Prevent hydration error by setting hearts on client
        setHearts([...Array(10).keys()]); // Generates 10 floating hearts
    }, []);

    // Remove item from wishlist
    const removeFromWishlist = (productId: string) => {
        const updatedWishlist = wishlist.filter((product) => product._id !== productId);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Persist changes
    };

    return (
        <div className="container mx-auto p-6 text-center flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600 mb-4 flex items-center gap-2">
                <FaHeart className="text-5xl animate-pulse" /> Your Wishlist ❤️
            </h1>
            <p className="text-lg text-gray-700 mb-6">Your favorite products are saved here!</p>

            {/* Floating Hearts Animation */}
            <div className="relative w-full max-w-lg h-40 overflow-hidden">
                {hearts.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-red-500 text-2xl"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "-100%", opacity: 1 }}
                        transition={{
                            delay: i * 0.3, // Staggered effect
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                        }}
                        style={{ left: `${Math.random() * 100}%` }}
                    >
                        ❤️
                    </motion.div>
                ))}
            </div>

            {/* Wishlist Items */}
            {wishlist.length === 0 ? (
                <p className="text-gray-500">No items in your wishlist yet.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl mt-6">
                    {wishlist.map((product, index) => (
                        <div key={`${product._id}-${index}`} className="border p-4 rounded-lg shadow-md bg-white">
                            <Image
                                src={product.imageUrl}
                                alt={product.productName}
                                width={300} // Set a reasonable width
                                height={200} // Set a reasonable height
                                className="w-full h-40 object-cover rounded-lg"
                            />
                            <h2 className="text-xl font-semibold mt-2">{product.productName}</h2>
                            <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>

                            {/* Remove from Wishlist Button */}
                            <button
                                onClick={() => removeFromWishlist(product._id)}
                                className="mt-3 flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                            >
                                <FaTrash /> Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Continue Shopping Button */}
            <button
                onClick={() => router.push("/store")}
                className="mt-6 flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
                <FaShoppingCart /> Continue Shopping
            </button>
        </div>
    );
}
