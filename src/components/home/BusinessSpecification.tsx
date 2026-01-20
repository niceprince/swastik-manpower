import Image from "next/image";
import React from "react";

const BusinessSpecification = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="mx-auto text-center lg:col-8">
              <h2>
                The six core of <br /> BUSINESS SPECIFICATION
              </h2>
              <p className="mt-4">
                We comply with all statutory obligations and are duly registered
                under various government authorities are as :
              </p>
            </div>
          </div>
          <div className="row mt-14 text-center">
            <div className="mb-10 sm:col-6 lg:col-4">
              <Image
                className="mx-auto"
                src="/images/security.svg"
                width="100"
                height="90"
                alt=""
              />
              <h3 className="h4 mt-8 mb-4">Company Registration</h3>
              <p>
                Fast and hassle-free Company Registration services, ensuring
                proper documentation, legal compliance, and quick business
                setup.
              </p>
            </div>
            <div className="mb-10 sm:col-6 lg:col-4">
              <Image
                className="mx-auto"
                src="/images/security.svg"
                width="100"
                height="90"
                alt=""
              />
              <h3 className="h4 mt-8 mb-4">GST Number</h3>
              <p>
                Assistance in obtaining a GST Number with proper documentation,
                compliance, and quick registration support.
              </p>
            </div>
            <div className="mb-10 sm:col-6 lg:col-4">
              <Image
                className="mx-auto"
                src="/images/security.svg"
                width="100"
                height="90"
                alt=""
              />
              <h3 className="h4 mt-8 mb-4">ESI Registration</h3>
              <p>
                Easy and compliant ESI Registration services, ensuring employee
                coverage, documentation support, and smooth enrollment.
              </p>
            </div>
            <div className="mb-10 sm:col-6 lg:col-4">
              <Image
                className="mx-auto"
                src="/images/security.svg"
                width="100"
                height="90"
                alt=""
              />
              <h3 className="h4 mt-8 mb-4">EPF Registration</h3>
              <p>
                Quick and compliant EPF Registration services with complete
                documentation support, ensuring smooth employee enrolment and
                statutory compliance.
              </p>
            </div>
            <div className="mb-10 sm:col-6 lg:col-4">
              <Image
                className="mx-auto"
                src="/images/security.svg"
                width="100"
                height="90"
                alt=""
              />
              <h3 className="h4 mt-8 mb-4">PAN Number</h3>
              <p>
                Assistance in obtaining a PAN Number with accurate
                documentation, quick processing, and complete compliance
                support.
              </p>
            </div>
            <div className="mb-10 sm:col-6 lg:col-4">
              <Image
                className="mx-auto"
                src="/images/security.svg"
                width="100"
                height="90"
                alt=""
              />
              <h3 className="h4 mt-8 mb-4">ISO 9001:2015</h3>
              <p>
                Support for ISO 9001:2015 certification with proper
                documentation, quality standards implementation, and compliance
                guidance for organizational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessSpecification;
