"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaShoppingCart, FaTruckMoving } from "react-icons/fa";

export default function OrderConfirmation() {
    const router = useRouter();

    return (
        <div className="container mx-auto p-6 text-center flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-green-600 mb-4">Order Placed Successfully! 🎉</h1>
            <p className="text-lg text-gray-700 mb-6">
                Thank you for shopping with us. Your order is on its way! 🚚💨
            </p>

            {/* Moving Truck Animation */}
            <div className="relative w-full max-w-4xl h-40 overflow-hidden">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 9,
                        ease: "easeInOut",
                    }}
                    className="text-7xl text-black "
                >
                    <FaTruckMoving />
                </motion.div>
            </div>

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
