import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-black text-white py-4 text-center">
        <p className="text-sm">© {currentYear} Taxi Airport Luton. All rights reserved. <span className="text-yellow-600"><Link to="http://londontaxi247.co.uk/privacy-policy.html">Privacy Policy</Link></span></p>
        <p className="text-xs">Designed by Slash</p>
      </div>
    </footer>
  );
};

export default Footer;
