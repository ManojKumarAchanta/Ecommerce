import { useState, useEffect, useCallback } from "react";
import {
  products,
  categories,
  filterProducts,
  sortProducts,
} from "../data/products.js";
import toast from "react-hot-toast";

export const useEcommerce = () => {
  // State management
  const [cartItems, setCartItems] = useState([]);
  const [wishlistedItems, setWishlistedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Checkout state
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);

  // Load cart, wishlist, and order history from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedWishlist = localStorage.getItem("wishlist");
    const savedOrders = localStorage.getItem("orderHistory");

    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    }

    if (savedWishlist) {
      try {
        setWishlistedItems(JSON.parse(savedWishlist));
      } catch (error) {
        console.error("Error loading wishlist:", error);
      }
    }

    if (savedOrders) {
      try {
        setOrderHistory(JSON.parse(savedOrders));
      } catch (error) {
        console.error("Error loading order history:", error);
      }
    }
  }, []);

  // Save cart, wishlist, and order history to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistedItems));
  }, [wishlistedItems]);

  useEffect(() => {
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
  }, [orderHistory]);

  // Cart functions
  const addToCart = useCallback((product) => {
    toast.success("Product added to cart", {
      duration: 2000,
      position: "top-center",
      style: {
        background: "#007bff",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        padding: "15px",
        borderRadius: "8px",
      },
    });
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  }, []);

  const updateCartQuantity = useCallback(
    (productId, newQuantity) => {
      if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
      }
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const getCartItemCount = useCallback(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const getShippingCost = useCallback(() => {
    const total = getCartTotal();
    return total >= 50 ? 0 : 5.99;
  }, [getCartTotal]);

  const getTax = useCallback(() => {
    return getCartTotal() * 0.08; // 8% tax
  }, [getCartTotal]);

  const getFinalTotal = useCallback(() => {
    return getCartTotal() + getShippingCost() + getTax();
  }, [getCartTotal, getShippingCost, getTax]);

  // Wishlist functions
  const toggleWishlist = useCallback((productId) => {
    setWishlistedItems((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  }, []);

  const isWishlisted = useCallback(
    (productId) => {
      return wishlistedItems.includes(productId);
    },
    [wishlistedItems]
  );

  // Product filtering and sorting
  const filteredAndSortedProducts = useCallback(() => {
    const filters = {
      category: selectedCategory,
      search: searchQuery,
      priceRange,
      inStockOnly: false,
    };

    let filtered = filterProducts(products, filters);
    return sortProducts(filtered, sortBy);
  }, [selectedCategory, searchQuery, priceRange, sortBy]);

  // Product details modal
  const openProductDetails = useCallback((product) => {
    setSelectedProduct(product);
    setShowProductDetails(true);
  }, []);

  const closeProductDetails = useCallback(() => {
    setShowProductDetails(false);
    setSelectedProduct(null);
  }, []);

  // Cart modal
  const openCart = useCallback(() => {
    setShowCart(true);
  }, []);

  const closeCart = useCallback(() => {
    setShowCart(false);
  }, []);

  // Checkout functions
  const openCheckout = useCallback(() => {
    setShowCheckout(true);
    setShowCart(false);
  }, []);

  const closeCheckout = useCallback(() => {
    setShowCheckout(false);
  }, []);

  const completeOrder = useCallback((orderData) => {
    // Add order to history
    setOrderHistory((prev) => [orderData, ...prev]);

    // Clear cart
    setCartItems([]);

    // Close checkout
    setShowCheckout(false);

    // Show success message
    console.log("Order completed:", orderData);
  }, []);

  // Filter functions
  const clearAllFilters = useCallback(() => {
    setSearchQuery("");
    setSelectedCategory("all");
    setPriceRange({ min: "", max: "" });
    setSortBy("featured");
  }, []);

  const handleCategoryChange = useCallback((categoryId) => {
    setSelectedCategory(categoryId);
  }, []);

  const handlePriceRangeChange = useCallback((newRange) => {
    setPriceRange(newRange);
  }, []);

  const handleSortChange = useCallback((newSort) => {
    setSortBy(newSort);
  }, []);

  // Legacy checkout function (for backward compatibility)
  const handleCheckout = useCallback(() => {
    openCheckout();
  }, [openCheckout]);

  // Search functions
  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);

  return {
    // State
    cartItems,
    wishlistedItems,
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
    products: filteredAndSortedProducts(),
    orderHistory,

    // Cart functions
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
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
    clearSearch,

    // UI state functions
    setShowFilters,

    // Legacy checkout (for backward compatibility)
    handleCheckout,
  };
};
