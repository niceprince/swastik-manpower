import Carousel from "@/components/Carousel";
import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import OurStrength from "@/components/home/OurStrength";
import BusinessSpecification from "@/components/home/BusinessSpecification";
import Vision from "@/components/home/Vision";
import Training from "@/components/home/Training";
import { carouselData } from "@/static/data";

export default function Home() {
  return (
    <>
      <Carousel images={carouselData} />
      <HeroSection />
      <Features />
      <Vision />
      <BusinessSpecification />
      <OurStrength />
      <Training />
    </>
  );
}
