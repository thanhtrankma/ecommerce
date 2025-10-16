'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, HeadphonesIcon, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Địa chỉ",
      content: "123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Điện thoại",
      content: "+84 123 456 789",
      link: "tel:+84123456789",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@ochaka.com",
      link: "mailto:info@ochaka.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      content: "Thứ 2 - Chủ Nhật: 8:00 - 22:00",
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      icon: HeadphonesIcon,
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ chăm sóc khách hàng luôn sẵn sàng"
    },
    {
      icon: MessageCircle,
      title: "Chat trực tuyến",
      description: "Trò chuyện ngay với chúng tôi"
    },
    {
      icon: Send,
      title: "Phản hồi nhanh",
      description: "Phản hồi trong vòng 24h"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên hệ với chúng tôi</h1>
          <p className="text-xl text-blue-100">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.content}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gửi tin nhắn cho chúng tôi</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Gửi thành công!</h3>
                  <p className="text-gray-600 mb-6">
                    Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Gửi tin nhắn khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0123456789"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Chủ đề <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Chọn chủ đề</option>
                        <option value="Hỗ trợ sản phẩm">Hỗ trợ sản phẩm</option>
                        <option value="Đơn hàng">Đơn hàng</option>
                        <option value="Đổi trả">Đổi trả</option>
                        <option value="Khiếu nại">Khiếu nại</option>
                        <option value="Góp ý">Góp ý</option>
                        <option value="Khác">Khác</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Nội dung <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Gửi tin nhắn
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-6">Tại sao chọn chúng tôi?</h3>
              <div className="space-y-6">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-4">Kết nối với chúng tôi</h3>
              <p className="text-sm text-blue-100 mb-6">
                Theo dõi chúng tôi trên mạng xã hội để cập nhật thông tin mới nhất
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg py-3 transition-all"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="font-medium">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg py-3 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-medium">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg py-3 transition-all"
                >
                  <Twitter className="w-5 h-5" />
                  <span className="font-medium">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg py-3 transition-all"
                >
                  <Youtube className="w-5 h-5" />
                  <span className="font-medium">Youtube</span>
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Liên hệ nhanh</h3>
              <div className="space-y-3">
                <a
                  href="tel:+84123456789"
                  className="flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Hotline</p>
                    <p className="font-semibold text-gray-900">+84 123 456 789</p>
                  </div>
                </a>
                <a
                  href="mailto:info@ochaka.com"
                  className="flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-900">info@ochaka.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">Địa chỉ của chúng tôi</h2>
            <p className="text-gray-600 mt-2">Ghé thăm cửa hàng để trải nghiệm trực tiếp sản phẩm</p>
          </div>
          <div className="h-96 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Bản đồ sẽ được hiển thị ở đây</p>
              <p className="text-sm text-gray-500 mt-2">
                123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Câu hỏi thường gặp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Thời gian giao hàng là bao lâu?</h3>
              <p className="text-gray-600">
                Thời gian giao hàng từ 2-5 ngày tùy theo khu vực. Nội thành HCM và HN thường nhận hàng trong 1-2 ngày.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Chính sách đổi trả như thế nào?</h3>
              <p className="text-gray-600">
                Bạn có thể đổi trả sản phẩm trong vòng 30 ngày kể từ ngày nhận hàng nếu sản phẩm còn nguyên tem, chưa qua sử dụng.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Có hỗ trợ thanh toán trả góp không?</h3>
              <p className="text-gray-600">
                Có, chúng tôi hỗ trợ trả góp qua thẻ tín dụng và các công ty tài chính như Home Credit, FE Credit.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Làm sao để theo dõi đơn hàng?</h3>
              <p className="text-gray-600">
                Bạn có thể theo dõi đơn hàng qua mã tracking được gửi vào email hoặc đăng nhập vào tài khoản để xem chi tiết.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
