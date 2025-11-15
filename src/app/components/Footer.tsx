"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { SiTripadvisor, SiDribbble, SiTumblr, SiReddit } from "react-icons/si";

import { HiOutlineLocationMarker, HiPhone } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="text-white">
      {/* Top Red Section */}
      <div className="bg-[#e41e58] text-center py-5 overflow-hidden relative">
        <h2 className="text-2xl font-bold tracking-wider mb-2">
          COMPANY INFORMATION
        </h2>
        <div className="w-16 h-[2px] bg-white mx-auto mb-2"></div>

        {/* Scrolling text */}
        <div className="overflow-hidden whitespace-nowrap relative">
          <p className="animate-marquee inline-block text-white text-sm">
            Get to Know Our Company &nbsp; • &nbsp; Get to Know Our Company &nbsp; • &nbsp;
          </p>
        </div>
      </div>


      {/* Bottom Dark Section */}
      <div className="bg-[#0e0e0e] px-6 md:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Address */}
        <div>
          <div className="mb-4">
            <Image
              src="/assets/home/log.png"
              alt="Company Logo"
              width={130}
              height={60}
              className="object-contain"
            />
          </div>
          <p className="text-[#ccc] mb-4 leading-relaxed">
            A-82, Jagatpuri First Floor Nathu Colony <br />
            Chowk Shahdara Delhi 110093
          </p>
          <div className="flex flex-col text-[#ccc]">
            <div className="flex items-center gap-2 mb-2">
              <HiOutlineLocationMarker className="text-[#e41e58]" /> Location
            </div>
            <div className="flex items-center gap-2 mb-2">
              <HiPhone className="text-[#e41e58]" /> (011)-71570598
            </div>
            <div className="flex items-center gap-2 mb-4">
              <MdEmail className="text-[#e41e58]" /> info@holidayseason.co.in
            </div>


            <div className="grid grid-cols-5 gap-2">
              {/* First row - 5 icons */}
              <a href="https://www.facebook.com/holidayseasonindia" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/holidayseasonindia/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://x.com/holidayseasonin" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/@holidayseasonindia" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://in.pinterest.com/holidayseasonindia/" target="_blank" rel="noopener noreferrer">
                <FaPinterestP />
              </a>

              {/* Second row - next 5 icons */}
              <a href="https://www.linkedin.com/in/holidayseasonindia/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.tripadvisor.in/Profile/holidayseasonindia" target="_blank" rel="noopener noreferrer">
                <SiTripadvisor />
              </a>
              <a href="https://dribbble.com/holidayseasonindia" target="_blank" rel="noopener noreferrer">
                <SiDribbble />
              </a>
              <a href="https://www.tumblr.com/blog/holidayseasonindia" target="_blank" rel="noopener noreferrer">
                <SiTumblr />
              </a>
              <a href="https://www.reddit.com/user/holidayseasonindia/" target="_blank" rel="noopener noreferrer">
                <SiReddit />
              </a>
            </div>


          </div>
        </div>

        {/* Support & Help */}
        <div>
          <h3 className="text-white font-semibold mb-4">SUPPORT & HELP</h3>
          <ul className="space-y-2 text-[#ccc]">
            <li>
              <Link
                href="/MainPages/termsandcondition"
                className="hover:underline hover:text-yellow-200 transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/MainPages/privacypolicy"
                className="hover:underline hover:text-yellow-200 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/MainPages/pricingpolicy"
                className="hover:underline hover:text-yellow-200 transition-colors"
              >
                Pricing Policy
              </Link>
            </li>
            <li>
              <Link
                href="/MainPages/refundpolicy"
                className="hover:underline hover:text-yellow-200 transition-colors"
              >
                Refund Policy
              </Link>
            </li>
            <li>
              <Link
                href="/MainPages/cancellationpolicy"
                className="hover:underline hover:text-yellow-200 transition-colors"
              >
                Cancellation Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-white font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/footer/exclusive.avif"
                alt="Exclusive"
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <p className="text-white font-medium text-sm">Daily Deals</p>
                <p className="text-[#e41e58] text-xs">Upto 20% OFF</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src="/assets/footer/whsp.gif"
                alt="Whatsapp"
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <p className="text-white font-medium text-sm">Whatsapp Now</p>
                <p className="text-[#e41e58] text-xs">Chat With Us</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src="/assets/footer/blogg-unscreen.gif"
                alt="Blog"
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <p className="text-white font-medium text-sm">Latest Blog</p>
                <p className="text-[#e41e58] text-xs">Sep, 2025</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Image
                src="/assets/footer/achieve.jpg"
                alt="Achievements"
                width={50}
                height={50}
                className="rounded"
              />
              <div>
                <p className="text-white font-medium text-sm">ACHIEVEMENTS</p>
                <p className="text-[#e41e58] text-xs">June 17, 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accredited By */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Holiday Season is Accredited By
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              "f1.jpg",
              "f2.jpg",
              "f3.jpg",
              "f4.jpg",
              "f5.jpg",
              "f6.jpg",
              "f7.jpg",
              "f8.jpg",
              "f9.jpg",
              "f10.jpg",
            ].map((img, i) => (
              <Image
                key={i}
                src={`/assets/footer/${img}`}
                alt={img}
                width={80}
                height={80}
                className="rounded bg-white p-1"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-[#0a0a0a] py-4 text-center text-xs text-gray-400 border-t border-gray-800">
        <p>
          © 2013 ©Holiday Season by <span className="text-[#e41e58]">DMCA.com</span>
        </p>
        <div className="flex justify-center mt-2 gap-2">
          <Image
            src="/assets/cards/paypal.webp"
            alt="paypal"
            width={30}
            height={15}
            style={{ height: '18px', objectFit: 'contain' }}
          />
          <Image
            src="/assets/cards/mastercard.png"
            alt="mastercard"
            width={30}
            height={15}
            style={{ height: '18px', objectFit: 'contain' }}
          />
          <Image
            src="/assets/cards/visa.jpg"
            alt="visa"
            width={30}
            height={15}
            style={{ height: '18px', objectFit: 'contain' }}
          />

        </div>
      </div>
    </footer>
  );
}
