"use client";

import React from "react";

const RefundPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-8 md:px-20">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 border border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-8">
          Refund Policy – Holiday Season India
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          At <strong>Holiday Season India</strong>, we understand that travel plans can
          change unexpectedly. While we always strive to assist our customers in every
          possible way, certain cancellation and refund conditions apply due to
          administrative costs and third-party commitments.
        </p>

        {/* 1 */}
        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">
          1. General Policy
        </h2>
        <p className="text-gray-700 mb-4">
          If a customer fails to join a tour or report to the Tour Manager on the scheduled
          departure date for any reason, it will be treated as a{" "}
          <strong>“No Show”</strong>, and <strong>100% cancellation charges</strong> will apply.
          Holiday Season India will not be liable to make any refund in such cases.
        </p>

        {/* 2 */}
        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">
          2. Cancellation Charges
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            Cancellation charges are effective from the date we receive written notice of
            cancellation.
          </li>
          <li>
            The applicable cancellation fees will be mentioned in the package details at
            the time of booking.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Once a valid cancellation request is received, we will process your refund within{" "}
          <strong>30 business days</strong>, subject to receiving refunds from hotels,
          airlines, transporters, and other service providers.
        </p>

        {/* 3 */}
        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">
          3. Refund Processing Terms
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            Refunds for air, train, bus, or other travel components will only be processed
            once we receive the refund from the respective vendors.
          </li>
          <li>Any refund due will be made via cheque in the name of the lead traveler.</li>
          <li>
            For packages that include non-refundable items (like visa fees or insurance),
            these costs will be deducted from the refund.
          </li>
          <li>
            If payment deadlines are missed, Holiday Season India reserves the right to
            cancel the booking and apply standard cancellation charges.
          </li>
        </ul>

        {/* 4 */}
        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">
          4. Force Majeure / Vis Majeure
        </h2>
        <p className="text-gray-700 mb-4">
          In the event that a tour or service cannot be conducted due to circumstances
          beyond our control (e.g., natural disasters, political unrest, pandemics),
          <strong> Holiday Season India</strong> will not be liable to provide any refund.
          However, management may offer refunds or rescheduling at its discretion.
        </p>

        {/* 5 */}
        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">
          5. Visa and Documentation
        </h2>
        <p className="text-gray-700 mb-4">
          If a visa application is rejected or delayed by the respective consulate or
          embassy, Holiday Season India will not be responsible. Any applicable visa or
          processing fees will be deducted from the refund.
        </p>

        {/* 6 */}
        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">
          6. Non-Utilization of Services
        </h2>
        <p className="text-gray-700 mb-4">
          If a traveler does not utilize part of the tour services — such as hotel stays,
          sightseeing, meals, or optional tours — for any reason, no refund will be issued
          for unused portions.
        </p>

        {/* 7 */}
        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">
          7. Third-Party Refund Dependency
        </h2>
        <p className="text-gray-700 mb-4">
          Refunds are subject to receipt of funds from respective service providers. No
          interest, charges, or penalties will be paid on refund amounts.
        </p>

        {/* 8 */}
        <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-3">
          8. Special Conditions
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            No refund is applicable for already booked tours or postponed trips due to
            Force Majeure.
          </li>
          <li>
            Flight cancellations will follow airline refund policy; hotel and land
            services follow our standard terms.
          </li>
          <li>
            Refunds approved by management will still be subject to cancellation fees.
          </li>
        </ul>

        {/* Contact */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mt-6">
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Contact Us</h3>
          <p className="text-gray-700">
            For refund-related queries, feel free to reach out to our support team:
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
      </div>
    </div>
  );
};

export default RefundPolicy;
