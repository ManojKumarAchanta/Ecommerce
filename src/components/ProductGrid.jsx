import React from 'react';
import { Search, Filter } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductGrid = ({
    products,
    onAddToCart,
    onQuickView,
    onWishlistToggle,
    wishlistedItems = [],
    searchQuery,
    selectedCategory,
    onClearFilters
}) => {
    if (products.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="mb-6">
                    <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                        No products found
                    </h3>
                    <p className="text-gray-500 mb-6">
                        {searchQuery
                            ? `No products found matching "${searchQuery}"`
                            : `No products available in ${selectedCategory === 'all' ? 'this category' : 'this category'}`
                        }
                    </p>
                </div>

                <div className="space-y-4">
                    <button
                        onClick={onClearFilters}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
                    >
                        Clear All Filters
                    </button>

                    <div className="text-sm text-gray-500">
                        <p>Try adjusting your search terms or filters</p>
                        <p>Or browse our complete product catalog</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        {selectedCategory === 'all' ? 'All Products' :
                            products[0]?.category?.replace('-', ' ').toUpperCase() || 'Products'}
                        {searchQuery && (
                            <span className="text-gray-600 font-normal">
                                {' '}- Search: "{searchQuery}"
                            </span>
                        )}
                    </h2>
                    <p className="text-gray-600 mt-1">
                        {products.length} product{products.length !== 1 ? 's' : ''} found
                    </p>
                </div>

                <div className="flex items-center space-x-4">
                    {/* View Toggle (Grid/List) - Future enhancement */}
                    <div className="hidden md:flex items-center space-x-2">
                        <button className="p-2 bg-blue-600 text-white rounded-lg">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </button>
                        <button className="p-2 bg-black text-white rounded-lg">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                        onQuickView={onQuickView}
                        onWishlistToggle={onWishlistToggle}
                        isWishlisted={wishlistedItems.includes(product.id)}
                    />
                ))}
            </div>

            {/* Load More Button (if needed) */}
            {products.length >= 12 && (
                <div className="text-center mt-12">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold">
                        Load More Products
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductGrid; 