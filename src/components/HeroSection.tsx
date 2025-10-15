'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ShoppingBag, Star } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Khám phá bộ sưu tập mới",
      subtitle: "Thời trang hiện đại cho mọi lứa tuổi",
      description: "Cập nhật tủ quần áo của bạn với những xu hướng thời trang mới nhất",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Mua ngay",
      buttonLink: "/products",
      badge: "Mới"
    },
    {
      id: 2,
      title: "Giảm giá lên đến 50%",
      subtitle: "Sale off cuối năm",
      description: "Cơ hội vàng để sở hữu những sản phẩm yêu thích với giá tốt nhất",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Xem khuyến mãi",
      buttonLink: "/deals",
      badge: "Hot"
    },
    {
      id: 3,
      title: "Chất lượng cao cấp",
      subtitle: "Sản phẩm chính hãng 100%",
      description: "Cam kết mang đến những sản phẩm chất lượng tốt nhất cho khách hàng",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Khám phá",
      buttonLink: "/about",
      badge: "Premium"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {slides[currentSlide].badge}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-200 mb-4">
              {slides[currentSlide].subtitle}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={slides[currentSlide].buttonLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                {slides[currentSlide].buttonText}
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Xem tất cả sản phẩm
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Features */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <ShoppingBag className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Miễn phí vận chuyển</h3>
                <p className="text-sm text-gray-600">Cho đơn hàng trên 500k</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-full">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Chất lượng đảm bảo</h3>
                <p className="text-sm text-gray-600">Sản phẩm chính hãng 100%</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-full">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Hỗ trợ 24/7</h3>
                <p className="text-sm text-gray-600">Luôn sẵn sàng phục vụ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
