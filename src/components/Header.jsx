import React from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';

const Header = ({
    searchQuery,
    setSearchQuery,
    cartItemsCount,
    onCartClick,
    isMenuOpen,
    setIsMenuOpen
}) => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="text-2xl font-bold text-blue-600">
                            Walker Tape Co.
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-200">Home</a>
                        <a href="#products" className="text-gray-700 hover:text-blue-600 transition duration-200">Products</a>
                        <a href="#about" className="text-gray-700 hover:text-blue-600 transition duration-200">About</a>
                        <a href="#footer" className="text-gray-700 hover:text-blue-600 transition duration-200">Contact</a>
                    </nav>

                    {/* Search and Cart */}
                    <div className="flex items-center space-x-4">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500 transition duration-200"
                            />
                        </div>
                        <button
                            onClick={onCartClick}
                            className="relative p-2 text-blue-600 hover:text-blue-700 transition duration-200"
                        >
                            <ShoppingCart className="w-6 h-6" />
                            {cartItemsCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                                    {cartItemsCount}
                                </span>
                            )}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-blue-600 hover:text-blue-700 transition duration-200"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t animate-slideDown">
                    <div className="px-4 py-2 space-y-2">
                        <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-200">Home</a>
                        <a href="#products" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-200">Products</a>
                        <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-200">About</a>
                        <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600 transition duration-200">Contact</a>
                        <div className="pt-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500 transition duration-200"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header; 