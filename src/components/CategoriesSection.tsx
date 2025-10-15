import Link from 'next/link';
import { 
  Shirt, 
  Smartphone, 
  Home, 
  Dumbbell, 
  BookOpen, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: "Thời trang",
      description: "Quần áo, giày dép, phụ kiện",
      icon: Shirt,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      productCount: 1250,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      name: "Điện tử",
      description: "Điện thoại, laptop, phụ kiện",
      icon: Smartphone,
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      productCount: 890,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Nhà cửa & Đời sống",
      description: "Nội thất, trang trí, dụng cụ",
      icon: Home,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      productCount: 2100,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Thể thao",
      description: "Dụng cụ thể thao, quần áo",
      icon: Dumbbell,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      productCount: 650,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "Sách",
      description: "Sách văn học, kỹ năng, giáo dục",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      productCount: 3200,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 6,
      name: "Làm đẹp",
      description: "Mỹ phẩm, chăm sóc da, nước hoa",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      productCount: 780,
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Danh mục sản phẩm
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá đa dạng các danh mục sản phẩm với hàng nghìn mặt hàng chất lượng
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                href={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                  {/* Category Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} bg-opacity-20`}></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 left-4">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Product Count */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {category.productCount} sản phẩm
                      </span>
                    </div>
                  </div>

                  {/* Category Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                    
                    {/* View More Button */}
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      <span>Xem thêm</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-lg opacity-90">Sản phẩm đa dạng</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50,000+</div>
              <div className="text-lg opacity-90">Khách hàng hài lòng</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
              <div className="text-lg opacity-90">Đánh giá tích cực</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
