import BestSeller from "@/components/home/BestSeller";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import PromoBanner from "@/components/home/PromoBanner";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <FeaturedCategories />
      <FeaturedProducts />
      <PromoBanner />
      <BestSeller />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
