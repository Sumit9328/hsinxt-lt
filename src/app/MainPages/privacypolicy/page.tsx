"use client";
import React from "react";
import Image from "next/image";
import HeaderTop from "@/app/components/HeaderTop";
import MainHeader from "@/app/components/MainHeader";
import Footer from "@/app/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <HeaderTop />
      <MainHeader />

      {/* ✈️ Animated Section */}
      <section className="relative bg-gray-50 py-16 px-6 md:px-16 overflow-hidden">
        {/* Moving Background Text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="text-6xl md:text-8xl font-extrabold text-[#d70d45]/10 animate-pulse whitespace-nowrap">
            PROTECTING YOUR PRIVACY 🛡️ | SAFE & SECURE ✈ | HOLIDAY SEASON INDIA
          </div>
        </div>


        {/* Title */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-[#d70d45] mb-10 tracking-wide relative z-10">
          HOLIDAY SEASON INDIA - PRIVACY POLICY
        </h1>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 leading-relaxed text-gray-800 relative z-10">
          <p className="mb-6">
            This Privacy Policy (“Policy”) applies to the collection, securing,
            and processing of personal data by <strong>Holiday Season India (HSI)</strong> 
            in connection with personal data provided by any person (“User”) who
            has purchased, intends to purchase, or inquires about any products
            or services through HSI’s website, mobile site, or mobile app
            (collectively referred to as “Sales Channels”).
          </p>

          {/* 1. COLLECTION */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            1. COLLECTION OF PERSONALLY IDENTIFIABLE INFORMATION
          </h2>
          <p className="mb-6">
            Holiday Season respects your privacy. We do not collect personal
            information unless you provide it voluntarily. Information is
            collected when:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Making a booking or purchase via our website, email, or phone.</li>
            <li>Registering with us, subscribing to newsletters, or promotions.</li>
            <li>Participating in surveys or providing feedback.</li>
          </ul>

          {/* 2. MAKING A PURCHASE */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            2. MAKING A PURCHASE OR BOOKING
          </h2>
          <p className="mb-6">
            To book travel services, users must provide personal data including
            name, credit card details, billing address, contact numbers, and
            traveler information. This data is used to process and confirm
            reservations. Users booking on behalf of others must ensure prior
            consent from those travelers.
          </p>

          {/* 3. MEMBER REGISTRATION */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            3. MEMBER REGISTRATION
          </h2>
          <p className="mb-6">
            To register, you provide contact details and login credentials.
            Information is used for:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Completing bookings and improving service quality.</li>
            <li>Providing customer support and personalized offers.</li>
            <li>Sending updates about your transactions or special deals.</li>
          </ul>

          {/* 4. COOKIES */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">4. COOKIES</h2>
          <p className="mb-6">
            We use cookies to enhance user experience and improve our services.
            Cookies may track browsing patterns, but users can disable them
            through browser settings. Some cookies are essential for booking and
            payment functionality.
          </p>

          {/* 5. DATA SECURITY */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            5. DATA USE & SECURITY
          </h2>
          <p className="mb-6">
            Your personal data is used only for legitimate purposes — to provide
            requested services, comply with legal obligations, or improve user
            experience. HSI uses industry-standard security measures to protect
            all stored data from unauthorized access.
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Data collected includes IP addresses, browsing patterns, and device info.</li>
            <li>We retain data only as long as required for business or legal reasons.</li>
            <li>Users can request deletion of their data anytime.</li>
          </ul>

          {/* 6. ADVERTISING */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            6. HOLIDAY SEASON ADVERTS
          </h2>
          <p className="mb-6">
            We may display targeted ads on third-party platforms based on your
            browsing behavior. These ads help showcase relevant travel offers
            while maintaining anonymity.
          </p>

          {/* 7. SHARING OF PERSONAL DATA */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            7. SHARING OF PERSONAL DATA
          </h2>
          <p className="mb-6">
            We do not sell or share personal information with unrelated third
            parties. Data may be shared with partners only to process your
            bookings or deliver requested services. Marketing communications are
            sent only to subscribed users.
          </p>

          {/* 8. LINKS TO OTHER SITES */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            8. LINKS TO OTHER SITES
          </h2>
          <p className="mb-6">
            Holiday Season India is not responsible for the privacy practices of
            external websites linked from our platform. Users are encouraged to
            review the policies of those websites.
          </p>

          {/* 9. CHANGES TO POLICY */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            9. CHANGES TO THIS PRIVACY POLICY
          </h2>
          <p className="mb-6">
            We reserve the right to modify this Privacy Policy periodically. Any
            updates will be posted on this page. Users may request previous
            versions by contacting{" "}
            <a
              href="mailto:info@holidayseasonindia.com"
              className="text-[#d70d45] font-medium hover:underline"
            >
              info@holidayseasonindia.com
            </a>
            .
          </p>

          {/* Contact */}
          <p className="italic text-gray-600 mb-6">
            Fusce velit sem, vestibulum ac enim ut, tincidunt pretium augue.
            Vestibulum purus sapien, porttitor a porta faucibus, hendrerit eget
            enim.
          </p>

          <h2 className="text-xl font-semibold text-[#d70d45] mt-6 mb-2">
            Call to us:
          </h2>
          <p className="text-gray-800 text-lg font-medium">011-71573058</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
