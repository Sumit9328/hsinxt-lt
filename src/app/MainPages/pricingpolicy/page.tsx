"use client";
import React from "react";
import Image from "next/image";
import HeaderTop from "@/app/components/HeaderTop";
import MainHeader from "@/app/components/MainHeader";
import Footer from "@/app/components/Footer";

export default function PricingPolicy() {
  return (
    <>
      <HeaderTop />
      <MainHeader />

      {/* 🌤️ Background Animation Section */}
      <section className="relative bg-gray-50 py-16 px-6 md:px-16 overflow-hidden">
        {/* Animated Background Text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="text-6xl md:text-8xl font-extrabold text-[#d70d45]/10 animate-pulse whitespace-nowrap">
            LIMITED OFFER ✈ GRAB FAST 💥 HURRY UP 🚀
          </div>
        </div>



   

        {/* 🌍 Page Title */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-[#d70d45] mb-10 tracking-wide relative z-10">
          HOLIDAY SEASON PRICING POLICY
        </h1>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 leading-relaxed text-gray-800 relative z-10">
          <p className="mb-6">
            At <strong>Holiday Season India</strong>, we strive to offer
            competitive and transparent pricing for all of our travel services.
            We believe in providing the best value for your travel experience
            while ensuring that our pricing remains clear and straightforward.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            1. Pricing Structure
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>
              Prices are based on the type of service, destination, and time of
              travel.
            </li>
            <li>
              Prices are quoted in local currency and inclusive of applicable
              taxes unless specified.
            </li>
            <li>
              Rates may vary depending on availability, season, and market
              conditions.
            </li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            2. Payment and Booking
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>
              A deposit is required at the time of reservation; balance is due
              before departure.
            </li>
            <li>
              Payments accepted via multiple methods (credit/debit, bank
              transfer, etc.).
            </li>
            <li>
              Some offers may require full payment upfront for confirmation.
            </li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            3. Currency Fluctuations
          </h2>
          <p className="mb-6">
            Prices are subject to change due to currency fluctuations or
            external factors like airfare or hotel rate changes. We’ll inform
            you before finalizing your booking.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            4. Cancellation and Refund Policy
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>
              Each service has its own cancellation policy, shared during
              booking.
            </li>
            <li>
              Some bookings are non-refundable or may incur cancellation fees.
            </li>
            <li>
              Refunds (if applicable) are processed within business days after
              cancellation.
            </li>
          </ul>

          {/* Section 5 */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            5. Special Offers and Discounts
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>
              Occasional discounts or promotions are subject to time and
              availability.
            </li>
            <li>
              Discounts cannot be combined with other promotions unless stated.
            </li>
          </ul>

          {/* Section 6 */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            6. Pricing Adjustments
          </h2>
          <p className="mb-6">
            Prices may change due to government taxes, airline surcharges, or
            supplier pricing. In such cases, we will promptly notify you with
            options or refund.
          </p>

          {/* Section 7 */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            7. Group and Custom Pricing
          </h2>
          <p className="mb-6">
            Group bookings or corporate travel may qualify for special pricing.
            Contact our team for a custom quote.
          </p>

          {/* Section 8 */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            8. Taxes and Fees
          </h2>
          <p className="mb-6">
            Prices may exclude government taxes, airport fees, or other levies.
            These will be communicated and added to the final cost.
          </p>

          {/* Section 9 */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            9. Price Matching
          </h2>
          <p className="mb-6">
            We don’t offer price matching but ensure our rates are competitive
            among reputable travel providers.
          </p>

          {/* Section 10 */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">
            10. Customer Support
          </h2>
          <p className="mb-6">
            For queries on pricing, payment, or fees, contact us via{" "}
            <a
              href="mailto:info@holidayseason.co.in"
              className="text-[#d70d45] font-medium hover:underline"
            >
              info@holidayseason.co.in
            </a>{" "}
            or call{" "}
            <a
              href="tel:9999767660"
              className="text-[#d70d45] font-medium hover:underline"
            >
              9999767660
            </a>
            .
          </p>

          <p className="italic text-gray-600 mb-6">
            Fusce velit sem, vestibulum ac enim ut, tincidunt pretium augue.
            Vestibulum purus sapien, porttitor a porta faucibus, hendrerit eget
            enim.
          </p>

          {/* Contact */}
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
