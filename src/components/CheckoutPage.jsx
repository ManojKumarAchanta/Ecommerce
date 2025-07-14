import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Truck, MapPin, User, Mail, Phone, Lock, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const CheckoutPage = ({
    cartItems,
    onBackToCart,
    onCompleteOrder,
    getCartTotal,
    getShippingCost,
    getTax,
    getFinalTotal
}) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Shipping Information
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: 'United States',

        // Billing Information
        billingSameAsShipping: true,
        billingFirstName: '',
        billingLastName: '',
        billingAddress: '',
        billingCity: '',
        billingState: '',
        billingZipCode: '',
        billingCountry: 'United States',

        // Payment Information
        cardNumber: '',
        cardName: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: '',

        // Order Summary
        shippingMethod: 'standard',
        paymentMethod: 'credit_card'
    });

    const [isProcessing, setIsProcessing] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleBillingToggle = () => {
        setFormData(prev => ({
            ...prev,
            billingSameAsShipping: !prev.billingSameAsShipping
        }));
    };

    const validateStep = (step) => {
        switch (step) {
            case 1: // Shipping
                return formData.firstName && formData.lastName && formData.email &&
                    formData.phone && formData.address && formData.city &&
                    formData.state && formData.zipCode;
            case 2: // Billing
                if (formData.billingSameAsShipping) return true;
                return formData.billingFirstName && formData.billingLastName &&
                    formData.billingAddress && formData.billingCity &&
                    formData.billingState && formData.billingZipCode;
            case 3: // Payment
                return formData.cardNumber && formData.cardName &&
                    formData.expiryMonth && formData.expiryYear && formData.cvv;
            default:
                return false;
        }
    };

    const handleNextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handlePrevStep = () => {
        setCurrentStep(prev => prev - 1);
    };

    const handleSubmitOrder = async () => {
        setIsProcessing(true);

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsProcessing(false);
        setOrderComplete(true);

        // Call the complete order function
        onCompleteOrder({
            orderId: `WT-${Date.now()}`,
            items: cartItems,
            total: getFinalTotal(),
            shipping: formData,
            timestamp: new Date().toISOString()
        });
        toast.success('Order placed successfully', {
            duration: 2000,
            position: 'top-center',
            //blue theme
            style: {
                background: '#007bff',
                color: '#fff',
                fontSize: '16px',
                fontWeight: 'bold',
                padding: '15px',
                borderRadius: '8px'
            }
        });

    };

    const steps = [
        { number: 1, title: 'Shipping Information', icon: <Truck className="w-5 h-5" /> },
        { number: 2, title: 'Billing Information', icon: <User className="w-5 h-5" /> },
        { number: 3, title: 'Payment Information', icon: <CreditCard className="w-5 h-5" /> },
        { number: 4, title: 'Review & Confirm', icon: <CheckCircle className="w-5 h-5" /> }
    ];

    if (orderComplete) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Complete!</h2>
                    <p className="text-gray-600 mb-6">
                        Thank you for your purchase. You will receive a confirmation email shortly.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={onBackToCart}
                            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back to Cart</span>
                        </button>
                        <h1 className="text-2xl font-bold text-gray-800">Checkout</h1>
                        <div className="w-20"></div> {/* Spacer for centering */}
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Checkout Form */}
                    <div className="lg:col-span-2">
                        {/* Progress Steps */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between">
                                {steps.map((step, index) => (
                                    <div key={step.number} className="flex items-center">
                                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${currentStep >= step.number
                                            ? 'bg-blue-600 border-blue-600 text-white'
                                            : 'border-gray-300 text-gray-500'
                                            }`}>
                                            {currentStep > step.number ? (
                                                <CheckCircle className="w-5 h-5" />
                                            ) : (
                                                step.icon
                                            )}
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className={`w-16 h-0.5 mx-2 ${currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'
                                                }`}></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between mt-2">
                                {steps.map(step => (
                                    <span key={step.number} className={`text-sm ${currentStep >= step.number ? 'text-blue-600 font-semibold' : 'text-gray-500'
                                        }`}>
                                        {step.title}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Step Content */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            {currentStep === 1 && (
                                <div>
                                    <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                            <input
                                                type="text"
                                                value={formData.firstName}
                                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                            <input
                                                type="text"
                                                value={formData.lastName}
                                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                required
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                            <input
                                                type="text"
                                                value={formData.address}
                                                onChange={(e) => handleInputChange('address', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                            <input
                                                type="text"
                                                value={formData.city}
                                                onChange={(e) => handleInputChange('city', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                            <input
                                                type="text"
                                                value={formData.state}
                                                onChange={(e) => handleInputChange('state', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                                            <input
                                                type="text"
                                                value={formData.zipCode}
                                                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentStep === 2 && (
                                <div>
                                    <h2 className="text-xl font-semibold mb-6">Billing Information</h2>
                                    <div className="mb-4">
                                        <label className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={formData.billingSameAsShipping}
                                                onChange={handleBillingToggle}
                                                className="mr-2"
                                            />
                                            <span className="text-sm text-gray-700">Same as shipping address</span>
                                        </label>
                                    </div>

                                    {!formData.billingSameAsShipping && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                                <input
                                                    type="text"
                                                    value={formData.billingFirstName}
                                                    onChange={(e) => handleInputChange('billingFirstName', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                                <input
                                                    type="text"
                                                    value={formData.billingLastName}
                                                    onChange={(e) => handleInputChange('billingLastName', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                                <input
                                                    type="text"
                                                    value={formData.billingAddress}
                                                    onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                                <input
                                                    type="text"
                                                    value={formData.billingCity}
                                                    onChange={(e) => handleInputChange('billingCity', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                                <input
                                                    type="text"
                                                    value={formData.billingState}
                                                    onChange={(e) => handleInputChange('billingState', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                                                <input
                                                    type="text"
                                                    value={formData.billingZipCode}
                                                    onChange={(e) => handleInputChange('billingZipCode', e.target.value)}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {currentStep === 3 && (
                                <div>
                                    <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                            <input
                                                type="text"
                                                value={formData.cardNumber}
                                                onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                                                placeholder="1234 5678 9012 3456"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                required
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                                            <input
                                                type="text"
                                                value={formData.cardName}
                                                onChange={(e) => handleInputChange('cardName', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Month</label>
                                            <select
                                                value={formData.expiryMonth}
                                                onChange={(e) => handleInputChange('expiryMonth', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                required
                                            >
                                                <option value="">Month</option>
                                                {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                                                    <option key={month} value={month.toString().padStart(2, '0')}>
                                                        {month.toString().padStart(2, '0')}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Year</label>
                                            <select
                                                value={formData.expiryYear}
                                                onChange={(e) => handleInputChange('expiryYear', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                required
                                            >
                                                <option value="">Year</option>
                                                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(year => (
                                                    <option key={year} value={year}>{year}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                                            <input
                                                type="text"
                                                value={formData.cvv}
                                                onChange={(e) => handleInputChange('cvv', e.target.value)}
                                                placeholder="123"
                                                maxLength="4"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none -2 -blue-500"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentStep === 4 && (
                                <div>
                                    <h2 className="text-xl font-semibold mb-6">Review & Confirm</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="font-semibold text-gray-800 mb-2">Shipping Address</h3>
                                            <p className="text-gray-600">
                                                {formData.firstName} {formData.lastName}<br />
                                                {formData.address}<br />
                                                {formData.city}, {formData.state} {formData.zipCode}<br />
                                                {formData.country}
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800 mb-2">Payment Method</h3>
                                            <p className="text-gray-600">
                                                Credit Card ending in {formData.cardNumber.slice(-4)}<br />
                                                {formData.cardName}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8">
                                {currentStep > 1 && (
                                    <button
                                        onClick={handlePrevStep}
                                        className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold"
                                    >
                                        Previous
                                    </button>
                                )}
                                <div className="ml-auto">
                                    {currentStep < 4 ? (
                                        <button
                                            onClick={handleNextStep}
                                            disabled={!validateStep(currentStep)}
                                            className="bg-blue-600 "
                                        >
                                            Next
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleSubmitOrder}
                                            disabled={isProcessing}
                                            className="bg-blue-600 "
                                        >
                                            {isProcessing ? 'Processing...' : 'Place Order'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

                            {/* Cart Items */}
                            <div className="space-y-3 mb-4">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex items-center space-x-3">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 object-cover rounded"
                                        />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-800">{item.name}</p>
                                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-800">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Totals */}
                            <div className="border-t pt-4 space-y-2">
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
                                <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                                    <span>Total:</span>
                                    <span className="text-blue-600">${getFinalTotal().toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Security Badge */}
                            <div className="mt-4 pt-4 border-t">
                                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                                    <Lock className="w-4 h-4" />
                                    <span>Secure Checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage; 