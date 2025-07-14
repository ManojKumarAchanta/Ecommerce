import React from 'react';
import { Star, Eye, Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({
    product,
    onAddToCart,
    onQuickView,
    onWishlistToggle,
    isWishlisted = false
}) => {
    return (
        <div className="bg-white rounded-lg max-w-2xl shadow-sm overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-1 group max-w-xl">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Quick Action Buttons */}
                <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button
                        onClick={() => onQuickView(product)}
                        className="bg-blue-600 text-white p-2 rounded-full shadow-md"
                        title="Quick View"
                    >
                        <Eye className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => onWishlistToggle(product.id)}
                        className={`p-2 rounded-full shadow-md ${isWishlisted
                            ? 'bg-red-500 text-white'
                            : 'bg-black text-white'
                            }`}
                        title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                    >
                        <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                </div>

                {/* Stock Badge */}
                {!product.inStock && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Out of Stock
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute bottom-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {product.category.replace('-', ' ').toUpperCase()}
                </div>
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition duration-200">
                    {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-3">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${i < Math.floor(product.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                        {product.rating} ({product.reviews})
                    </span>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-bold text-blue-600">
                            ${product.price}
                        </span>
                        {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">
                                ${product.originalPrice}
                            </span>
                        )}
                    </div>
                </div>
                <button
                    onClick={() => onAddToCart(product)}
                    disabled={!product.inStock}
                    className="bg-blue-600 flex items-center gap-2"
                >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                </button>

                {/* Features Preview */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                            >
                                {feature}
                            </span>
                        ))}
                        {product.features.length > 2 && (
                            <span className="text-gray-500 text-xs">+{product.features.length - 2} more</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard; 