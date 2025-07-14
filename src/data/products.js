export const categories = [
  { id: "all", name: "All Products", count: 48 },
  { id: "hair-spa", name: "Hair Spa Items", count: 12 },
  { id: "footwear", name: "Footwear", count: 8 },
  { id: "adhesive-remover", name: "Adhesive Remover", count: 6 },
  { id: "shop-tapes", name: "Shop Tapes", count: 15 },
  { id: "tools", name: "Tools & Accessories", count: 7 },
];

export const products = [
  // Hair Spa Items
  {
    id: 1,
    name: "Ultra Hold Tape",
    category: "hair-spa",
    price: 24.99,
    originalPrice: 29.99,
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 156,
    description:
      "Premium adhesive tape for hair extensions and wigs. Provides long-lasting hold without irritation.",
    features: [
      "Hypoallergenic",
      "Water-resistant",
      "Easy removal",
      "Professional grade",
    ],
    inStock: true,
    sku: "HT-001",
    tags: ["best-seller", "professional"],
  },
  {
    id: 2,
    name: "Lace Front Support Tape",
    category: "hair-spa",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1559599238-c31b1de5769e?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 89,
    description:
      "Invisible support for lace front wigs. Creates seamless, natural-looking hairline.",
    features: [
      "Invisible application",
      "Breathable",
      "Gentle on skin",
      "Long-lasting",
    ],
    inStock: true,
    sku: "HT-002",
    tags: ["invisible", "lace-front"],
  },
  {
    id: 3,
    name: "Hair Extension Clips",
    category: "hair-spa",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 234,
    description:
      "Professional grade clips for hair extensions. Secure hold without damage.",
    features: [
      "Non-damaging",
      "Adjustable tension",
      "Professional quality",
      "Easy to use",
    ],
    inStock: true,
    sku: "HT-003",
    tags: ["clips", "non-damaging"],
  },
  {
    id: 4,
    name: "Scalp Protector Tape",
    category: "hair-spa",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    reviews: 67,
    description:
      "Gentle protection for sensitive scalp areas. Prevents irritation during hair procedures.",
    features: [
      "Sensitive skin safe",
      "Medical grade",
      "Breathable",
      "Easy removal",
    ],
    inStock: true,
    sku: "HT-004",
    tags: ["sensitive-skin", "medical-grade"],
  },
  {
    id: 5,
    name: "Wig Bonding Tape",
    category: "hair-spa",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 123,
    description:
      "Strong bonding tape specifically designed for wig attachment and security.",
    features: [
      "Strong hold",
      "Sweat-resistant",
      "Long-lasting",
      "Easy application",
    ],
    inStock: true,
    sku: "HT-005",
    tags: ["wig-bonding", "strong-hold"],
  },
  {
    id: 6,
    name: "Hair Extension Tape Roll",
    category: "hair-spa",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1559599238-c31b1de5769e?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 98,
    description:
      "Convenient roll format for hair extensions. Easy to cut and apply.",
    features: ["Roll format", "Easy cutting", "Versatile", "Cost-effective"],
    inStock: true,
    sku: "HT-006",
    tags: ["roll-format", "cost-effective"],
  },

  // Footwear
  {
    id: 7,
    name: "Heel Grip Tape",
    category: "footwear",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 178,
    description:
      "Prevents heel slipping in shoes. Comfortable and durable solution.",
    features: ["Anti-slip", "Comfortable", "Durable", "Easy to apply"],
    inStock: true,
    sku: "FW-001",
    tags: ["anti-slip", "comfortable"],
  },
  {
    id: 8,
    name: "Sole Repair Tape",
    category: "footwear",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 92,
    description:
      "Durable tape for shoe sole repairs. Extends the life of your favorite footwear.",
    features: ["Heavy duty", "Waterproof", "Flexible", "Long-lasting"],
    inStock: true,
    sku: "FW-002",
    tags: ["repair", "waterproof"],
  },
  {
    id: 9,
    name: "Shoe Comfort Pads",
    category: "footwear",
    price: 11.99,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 145,
    description:
      "Cushioned pads for added comfort. Perfect for long days on your feet.",
    features: ["Cushioned", "Breathable", "Anti-slip", "Washable"],
    inStock: true,
    sku: "FW-003",
    tags: ["comfort", "cushioned"],
  },
  {
    id: 10,
    name: "Shoe Stretch Tape",
    category: "footwear",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    rating: 4.3,
    reviews: 76,
    description:
      "Gentle stretching tape for tight shoes. Gradually expands shoe material.",
    features: [
      "Gentle stretching",
      "Gradual expansion",
      "Safe for leather",
      "Easy removal",
    ],
    inStock: true,
    sku: "FW-004",
    tags: ["stretching", "leather-safe"],
  },

  // Adhesive Remover
  {
    id: 11,
    name: "Gentle Adhesive Remover",
    category: "adhesive-remover",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 203,
    description:
      "Safe removal of adhesive residue. Gentle on skin and surfaces.",
    features: [
      "Gentle formula",
      "No harsh chemicals",
      "Quick acting",
      "Safe for skin",
    ],
    inStock: true,
    sku: "AR-001",
    tags: ["gentle", "skin-safe"],
  },
  {
    id: 12,
    name: "Professional Remover Spray",
    category: "adhesive-remover",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 134,
    description:
      "Fast-acting adhesive remover spray. Professional grade for tough jobs.",
    features: [
      "Fast acting",
      "Professional grade",
      "Spray application",
      "Industrial strength",
    ],
    inStock: true,
    sku: "AR-002",
    tags: ["fast-acting", "professional"],
  },
  {
    id: 13,
    name: "Citrus Adhesive Cleaner",
    category: "adhesive-remover",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1563113530-57ba0667cea1?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 78,
    description:
      "Natural citrus-based adhesive remover. Eco-friendly and effective.",
    features: [
      "Natural ingredients",
      "Eco-friendly",
      "Pleasant scent",
      "Effective",
    ],
    inStock: true,
    sku: "AR-003",
    tags: ["natural", "eco-friendly"],
  },
  {
    id: 14,
    name: "Industrial Adhesive Solvent",
    category: "adhesive-remover",
    price: 28.99,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 45,
    description:
      "Heavy-duty solvent for industrial adhesive removal. Professional use only.",
    features: [
      "Industrial strength",
      "Heavy duty",
      "Professional use",
      "Fast acting",
    ],
    inStock: true,
    sku: "AR-004",
    tags: ["industrial", "heavy-duty"],
  },

  // Shop Tapes
  {
    id: 15,
    name: "Double-Sided Mounting Tape",
    category: "shop-tapes",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 267,
    description:
      "Heavy-duty mounting tape for various surfaces. Strong and reliable.",
    features: ["Heavy duty", "Double-sided", "Versatile", "Strong hold"],
    inStock: true,
    sku: "ST-001",
    tags: ["mounting", "double-sided"],
  },
  {
    id: 16,
    name: "Electrical Insulation Tape",
    category: "shop-tapes",
    price: 7.99,
    image:
      "https://images.unsplash.com/photo-1565034946487-077786996e27?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 189,
    description: "Professional electrical tape for insulation and protection.",
    features: ["Electrical grade", "Insulating", "Durable", "Professional"],
    inStock: true,
    sku: "ST-002",
    tags: ["electrical", "insulating"],
  },
  {
    id: 17,
    name: "Masking Tape Set",
    category: "shop-tapes",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center",
    rating: 4.4,
    reviews: 156,
    description: "Multi-size masking tape set for painting and crafts.",
    features: ["Multi-size set", "Clean removal", "Paint safe", "Versatile"],
    inStock: true,
    sku: "ST-003",
    tags: ["masking", "paint-safe"],
  },
  {
    id: 18,
    name: "Duct Tape Heavy Duty",
    category: "shop-tapes",
    price: 12.99,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 298,
    description: "Industrial strength duct tape for heavy-duty applications.",
    features: [
      "Industrial strength",
      "Waterproof",
      "Tear resistant",
      "Versatile",
    ],
    inStock: true,
    sku: "ST-004",
    tags: ["duct-tape", "industrial"],
  },
  {
    id: 19,
    name: "Gaffer Tape Professional",
    category: "shop-tapes",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    reviews: 87,
    description:
      "Professional gaffer tape for stage and studio use. No residue left behind.",
    features: [
      "No residue",
      "Professional grade",
      "Stage use",
      "Clean removal",
    ],
    inStock: true,
    sku: "ST-005",
    tags: ["gaffer", "no-residue"],
  },
  {
    id: 20,
    name: "Packaging Tape Dispenser",
    category: "shop-tapes",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1565034946487-077786996e27?w=400&h=400&fit=crop&crop=center",
    rating: 4.5,
    reviews: 112,
    description:
      "Heavy-duty packaging tape with dispenser for efficient shipping.",
    features: ["With dispenser", "Heavy duty", "Shipping grade", "Easy to use"],
    inStock: true,
    sku: "ST-006",
    tags: ["packaging", "with-dispenser"],
  },

  // Tools & Accessories
  {
    id: 21,
    name: "Tape Dispenser Pro",
    category: "tools",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400&h=400&fit=crop&crop=center",
    rating: 4.9,
    reviews: 123,
    description: "Professional tape dispenser for efficient application.",
    features: [
      "Professional grade",
      "Easy to use",
      "Durable",
      "Precise cutting",
    ],
    inStock: true,
    sku: "TL-001",
    tags: ["dispenser", "professional"],
  },
  {
    id: 22,
    name: "Precision Cutting Tool",
    category: "tools",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop&crop=center",
    rating: 4.7,
    reviews: 87,
    description: "Precise tape cutting tool for professional results.",
    features: [
      "Precision cutting",
      "Safety blade",
      "Ergonomic design",
      "Professional",
    ],
    inStock: true,
    sku: "TL-002",
    tags: ["cutting", "precision"],
  },
  {
    id: 23,
    name: "Tape Measure Professional",
    category: "tools",
    price: 22.99,
    image:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400&h=400&fit=crop&crop=center",
    rating: 4.6,
    reviews: 156,
    description: "Professional tape measure for accurate measurements.",
    features: ["Accurate", "Durable", "Professional grade", "Easy to read"],
    inStock: true,
    sku: "TL-003",
    tags: ["measure", "accurate"],
  },
  {
    id: 24,
    name: "Adhesive Applicator Kit",
    category: "tools",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop&crop=center",
    rating: 4.8,
    reviews: 94,
    description: "Complete kit for professional adhesive application.",
    features: [
      "Complete kit",
      "Professional tools",
      "Easy application",
      "Versatile",
    ],
    inStock: true,
    sku: "TL-004",
    tags: ["kit", "complete"],
  },
];

