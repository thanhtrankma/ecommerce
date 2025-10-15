'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingCart, 
  Search, 
  User, 
  Heart, 
  Menu, 
  X,
  ChevronDown
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = [
    'Thời trang',
    'Điện tử',
    'Nhà cửa & Đời sống',
    'Thể thao',
    'Sách',
    'Làm đẹp'
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Miễn phí vận chuyển cho đơn hàng trên 500k</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/help" className="hover:text-gray-300">Hỗ trợ</Link>
            <Link href="/track" className="hover:text-gray-300">Theo dõi đơn hàng</Link>
            <Link href="/contact" className="hover:text-gray-300">Liên hệ</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Ochaka
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2">
                <Search className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Heart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 py-4 px-6 bg-blue-600 text-white hover:bg-blue-700">
                <Menu className="w-5 h-5" />
                <span>Danh mục</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {categories.map((category, index) => (
                  <Link
                    key={index}
                    href={`/category/${category.toLowerCase()}`}
                    className="block px-6 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="py-4 hover:text-blue-600">Trang chủ</Link>
              <Link href="/products" className="py-4 hover:text-blue-600">Sản phẩm</Link>
              <Link href="/deals" className="py-4 hover:text-blue-600">Khuyến mãi</Link>
              <Link href="/about" className="py-4 hover:text-blue-600">Về chúng tôi</Link>
              <Link href="/contact" className="py-4 hover:text-blue-600">Liên hệ</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Link href="/" className="block py-2 hover:text-blue-600">Trang chủ</Link>
              <Link href="/products" className="block py-2 hover:text-blue-600">Sản phẩm</Link>
              <Link href="/deals" className="block py-2 hover:text-blue-600">Khuyến mãi</Link>
              <Link href="/about" className="block py-2 hover:text-blue-600">Về chúng tôi</Link>
              <Link href="/contact" className="block py-2 hover:text-blue-600">Liên hệ</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
