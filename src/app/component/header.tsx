"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBagShopping, FaRegHeart, FaBars } from "react-icons/fa6"; //
import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";

type Product = {
    _id: string;
    productName: string;
    category: string;
};

export default function Header() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [allProducts, setAllProducts] = useState<Product[]>([]);

    // Fetch all products when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products: Product[] = await sanityFetch(allproducts);
                setAllProducts(products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    // Search filter logic
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredProducts([]);
            return;
        }

        const filtered = allProducts.filter(
            (product) =>
                product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchTerm, allProducts]);

    return (
        <div>
            <div className="flex text-sm font-medium m-3">
                {/* Logo */}
                <Image className="mr-16 ml-16" src="/logo.png" alt="logo" height={18} width={19} />
                
                {/* Navigation Links */}
                <div className="flex ml-40 text-xl font-medium space-x-40">
                    <Link href="/store" className="hover:text-gray-500">Store</Link>
                    <Link href="/help" className="hover:text-gray-500">Help</Link>
                    <Link href="/join" className="hover:text-gray-500">Join Us</Link>
                    <Link href="/sign-up" className="hover:text-gray-500">Sign Up</Link>
                </div>
            </div>

            <div className="w-[1440px]">
                <div className="flex justify-between items-center px-4 md:px-20 py-4 h-[96px] w-[1440px] mx-auto">
                    {/* Nike Logo */}
                    <div className="flex items-center">
                        <Image
                            src="/nike-logo.png"
                            alt="Nike"
                            width={100}
                            height={100}
                            className="w-[50px] md:w-[78px] object-contain"
                        />
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden lg:flex gap-4 text-gray-700 font-medium text-sm md:text-base">
                        {["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"].map((item) => (
                            <Link key={item} href="#" className="hover:text-black whitespace-nowrap">
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Icon */}
                    <div className="flex lg:hidden">
                        <button>
                            <FaBars className="text-2xl text-gray-700 hover:text-black" />
                        </button>
                    </div>


                        

                        {/* Wishlist Icon */}
                        <Link href="/wishlist">
                        <FaRegHeart className="text-gray-700 md:w-6 md:h-6 w-5 h-5 cursor-pointer hover:text-black max-w-full h-auto" />
                        </Link>
                        {/* Cart Icon */}
                        <Link href="/cart">
                            <FaBagShopping className="text-gray-700 md:w-6 md:h-6 w-5 h-5 cursor-pointer hover:text-gray-400 max-w-full h-auto" />
                        </Link>
                    </div>
                </div>
            </div>
        
    );
}
