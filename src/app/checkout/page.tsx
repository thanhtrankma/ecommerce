'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Truck, Shield, Check } from 'lucide-react';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  
  const [formData, setFormData] = useState({
    // Customer Info
    fullName: '',
    email: '',
    phone: '',
    
    // Shipping Address
    address: '',
    city: '',
    district: '',
    ward: '',
    
    // Additional
    note: '',
    saveInfo: false
  });

  const cartItems = [
    {
      id: 1,
      name: "Áo thun nam cao cấp Premium Cotton",
      price: 299000,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Giày sneaker nữ thời trang",
      price: 899000,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=100&h=100&fit=crop"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 30000;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Process order
      alert('Đặt hàng thành công!');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="container mx-auto px-4">
          <Link href="/cart" className="flex items-center text-white hover:text-gray-200 mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Quay lại giỏ hàng
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Thanh toán</h1>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center max-w-2xl mx-auto">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {step > 1 ? <Check className="w-5 h-5" /> : '1'}
              </div>
              <span className="ml-2 font-semibold hidden sm:inline">Thông tin</span>
            </div>
            
            <div className={`w-20 md:w-32 h-1 mx-2 ${
              step >= 2 ? 'bg-blue-600' : 'bg-gray-300'
            }`}></div>
            
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                2
              </div>
              <span className="ml-2 font-semibold hidden sm:inline">Thanh toán</span>
            </div>
            
            <div className={`w-20 md:w-32 h-1 mx-2 ${
              step >= 3 ? 'bg-blue-600' : 'bg-gray-300'
            }`}></div>
            
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                3
              </div>
              <span className="ml-2 font-semibold hidden sm:inline">Hoàn tất</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {step === 1 && (
                <>
                  {/* Customer Information */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-6">Thông tin khách hàng</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Họ và tên <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Nguyễn Văn A"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Số điện thoại <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="0123456789"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-6">Địa chỉ giao hàng</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Tỉnh/Thành phố <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Chọn tỉnh/thành</option>
                            <option value="Hồ Chí Minh">TP. Hồ Chí Minh</option>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Đà Nẵng">Đà Nẵng</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Quận/Huyện <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="district"
                            value={formData.district}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Chọn quận/huyện</option>
                            <option value="Quận 1">Quận 1</option>
                            <option value="Quận 2">Quận 2</option>
                            <option value="Quận 3">Quận 3</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Phường/Xã <span className="text-red-500">*</span>
                          </label>
                          <select
                            name="ward"
                            value={formData.ward}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Chọn phường/xã</option>
                            <option value="Phường 1">Phường 1</option>
                            <option value="Phường 2">Phường 2</option>
                            <option value="Phường 3">Phường 3</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Địa chỉ cụ thể <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Số nhà, tên đường..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Ghi chú (Tùy chọn)
                        </label>
                        <textarea
                          name="note"
                          value={formData.note}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn"
                        />
                      </div>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="saveInfo"
                          checked={formData.saveInfo}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">Lưu thông tin cho lần mua sau</span>
                      </label>
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  {/* Payment Method */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-6">Phương thức thanh toán</h2>
                    <div className="space-y-4">
                      <label className="flex items-start p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={paymentMethod === 'cod'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mt-1"
                        />
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">Thanh toán khi nhận hàng (COD)</span>
                            <Truck className="w-5 h-5 text-gray-600" />
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            Thanh toán bằng tiền mặt khi nhận hàng
                          </p>
                        </div>
                      </label>

                      <label className="flex items-start p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="bank"
                          checked={paymentMethod === 'bank'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mt-1"
                        />
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">Chuyển khoản ngân hàng</span>
                            <CreditCard className="w-5 h-5 text-gray-600" />
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            Chuyển khoản qua ngân hàng hoặc ví điện tử
                          </p>
                        </div>
                      </label>

                      <label className="flex items-start p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="card"
                          checked={paymentMethod === 'card'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="mt-1"
                        />
                        <div className="ml-3 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">Thẻ tín dụng/Ghi nợ</span>
                            <CreditCard className="w-5 h-5 text-gray-600" />
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            Visa, MasterCard, JCB, American Express
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Review Order */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-6">Kiểm tra thông tin</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Thông tin khách hàng</h3>
                        <p className="text-gray-600">{formData.fullName}</p>
                        <p className="text-gray-600">{formData.phone}</p>
                        <p className="text-gray-600">{formData.email}</p>
                      </div>
                      <div className="border-t pt-4">
                        <h3 className="font-semibold mb-2">Địa chỉ giao hàng</h3>
                        <p className="text-gray-600">
                          {formData.address}, {formData.ward}, {formData.district}, {formData.city}
                        </p>
                      </div>
                      {formData.note && (
                        <div className="border-t pt-4">
                          <h3 className="font-semibold mb-2">Ghi chú</h3>
                          <p className="text-gray-600">{formData.note}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}

              <div className="flex gap-4">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
                  >
                    Quay lại
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  {step === 1 ? 'Tiếp tục' : 'Đặt hàng'}
                </button>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Đơn hàng của bạn</h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm line-clamp-2">{item.name}</h4>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-sm text-gray-600">x{item.quantity}</span>
                          <span className="font-bold text-blue-600">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Tạm tính:</span>
                    <span className="font-semibold">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Phí vận chuyển:</span>
                    <span className="font-semibold">{formatPrice(shipping)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg font-bold">
                    <span>Tổng cộng:</span>
                    <span className="text-blue-600 text-2xl">{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="border-t pt-6 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-green-600 mr-2" />
                    Thanh toán an toàn và bảo mật
                  </div>
                  <div className="flex items-center">
                    <Truck className="w-5 h-5 text-green-600 mr-2" />
                    Giao hàng nhanh chóng
                  </div>
                  <div className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-2" />
                    Miễn phí đổi trả trong 30 ngày
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
