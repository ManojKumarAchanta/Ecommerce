import React, { useState } from 'react';
import { ShoppingBag, Star, Truck, Shield, ArrowRight, Users, Award } from 'lucide-react';

const GatewayPage = ({ onProceedToShop }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleProceed = () => {
        setIsAnimating(true);
        setTimeout(() => {
            onProceedToShop();
        }, 500);
    };

    const features = [
        {
            icon: <ShoppingBag className="w-8 h-8" />,
            title: "Premium Products",
            description: "High-quality adhesive solutions for professionals"
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Expert Support",
            description: "24/7 customer service and technical assistance"
        },
        {
            icon: <Truck className="w-8 h-8" />,
            title: "Fast Shipping",
            description: "Free shipping on orders over $50"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Quality Guarantee",
            description: "30-day money-back guarantee"
        }
    ];

    const stats = [
        { number: "500+", label: "Happy Customers" },
        { number: "50+", label: "Product Varieties" },
        { number: "24/7", label: "Support Available" },
        { number: "100%", label: "Quality Assured" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-blue-600">
                            Walker Tape Co.
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 text-gray-600">
                                <Users className="w-5 h-5" />
                                <span className="text-sm">Trusted by 500+ professionals</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className={`transition-all duration-500 ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            Professional
                            <span className="text-yellow-500"> Adhesive </span>
                            Solutions
                        </h1>

                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-600 leading-relaxed">
                            From hair spa essentials to industrial tapes, we provide premium adhesive products
                            for professionals and enthusiasts alike. Quality you can trust.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <button
                                onClick={handleProceed}
                                className="bg-blue-600 flex items-center justify-center gap-2"
                            >
                                <span>Enter Our Store</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="text-blue-500 border border-black">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Why Choose Walker Tape Co.?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We're committed to providing the best adhesive solutions with exceptional service
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                                <div className="text-blue-600 mb-4 flex justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Experience Premium Quality?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join thousands of professionals who trust Walker Tape Co. for their adhesive needs
                    </p>
                    <button
                        onClick={handleProceed}
                        className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
                    >
                        Start Shopping Now
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <Award className="w-6 h-6 text-yellow-400" />
                        <span className="text-lg font-semibold">Walker Tape Co.</span>
                    </div>
                    <p className="text-gray-400">
                        © 2024 Walker Tape Co. All rights reserved. | Premium adhesive solutions for professionals.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default GatewayPage; 