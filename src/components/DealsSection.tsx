'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ShoppingCart, Heart, Star, ArrowRight } from 'lucide-react';

const DealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const deals = [
    {
      id: 1,
      title: "Flash Sale 24h",
      subtitle: "Giảm giá lên đến 70%",
      description: "Cơ hội vàng để sở hữu những sản phẩm yêu thích với giá tốt nhất",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      discount: 70,
      originalPrice: 2000000,
      salePrice: 600000,
      rating: 4.8,
      reviews: 1240,
      sold: 89,
      total: 100
    },
    {
      id: 2,
      title: "Combo Siêu Tiết Kiệm",
      subtitle: "Mua 2 tặng 1",
      description: "Mua 2 sản phẩm bất kỳ và nhận ngay 1 sản phẩm miễn phí",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      discount: 50,
      originalPrice: 1500000,
      salePrice: 750000,
      rating: 4.9,
      reviews: 890,
      sold: 156,
      total: 200
    },
    {
      id: 3,
      title: "Thời Trang Mùa Hè",
      subtitle: "Giảm giá 40%",
      description: "Bộ sưu tập thời trang mùa hè với thiết kế hiện đại và chất liệu cao cấp",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      discount: 40,
      originalPrice: 1200000,
      salePrice: 720000,
      rating: 4.7,
      reviews: 567,
      sold: 78,
      total: 150
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const endTime = now + (24 * 60 * 60 * 1000); // 24 hours from now
      const distance = endTime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Khuyến mãi đặc biệt
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Đừng bỏ lỡ những ưu đãi hấp dẫn với thời gian có hạn
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Flash Sale kết thúc sau</h3>
            <p className="text-gray-600">Nhanh tay mua sắm để không bỏ lỡ cơ hội</p>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-red-500 text-white text-2xl md:text-3xl font-bold rounded-lg p-4 mb-2">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-600">Ngày</div>
              </div>
              <div className="text-center">
                <div className="bg-red-500 text-white text-2xl md:text-3xl font-bold rounded-lg p-4 mb-2">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-600">Giờ</div>
              </div>
              <div className="text-center">
                <div className="bg-red-500 text-white text-2xl md:text-3xl font-bold rounded-lg p-4 mb-2">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-600">Phút</div>
              </div>
              <div className="text-center">
                <div className="bg-red-500 text-white text-2xl md:text-3xl font-bold rounded-lg p-4 mb-2">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-600">Giây</div>
              </div>
            </div>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Deal Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Discount Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{deal.discount}%
                  </span>
                </div>

                {/* Hot Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    HOT
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Deal Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {deal.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {deal.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(deal.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {deal.rating} ({deal.reviews} đánh giá)
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-red-500">
                      {formatPrice(deal.salePrice)}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(deal.originalPrice)}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Đã bán: {deal.sold}</span>
                    <span>Còn lại: {deal.total - deal.sold}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${calculateProgress(deal.sold, deal.total)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  href={`/deals/${deal.id}`}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Mua ngay
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Deals Button */}
        <div className="text-center">
          <Link
            href="/deals"
            className="inline-flex items-center px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
          >
            Xem tất cả khuyến mãi
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
