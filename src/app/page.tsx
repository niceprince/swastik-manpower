import Carousel from "@/components/Carousel";
import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import OurStrength from "@/components/home/OurStrength";
import BusinessSpecification from "@/components/home/BusinessSpecification";
import Vision from "@/components/home/Vision";
import Training from "@/components/home/Training";

export default function Home() {
  return (
    <>
      <Carousel
        images={[
          "/images/img1.jpg",
          "/images/img2.jpg",
          "/images/img3.jpg",

          // "/images/image2.jpg",
          // "/images/image1.jpg",

          // "/images/image3.jpg",
        ]}
      />
      <HeroSection />
      <Features />
      <Vision />
      <BusinessSpecification />
      <OurStrength />
      <Training />
    </>
  );
}
