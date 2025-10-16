'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Eye,
  SlidersHorizontal,
  X,
  ChevronDown,
  Grid3x3,
  List
} from 'lucide-react';

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { name: 'Thời trang nam', count: 234 },
    { name: 'Thời trang nữ', count: 456 },
    { name: 'Điện tử', count: 189 },
    { name: 'Phụ kiện', count: 567 },
    { name: 'Giày dép', count: 345 },
    { name: 'Túi xách', count: 234 }
  ];

  const brands = [
    { name: 'Nike', count: 123 },
    { name: 'Adidas', count: 98 },
    { name: 'Apple', count: 76 },
    { name: 'Samsung', count: 65 },
    { name: 'Zara', count: 54 },
    { name: 'H&M', count: 43 }
  ];

  const products = [
    {
      id: 1,
      name: "Áo thun nam cao cấp Premium Cotton",
      price: 299000,
      originalPrice: 499000,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 234,
      badge: "Bán chạy",
      discount: 40,
      category: "Thời trang nam",
      brand: "Nike"
    },
    {
      id: 2,
      name: "Giày sneaker nữ thời trang",
      price: 899000,
      originalPrice: 1299000,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 456,
      badge: "Mới",
      discount: 31,
      category: "Giày dép",
      brand: "Adidas"
    },
    {
      id: 3,
      name: "Túi xách da thật cao cấp",
      price: 1299000,
      originalPrice: 1899000,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 189,
      badge: "Hot",
      discount: 32,
      category: "Túi xách",
      brand: "Zara"
    },
    {
      id: 4,
      name: "Đồng hồ thông minh Apple Watch",
      price: 8999000,
      originalPrice: 12999000,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
      rating: 5.0,
      reviews: 567,
      badge: "Premium",
      discount: 31,
      category: "Điện tử",
      brand: "Apple"
    },
    {
      id: 5,
      name: "Áo khoác dạ nữ sang trọng",
      price: 1599000,
      originalPrice: 2499000,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 345,
      badge: "Sale",
      discount: 36,
      category: "Thời trang nữ",
      brand: "H&M"
    },
    {
      id: 6,
      name: "Quần jean nam slim fit",
      price: 499000,
      originalPrice: 799000,
      image: "https://images.unsplash.com/photo-1542272454315-7f6063e67a67?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 234,
      badge: "Bán chạy",
      discount: 38,
      category: "Thời trang nam",
      brand: "Nike"
    },
    {
      id: 7,
      name: "Điện thoại Samsung Galaxy S24",
      price: 22999000,
      originalPrice: 28999000,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 456,
      badge: "Hot",
      discount: 21,
      category: "Điện tử",
      brand: "Samsung"
    },
    {
      id: 8,
      name: "Váy liền thân công sở",
      price: 699000,
      originalPrice: 1099000,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 189,
      badge: "Mới",
      discount: 36,
      category: "Thời trang nữ",
      brand: "Zara"
    },
    {
      id: 9,
      name: "Ba lô laptop cao cấp",
      price: 599000,
      originalPrice: 899000,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 234,
      badge: "Sale",
      discount: 33,
      category: "Phụ kiện",
      brand: "Nike"
    },
    {
      id: 10,
      name: "Giày boot nam da thật",
      price: 1899000,
      originalPrice: 2699000,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 345,
      badge: "Premium",
      discount: 30,
      category: "Giày dép",
      brand: "Adidas"
    },
    {
      id: 11,
      name: "Tai nghe AirPods Pro 2",
      price: 5999000,
      originalPrice: 7499000,
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=400&fit=crop",
      rating: 5.0,
      reviews: 567,
      badge: "Hot",
      discount: 20,
      category: "Điện tử",
      brand: "Apple"
    },
    {
      id: 12,
      name: "Áo sơ mi nữ trắng",
      price: 399000,
      originalPrice: 599000,
      image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 234,
      badge: "Bán chạy",
      discount: 33,
      category: "Thời trang nữ",
      brand: "H&M"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleRating = (rating: number) => {
    setSelectedRatings(prev =>
      prev.includes(rating)
        ? prev.filter(r => r !== rating)
        : [...prev, rating]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedRatings([]);
    setPriceRange([0, 10000000]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Cửa hàng</h1>
          <p className="text-blue-100">Khám phá hàng nghìn sản phẩm chất lượng</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Bộ lọc</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Xóa tất cả
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 flex items-center">
                  <span>Danh mục</span>
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category.name} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.name)}
                        onChange={() => toggleCategory(category.name)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700 group-hover:text-blue-600 flex-1">
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-400">({category.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6 pb-6 border-b">
                <h3 className="font-semibold mb-3">Khoảng giá</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="10000000"
                    step="100000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6 pb-6 border-b">
                <h3 className="font-semibold mb-3">Thương hiệu</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand.name} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand.name)}
                        onChange={() => toggleBrand(brand.name)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700 group-hover:text-blue-600 flex-1">
                        {brand.name}
                      </span>
                      <span className="text-sm text-gray-400">({brand.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Ratings */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Đánh giá</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedRatings.includes(rating)}
                        onChange={() => toggleRating(rating)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="ml-2 flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        {rating < 5 && <span className="ml-1 text-sm text-gray-600">trở lên</span>}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowFilters(true)}
                    className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                    <span>Bộ lọc</span>
                  </button>
                  <span className="text-gray-600">
                    Hiển thị <span className="font-semibold">{products.length}</span> sản phẩm
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Sort */}
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Sắp xếp:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="popular">Phổ biến</option>
                      <option value="newest">Mới nhất</option>
                      <option value="price-low">Giá thấp đến cao</option>
                      <option value="price-high">Giá cao đến thấp</option>
                      <option value="rating">Đánh giá</option>
                    </select>
                  </div>

                  {/* View Mode */}
                  <div className="hidden md:flex items-center space-x-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${
                        viewMode === 'grid'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <Grid3x3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${
                        viewMode === 'list'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedCategories.length > 0 || selectedBrands.length > 0 || selectedRatings.length > 0) && (
                <div className="mt-4 pt-4 border-t flex flex-wrap gap-2">
                  {selectedCategories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {category}
                      <button onClick={() => toggleCategory(category)} className="ml-2">
                        <X className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                  {selectedBrands.map((brand) => (
                    <span
                      key={brand}
                      className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                    >
                      {brand}
                      <button onClick={() => toggleBrand(brand)} className="ml-2">
                        <X className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6" 
              : "space-y-4"
            }>
              {products.map((product) => (
                viewMode === 'grid' ? (
                  // Grid View
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all group"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-t-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                          product.badge === 'Bán chạy' ? 'bg-red-500 text-white' :
                          product.badge === 'Mới' ? 'bg-green-500 text-white' :
                          product.badge === 'Hot' ? 'bg-orange-500 text-white' :
                          product.badge === 'Premium' ? 'bg-purple-500 text-white' :
                          'bg-blue-500 text-white'
                        }`}>
                          {product.badge}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                          -{product.discount}%
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
                          <button className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-white rounded-full hover:bg-red-500 hover:text-white">
                            <Heart className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-white rounded-full hover:bg-green-600 hover:text-white">
                            <ShoppingCart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
                        {product.name}
                      </h3>
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-1 text-xs text-gray-600">({product.reviews})</span>
                      </div>
                      <div className="flex flex-col space-y-1">
                        <span className="text-lg font-bold text-blue-600">
                          {formatPrice(product.price)}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  // List View
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all flex overflow-hidden group"
                  >
                    <div className="relative w-48 flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                          product.badge === 'Bán chạy' ? 'bg-red-500 text-white' :
                          product.badge === 'Mới' ? 'bg-green-500 text-white' :
                          product.badge === 'Hot' ? 'bg-orange-500 text-white' :
                          product.badge === 'Premium' ? 'bg-purple-500 text-white' :
                          'bg-blue-500 text-white'
                        }`}>
                          {product.badge}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                          -{product.discount}%
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center mb-3">
                          <div className="flex">
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
                          <span className="ml-2 text-sm text-gray-600">({product.reviews} đánh giá)</span>
                        </div>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <span className="text-2xl font-bold text-blue-600 block">
                            {formatPrice(product.price)}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            <ShoppingCart className="w-5 h-5" />
                          </button>
                          <button className="p-3 border-2 border-gray-300 rounded-lg hover:border-red-500 hover:bg-red-50">
                            <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Trước
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">...</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">10</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Sau
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Bộ lọc</h2>
                <button onClick={() => setShowFilters(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Same filters as sidebar */}
              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold mb-3">Danh mục</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category.name} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.name)}
                          onChange={() => toggleCategory(category.name)}
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="ml-2 flex-1">{category.name}</span>
                        <span className="text-sm text-gray-400">({category.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div className="pt-6 border-t">
                  <h3 className="font-semibold mb-3">Thương hiệu</h3>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label key={brand.name} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand.name)}
                          onChange={() => toggleBrand(brand.name)}
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="ml-2 flex-1">{brand.name}</span>
                        <span className="text-sm text-gray-400">({brand.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t flex space-x-4">
                  <button
                    onClick={clearFilters}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Xóa bộ lọc
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Áp dụng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
