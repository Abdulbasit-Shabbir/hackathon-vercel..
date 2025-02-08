"use client";

import { useState } from "react";
import { FaChevronDown, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function HelpPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqData = [
        { question: "How do I track my order?", answer: "You can track your order using the tracking link sent via email after your purchase." },
        { question: "What is your return policy?", answer: "We accept returns within 30 days of purchase. Items must be unused and in original packaging." },
        { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide. Shipping costs vary depending on the destination." },
        { question: "How can I contact customer support?", answer: "You can reach us via phone, email, or by filling out the contact form below." },
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header */}
            <div className="bg-black text-white py-12 text-center">
                <h1 className="text-4xl font-bold">How Can We Help You?</h1>
                <p className="mt-2 text-lg text-gray-300">Find answers to your questions or contact our support team.</p>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* FAQs Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                        {faqData.map((item, index) => (
                            <div key={index} className="border-b border-gray-300">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center py-3 text-left font-semibold text-gray-800 hover:text-gray-600 focus:outline-none"
                                >
                                    {item.question}
                                    <FaChevronDown
                                        className={`transform transition-transform duration-300 ${
                                            openIndex === index ? "rotate-180" : "rotate-0"
                                        }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="p-3 text-gray-600">{item.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Support Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
                        <p className="text-gray-700 mb-4">If you need further assistance, feel free to reach out to us.</p>
                        <div className="space-y-3">
                            <p className="flex items-center gap-3 text-gray-800">
                                <FaPhone className="text-blue-600" /> +1 234 567 890
                            </p>
                            <p className="flex items-center gap-3 text-gray-800">
                                <FaEnvelope className="text-red-600" /> support@yourstore.com
                            </p>
                            <p className="flex items-center gap-3 text-gray-800">
                                <FaMapMarkerAlt className="text-green-600" /> 123 Street, City, Country
                            </p>
                        </div>
                    </div>

                    {/* Order Issues Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Order Issues</h2>
                        <p className="text-gray-700">Facing any order issues? Let us help you.</p>
                        <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
                            <li>Order not delivered</li>
                            <li>Received the wrong item</li>
                            <li>Damaged or missing items</li>
                        </ul>
                    </div>

                    {/* Returns & Refunds Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Returns & Refunds</h2>
                        <p className="text-gray-700">Learn about our easy return and refund policies.</p>
                        <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
                            <li>Return policy details</li>
                            <li>How to request a refund</li>
                            <li>Exchange process</li>
                        </ul>
                    </div>

                    {/* Payment & Billing Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Payment & Billing</h2>
                        <p className="text-gray-700">Payment options and billing-related questions.</p>
                        <ul className="list-disc pl-5 mt-3 text-gray-600 space-y-2">
                            <li>Accepted payment methods</li>
                            <li>How to apply discounts</li>
                            <li>Billing issues and solutions</li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <div className="md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Still Need Help? Contact Us</h2>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border rounded-lg"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border rounded-lg"
                                required
                            />
                            <textarea
                                placeholder="How can we assist you?"
                                className="w-full p-3 border rounded-lg h-32"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
