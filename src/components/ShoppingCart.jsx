import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';

const ShoppingCartModal = ({
    isOpen,
    onClose,
    cartItems,
    onUpdateQuantity,
    onRemoveItem,
    onCheckout,
    getCartTotal,
    getShippingCost,
    getTax,
    getFinalTotal
}) => {
    if (!isOpen) return null;

    const getTotalItems = () => {
        return cartItems.reduce((sum, item) => sum + item.quantity, 0);
    };

    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center space-x-3">
                        <ShoppingCart className="w-6 h-6 text-blue-600" />
                        <h2 className="text-xl font-semibold">Shopping Cart</h2>
                        {getTotalItems() > 0 && (
                            <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-semibold">
                                {getTotalItems()} item{getTotalItems() !== 1 ? 's' : ''}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-500 hover:text-gray-700 transition duration-200"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex flex-col h-[calc(90vh-80px)]">
                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-4">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-12">
                                <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                    Your cart is empty
                                </h3>
                                <p className="text-gray-500 mb-6">
                                    Looks like you haven't added any items to your cart yet.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="bg-blue-600 "
                                >
                                    Start Shopping
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                                        <div className="relative">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded-lg"
                                            />
                                            {!item.inStock && (
                                                <div className="absolute inset-0 bg-red-500/20 rounded-lg flex items-center justify-center">
                                                    <span className="text-red-600 text-xs font-semibold">Out of Stock</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-gray-800 truncate">{item.name}</h3>
                                            <p className="text-gray-600 text-sm mb-2">SKU: {item.sku}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-blue-600 font-semibold">
                                                    ${item.price}
                                                </span>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                                        className="p-1 hover:bg-blue-100 rounded transition duration-200"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                    <span className="w-8 text-center font-semibold">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                        className="p-1 hover:bg-blue-100 rounded transition duration-200"
                                                        disabled={!item.inStock}
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Item Total */}
                                            <div className="flex items-center justify-between mt-2">
                                                <span className="text-sm text-gray-500">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </span>
                                                <button
                                                    onClick={() => onRemoveItem(item.id)}
                                                    className="p-1 hover:bg-red-100 rounded transition duration-200 text-red-500"
                                                    title="Remove item"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Cart Summary */}
                    {cartItems.length > 0 && (
                        <div className="border-t p-4 bg-gray-50">
                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span>Subtotal:</span>
                                    <span>${getCartTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Shipping:</span>
                                    <span className={getShippingCost() === 0 ? 'text-green-600' : ''}>
                                        {getShippingCost() === 0 ? 'Free' : `$${getShippingCost().toFixed(2)}`}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Tax:</span>
                                    <span>${getTax().toFixed(2)}</span>
                                </div>
                                <div className="border-t pt-3 flex justify-between font-semibold text-lg">
                                    <span>Total:</span>
                                    <span className="text-blue-600">${getFinalTotal().toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Shipping Info */}
                            {getCartTotal() < 50 && (
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                                    <p className="text-blue-800 text-sm">
                                        Add ${(50 - getCartTotal()).toFixed(2)} more to get free shipping!
                                    </p>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button
                                    onClick={onCheckout}
                                    className="w-full bg-blue-600 flex items-center justify-center gap-2"
                                >
                                    <span>Proceed to Checkout</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={onClose}
                                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold transition duration-200"
                                >
                                    Continue Shopping
                                </button>
                            </div>

                            {/* Security Badge */}
                            <div className="mt-4 text-center">
                                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Secure Checkout</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartModal; 