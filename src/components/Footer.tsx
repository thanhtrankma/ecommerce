import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
  CreditCard,
  Truck,
  Shield,
  RotateCcw
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Features Bar */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-600 rounded-full">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Miễn phí vận chuyển</h4>
                <p className="text-sm text-gray-400">Đơn hàng từ 500k</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-600 rounded-full">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Đổi trả dễ dàng</h4>
                <p className="text-sm text-gray-400">Trong vòng 30 ngày</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-600 rounded-full">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Thanh toán an toàn</h4>
                <p className="text-sm text-gray-400">Bảo mật 100%</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-orange-600 rounded-full">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Nhiều hình thức</h4>
                <p className="text-sm text-gray-400">Thanh toán linh hoạt</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="text-3xl font-bold mb-4">
                <span className="text-blue-500">Och</span>
                <span className="text-white">aka</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ochaka là điểm đến tin cậy cho mọi nhu cầu mua sắm của bạn. 
              Chúng tôi cam kết mang đến những sản phẩm chất lượng cao nhất 
              với giá cả hợp lý và dịch vụ khách hàng xuất sắc.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-300">+84 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-300">info@ochaka.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a href="#" className="p-2.5 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2.5 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2.5 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2.5 bg-gray-800 rounded-full hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Thông tin</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/stores" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Hệ thống cửa hàng
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Hỗ trợ</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/help" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Vận chuyển
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Hướng dẫn chọn size
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Câu hỏi thường gặp
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Tài khoản</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/account" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Tài khoản của tôi
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Đơn hàng
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Danh sách yêu thích
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  So sánh sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/track" className="text-gray-300 hover:text-blue-500 transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                  Theo dõi đơn hàng
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-2">Đăng ký nhận tin khuyến mãi</h4>
              <p className="text-gray-400">Nhận ngay voucher 100k cho đơn hàng đầu tiên</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md">
              <input
                type="email"
                placeholder="Nhập địa chỉ email của bạn"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors flex items-center">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h5 className="text-sm font-semibold mb-2">Phương thức thanh toán</h5>
              <div className="flex items-center space-x-2">
                <div className="bg-white px-3 py-1.5 rounded">
                  <span className="text-blue-600 font-bold text-sm">VISA</span>
                </div>
                <div className="bg-white px-3 py-1.5 rounded">
                  <span className="text-orange-600 font-bold text-sm">Master</span>
                </div>
                <div className="bg-white px-3 py-1.5 rounded">
                  <span className="text-blue-700 font-bold text-sm">PayPal</span>
                </div>
                <div className="bg-white px-3 py-1.5 rounded">
                  <span className="text-red-600 font-bold text-sm">Momo</span>
                </div>
                <div className="bg-white px-3 py-1.5 rounded">
                  <span className="text-blue-500 font-bold text-sm">ZaloPay</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h5 className="text-sm font-semibold mb-2">Đối tác vận chuyển</h5>
              <div className="flex items-center space-x-2">
                <div className="bg-white px-3 py-1.5 rounded">
                  <span className="text-orange-600 font-bold text-sm">GHN</span>
                </div>
                <div className="bg-white px-3 py-1.5 rounded">
                  <span className="text-red-600 font-bold text-sm">Giao Hàng Nhanh</span>
                </div>
                <div className="bg-white px-3 py-1.5 rounded">
                  <span className="text-blue-600 font-bold text-sm">GHTK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 <span className="text-blue-500 font-semibold">Ochaka</span>. Tất cả quyền được bảo lưu. 
              <span className="ml-2">Made with ❤️ in Vietnam</span>
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Chính sách bảo mật
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Điều khoản sử dụng
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Chính sách cookie
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sơ đồ trang web
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;