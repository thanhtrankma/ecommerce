import HeroSection from "@/components/HeroSection";
import ProductTabs from "@/components/ProductTabs";
import CategoriesSection from "@/components/CategoriesSection";
import DealsSection from "@/components/DealsSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductTabs />
      <CategoriesSection />
      <DealsSection />
      <NewsletterSection />
    </div>
  );
}
