import logo from '../assets/logo.png';
import { MdOutlinePhoneEnabled } from 'react-icons/md';
import { LuMail } from 'react-icons/lu';
import { GrLocation } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div className="col-span-full justify-self-start mb-10 lg:col-span-2 lg:mb-0">
            <div className="flex items-center gap-4 text-white">
              <Link to="/">
                <img height={60} width={60} src={logo} alt="logo" />
              </Link>
              <div>
                <h2 className="font-semibold text-2xl lg:text-4xl">MIAMI</h2>
                <p className="text-sm font-semibold">PROPERTY TAXES</p>
              </div>
            </div>

            <div className="mt-4 hidden lg:flex items-center gap-5">
              <Link to="tel:7864538127">
                <MdOutlinePhoneEnabled
                  className="border-2 p-1 border-white rounded-full"
                  size={30}
                  color="white"
                />
              </Link>
              <div className="grid text-white gap-0 items-center hover:text-sky-400 transition-all duration-500">
                <Link to="tel:7864538127">Phone: 786-453-8127</Link>
              </div>
            </div>

            <div className="mt-4 hidden lg:flex items-center gap-5">
              <Link to="mailto:nfo@MiamiPropertyTaxes.com">
                <LuMail
                  className="border-2 p-1 border-white rounded-full"
                  size={30}
                  color="white"
                />
              </Link>
              <div className="grid text-white gap-0 items-center hover:text-sky-400 transition-all duration-500">
                <Link to="mailto:nfo@MiamiPropertyTaxes.com">
                  Email: nfo@MiamiPropertyTaxes.com
                </Link>
              </div>
            </div>

            <div className="mt-4 hidden lg:flex items-center gap-5 hover:text-sky-400 transition-all duration-500">
              <Link to="https://maps.app.goo.gl/LVGZ36N3mMLw4jUXA">
                <GrLocation
                  className="border-2 p-1 border-white rounded-full"
                  size={30}
                  color="white"
                />
              </Link>
              <div className="grid text-white gap-0 items-center hover:text-sky-400 transition-all duration-500">
                <Link to="https://maps.app.goo.gl/LVGZ36N3mMLw4jUXA">
                  3636 SW 87 Ave. Miami, Florida 33165
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-white font-medium mb-2">Miami Property Tax</h4>
            <div className="text-sm transition-all duration-500">
              <p className="mb-3">
                <Link to="/" className="text-white hover:text-sky-400 transition-all duration-500">
                  Home
                </Link>
              </p>
              <p className="mb-3">
                <Link
                  to="https://w15050.proweaversite15.com/tax-consulting-about-us"
                  className="text-white hover:text-sky-400 transition-all duration-500"
                >
                  About
                </Link>
              </p>
              <p>
                <Link
                  to="https://w15050.proweaversite15.com/tax-consulting-services"
                  className="text-white hover:text-sky-400 transition-all duration-500"
                >
                  Services
                </Link>
              </p>
            </div>
          </div>

          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-white font-medium mb-2">Resources</h4>
            <div className="text-sm transition-all duration-500">
              <p className="mb-3">
                <Link
                  to="https://w15050.proweaversite15.com/tax-consulting-careers"
                  className="text-white hover:text-sky-400 transition-all duration-500"
                >
                  Careers
                </Link>
              </p>
              <p className="mb-3">
                <Link
                  to="https://w15050.proweaversite15.com/tax-consulting-consultation"
                  className="text-white hover:text-sky-400 transition-all duration-500"
                >
                  Consultation
                </Link>
              </p>
              <p>
                <Link
                  to="https://w15050.proweaversite15.com/tax-consulting-resources"
                  className="text-white hover:text-sky-400 transition-all duration-500"
                >
                  Resources
                </Link>
              </p>
            </div>
          </div>

          <div className="lg:mx-auto text-left">
            <h4 className="text-lg text-white font-medium mb-2">Legal</h4>
            <div className="text-sm transition-all duration-500">
              <p className="mb-3">
                <Link
                  to="https://w15050.proweaversite15.com/tax-consulting-blog"
                  className="text-white hover:text-sky-400 transition-all duration-500"
                >
                  Blog
                </Link>
              </p>
              <p className="mb-3">
                <Link
                  to="https://w15050.proweaversite15.com/terms-and-conditions"
                  className="text-white hover:text-sky-400 transition-all duration-500"
                >
                  Terms and Conditions
                </Link>
              </p>
              <p>
                <Link
                  to="https://w15050.proweaversite15.com/tax-consulting-contact-us"
                  className="text-white hover:text-sky-400 transition-all duration-500"
                >
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-white">
              ©<a href="https://pagedone.io/">Miami Property Taxes</a> 2024, All rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
              >
                {/* SVG icon */}
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center hover:bg-indigo-600"
              >
                {/* SVG icon */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
