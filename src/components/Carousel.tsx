"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

type ImageAttribute = { src: string; textAlign: string };

interface CarouselProps {
  images: ImageAttribute[];
}

export default function Carousel({ images }: CarouselProps) {
  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="relative">
            <Image
              src={img.src}
              alt={`slide-${i}`}
              width={1920}
              height={758}
              className="w-full flex-shrink-0 object-cover"
            />
            <div
              className={`absolute z-20 top-0 bottom-0 right-0 max-w-md text-xl text-white p-12 ${img.textAlign}`}
            >
              <div
                className="h-4/5 flex items-center"
                data-swiper-parallax="-300"
              >
                <div>
                  <h6 className="text-white mb-4" data-swiper-parallax="-100">
                    24/7 Client Support & Rapid Response System
                  </h6>
                  <h6 className="text-white mb-4" data-swiper-parallax="-200">
                    Round-the-Clock Client Communication and Immediate
                    Deployment
                  </h6>
                  <h6 className="text-white mb-4" data-swiper-parallax="-300">
                    Always Available: Continuous Client Support and Swift Action
                  </h6>
                  <h6 className="text-white mb-4" data-swiper-parallax="-400">
                    24/7 Client Call Handling and On-Demand Response
                  </h6>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
