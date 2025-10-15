import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoriesSection from "@/components/CategoriesSection";
import DealsSection from "@/components/DealsSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <DealsSection />
      <NewsletterSection />
    </div>
  );
}
