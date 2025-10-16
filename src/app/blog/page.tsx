import Link from 'next/link';
import { Calendar, User, Tag, Clock, TrendingUp, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "Top 10 xu hướng thời trang mùa thu 2025",
    excerpt: "Khám phá những xu hướng thời trang hot nhất mùa thu năm nay và cách phối đồ sao cho phù hợp với phong cách của bạn.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop",
    author: "Nguyễn Văn A",
    date: "15/10/2025",
    category: "Thời trang",
    readTime: "8 phút đọc",
    views: 15420
  };

  const posts = [
    {
      id: 2,
      title: "Bí quyết chọn giày sneaker phù hợp với từng hoàn cảnh",
      excerpt: "Giày sneaker không chỉ là món đồ thể thao mà còn là item thời trang không thể thiếu. Cùng tìm hiểu cách chọn giày phù hợp nhất.",
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=400&fit=crop",
      author: "Trần Thị B",
      date: "12/10/2025",
      category: "Thời trang",
      readTime: "5 phút đọc",
      views: 8340
    },
    {
      id: 3,
      title: "5 cách bảo quản túi xách da để luôn như mới",
      excerpt: "Túi xách da là món đồ đắt tiền nên cần được chăm sóc đúng cách. Dưới đây là những bí quyết bảo quản hiệu quả nhất.",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=400&fit=crop",
      author: "Lê Văn C",
      date: "10/10/2025",
      category: "Phụ kiện",
      readTime: "6 phút đọc",
      views: 6210
    },
    {
      id: 4,
      title: "So sánh iPhone 15 Pro Max vs Samsung S24 Ultra",
      excerpt: "Phân tích chi tiết hai siêu phẩm flagship hàng đầu hiện nay để giúp bạn đưa ra lựa chọn phù hợp nhất.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
      author: "Phạm Minh D",
      date: "08/10/2025",
      category: "Công nghệ",
      readTime: "10 phút đọc",
      views: 12350
    },
    {
      id: 5,
      title: "Cách phối đồ công sở thanh lịch và chuyên nghiệp",
      excerpt: "Tạo ấn tượng tốt trong môi trường công sở với những gợi ý phối đồ thông minh và tinh tế.",
      image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&h=400&fit=crop",
      author: "Nguyễn Thị E",
      date: "05/10/2025",
      category: "Thời trang",
      readTime: "7 phút đọc",
      views: 9870
    },
    {
      id: 6,
      title: "Review chi tiết MacBook Air M3: Có đáng để nâng cấp?",
      excerpt: "Đánh giá toàn diện về hiệu năng, thiết kế và trải nghiệm sử dụng MacBook Air chip M3 mới nhất.",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
      author: "Hoàng Văn F",
      date: "03/10/2025",
      category: "Công nghệ",
      readTime: "12 phút đọc",
      views: 18900
    },
    {
      id: 7,
      title: "Xu hướng làm đẹp 2025: Natural & Minimalist",
      excerpt: "Phong cách làm đẹp tự nhiên và tối giản đang trở thành xu hướng được nhiều người yêu thích.",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=400&fit=crop",
      author: "Đỗ Thị G",
      date: "01/10/2025",
      category: "Làm đẹp",
      readTime: "6 phút đọc",
      views: 7650
    },
    {
      id: 8,
      title: "Top 5 smartwatch đáng mua nhất năm 2025",
      excerpt: "Tổng hợp những mẫu đồng hồ thông minh có tính năng tốt nhất với mức giá hợp lý.",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=400&fit=crop",
      author: "Vũ Văn H",
      date: "28/09/2025",
      category: "Công nghệ",
      readTime: "9 phút đọc",
      views: 11230
    },
    {
      id: 9,
      title: "Bí quyết mix & match trang phục mùa đông",
      excerpt: "Gợi ý cách phối đồ mùa đông vừa ấm áp vừa thời trang, phù hợp với thời tiết Việt Nam.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop",
      author: "Ngô Thị I",
      date: "25/09/2025",
      category: "Thời trang",
      readTime: "8 phút đọc",
      views: 10450
    }
  ];

  const categories = [
    { name: "Tất cả", count: 156, active: true },
    { name: "Thời trang", count: 45 },
    { name: "Công nghệ", count: 38 },
    { name: "Làm đẹp", count: 29 },
    { name: "Phụ kiện", count: 24 },
    { name: "Lifestyle", count: 20 }
  ];

  const trendingPosts = [
    { id: 1, title: "10 món phụ kiện không thể thiếu", views: 25000 },
    { id: 2, title: "Cách chọn nước hoa phù hợp", views: 22000 },
    { id: 3, title: "Review AirPods Pro 2", views: 20000 },
    { id: 4, title: "Xu hướng thời trang thu đông", views: 18000 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog Ochaka</h1>
          <p className="text-xl text-blue-100">Khám phá xu hướng, mẹo hay và đánh giá sản phẩm</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Post */}
        <div className="mb-12">
          <Link href={`/blog/${featuredPost.id}`} className="block group">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Nổi bật
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                        <p className="text-sm text-gray-500">{featuredPost.views.toLocaleString()} lượt xem</p>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold">
                      Đọc thêm
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Category Filters */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      category.active
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all group overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-sm text-gray-700">{post.author}</span>
                      </div>
                      <span className="text-sm text-gray-500">{post.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </Link>
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

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Search */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">Tìm kiếm</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Tìm kiếm bài viết..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Trending Posts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-5 h-5 text-red-500 mr-2" />
                  <h3 className="font-bold text-lg">Bài viết thịnh hành</h3>
                </div>
                <div className="space-y-4">
                  {trendingPosts.map((post, index) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="flex items-start space-x-3 group"
                    >
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {post.views.toLocaleString()} lượt xem
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Tag className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-bold text-lg">Tags phổ biến</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Thời trang', 'Công nghệ', 'Lifestyle', 'Review', 'Xu hướng', 'Làm đẹp', 'Phụ kiện', 'Mẹo hay'].map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full text-sm transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-md p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Đăng ký nhận tin</h3>
                <p className="text-sm text-blue-100 mb-4">
                  Nhận bài viết mới nhất qua email
                </p>
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 mb-3 focus:outline-none"
                />
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
