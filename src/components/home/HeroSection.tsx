import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-orange-50 section banner relative">
      <div className="container">
        <div className="row items-center">
          <div className="lg:col-6">
            <h1 className="banner-title">
              Swastik Security & Manpower Services is managed by senior
              experienced officers.
            </h1>
            <p className="mt-6">
              We have team of experts specialized in security services. We also
              have 24*7 functional support maintained by top grade security
              management personal to interact with our valued clients.
            </p>
          </div>
          <div className="lg:col-6">
            <Image
              className="w-full object-contain"
              src="/images/guard-image.png"
              width={603}
              height={396}
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="services"></div>
    </section>
  );
};

export default HeroSection;
