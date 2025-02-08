"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Next.js Image

type Product = {
    _id: string;
    productName: string;
    price: number;
    imageUrl: string;
};

export default function PlaceOrder() {
    const [cart, setCart] = useState<Product[]>([]);
    const [customerName, setCustomerName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("Credit Card");
    const router = useRouter();

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(savedCart);
    }, []);

    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0).toFixed(2);

    const handlePlaceOrder = () => {
        if (!customerName || !email || !address) {
            alert("Please fill in all details!");
            return;
        }

        // Simulate placing an order
        alert("Order placed successfully!");
        localStorage.removeItem("cart"); // Clear cart after order
        router.push("/order-confirmation"); // Redirect to confirmation page
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Place Your Order</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Order Summary */}
                <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    {cart.length === 0 ? (
                        <p className="text-gray-500">Your cart is empty.</p>
                    ) : (
                        cart.map((product) => (
                            <div key={product._id} className="flex items-center justify-between border p-4 rounded-lg shadow-md mb-4">
                                <div className="relative w-20 h-20"> {/* Fixed width and height for Next.js Image */}
                                    <Image 
                                        src={product.imageUrl} 
                                        alt={product.productName} 
                                        layout="fill" 
                                        objectFit="cover" 
                                        className="rounded-lg"
                                    />
                                </div>
                                <div className="flex-1 ml-4">
                                    <h2 className="text-lg font-semibold">{product.productName}</h2>
                                    <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))
                    )}
                    <h2 className="text-xl font-semibold mt-4">Total: ${totalPrice}</h2>
                </div>

                {/* Customer Details Form */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Shipping Details</h2>

                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full border p-2 rounded-lg mb-4"
                        placeholder="Enter your full name"
                    />

                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border p-2 rounded-lg mb-4"
                        placeholder="Enter your email"
                    />

                    <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
                    <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full border p-2 rounded-lg mb-4"
                        placeholder="Enter your full address"
                    ></textarea>

                    <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                    <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full border p-2 rounded-lg mb-4"
                    >
                        <option>Credit Card</option>
                        <option>PayPal</option>
                        <option>Cash on Delivery</option>
                    </select>

                    <button
                        onClick={handlePlaceOrder}
                        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                    >
                         Order Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}
