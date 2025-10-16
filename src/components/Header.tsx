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
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Trash2,
  ChevronRight,
  Shirt,
  Smartphone,
  Home as HomeIcon,
  Dumbbell,
  BookOpen,
  Sparkles
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock cart items
  const cartItems = [
    {
      id: 1,
      name: "Áo thun nam cao cấp",
      price: 299000,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Giày sneaker nữ",
      price: 899000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop"
    }
  ];

  const megaMenuCategories = [
    {
      name: 'Thời trang',
      icon: Shirt,
      subcategories: [
        { name: 'Thời trang nam', items: ['Áo sơ mi', 'Quần jean', 'Áo khoác', 'Phụ kiện'] },
        { name: 'Thời trang nữ', items: ['Váy đầm', 'Áo kiểu', 'Quần legging', 'Túi xách'] },
        { name: 'Thời trang trẻ em', items: ['Bộ đồ bé trai', 'Bộ đồ bé gái', 'Giày dép', 'Đồ chơi'] }
      ],
      featured: {
        title: 'Bộ sưu tập mới',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop'
      }
    },
    {
      name: 'Điện tử',
      icon: Smartphone,
      subcategories: [
        { name: 'Điện thoại', items: ['iPhone', 'Samsung', 'Xiaomi', 'Oppo'] },
        { name: 'Laptop', items: ['MacBook', 'Dell', 'HP', 'Asus'] },
        { name: 'Phụ kiện', items: ['Tai nghe', 'Sạc dự phòng', 'Ốp lưng', 'Cáp sạc'] }
      ],
      featured: {
        title: 'Giảm giá 50%',
        image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop'
      }
    }
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center text-xs md:text-sm">
              <div className="flex items-center space-x-4 mb-1 md:mb-0">
                <div className="flex items-center">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  <span>+84 123 456 789</span>
                </div>
                <div className="hidden sm:flex items-center">
                  <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                  <span>info@ochaka.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="hidden md:inline">🎉 Miễn phí vận chuyển cho đơn hàng trên 500k</span>
                <div className="flex items-center space-x-3">
                  <Link href="/track" className="hover:text-gray-200 transition-colors">Theo dõi đơn hàng</Link>
                  <Link href="/help" className="hover:text-gray-200 transition-colors">Trợ giúp</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold">
                <span className="text-blue-600">Och</span>
                <span className="text-gray-900">aka</span>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm, danh mục hoặc thương hiệu..."
                  className="w-full pl-4 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Search - Mobile */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* User Account */}
              <Link href="/account" className="hidden md:flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <User className="w-6 h-6" />
                <div className="hidden lg:block text-left">
                  <div className="text-xs text-gray-500">Tài khoản</div>
                  <div className="text-sm font-semibold">Đăng nhập</div>
                </div>
              </Link>

              {/* Wishlist */}
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="w-5 h-5 md:w-6 md:h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  3
                </span>
              </button>

              {/* Shopping Cart */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {cartItems.length}
                </span>
              </button>

              {/* Mobile Menu */}
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Categories Mega Menu */}
              <div className="relative group">
                <button className="flex items-center space-x-2 py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all">
                  <Menu className="w-5 h-5" />
                  <span className="font-semibold">Danh mục sản phẩm</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-0 w-[800px] bg-white shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="grid grid-cols-3 gap-6 p-6">
                    {megaMenuCategories.map((category, idx) => {
                      const IconComponent = category.icon;
                      return (
                        <div key={idx}>
                          <div className="flex items-center mb-4 text-blue-600">
                            <IconComponent className="w-5 h-5 mr-2" />
                            <h3 className="font-bold text-lg">{category.name}</h3>
                          </div>
                          {category.subcategories.map((sub, subIdx) => (
                            <div key={subIdx} className="mb-4">
                              <h4 className="font-semibold text-gray-900 mb-2">{sub.name}</h4>
                              <ul className="space-y-1">
                                {sub.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Link href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                                      <ChevronRight className="w-3 h-3 mr-1" />
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                    <div className="relative overflow-hidden rounded-lg group/img">
                      <img 
                        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop" 
                        alt="Featured"
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <div className="text-white">
                          <h4 className="font-bold mb-1">Bộ sưu tập mới</h4>
                          <p className="text-sm">Giảm giá 30%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="py-4 font-medium text-gray-700 hover:text-blue-600 transition-colors relative group">
                  Trang chủ
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/shop" className="py-4 font-medium text-gray-700 hover:text-blue-600 transition-colors relative group">
                  Cửa hàng
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/deals" className="py-4 font-medium text-red-600 hover:text-red-700 transition-colors relative group flex items-center">
                  🔥 Khuyến mãi
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/blog" className="py-4 font-medium text-gray-700 hover:text-blue-600 transition-colors relative group">
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link href="/contact" className="py-4 font-medium text-gray-700 hover:text-blue-600 transition-colors relative group">
                  Liên hệ
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>

              {/* Special Offer Badge */}
              <div className="hidden lg:block">
                <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                  Sale up to 70%
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="container mx-auto px-4 py-4 space-y-2">
                <Link href="/" className="block py-2 font-medium hover:text-blue-600 transition-colors">Trang chủ</Link>
                <Link href="/shop" className="block py-2 font-medium hover:text-blue-600 transition-colors">Cửa hàng</Link>
                <Link href="/deals" className="block py-2 font-medium text-red-600 hover:text-red-700 transition-colors">🔥 Khuyến mãi</Link>
                <Link href="/blog" className="block py-2 font-medium hover:text-blue-600 transition-colors">Blog</Link>
                <Link href="/contact" className="block py-2 font-medium hover:text-blue-600 transition-colors">Liên hệ</Link>
                <Link href="/account" className="block py-2 font-medium hover:text-blue-600 transition-colors border-t pt-4">Tài khoản</Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Tìm kiếm sản phẩm</h3>
                <button onClick={() => setIsSearchOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Nhập từ khóa tìm kiếm..."
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  autoFocus
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Search className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">Gợi ý: áo thun, giày sneaker, túi xách...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsCartOpen(false)}></div>
          <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300">
            <div className="flex flex-col h-full">
              {/* Cart Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-xl font-bold">Giỏ hàng ({cartItems.length})</h3>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500">Giỏ hàng trống</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 border-b pb-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">SL: {item.quantity}</p>
                          <p className="text-blue-600 font-bold">{formatPrice(item.price)}</p>
                        </div>
                        <button className="p-2 hover:bg-red-50 rounded-full h-fit">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <div className="border-t p-6">
                  <div className="flex justify-between mb-4">
                    <span className="text-lg font-semibold">Tổng cộng:</span>
                    <span className="text-xl font-bold text-blue-600">{formatPrice(calculateTotal())}</span>
                  </div>
                  <Link
                    href="/cart"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Xem giỏ hàng
                  </Link>
                  <Link
                    href="/checkout"
                    className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Thanh toán
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;