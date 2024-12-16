import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import PicksSection from "@/components/PicksSection";
import BlogSection from "@/components/BlogSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductSection />
      <PicksSection />
      <BlogSection />
      <InstagramSection />
      <Footer />
    </div>
  );
}
