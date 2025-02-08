"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

type Product = {
    _id: string;
    productName: string;
    price: number;
    imageUrl: string;
    category: string;
};

export default function Checkout() {
    const [cart, setCart] = useState<Product[]>([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        postalCode: "",
        phone: "",
    });

    const router = useRouter();

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(savedCart);
    }, []);

    const totalPrice = cart.reduce((sum, product) => sum + product.price, 0).toFixed(2);

    // Handle form input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Order placed successfully!");
        router.push("/place-order"); // Redirect to place order page
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

            {/* Back to Cart Button */}
            <button
                onClick={() => router.push("/cart")}
                className="flex items-center gap-2 bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition mb-6"
            >
                <FaArrowLeft /> Back to Cart
            </button>

            {/* Checkout Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Billing Details */}
                <form onSubmit={handleSubmit} className="md:col-span-2 space-y-4 bg-gray-100 p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Billing & Shipping Information</h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border rounded-lg"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border rounded-lg"
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Street Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border rounded-lg"
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 border rounded-lg"
                        />
                        <input
                            type="text"
                            name="postalCode"
                            placeholder="Postal Code"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            required
                            className="w-full p-2 border rounded-lg"
                        />
                    </div>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border rounded-lg"
                    />

                    <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                        Place order
                    </button>
                </form>

                {/* Order Summary */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                    {cart.length === 0 ? (
                        <p className="text-gray-500">No items in cart.</p>
                    ) : (
                        <>
                            <div className="space-y-4">
                                {cart.map((product) => (
                                    <div key={product._id} className="flex items-center justify-between border-b pb-2">
                                        <img src={product.imageUrl} alt={product.productName} className="w-16 h-16 rounded-lg object-cover" />
                                        <div className="flex-1 ml-4">
                                            <p className="text-sm font-semibold">{product.productName}</p>
                                            <p className="text-sm text-gray-500">{product.category}</p>
                                        </div>
                                        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex justify-between text-lg font-bold">
                                <span>Total:</span>
                                <span>${totalPrice}</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