// Utility functions for filtering and sorting
export const filterProducts = (products, filters) => {
  return products.filter((product) => {
    // Category filter
    if (
      filters.category &&
      filters.category !== "all" &&
      product.category !== filters.category
    ) {
      return false;
    }

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch =
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.features.some((feature) =>
          feature.toLowerCase().includes(searchLower)
        );
      if (!matchesSearch) return false;
    }

    // Price filter
    if (filters.priceRange) {
      const { min, max } = filters.priceRange;
      if (min && product.price < parseFloat(min)) return false;
      if (max && product.price > parseFloat(max)) return false;
    }

    // Stock filter
    if (filters.inStockOnly && !product.inStock) {
      return false;
    }

    return true;
  });
};

export const sortProducts = (products, sortBy) => {
  const sortedProducts = [...products];

  switch (sortBy) {
    case "price-low":
      return sortedProducts.sort((a, b) => a.price - b.price);
    case "price-high":
      return sortedProducts.sort((a, b) => b.price - a.price);
    case "rating":
      return sortedProducts.sort((a, b) => b.rating - a.rating);
    case "newest":
      return sortedProducts.sort((a, b) => b.id - a.id);
    case "name-asc":
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    case "featured":
    default:
      return sortedProducts.sort((a, b) => {
        // Featured sorting: best sellers first, then by rating
        const aFeatured = a.tags?.includes("best-seller") ? 1 : 0;
        const bFeatured = b.tags?.includes("best-seller") ? 1 : 0;
        if (aFeatured !== bFeatured) return bFeatured - aFeatured;
        return b.rating - a.rating;
      });
  }
};
