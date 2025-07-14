import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white" id='footer'>
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="text-2xl font-bold text-blue-400 mb-4">
                            Walker Tape Co.
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            We are a team of adhesive experts dedicated to providing the best products
                            for your professional and personal needs. Quality, reliability, and innovation
                            are at the heart of everything we do.
                        </p>

                        {/* Social Media */}
                        <div className="flex space-x-4">
                            <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition duration-200">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gray-800 hover:bg-blue-400 p-2 rounded-full transition duration-200">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition duration-200">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition duration-200">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#products" className="text-gray-300 hover:text-white transition duration-200">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-300 hover:text-white transition duration-200">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-300 hover:text-white transition duration-200">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Product Categories */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                                    Hair Spa Items
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                                    Footwear Solutions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                                    Adhesive Removers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                                    Shop Tapes
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                                    Tools & Accessories
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition duration-200">
                                    New Arrivals
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-gray-300">
                                        123 Adhesive Street<br />
                                        Tape City, TC 12345<br />
                                        United States
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <a href="tel:+11234567890" className="text-gray-300 hover:text-white transition duration-200">
                                    +1 (123) 456-7890
                                </a>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <a href="mailto:info@walkertape.com" className="text-gray-300 hover:text-white transition duration-200">
                                    info@walkertape.com
                                </a>
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold mb-3">Newsletter</h4>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none -2 -blue-500 text-white placeholder-gray-400"
                                />
                                <button className="text-blue-600 ">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © 2024 Walker Tape Co. All rights reserved.
                        </div>

                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                                Shipping Policy
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                                Return Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 