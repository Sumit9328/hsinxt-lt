"use client";

import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8 md:px-20">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#d70d45] mb-8">
          Cancellation Policy – Holiday Season India
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          Payment for the tour is a fundamental part of the tour’s income and contributes
          to the overall cost of equipment, operations, staffing, and administration.
          Since most expenses are incurred before the tour commences,{" "}
          <strong>Holiday Season India</strong> must impose cancellation charges to cover
          these costs.
        </p>

        {/* Deposits */}
        <h2 className="text-xl font-semibold text-[#d70d45] mt-6 mb-3">
          1. Deposits and General Terms
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>All deposits are strictly non-refundable.</li>
          <li>
            Cancellation requests must be submitted in writing by the person who made the
            booking.
          </li>
          <li>
            Please email your cancellation notice to your respective Holiday Season India
            contact and CC{" "}
            <a
              href="mailto:info@holidayseasonindia.com"
              className="text-blue-600 hover:underline"
            >
              info@holidayseasonindia.com
            </a>
            .
          </li>
        </ul>

        {/* Cancellation Charges */}
        <h2 className="text-xl font-semibold text-[#d70d45] mt-6 mb-3">
          2. Cancellation Charges
        </h2>
        <p className="text-gray-700 mb-4">
          If you cancel your booking, the following cancellation fees will apply:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="table table-bordered table-striped w-full text-gray-700 text-sm sm:text-base">
            <thead className="bg-[#d70d45] text-white">
              <tr>
                <th className="py-2 px-3 text-left">Time Before Departure</th>
                <th className="py-2 px-3 text-left">Cancellation Charge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-3">30 days or more</td>
                <td className="py-2 px-3">Loss of deposit</td>
              </tr>
              <tr>
                <td className="py-2 px-3">15–29 days</td>
                <td className="py-2 px-3">30% of tour cost*</td>
              </tr>
              <tr>
                <td className="py-2 px-3">7–14 days</td>
                <td className="py-2 px-3">50% of tour cost*</td>
              </tr>
              <tr>
                <td className="py-2 px-3">6 or fewer days</td>
                <td className="py-2 px-3">80% of tour cost*</td>
              </tr>
              <tr>
                <td className="py-2 px-3">48 hours or less</td>
                <td className="py-2 px-3">100% of tour cost*</td>
              </tr>
              <tr>
                <td colSpan={2} className="italic text-gray-600 py-2 px-3">
                  *Or deposit amount, whichever is greater.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tailor-made tours */}
        <h2 className="text-xl font-semibold text-[#d70d45] mt-6 mb-3">
          3. Tailor-Made Tours
        </h2>
        <p className="text-gray-700 mb-6">
          Tailor-made or custom tours may be subject to separate cancellation policies.
          These terms will be clearly communicated to clients at the time of booking.
        </p>

        {/* Refund & Change Policy */}
        <h2 className="text-xl font-semibold text-[#d70d45] mt-6 mb-3">
          4. Refunds & Changes
        </h2>
        <p className="text-gray-700 mb-6">
          Once a tour has commenced, <strong>no refund</strong> will be provided for any
          unused portion of the trip. Any modifications, early departures, or changes to
          the itinerary will be at the traveler’s own expense and liability.
        </p>

        {/* Written Confirmation */}
        <h2 className="text-xl font-semibold text-[#d70d45] mt-6 mb-3">
          5. Written Confirmation Required
        </h2>
        <p className="text-gray-700 mb-6">
          All cancellations must be communicated in writing and approved by{" "}
          <strong>Holiday Season India</strong>. No verbal or informal communication will
          be accepted as a valid request.
        </p>

        {/* Contact Section */}
        <div className="bg-red-50 p-6 rounded-xl border border-red-200 mt-6">
          <h3 className="text-lg font-semibold text-[#d70d45] mb-2">Contact Us</h3>
          <p className="text-gray-700">
            For any queries regarding cancellations or refunds, please reach out to:
          </p>
          <ul className="mt-2 space-y-1 text-gray-800">
            <li>
              📞 <strong>Call:</strong> +91-11-71573058
            </li>
            <li>
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:info@holidayseasonindia.com"
                className="text-blue-600 hover:underline"
              >
                info@holidayseasonindia.com
              </a>
            </li>
            <li>
              🌐 <strong>Website:</strong>{" "}
              <a
                href="https://www.holidayseasonindia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.holidayseasonindia.com
              </a>
            </li>
          </ul>
        </div>

        {/* Note */}
        <p className="italic text-gray-600 mt-6 text-center">
          “Once the tour has begun, no refund will be provided for any unused services or
          missed portions of the itinerary.”
        </p>
      </div>
    </div>
  );
};

export default CancellationPolicy;
