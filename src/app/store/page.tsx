"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import { FaSearch, FaHeart, FaShoppingCart, FaChevronDown } from "react-icons/fa";

type Product = {
    _id: string;
    productName: string;
    description: string;
    price: number;
    rating: number;
    imageUrl: string;
    status: string;
    category: string;
};

export default function Store() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [cart, setCart] = useState<Product[]>([]);
    const [wishlist, setWishlist] = useState<Product[]>([]);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
    const categoryRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data: Product[] = await sanityFetch(allproducts);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();

        // Load cart & wishlist from localStorage
        setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
        setWishlist(JSON.parse(localStorage.getItem("wishlist") || "[]"));
    }, []);

    // Close category dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
                setShowCategoryDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Add to Cart function
    const addToCart = (product: Product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        if (window.confirm(`${product.productName} added to cart! Go to cart?`)) {
            router.push("/cart");
        }
    };

    // Add to Wishlist function
    const addToWishlist = (product: Product) => {
        const updatedWishlist = [...wishlist, product];
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

        if (window.confirm(`${product.productName} added to wishlist! Go to wishlist?`)) {
            router.push("/wishlist");
        }
    };

    // Extract unique categories dynamically
    const categories = ["All", ...new Set(products.map((product) => product.category))];

    // Filter products based on selected category & search query
    const filteredProducts = products.filter((product) => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch = product.productName.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container mx-auto p-6">

            {/* Search & Category Filter */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                
                {/* Category Dropdown */}
                <div className="relative" ref={categoryRef}>
                    <button
                        onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                        className="border p-2 rounded-lg bg-white shadow-md flex items-center justify-between w-52"
                    >
                        {selectedCategory} <FaChevronDown className="ml-2 text-gray-600" />
                    </button>
                    
                    {showCategoryDropdown && (
                        <ul className="absolute left-0 w-full bg-white border rounded-lg shadow-md mt-1 z-10">
                            {categories.map((category) => (
                                <li
                                    key={category}
                                    className="p-2 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setShowCategoryDropdown(false);
                                    }}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Product List */}
            {filteredProducts.length === 0 ? (
                <p className="text-center text-gray-500">No products found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <div key={product._id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
                            {/* Product Image */}
                            <img
                                src={product.imageUrl}
                                alt={product.productName}
                                className="w-full h-58 object-cover rounded-lg mb-4"
                            />

                            {/* Product Name */}
                            <h2 className="text-xl font-semibold text-black">{product.productName}</h2>

                            {/* Status & Category */}
                            <div className="flex justify-between text-sm text-gray-600 mt-1">
                                <span className="bg-gray-200 text-red-700 px-2 py-1 rounded-md">{product.status}</span>
                                <span className="bg-gray-200 text-red-700 px-2 py-1 rounded-md">{product.category}</span>
                            </div>

                            {/* Product Description */}
                            <p className="text-gray-600 text-sm mt-2">{product.description}</p>

                            {/* Price */}
                            <p className="text-gray-700 mt-2">
                                <span className="text-lg font-bold text-green-600">
                                    ${product.price.toFixed(2)}
                                </span>
                            </p>

                            {/* Rating */}
                            <div className="flex items-center mt-2">
                                <span className="text-yellow-500">⭐⭐⭐⭐ {product.rating}</span>
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex gap-2">
                                <button
                                    onClick={() => addToCart(product)}
                                    className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2"
                                >
                                    <FaShoppingCart /> Add to Cart
                                </button>
                                <button
                                    onClick={() => addToWishlist(product)}
                                    className="w-full border border-black text-black py-2 rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2"
                                >
                                    <FaHeart /> Wishlist
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

// 🛠️ SearchBar Component (Remains Same)
function SearchBar({ searchQuery, setSearchQuery }: { searchQuery: string, setSearchQuery: (query: string) => void }) {
    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border p-2 pl-10 rounded-lg bg-white shadow-md"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
    );
}
