# Walker Tape Co. - Ecommerce Platform

A modern, fully-featured ecommerce website built with React, featuring a comprehensive product catalog, advanced filtering, shopping cart functionality, and responsive design.

## 🚀 Features

### Core Ecommerce Features

- **Product Catalog**: 24+ products across 5 categories
- **Advanced Filtering**: Category, price range, and search filters
- **Smart Sorting**: Multiple sorting options (price, rating, name, featured)
- **Shopping Cart**: Persistent cart with quantity management
- **Wishlist**: Save products for later
- **Product Details**: Comprehensive product information with reviews
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization

### User Experience

- **Search Functionality**: Real-time product search
- **Quick View**: Modal product details without page navigation
- **Smooth Animations**: Custom CSS animations and transitions
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Performance**: Optimized rendering and lazy loading

### Technical Features

- **Modular Architecture**: Component-based structure for maintainability
- **Custom Hooks**: Reusable state management with `useEcommerce`
- **Local Storage**: Persistent cart and wishlist data
- **TypeScript Ready**: Structured for easy TypeScript migration
- **SEO Optimized**: Semantic HTML and meta tags

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.jsx       # Navigation and search
│   ├── Hero.jsx         # Landing section
│   ├── ProductCard.jsx  # Individual product display
│   ├── ProductGrid.jsx  # Product listing
│   ├── ProductFilters.jsx # Filtering and sorting
│   ├── ProductDetailsModal.jsx # Product details modal
│   ├── ShoppingCart.jsx # Cart functionality
│   └── Footer.jsx       # Site footer
├── data/
│   └── products.js      # Product data and utilities
├── hooks/
│   └── useEcommerce.js  # Custom ecommerce hook
├── App.jsx              # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and animations
```

## 🛠️ Technologies Used

- **React 19**: Latest React with modern features
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library
- **Vite**: Fast build tool and development server
- **ESLint**: Code quality and consistency

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd walkertape-replica
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
pnpm build
```

## 🎨 Component Documentation

### Header Component

- **Props**: `searchQuery`, `setSearchQuery`, `cartItemsCount`, `onCartClick`, `isMenuOpen`, `setIsMenuOpen`
- **Features**: Responsive navigation, search bar, cart indicator, mobile menu

### ProductCard Component

- **Props**: `product`, `onAddToCart`, `onQuickView`, `onWishlistToggle`, `isWishlisted`
- **Features**: Product image, details, rating, wishlist toggle, quick view

### ProductFilters Component

- **Props**: `categories`, `selectedCategory`, `priceRange`, `sortBy`, and their setters
- **Features**: Category filters, price range, sorting options, collapsible sections

### ShoppingCart Component

- **Props**: `isOpen`, `onClose`, `cartItems`, `onUpdateQuantity`, `onRemoveItem`, `onCheckout`
- **Features**: Cart items display, quantity controls, total calculation, checkout

## 🔧 Customization

### Adding New Products

1. Edit `src/data/products.js`
2. Add product object with required fields:
   ```javascript
   {
     id: 25,
     name: 'New Product',
     category: 'category-name',
     price: 29.99,
     image: 'image-url',
     rating: 4.5,
     reviews: 100,
     description: 'Product description',
     features: ['Feature 1', 'Feature 2'],
     inStock: true,
     sku: 'SKU-001',
     tags: ['tag1', 'tag2']
   }
   ```

### Adding New Categories

1. Update `categories` array in `src/data/products.js`
2. Add products with the new category name
3. Update category counts

### Styling Customization

- Modify `src/index.css` for global styles
- Use Tailwind classes for component-specific styling
- Custom animations and utilities are available

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Reduced motion preferences

## 🔒 Data Persistence

- Cart items saved to localStorage
- Wishlist items saved to localStorage
- Data persists across browser sessions

## 🚀 Performance Optimizations

- Component memoization with React.memo
- Efficient filtering and sorting algorithms
- Lazy loading for images
- Optimized re-renders
- Minimal bundle size

## 🧪 Testing

To run tests (when implemented):

```bash
npm run test
```

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository
2. Vercel will auto-deploy on push
3. Custom domain can be added

### Netlify

1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure build settings

### Other Platforms

The app can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Contact: info@walkertape.com

## 🔮 Future Enhancements

- [ ] User authentication and accounts
- [ ] Payment processing integration
- [ ] Order management system
- [ ] Product reviews and ratings
- [ ] Inventory management
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Advanced analytics
- [ ] Email marketing integration

---

Built with ❤️ by the Walker Tape Co. team
