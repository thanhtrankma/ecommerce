'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Minus, 
  Plus,
  Share2,
  Truck,
  RotateCcw,
  Shield,
  ChevronRight,
  Check
} from 'lucide-react';

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('black');
  const [activeTab, setActiveTab] = useState('description');

  // Mock product data
  const product = {
    id: id,
    name: "Áo thun nam cao cấp Premium Cotton",
    price: 299000,
    originalPrice: 499000,
    discount: 40,
    rating: 4.8,
    reviews: 234,
    sold: 1240,
    stock: 150,
    sku: "AT-001-BLK-M",
    brand: "Ochaka Premium",
    category: "Thời trang nam",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&h=800&fit=crop"
    ],
    colors: [
      { name: 'Đen', value: 'black', hex: '#000000' },
      { name: 'Trắng', value: 'white', hex: '#FFFFFF' },
      { name: 'Xanh Navy', value: 'navy', hex: '#001F3F' },
      { name: 'Xám', value: 'gray', hex: '#808080' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: `
      <h3>Mô tả sản phẩm</h3>
      <p>Áo thun nam cao cấp được làm từ 100% cotton tự nhiên, mang lại cảm giác thoải mái và thoáng mát cho người mặc.</p>
      <ul>
        <li>Chất liệu: 100% Cotton cao cấp</li>
        <li>Form dáng: Regular fit, phù hợp mọi vóc dáng</li>
        <li>Thiết kế: Đơn giản, thanh lịch, dễ phối đồ</li>
        <li>Độ bền: Vải không xù lông, không nhăn sau nhiều lần giặt</li>
        <li>Xuất xứ: Việt Nam</li>
      </ul>
      <h4>Hướng dẫn bảo quản:</h4>
      <ul>
        <li>Giặt máy ở nhiệt độ thường</li>
        <li>Không sử dụng chất tẩy</li>
        <li>Phơi nơi thoáng mát, tránh ánh nắng trực tiếp</li>
      </ul>
    `,
    specifications: [
      { label: 'Chất liệu', value: '100% Cotton' },
      { label: 'Xuất xứ', value: 'Việt Nam' },
      { label: 'Form dáng', value: 'Regular Fit' },
      { label: 'Kiểu dáng', value: 'Áo thun cổ tròn' },
      { label: 'Độ dày', value: 'Vừa phải' },
      { label: 'Độ co giãn', value: 'Có co giãn nhẹ' }
    ]
  };

  const reviews = [
    {
      id: 1,
      user: "Nguyễn Văn A",
      rating: 5,
      date: "15/01/2025",
      comment: "Sản phẩm rất tốt, chất liệu mềm mại, thoải mái. Giao hàng nhanh. Sẽ ủng hộ shop lâu dài!",
      images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop"],
      verified: true
    },
    {
      id: 2,
      user: "Trần Thị B",
      rating: 4,
      date: "10/01/2025",
      comment: "Áo đẹp, form chuẩn. Tuy nhiên màu hơi khác một chút so với hình. Nhưng nhìn chung vẫn ok.",
      images: [],
      verified: true
    },
    {
      id: 3,
      user: "Lê Văn C",
      rating: 5,
      date: "05/01/2025",
      comment: "Chất lượng tuyệt vời, giá cả hợp lý. Đã mua 3 cái rồi, rất hài lòng!",
      images: ["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=100&h=100&fit=crop"],
      verified: true
    }
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "Áo polo nam cao cấp",
      price: 350000,
      originalPrice: 550000,
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
      rating: 4.7,
      discount: 36
    },
    {
      id: 2,
      name: "Áo sơ mi trắng",
      price: 450000,
      originalPrice: 650000,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
      rating: 4.8,
      discount: 31
    },
    {
      id: 3,
      name: "Áo khoác hoodie",
      price: 550000,
      originalPrice: 850000,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      rating: 4.9,
      discount: 35
    },
    {
      id: 4,
      name: "Quần jean nam",
      price: 450000,
      originalPrice: 700000,
      image: "https://images.unsplash.com/photo-1542272454315-7f6063e67a67?w=400&h=400&fit=crop",
      rating: 4.6,
      discount: 36
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase' && quantity < product.stock) {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Trang chủ</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/shop" className="text-gray-600 hover:text-blue-600">Sản phẩm</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href={`/category/${product.category}`} className="text-gray-600 hover:text-blue-600">{product.category}</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
              <div className="relative aspect-square overflow-hidden rounded-lg mb-4 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.discount > 0 && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{product.discount}%
                    </span>
                  </div>
                )}
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-blue-600 scale-95'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <Truck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Miễn phí vận chuyển</p>
                <p className="text-xs text-gray-500">Đơn từ 500k</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <RotateCcw className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Đổi trả 30 ngày</p>
                <p className="text-xs text-gray-500">Miễn phí</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Bảo hành</p>
                <p className="text-xs text-gray-500">12 tháng</p>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              {/* Brand & Category */}
              <div className="flex items-center space-x-4 mb-4">
                <Link href={`/brand/${product.brand}`} className="text-blue-600 hover:text-blue-700 font-medium">
                  {product.brand}
                </Link>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">SKU: {product.sku}</span>
              </div>

              {/* Product Name */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-900 font-medium">{product.rating}</span>
                </div>
                <span className="text-gray-400">|</span>
                <Link href="#reviews" className="text-blue-600 hover:underline">
                  {product.reviews} đánh giá
                </Link>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">Đã bán {product.sold}</span>
              </div>

              {/* Price */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-3xl font-bold text-red-600">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                    -{product.discount}%
                  </span>
                </div>
                <p className="text-sm text-gray-600">Tiết kiệm: {formatPrice(product.originalPrice - product.price)}</p>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Màu sắc: <span className="text-blue-600">{product.colors.find(c => c.value === selectedColor)?.name}</span>
                </label>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color.value)}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        selectedColor === color.value
                          ? 'border-blue-600 scale-110'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === color.value && (
                        <Check className="w-6 h-6 text-white mx-auto" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="block text-sm font-semibold text-gray-900">
                    Kích thước: <span className="text-blue-600">{selectedSize}</span>
                  </label>
                  <Link href="/size-guide" className="text-sm text-blue-600 hover:underline">
                    Hướng dẫn chọn size
                  </Link>
                </div>
                <div className="flex space-x-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 border-2 rounded-lg font-semibold transition-all ${
                        selectedSize === size
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Số lượng:
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border-2 border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange('decrease')}
                      className="p-3 hover:bg-gray-100 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-6 py-3 font-semibold">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange('increase')}
                      className="p-3 hover:bg-gray-100 transition-colors"
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.stock} sản phẩm có sẵn
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 mb-6">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center shadow-lg hover:shadow-xl">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Thêm vào giỏ hàng
                </button>
                <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-red-500 hover:bg-red-50 transition-colors">
                  <Heart className="w-6 h-6 text-gray-600 hover:text-red-500" />
                </button>
                <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
                  <Share2 className="w-6 h-6 text-gray-600 hover:text-blue-500" />
                </button>
              </div>

              <button className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-4">
                Mua ngay
              </button>

              {/* Additional Info */}
              <div className="border-t pt-4 space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  Chính hãng 100%
                </div>
                <div className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  Miễn phí đổi trả trong 30 ngày
                </div>
                <div className="flex items-center text-gray-600">
                  <Check className="w-4 h-4 text-green-600 mr-2" />
                  Thanh toán khi nhận hàng
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="border-b mb-6">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`pb-4 font-semibold transition-all ${
                  activeTab === 'description'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Mô tả sản phẩm
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`pb-4 font-semibold transition-all ${
                  activeTab === 'specifications'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Thông số kỹ thuật
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-4 font-semibold transition-all ${
                  activeTab === 'reviews'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Đánh giá ({product.reviews})
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'description' && (
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
          )}

          {activeTab === 'specifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex border-b pb-3">
                  <span className="font-semibold text-gray-900 w-1/2">{spec.label}:</span>
                  <span className="text-gray-600 w-1/2">{spec.value}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div id="reviews">
              <div className="mb-8">
                <div className="flex items-center space-x-8 mb-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-900 mb-2">{product.rating}</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{product.reviews} đánh giá</p>
                  </div>
                  <div className="flex-1">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center space-x-2 mb-2">
                        <span className="text-sm w-8">{star} ⭐</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: `${star === 5 ? 70 : star === 4 ? 20 : 10}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-12">{star === 5 ? 70 : star === 4 ? 20 : 10}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {review.user.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">{review.user}</h4>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              {review.verified && (
                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                                  ✓ Đã mua hàng
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-gray-700 mb-3">{review.comment}</p>
                        {review.images.length > 0 && (
                          <div className="flex space-x-2">
                            {review.images.map((img, idx) => (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                key={idx}
                                src={img}
                                alt="Review"
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
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
                  <div className="absolute top-3 right-3">
                    <span className="bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                      -{product.discount}%
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-2">
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
                    <span className="ml-1 text-xs text-gray-600">({product.rating})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-blue-600">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
