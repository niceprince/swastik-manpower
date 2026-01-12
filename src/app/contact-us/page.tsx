import ContactContent from "@/components/contact/ContactContent";
import PageHeading from "@/components/PageHeading";
import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <>
      <PageHeading pageTitle="Contact Us" />
      <ContactContent />

      <ContactForm />

      <script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDmKTHcaBzxzV5EIG0Iy0L0IP4Q37DphTI&callback=initMap"
      ></script>
    </>
  );
};

export default ContactUs;
