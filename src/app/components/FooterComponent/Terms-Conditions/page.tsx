"use client";
import React from "react";
import HeaderTop from "../../HeaderTop";
import MainHeader from "../../MainHeader";
import Footer from "../../Footer";

export default function TermsAndConditions() {
  return (
  <>
  <HeaderTop/>
    <MainHeader/>
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      {/* 🌍 Main Title */}
      <h1 className="text-center text-4xl md:text-5xl font-extrabold text-[#d70d45] mb-10 tracking-wide">
        TERMS & CONDITIONS
      </h1>

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 leading-relaxed text-gray-800">
        
        {/* Disclaimer */}
        <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">DISCLAIMER</h2>
        <p className="mb-6">
          Holiday Season India employee or agent would never ask for any of your card information related to Number, CVV, Net Banking login, Password, OTP and so forth. 
          Neither would they communicate for transferring funds to any personal account or to install third-party apps like Any Desk, TeamViewer. 
          In case you get into any of such act or any loss of your money, TIPL strictly will not be responsible for any sort of losses.
        </p>

        {/* Booking of a Tour */}
        <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">Booking of a Tour</h2>
        <p className="mb-6">
          As soon you are ready to proceed with the reservations, you will be required to send 20% of the total tour cost as an advance payment to make the booking. 
          Apart from the 20% of the tour price, you would also need to pay us the full amount for air/train tickets that are required to be issued. 
          As soon as the advance is received, we will initiate the bookings for your hotel reservations, book your tickets and start making necessary arrangements for your trip and keep you updated. 
          Once this is done, a reservation status will be sent to you. You will then be required to pay another 30% of the tour cost at this point. 
          Balance 50% of the tour price should be paid 45 days prior to the commencement of the Tour.
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>During the peak season of Christmas and New Year (20 Dec to 05 Jan), 100% payment is required in advance.</li>
          <li>For Special Luxury Train Journeys, 25% of the fare is to be paid at the time of booking. Balance is to be paid 75 days prior to departure.</li>
          <li>Prices are subject to exchange rate fluctuations and will be adjusted accordingly.</li>
        </ul>

        {/* Amendment to a Booked Tour */}
        <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">Amendment to a Booked Tour</h2>
        <p className="mb-6">
          We do not encourage changes in the confirmed arrangements. 
          However, if you do need to make amendments, we will do our best to accommodate them depending on availability. 
          Changes will incur administrative charges.
        </p>

        {/* Payment for a Tour */}
        <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">Payment for a Tour</h2>
        <p className="font-semibold mb-2">1) Online Payments via Gateway</p>
        <p className="mb-4">
          We offer the highest standards of online payment security. Visa, Master, American Express, and Diners Cards payments are processed through our secure payment gateway.
        </p>
        <p className="font-semibold mb-2">2) Payment through “Bank Transfer”</p>
        <p className="mb-6">
          Payments can be made through direct Bank remittances. Details of our bank accounts will be provided by our Sales representatives.
        </p>

        {/* Cancellation */}
        <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">Cancellation of a Booked Tour</h2>
        <p className="mb-4">
          We regret your decision to cancel your tour, but we understand valid reasons can occur. Cancellations must be notified in writing.
        </p>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>90+ days prior to arrival - 50% refund of deposited amount</li>
          <li>60–90 days - 30% refund</li>
          <li>45–60 days - 20% refund</li>
          <li>Within 45 days - No Refund</li>
          <li>Flight tickets are non-refundable; changes as per airline policy.</li>
          <li>Wildlife safaris are non-refundable; even date change counts as cancellation.</li>
        </ul>

        {/* Miscellaneous */}
        <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">Miscellaneous Terms and Conditions</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>No refund after hotel booking is confirmed.</li>
          <li>Any hike in hotel rates, airfares, or taxes will attract a surcharge.</li>
          <li>Service charges are non-refundable.</li>
          <li>Room allotment subject to hotel’s discretion.</li>
        </ul>

        {/* Other Terms */}
        <h2 className="text-2xl font-semibold text-[#d70d45] mb-3">Other Terms and Conditions</h2>
        <p className="mb-6">
          By availing services from Holiday Season, the user agrees to all terms. 
          Holiday Season acts as a booking agent for third-party providers and is not liable for force majeure events such as weather, labor unrest, or operational issues. 
          All disputes are subject to the jurisdiction of NCR of Delhi, India.
        </p>

        <p className="italic text-gray-600 mb-6">
          Fusce velit sem, vestibulum ac enim ut, tincidunt pretium augue. Vestibulum purus sapien, porttitor a porta faucibus, hendrerit eget enim.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold text-[#d70d45] mt-6 mb-2">Call to us:</h2>
        <p className="text-gray-800 text-lg font-medium">91-11-71573058</p>
      </div>
    </section>
    <Footer/>
  </>
  );
}
