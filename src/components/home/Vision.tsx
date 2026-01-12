import Image from "next/image";
import React from "react";

const Vision = () => {
  return (
    <div>
      <section className="section features pb-0">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center lg:col-7">
              <h2>
                CORE VALUES <br /> Build collaborative workspaces
              </h2>
              <p className="mt-4">
                Dedication at work using innovative ideas with positive and
                integrated approach makes us a premium company to work with.
              </p>
            </div>
          </div>
          <div className="mt-14 rounded-xl bg-white px-6 py-10 shadow-lg lg:px-12 lg:py-16">
            <div className="row">
              <div className="lg:col-6">
                <div className="h-full rounded-lg bg-[#FAFAFA] p-6 lg:p-8">
                  <Image
                    src="/images/vision.jpg"
                    alt="Mission Vision images"
                    width={200}
                    height={200}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mt-10 lg:col-6 lg:mt-0">
                <div className="mb-6 flex items-center space-x-4 rounded-lg bg-[#fafafa] px-6 py-8">
                  <div className="relative inline-flex h-24 w-24 items-center justify-center p-3">
                    <img src="/images/icons/feature-icon-1.svg" alt="" />
                    <svg
                      className="absolute left-0 top-0 h-full w-full"
                      width="90"
                      height="90"
                      viewBox="0 0 90 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M42.8833 0.00928958C63.2143 -0.38584 82.2759 11.853 88.3264 31.1979C94.1797 49.9121 84.027 68.9907 68.0244 80.3913C52.4387 91.4948 31.5679 93.9094 16.0849 82.6642C0.66775 71.4667 -3.27813 50.9537 2.58684 32.8642C8.48561 14.6704 23.699 0.382132 42.8833 0.00928958Z"
                        fill="#FFCC99"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="h5 font-primary">MISSION</h3>
                    <p className="mt-4">
                      Our mission is to become most trusted & valued service
                      provider company to our clients.
                    </p>
                  </div>
                </div>
                <div className="mb-6 flex items-center space-x-4 rounded-lg bg-[#fafafa] px-6 py-8">
                  <div className="relative inline-flex h-24 w-24 items-center justify-center p-3">
                    <img src="/images/icons/feature-icon-8.svg" alt="" />
                    <svg
                      className="absolute left-0 top-0 h-full w-full"
                      width="90"
                      height="90"
                      viewBox="0 0 90 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M42.8833 0.00928958C63.2143 -0.38584 82.2759 11.853 88.3264 31.1979C94.1797 49.9121 84.027 68.9907 68.0244 80.3913C52.4387 91.4948 31.5679 93.9094 16.0849 82.6642C0.66775 71.4667 -3.27813 50.9537 2.58684 32.8642C8.48561 14.6704 23.699 0.382132 42.8833 0.00928958Z"
                        fill="#FFCC99"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="h5 font-primary">VISION</h3>
                    <p className="mt-4">
                      Our vision is to expand our operations & services globally
                      in coming years.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
