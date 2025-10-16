'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, Star, Eye, TrendingUp, Sparkles, Clock } from 'lucide-react';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('new');
  const [wishlist, setWishlist] = useState<number[]>([]);

  const tabs = [
    { id: 'new', label: 'Hàng mới về', icon: Clock },
    { id: 'featured', label: 'Nổi bật', icon: Sparkles },
    { id: 'bestseller', label: 'Bán chạy', icon: TrendingUp }
  ];

  const products = {
    new: [
      {
        id: 1,
        name: "Áo sơ mi công sở nam",
        price: 450000,
        originalPrice: 650000,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 45,
        badge: "Mới",
        discount: 31
      },
      {
        id: 2,
        name: "Đầm dạ hội sang trọng",
        price: 1200000,
        originalPrice: 1800000,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
        rating: 5.0,
        reviews: 28,
        badge: "Mới",
        discount: 33
      },
      {
        id: 3,
        name: "Giày da cao cấp",
        price: 890000,
        originalPrice: 1290000,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 67,
        badge: "Mới",
        discount: 31
      },
      {
        id: 4,
        name: "Túi xách nữ thời trang",
        price: 650000,
        originalPrice: 950000,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 89,
        badge: "Mới",
        discount: 32
      },
      {
        id: 5,
        name: "Kính mát cao cấp",
        price: 380000,
        originalPrice: 580000,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 34,
        badge: "Mới",
        discount: 34
      },
      {
        id: 6,
        name: "Đồng hồ nam sang trọng",
        price: 2200000,
        originalPrice: 3200000,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 123,
        badge: "Mới",
        discount: 31
      },
      {
        id: 7,
        name: "Balo laptop cao cấp",
        price: 550000,
        originalPrice: 850000,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 56,
        badge: "Mới",
        discount: 35
      },
      {
        id: 8,
        name: "Áo khoác dạ nữ",
        price: 980000,
        originalPrice: 1480000,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 91,
        badge: "Mới",
        discount: 34
      }
    ],
    featured: [
      {
        id: 9,
        name: "MacBook Pro M3",
        price: 35000000,
        originalPrice: 42000000,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
        rating: 5.0,
        reviews: 234,
        badge: "Hot",
        discount: 17
      },
      {
        id: 10,
        name: "iPhone 15 Pro Max",
        price: 28000000,
        originalPrice: 33000000,
        image: "https://images.unsplash.com/photo-1678652197642-1f84fcfd5c4c?w=400&h=400&fit=crop",
        rating: 5.0,
        reviews: 456,
        badge: "Hot",
        discount: 15
      },
      {
        id: 11,
        name: "Samsung Galaxy S24 Ultra",
        price: 24000000,
        originalPrice: 29000000,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 345,
        badge: "Hot",
        discount: 17
      },
      {
        id: 12,
        name: "AirPods Pro 2",
        price: 5500000,
        originalPrice: 6500000,
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 567,
        badge: "Hot",
        discount: 15
      },
      {
        id: 13,
        name: "iPad Air M2",
        price: 15000000,
        originalPrice: 18000000,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 289,
        badge: "Hot",
        discount: 17
      },
      {
        id: 14,
        name: "Apple Watch Ultra 2",
        price: 18000000,
        originalPrice: 21000000,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
        rating: 5.0,
        reviews: 178,
        badge: "Hot",
        discount: 14
      },
      {
        id: 15,
        name: "Sony WH-1000XM5",
        price: 7500000,
        originalPrice: 9000000,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 432,
        badge: "Hot",
        discount: 17
      },
      {
        id: 16,
        name: "Dell XPS 15",
        price: 32000000,
        originalPrice: 38000000,
        image: "https://images.unsplash.com/photo-1593642532400-2682810df593?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 198,
        badge: "Hot",
        discount: 16
      }
    ],
    bestseller: [
      {
        id: 17,
        name: "Áo thun basic form rộng",
        price: 199000,
        originalPrice: 299000,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 1234,
        badge: "Best Seller",
        discount: 33
      },
      {
        id: 18,
        name: "Quần jean skinny",
        price: 399000,
        originalPrice: 599000,
        image: "https://images.unsplash.com/photo-1542272454315-7f6063e67a67?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 987,
        badge: "Best Seller",
        discount: 33
      },
      {
        id: 19,
        name: "Giày sneaker trắng",
        price: 599000,
        originalPrice: 899000,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 2345,
        badge: "Best Seller",
        discount: 33
      },
      {
        id: 20,
        name: "Ba lô mini nữ",
        price: 299000,
        originalPrice: 499000,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 876,
        badge: "Best Seller",
        discount: 40
      },
      {
        id: 21,
        name: "Mũ lưỡi trai thêu logo",
        price: 149000,
        originalPrice: 249000,
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 654,
        badge: "Best Seller",
        discount: 40
      },
      {
        id: 22,
        name: "Dây chuyền bạc nữ",
        price: 450000,
        originalPrice: 750000,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 543,
        badge: "Best Seller",
        discount: 40
      },
      {
        id: 23,
        name: "Ví da nam cao cấp",
        price: 350000,
        originalPrice: 550000,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 432,
        badge: "Best Seller",
        discount: 36
      },
      {
        id: 24,
        name: "Dép sandal nữ",
        price: 249000,
        originalPrice: 399000,
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 765,
        badge: "Best Seller",
        discount: 38
      }
    ]
  };

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const currentProducts = products[activeTab as keyof typeof products];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header with Tabs */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Sản phẩm của chúng tôi
              </h2>
              <p className="text-gray-600">Khám phá bộ sưu tập đa dạng và phong phú</p>
            </div>
            <Link
              href="/shop"
              className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
            >
              Xem tất cả
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-semibold transition-all relative ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                    product.badge === 'Mới' ? 'bg-green-500 text-white' :
                    product.badge === 'Hot' ? 'bg-red-500 text-white' :
                    'bg-yellow-500 text-white'
                  }`}>
                    {product.badge}
                  </span>
                </div>

                {/* Discount */}
                <div className="absolute top-3 right-3">
                  <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                    -{product.discount}%
                  </span>
                </div>

                {/* Quick Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <button className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-2 rounded-full transition-colors ${
                        wishlist.includes(product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white hover:bg-red-500 hover:text-white'
                      }`}
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-green-600 hover:text-white transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm md:text-base">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 md:w-4 md:h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-1 text-xs text-gray-600">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <span className="text-base md:text-lg font-bold text-blue-600">
                      {formatPrice(product.price)}
                    </span>
                    <span className="ml-2 text-xs md:text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
            Xem thêm sản phẩm
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;
