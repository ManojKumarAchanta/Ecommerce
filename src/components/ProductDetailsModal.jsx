import React, { useState } from 'react';
import { X, Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';

const ProductDetailsModal = ({
    product,
    isOpen,
    onClose,
    onAddToCart,
    onWishlistToggle,
    isWishlisted = false
}) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    if (!product || !isOpen) return null;

    const images = [
        product.image,
        // Add more images here if available
    ];

    const reviews = [
        {
            id: 1,
            user: "Sarah M.",
            rating: 5,
            date: "2024-01-15",
            comment: "Excellent quality! This tape holds perfectly and is easy to remove. Highly recommend for professional use."
        },
        {
            id: 2,
            user: "Mike R.",
            rating: 4,
            date: "2024-01-10",
            comment: "Great product, works as advertised. The only reason I didn't give 5 stars is the price could be a bit lower."
        },
        {
            id: 3,
            user: "Lisa K.",
            rating: 5,
            date: "2024-01-05",
            comment: "Perfect for my hair extensions. Stays in place all day and doesn't irritate my skin."
        }
    ];

    const relatedProducts = [
        // This would be populated with actual related products
    ];

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        onAddToCart({ ...product, quantity });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-semibold">Product Details</h2>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => onWishlistToggle(product.id)}
                            className={`p-2 rounded-full ${isWishlisted
                                ? 'bg-red-500 '
                                : 'bg-black '
                                }`}
                            title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                        >
                            <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                        </button>
                        <button className="p-2 bg-black  rounded-full">
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-500 bg-gray-100 rounded-full"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                    <div className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Product Images */}
                            <div>
                                <div className="relative">
                                    <img
                                        src={images[selectedImage]}
                                        alt={product.name}
                                        className="w-full h-80 object-cover rounded-lg"
                                    />
                                    {!product.inStock && (
                                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            Out of Stock
                                        </div>
                                    )}
                                </div>

                                {/* Thumbnail Images */}
                                {images.length > 1 && (
                                    <div className="flex space-x-2 mt-4">
                                        {images.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedImage(index)}
                                                className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                                                    }`}
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${product.name} ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div>
                                <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>

                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < Math.floor(product.rating)
                                                    ? 'text-yellow-400 fill-current'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-gray-600 ml-2">
                                        {product.rating} ({product.reviews} reviews)
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <span className="text-3xl font-bold text-blue-600">
                                        ${product.price}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-lg text-gray-500 line-through ml-2">
                                            ${product.originalPrice}
                                        </span>
                                    )}
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="font-semibold mb-3">Key Features:</h4>
                                    <ul className="space-y-2">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="text-gray-600 flex items-center">
                                                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Product Details */}
                                <div className="mb-6 space-y-2">
                                    <p className="text-sm text-gray-500">SKU: {product.sku}</p>
                                    <p className="text-sm text-gray-500">
                                        Status: {product.inStock ? 'In Stock' : 'Out of Stock'}
                                    </p>
                                </div>

                                {/* Quantity and Add to Cart */}
                                <div className="mb-6">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <label className="font-semibold">Quantity:</label>
                                        <div className="flex items-center border border-gray-300 rounded-lg">
                                            <button
                                                onClick={() => handleQuantityChange(quantity - 1)}
                                                className="px-3 py-2 bg-gray-100 text-gray-700"
                                                disabled={quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span className="px-4 py-2 border-x border-gray-300">
                                                {quantity}
                                            </span>
                                            <button
                                                onClick={() => handleQuantityChange(quantity + 1)}
                                                className="px-3 py-2 bg-gray-100 text-gray-700"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleAddToCart}
                                        disabled={!product.inStock}
                                        className="w-full bg-blue-600 "
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        <span>Add to Cart - ${(product.price * quantity).toFixed(2)}</span>
                                    </button>
                                </div>

                                {/* Shipping Info */}
                                <div className="border-t pt-4 space-y-3">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Truck className="w-4 h-4 mr-2" />
                                        Free shipping on orders over $50
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Shield className="w-4 h-4 mr-2" />
                                        30-day money-back guarantee
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <RotateCcw className="w-4 h-4 mr-2" />
                                        Easy returns and exchanges
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reviews Section */}
                        <div className="mt-12 border-t pt-8">
                            <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
                            <div className="space-y-6">
                                {reviews.map(review => (
                                    <div key={review.id} className="border-b pb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center">
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${i < review.rating
                                                                ? 'text-yellow-400 fill-current'
                                                                : 'text-gray-300'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="ml-2 font-semibold">{review.user}</span>
                                            </div>
                                            <span className="text-sm text-gray-500">{review.date}</span>
                                        </div>
                                        <p className="text-gray-600">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsModal; 