"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // ✅ Use next/image for optimization
import { FaTrash, FaArrowLeft } from "react-icons/fa";

type Product = {
    _id: string;
    productName: string;
    price: number;
    imageUrl: string;
    category: string;
};

export default function Cart() {
    const [cart, setCart] = useState<Product[]>([]);
    const router = useRouter();

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(savedCart);
    }, []);

    // Remove item from cart
    const removeFromCart = (productId: string) => {
        const updatedCart = cart.filter((item) => item._id !== productId);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // Handle checkout confirmation
    const handleCheckout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        const confirmCheckout = window.confirm("Are you sure you want to proceed to checkout?");
        if (confirmCheckout) {
            router.push("/checkout"); // Redirect to Checkout Page
        }
    };

    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0).toFixed(2);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

            {/* Back to Store */}
            <button
                onClick={() => router.push("/store")}
                className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition mb-4"
            >
                <FaArrowLeft /> Back to Store
            </button>

            {/* Cart Items */}
            {cart.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        {cart.map((product) => (
                            <div key={product._id} className="flex items-center justify-between border p-4 rounded-lg shadow-md mb-4">
                                {/* ✅ Replaced <img> with next/image */}
                                <Image
                                    src={product.imageUrl}
                                    alt={product.productName}
                                    width={80}  // Set width
                                    height={80} // Set height
                                    className="w-20 h-20 object-cover rounded-lg"
                                    priority={true} // Improves performance
                                />
                                <div className="flex-1 ml-4">
                                    <h2 className="text-lg font-semibold">{product.productName}</h2>
                                    <p className="text-gray-500">{product.category}</p>
                                    <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
                                </div>
                                <button onClick={() => removeFromCart(product._id)} className="text-red-500 hover:text-red-700">
                                    <FaTrash size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <p className="text-lg font-semibold">Total: ${totalPrice}</p>
                        <button
                            onClick={handleCheckout}
                            className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                        >
                            Proceed to Checkout
                        </button>
                        <button
                            onClick={() => {
                                localStorage.removeItem("cart");
                                setCart([]);
                            }}
                            className="w-full mt-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
