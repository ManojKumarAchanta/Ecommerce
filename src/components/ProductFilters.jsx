import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';

const ProductFilters = ({
    categories,
    selectedCategory,
    onCategoryChange,
    priceRange,
    onPriceRangeChange,
    sortBy,
    onSortChange,
    showFilters,
    setShowFilters
}) => {
    const [expandedSections, setExpandedSections] = useState({
        categories: true,
        price: true,
        sort: true
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const sortOptions = [
        { value: 'featured', label: 'Featured' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
        { value: 'rating', label: 'Customer Rating' },
        { value: 'newest', label: 'Newest First' },
        { value: 'name-asc', label: 'Name: A to Z' },
        { value: 'name-desc', label: 'Name: Z to A' }
    ];

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            {/* Mobile Filter Toggle */}
            <div className="flex items-center justify-between mb-4 lg:hidden">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="p-2 text-blue-600 hover:text-blue-700 transition duration-200"
                >
                    <Filter className="w-5 h-5" />
                </button>
            </div>

            <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Categories */}
                <div>
                    <button
                        onClick={() => toggleSection('categories')}
                        className="flex items-center justify-between w-full text-left mb-3"
                    >
                        <h3 className="text-lg font-semibold">Categories</h3>
                        {expandedSections.categories ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                    </button>

                    {expandedSections.categories && (
                        <div className="space-y-2">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() => onCategoryChange(category.id)}
                                    className={`w-full text-left px-3 py-2 rounded-lg transition duration-200 flex justify-between items-center ${selectedCategory === category.id
                                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                                        : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <span>{category.name}</span>
                                    <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                                        {category.count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Price Range */}
                <div>
                    <button
                        onClick={() => toggleSection('price')}
                        className="flex items-center justify-between w-full text-left mb-3"
                    >
                        <h3 className="text-lg font-semibold">Price Range</h3>
                        {expandedSections.price ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                    </button>

                    {expandedSections.price && (
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    value={priceRange.min}
                                    onChange={(e) => onPriceRangeChange({ ...priceRange, min: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="text-gray-500">-</span>
                                <input
                                    type="number"
                                    placeholder="Max"
                                    value={priceRange.max}
                                    onChange={(e) => onPriceRangeChange({ ...priceRange, max: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Quick Price Filters */}
                            <div className="space-y-2">
                                <button
                                    onClick={() => onPriceRangeChange({ min: '', max: '25' })}
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition duration-200"
                                >
                                    Under $25
                                </button>
                                <button
                                    onClick={() => onPriceRangeChange({ min: '25', max: '50' })}
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition duration-200"
                                >
                                    $25 - $50
                                </button>
                                <button
                                    onClick={() => onPriceRangeChange({ min: '50', max: '100' })}
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition duration-200"
                                >
                                    $50 - $100
                                </button>
                                <button
                                    onClick={() => onPriceRangeChange({ min: '100', max: '' })}
                                    className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition duration-200"
                                >
                                    Over $100
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Sort Options */}
                <div>
                    <button
                        onClick={() => toggleSection('sort')}
                        className="flex items-center justify-between w-full text-left mb-3"
                    >
                        <h3 className="text-lg font-semibold">Sort By</h3>
                        {expandedSections.sort ? (
                            <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                    </button>

                    {expandedSections.sort && (
                        <div className="space-y-2">
                            {sortOptions.map(option => (
                                <button
                                    key={option.value}
                                    onClick={() => onSortChange(option.value)}
                                    className={`w-full text-left px-3 py-2 rounded-lg transition duration-200 ${sortBy === option.value
                                        ? 'bg-blue-100 text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Clear Filters */}
                <div className="pt-4 border-t border-gray-200">
                    <button
                        onClick={() => {
                            onCategoryChange('all');
                            onPriceRangeChange({ min: '', max: '' });
                            onSortChange('featured');
                        }}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold transition duration-200"
                    >
                        Clear All Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductFilters; 