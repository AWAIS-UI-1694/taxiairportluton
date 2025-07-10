import React from "react";

const ContactDynamic = ({ address, phone, email, mapSrc }) => {
  return (
    <section className=" bg-white mt-10 text-black">
      <div className=" mx-auto">

        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>

        <div className="mb-12 grid mx-auto tex-center w-4xl md:grid-cols-3 gap-8 text-lg">
          <div className="text-center">
            <h3 className="font-semibold text-xl mb-2">Address</h3>
            <p>{address}</p>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-xl mb-2">Phone</h3>
            <p>
              <a href={`tel:${phone}`} className="hover:text-yellow-500">{phone}</a>
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-xl mb-2">Email</h3>
            <p>
              <a href={`mailto:${email}`} className="hover:text-yellow-500">{email}</a>
            </p>
          </div>
        </div>

        <div className="w-full h-[400px]  overflow-hidden">
          <iframe
            src={mapSrc}
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactDynamic;
