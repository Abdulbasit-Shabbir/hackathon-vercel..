import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="bg-black text-white py-8 px-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {/* Column 1 */}
                <div>
                    <h3>  <Link href="store" className="text-sm font-semibold mb-4">FIND A STORE </Link></h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:underline">Become a Member</Link></li>
                        <li><Link href="sign-up" className="hover:underline">Sign Up for Email</Link></li>
                        <li><Link href="#" className="hover:underline">Student Discounts</Link></li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    <h3> <Link href="help" className="text-sm font-semibold mb-4">GET HELP </Link></h3> 
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:underline">Order Status</Link></li>
                        <li><Link href="#" className="hover:underline">Delivery</Link></li>
                        <li><Link href="#" className="hover:underline">Returns</Link></li>
                        <li><Link href="#" className="hover:underline">Payment Options</Link></li>
                        <li><Link href="#" className="hover:underline">Contact Us on Nike.com</Link></li>
                        <li><Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="#" className="hover:underline">News</Link></li>
                        <li><Link href="#" className="hover:underline">Careers</Link></li>
                        <li><Link href="#" className="hover:underline">Investors</Link></li>
                        <li><Link href="#" className="hover:underline">Sustainability</Link></li>
                    </ul>
                </div>

                {/* Column 4 (Social Media Icons) */}
                <div className="flex justify-start lg:justify-end items-start gap-4">
                    <FaTwitter className="text-lg cursor-pointer hover:text-gray-400" />
                    <FaFacebook className="text-lg cursor-pointer hover:text-gray-400" />
                    <FaYoutube className="text-lg cursor-pointer hover:text-gray-400" />
                    <FaInstagram className="text-lg cursor-pointer hover:text-gray-400" />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400 max-w-7xl mx-auto">
                {/* Country and Copyright */}
                <div className="flex mb-4 md:mb-0 gap-2">
                    <FaLocationDot className="text-lg cursor-pointer hover:text-white-400"/>
                    <p className="cursor-pointer hover:text-white-600"> India</p>
                    <p>&copy; 2023 Nike, Inc. All Rights Reserved</p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                    <Link href="#" className="hover:underline">Guides</Link>
                    <Link href="#" className="hover:underline">Terms of Sale</Link>
                    <Link href="#" className="hover:underline">Terms of Use</Link>
                    <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
}
