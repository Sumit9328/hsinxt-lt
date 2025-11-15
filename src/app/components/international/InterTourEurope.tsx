"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface InternationalPackage {
  id?: number;
  title: string;
  price?: string;
  desc: string;
  img: string;
  slug: string;
}

export default function InterTourEurope() {
  const [packages, setPackages] = useState<InternationalPackage[]>([]);

  useEffect(() => {
    async function fetchPackages() {
      try {
        // Fetch from the correct endpoint for international packages
        const res = await fetch("/api/international");
        const data = await res.json();
        setPackages(data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    }
    fetchPackages();
  }, []);

  return (
    <section className="py-0 bg-gray-50">
      <div className="flex items-center justify-center">
        <div className="text-center max-w-2xl px-4 py-16">
          <h2 className="text-[35px] font-bold tracking-wide text-black uppercase">
            Around the World in One Trip International Tour Plans
          </h2>
          <p className="text-gray-600 mt-2">
            From sunny beaches to charming cities, experience the perfect holiday blend...
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.length > 0 ? (
          packages.map((pkg) => (
            <div
              key={pkg.slug}
              className="rounded-xl shadow-xl overflow-hidden hover:scale-[1.03] transition bg-white"
            >
              <Image
                src={pkg.img} // Use img from JSON data
                width={500}
                height={300}
                alt={pkg.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-black">{pkg.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{pkg.desc}</p> {/* Use desc from JSON data */}

                <div className="flex justify-between">
                  <Link href={`/packages/${pkg.slug}`}>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800">
                      View Details
                    </button>
                  </Link>

                  <button className="px-4 py-2 bg-[#d70d45] text-white rounded-md hover:bg-pink-800">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">Loading packages...</p>
        )}
      </div>
    </section>
  );
}
