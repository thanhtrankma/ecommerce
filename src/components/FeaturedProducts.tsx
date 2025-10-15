'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';

const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Áo thun nam cao cấp",
      price: 299000,
      originalPrice: 399000,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      reviews: 124,
      badge: "Bán chạy",
      discount: 25
    },
    {
      id: 2,
      name: "Giày sneaker nữ",
      price: 899000,
      originalPrice: 1199000,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
      reviews: 89,
      badge: "Mới",
      discount: 25
    },
    {
      id: 3,
      name: "Túi xách da thật",
      price: 1299000,
      originalPrice: 1599000,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      reviews: 67,
      badge: "Hot",
      discount: 19
    },
    {
      id: 4,
      name: "Đồng hồ thông minh",
      price: 2499000,
      originalPrice: 2999000,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.6,
      reviews: 203,
      badge: "Giảm giá",
      discount: 17
    },
    {
      id: 5,
      name: "Kính mát thời trang",
      price: 599000,
      originalPrice: 799000,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.5,
      reviews: 45,
      badge: "Yêu thích",
      discount: 25
    },
    {
      id: 6,
      name: "Áo khoác nam",
      price: 1599000,
      originalPrice: 1999000,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      reviews: 156,
      badge: "Premium",
      discount: 20
    },
    {
      id: 7,
      name: "Váy liền thân",
      price: 799000,
      originalPrice: 999000,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      reviews: 78,
      badge: "Mới",
      discount: 20
    },
    {
      id: 8,
      name: "Giày boot nam",
      price: 1899000,
      originalPrice: 2299000,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
      reviews: 134,
      badge: "Bán chạy",
      discount: 17
    }
  ];

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

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sản phẩm nổi bật
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá những sản phẩm được yêu thích nhất với chất lượng cao và giá cả hợp lý
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    product.badge === 'Bán chạy' ? 'bg-red-500 text-white' :
                    product.badge === 'Mới' ? 'bg-green-500 text-white' :
                    product.badge === 'Hot' ? 'bg-orange-500 text-white' :
                    product.badge === 'Giảm giá' ? 'bg-blue-500 text-white' :
                    product.badge === 'Yêu thích' ? 'bg-pink-500 text-white' :
                    'bg-purple-500 text-white'
                  }`}>
                    {product.badge}
                  </span>
                </div>

                {/* Discount */}
                <div className="absolute top-3 right-3">
                  <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium rounded-full">
                    -{product.discount}%
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => toggleWishlist(product.id)}
                      className={`p-2 rounded-full transition-colors ${
                        wishlist.includes(product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white hover:bg-gray-100'
                      }`}
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Xem tất cả sản phẩm
            <ShoppingCart className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
