"use client";
import React from "react";
import Image from "next/image";
import HeaderTop from "@/app/components/HeaderTop";
import MainHeader from "@/app/components/MainHeader";
import Footer from "@/app/components/Footer";
import WhyChooseUs from "@/app/components/Company/WhyChooseUsHoliday";
import PartnersSlider from "@/app/components/PartnersSlider";

export default function TermsAndConditions() {
  return (
    <>
      <HeaderTop />
      <MainHeader />

      {/* ✈️ Animated Background Section */}
      <section className="relative bg-gradient-to-b from-blue-50 via-white to-pink-50 py-16 px-6 md:px-16 overflow-hidden">

    

        {/* 🌍 Main Title */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-[#d70d45] mb-10 tracking-wide z-20 relative">
          TERMS & CONDITIONS
        </h1>

        {/* 🧾 Content Box */}
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl p-8 md:p-12 leading-relaxed text-gray-800 relative z-20">
          
          {/* DISCLAIMER */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">DISCLAIMER</h2>
          <p className="mb-6">
            Holiday Season India employee or agent would never ask for any of your card information related to Number, CVV, Net Banking login, Password, OTP and so forth.
            Neither would they communicate for transferring funds to any personal account or to install third-party apps like Any Desk, TeamViewer.
            In case you get into any of such act or any loss of your money, TIPL strictly will not be responsible for any sort of losses.
          </p>

          {/* Booking of a Tour */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">Booking of a Tour</h2>
          <p className="mb-6">
            As soon as you are ready to proceed with the reservations, you will be required to send 20% of the total tour cost as an advance payment.
            Apart from that, air/train tickets need to be paid in full before booking. Once confirmed, updates will be shared, and the remaining balance must be cleared before 45 days of departure.
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>During Christmas/New Year (20 Dec–5 Jan): 100% advance required.</li>
            <li>Luxury Train Journeys: 25% at booking, rest 75 days before departure.</li>
            <li>Prices may vary with exchange rate fluctuations.</li>
          </ul>

          {/* Amendment */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">Amendment to a Booked Tour</h2>
          <p className="mb-6">
            We discourage changes to confirmed bookings. However, if required, we’ll try to accommodate based on availability. Changes may incur administrative fees.
          </p>

          {/* Payment */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">Payment for a Tour</h2>
          <p className="font-semibold mb-2">1) Online Payments via Gateway</p>
          <p className="mb-4">
            We use secure payment gateways (Visa, MasterCard, Amex, Diners). Your card info is safe and not stored by us.
          </p>
          <p className="font-semibold mb-2">2) Payment via Bank Transfer</p>
          <p className="mb-6">
            Direct bank remittance is accepted. Account details will be shared upon confirmation.
          </p>

          {/* Cancellation */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">Cancellation of a Booked Tour</h2>
          <p className="mb-4">
            Cancellations must be in writing. Refunds vary based on notice period:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>90+ days: 50% refund</li>
            <li>60–90 days: 30% refund</li>
            <li>45–60 days: 20% refund</li>
            <li>Within 45 days: No refund</li>
            <li>Flight & Wildlife Safari bookings are non-refundable.</li>
          </ul>

          {/* Miscellaneous */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">Miscellaneous Terms</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>No refund after hotel booking confirmation.</li>
            <li>Rate hikes (hotel/tax/fuel) apply before departure.</li>
            <li>Room type allocation depends on hotel availability.</li>
          </ul>

          {/* Other Terms */}
          <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">Other Terms and Conditions</h2>
          <p className="mb-6">
            Availing Holiday Season services means you agree to all terms.  
            Holiday Season acts only as a booking agent and isn’t liable for force majeure events.
            Legal jurisdiction: NCR of Delhi, India.
          </p>

          <p className="italic text-gray-600 mb-6">
            Fusce velit sem, vestibulum ac enim ut, tincidunt pretium augue. Vestibulum purus sapien, porttitor a porta faucibus, hendrerit eget enim.
          </p>

          {/* Contact */}
          <h2 className="text-xl font-semibold text-[#d70d45] mt-6 mb-2">Call us:</h2>
          <p className="text-gray-800 text-lg font-medium">91-11-71573058</p>
        </div>
      </section>
<WhyChooseUs/>
<PartnersSlider/>
      <Footer />


    </>
  );
}
