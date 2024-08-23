import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/logo.jpg";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-bg text-gray-300 py-12 lg:py-24  mt-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" className="h-16 w-16 rounded-full" />
          <div>
            <h3 className="text-2xl font-bold text-white">EBENEZER SCHOOL</h3>
            <p className="text-gray-400">
              The perfect place to acquire knowledge
            </p>
          </div>
        </div>

        <div className="flex flex-col text-xl md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          <div className="flex flex-col space-y-2 md:space-y-4">
            <Link href="/gallery">
              <p className="text-white hover:text-gray-100 rounded-full px-2 py-1 border-2 border-transparent hover:border-2 text-center hover:border-black transition-all duration-200">
                Gallery
              </p>
            </Link>
            <Link href="/contact-us">
              <p className="text-white hover:text-gray-100 px-2 py-1 rounded-full border-2 border-transparent hover:border-2 text-center hover:border-black transition-all  duration-200">
                Contact Us
              </p>
            </Link>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-gray-300 hover:text-blue-400 transition duration-200"
            >
              <FontAwesomeIcon icon={faFacebook} className="h-8 w-8" />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-300 hover:text-blue-300 transition duration-200"
            >
              <FontAwesomeIcon icon={faTwitter} className="h-8 w-8" />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-300 hover:text-pink-400 transition duration-200"
            >
              <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-blue-500 transition duration-200"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
            </a>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="font-bold text-white">Contact Us</p>
          <p>
            Email:{" "}
            <a
              href="mailto:contact@schoolname.com"
              className="hover:text-gray-100 transition duration-200"
            >
              contact@schoolname.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+251999999999"
              className="hover:text-gray-100 transition duration-200"
            >
              +251 999 999 999
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
        <p>&copy; {currentYear} SCHOOLNAME SCHOOL. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
