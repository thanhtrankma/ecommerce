'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Heart, ShoppingCart, Star, TrendingUp, Zap, Tag, Eye } from 'lucide-react';

export default function DealsPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const endTime = now + (2 * 24 * 60 * 60 * 1000); // 2 days from now
      const distance = endTime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const flashDeals = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      price: 28999000,
      originalPrice: 34999000,
      image: "https://images.unsplash.com/photo-1678652197642-1f84fcfd5c4c?w=500&h=500&fit=crop",
      rating: 5.0,
      reviews: 1234,
      sold: 456,
      total: 500,
      discount: 17,
      badge: "HOT"
    },
    {
      id: 2,
      name: "MacBook Air M3 13 inch",
      price: 25999000,
      originalPrice: 32999000,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
      rating: 4.9,
      reviews: 987,
      sold: 234,
      total: 300,
      discount: 21,
      badge: "NEW"
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      price: 24999000,
      originalPrice: 29999000,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 856,
      sold: 345,
      total: 400,
      discount: 17,
      badge: "HOT"
    },
    {
      id: 4,
      name: "AirPods Pro 2nd Gen",
      price: 5499000,
      originalPrice: 6999000,
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&h=500&fit=crop",
      rating: 4.9,
      reviews: 2341,
      sold: 789,
      total: 1000,
      discount: 21,
      badge: "BEST"
    }
  ];

  const weeklyDeals = [
    {
      id: 5,
      name: "Áo khoác dạ nam cao cấp",
      price: 1599000,
      originalPrice: 2599000,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
      rating: 4.7,
      reviews: 456,
      discount: 38,
      endDate: "2025-10-20"
    },
    {
      id: 6,
      name: "Giày sneaker nam Nike Air",
      price: 2199000,
      originalPrice: 3499000,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 678,
      discount: 37,
      endDate: "2025-10-20"
    },
    {
      id: 7,
      name: "Túi xách nữ Gucci",
      price: 12999000,
      originalPrice: 18999000,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop",
      rating: 4.9,
      reviews: 234,
      discount: 32,
      endDate: "2025-10-20"
    },
    {
      id: 8,
      name: "Đồng hồ Rolex nam",
      price: 89999000,
      originalPrice: 129999000,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      rating: 5.0,
      reviews: 123,
      discount: 31,
      endDate: "2025-10-20"
    },
    {
      id: 9,
      name: "Váy đầm dạ hội sang trọng",
      price: 1899000,
      originalPrice: 3499000,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=500&fit=crop",
      rating: 4.8,
      reviews: 567,
      discount: 46,
      endDate: "2025-10-20"
    },
    {
      id: 10,
      name: "Balo laptop cao cấp",
      price: 899000,
      originalPrice: 1499000,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      rating: 4.6,
      reviews: 890,
      discount: 40,
      endDate: "2025-10-20"
    }
  ];

  const comboDeals = [
    {
      id: 11,
      title: "Combo Thời Trang Nam",
      description: "Áo + Quần + Giày",
      price: 1999000,
      originalPrice: 3499000,
      image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=500&h=500&fit=crop",
      items: 3,
      discount: 43,
      saved: 1500000
    },
    {
      id: 12,
      title: "Combo Gaming Setup",
      description: "Màn hình + Bàn phím + Chuột",
      price: 8999000,
      originalPrice: 12999000,
      image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&h=500&fit=crop",
      items: 3,
      discount: 31,
      saved: 4000000
    },
    {
      id: 13,
      title: "Combo Làm Đẹp",
      description: "Mỹ phẩm + Nước hoa + Dưỡng da",
      price: 2499000,
      originalPrice: 3999000,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=500&fit=crop",
      items: 5,
      discount: 38,
      saved: 1500000
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const calculateProgress = (sold: number, total: number) => {
    return (sold / total) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Zap className="w-16 h-16 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">🔥 Siêu Sale Khuyến Mãi</h1>
          <p className="text-xl md:text-2xl mb-8">Giảm giá lên đến 70% - Cơ hội vàng không thể bỏ lỡ!</p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                <div className="text-sm">Ngày</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm">Giờ</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm">Phút</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm">Giây</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Flash Sale */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="bg-red-500 text-white p-3 rounded-lg mr-4">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Flash Sale 24H</h2>
                <p className="text-gray-600">Giảm giá sốc trong thời gian có hạn</p>
              </div>
            </div>
            <Link href="/shop" className="text-blue-600 hover:text-blue-700 font-semibold">
              Xem tất cả →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashDeals.map((deal) => (
              <div key={deal.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all group">
                <div className="relative">
                  <Link href={`/product/${deal.id}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className="w-full h-64 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full animate-pulse ${
                      deal.badge === 'HOT' ? 'bg-red-500 text-white' :
                      deal.badge === 'NEW' ? 'bg-green-500 text-white' :
                      'bg-yellow-500 text-white'
                    }`}>
                      {deal.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-red-500 text-white px-3 py-1 text-sm font-bold rounded-full">
                      -{deal.discount}%
                    </span>
                  </div>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white p-3 rounded-full shadow-lg">
                      <Eye className="w-6 h-6 text-gray-900" />
                    </div>
                  </button>
                </div>

                <div className="p-4">
                  <Link href={`/product/${deal.id}`}>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600">
                      {deal.name}
                    </h3>
                  </Link>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(deal.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({deal.reviews})</span>
                  </div>

                  <div className="mb-3">
                    <div className="flex items-baseline space-x-2 mb-1">
                      <span className="text-2xl font-bold text-red-600">{formatPrice(deal.price)}</span>
                    </div>
                    <span className="text-sm text-gray-500 line-through">{formatPrice(deal.originalPrice)}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Đã bán {deal.sold}</span>
                      <span>Còn {deal.total - deal.sold}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all"
                        style={{ width: `${calculateProgress(deal.sold, deal.total)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition-colors flex items-center justify-center">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Mua ngay
                    </button>
                    <button className="p-2 border-2 border-gray-300 rounded-lg hover:border-red-500 hover:bg-red-50 transition-colors">
                      <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly Deals */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="bg-blue-500 text-white p-3 rounded-lg mr-4">
                <Tag className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ưu đãi tuần này</h2>
                <p className="text-gray-600">Giảm giá đặc biệt cả tuần</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {weeklyDeals.map((deal) => (
              <Link
                key={deal.id}
                href={`/product/${deal.id}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all group"
              >
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                      -{deal.discount}%
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-blue-600">
                    {deal.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(deal.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-blue-600">{formatPrice(deal.price)}</span>
                    <span className="text-xs text-gray-500 line-through">{formatPrice(deal.originalPrice)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Combo Deals */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="bg-purple-500 text-white p-3 rounded-lg mr-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Combo Siêu Tiết Kiệm</h2>
                <p className="text-gray-600">Mua combo giá cực ưu đãi</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comboDeals.map((combo) => (
              <div key={combo.id} className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group">
                <div className="relative h-64">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={combo.image}
                    alt={combo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-gray-900 px-3 py-1 text-sm font-bold rounded-full">
                      -{combo.discount}%
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{combo.title}</h3>
                    <p className="text-sm opacity-90">{combo.description}</p>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-sm text-gray-600">Giá combo</span>
                      <div className="text-2xl font-bold text-purple-600">{formatPrice(combo.price)}</div>
                      <span className="text-sm text-gray-500 line-through">{formatPrice(combo.originalPrice)}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-600">Tiết kiệm</span>
                      <div className="text-xl font-bold text-green-600">{formatPrice(combo.saved)}</div>
                    </div>
                  </div>
                  <Link
                    href={`/product/${combo.id}`}
                    className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all"
                  >
                    Mua combo ngay
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Đừng bỏ lỡ cơ hội!</h2>
          <p className="text-xl mb-8">Đăng ký nhận thông báo về các chương trình khuyến mãi mới nhất</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Đăng ký ngay
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
