import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductFilters from './components/ProductFilters';
import ProductGrid from './components/ProductGrid';
import ProductDetailsModal from './components/ProductDetailsModal';
import ShoppingCartModal from './components/ShoppingCart';
import Footer from './components/Footer';
import GatewayPage from './components/GatewayPage';
import CheckoutPage from './components/CheckoutPage';
import { useEcommerce } from './hooks/useEcommerce';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showGateway, setShowGateway] = useState(true);

  const {
    // State
    cartItems,
    searchQuery,
    selectedCategory,
    priceRange,
    sortBy,
    showFilters,
    showCart,
    showProductDetails,
    showCheckout,
    selectedProduct,
    categories,
    products,

    // Cart functions
    addToCart,
    removeFromCart,
    updateCartQuantity,
    getCartItemCount,
    getCartTotal,
    getShippingCost,
    getTax,
    getFinalTotal,

    // Wishlist functions
    toggleWishlist,
    isWishlisted,

    // Modal functions
    openProductDetails,
    closeProductDetails,
    openCart,
    closeCart,

    // Checkout functions
    openCheckout,
    closeCheckout,
    completeOrder,

    // Filter functions
    clearAllFilters,
    handleCategoryChange,
    handlePriceRangeChange,
    handleSortChange,

    // Search functions
    handleSearch,

    // UI state functions
    setShowFilters
  } = useEcommerce();

  const handleProceedToShop = () => {
    setShowGateway(false);
  };

  // Show gateway page if showGateway is true
  if (showGateway) {
    return <GatewayPage onProceedToShop={handleProceedToShop} />;
  }

  // Show checkout page if showCheckout is true
  if (showCheckout) {
    return (
      <CheckoutPage
        cartItems={cartItems}
        onBackToCart={closeCheckout}
        onCompleteOrder={completeOrder}
        getCartTotal={getCartTotal}
        getShippingCost={getShippingCost}
        getTax={getTax}
        getFinalTotal={getFinalTotal}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position='top-center' />
      {/* Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={handleSearch}
        cartItemsCount={getCartItemCount()}
        onCartClick={openCart}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8" id="products">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4">
            <ProductFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              priceRange={priceRange}
              onPriceRangeChange={handlePriceRangeChange}
              sortBy={sortBy}
              onSortChange={handleSortChange}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
            />
          </aside>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <ProductGrid
              products={products}
              onAddToCart={addToCart}
              onQuickView={openProductDetails}
              onWishlistToggle={toggleWishlist}
              wishlistedItems={products.filter(p => isWishlisted(p.id)).map(p => p.id)}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              onClearFilters={clearAllFilters}
            />
          </div>
        </div>
      </main>

      {/* Shopping Cart Modal */}
      <ShoppingCartModal
        isOpen={showCart}
        onClose={closeCart}
        cartItems={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={openCheckout}
        getCartTotal={getCartTotal}
        getShippingCost={getShippingCost}
        getTax={getTax}
        getFinalTotal={getFinalTotal}
      />

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        isOpen={showProductDetails}
        onClose={closeProductDetails}
        onAddToCart={addToCart}
        onWishlistToggle={toggleWishlist}
        isWishlisted={selectedProduct ? isWishlisted(selectedProduct.id) : false}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;