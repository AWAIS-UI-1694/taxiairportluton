import HeroDynamic from "../../components/herodynamic";
import contacthero from "../../assets/images/contact.jpg";
import ContactDynamic from "../../components/contactDynamic";

const Contact = () => {
    return(
        <>
         {/* hero dynamic start */}
      <HeroDynamic
        title="Contact Us - Taxi Airport Luton"
        backgroundImage={contacthero}
        hideButton={true}
        description="For inquiries, bookings, or assistance, please reach out to us. Our team is here to help you with all your taxi needs to and from Luton Airport."
        imageAlt="contact hero img"
      />
      {/* hero dynamic end */}

        <ContactDynamic 
        address={"Capability Green Luton LU1 3LU"}
        phone={"02037403527"}
        email={"info@taxiairportluton.com"}
        mapSrc={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.7944954875584!2d-0.4099080979150946!3d51.86470851208541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876486c50770463%3A0xa6a02a430930306e!2sCapability%20Grn%2C%20Luton%2C%20UK!5e0!3m2!1sen!2s!4v1752158087770!5m2!1sen!2s"}
        />
      
        </>
    );
}

export default Contact;