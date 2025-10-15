'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle, Gift, Percent, Truck } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 2000);
  };

  const benefits = [
    {
      icon: Gift,
      title: "Quà tặng đặc biệt",
      description: "Nhận ngay voucher 100k cho lần mua đầu tiên"
    },
    {
      icon: Percent,
      title: "Ưu đãi độc quyền",
      description: "Giảm giá lên đến 30% cho thành viên"
    },
    {
      icon: Truck,
      title: "Miễn phí vận chuyển",
      description: "Giao hàng miễn phí cho mọi đơn hàng"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Đăng ký nhận tin
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Nhận thông tin về sản phẩm mới, khuyến mãi đặc biệt và ưu đãi độc quyền
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Nhập địa chỉ email của bạn"
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center min-w-[160px]"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Đăng ký
                      </>
                    )}
                  </button>
                </div>
                
                <p className="text-sm text-gray-600 mt-4 text-center">
                  Bằng cách đăng ký, bạn đồng ý với{' '}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    Chính sách bảo mật
                  </a>{' '}
                  của chúng tôi
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Đăng ký thành công!
                </h3>
                <p className="text-gray-600 mb-4">
                  Cảm ơn bạn đã đăng ký. Chúng tôi sẽ gửi thông tin khuyến mãi đến email của bạn.
                </p>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Đăng ký email khác
                </button>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-blue-100">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50,000+</div>
                <div className="text-blue-100">Thành viên đăng ký</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-blue-100">Hài lòng với dịch vụ</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-100">Hỗ trợ khách hàng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
