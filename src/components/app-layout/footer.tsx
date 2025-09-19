"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tooltip } from "react-tooltip";

export default function Footer() {
  return (
    <footer className=" flex justify-center items-center py-14 px-4 bg-gradient-to-b from-[#551b5e] to-[#401444] text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border-0 md:border-r border-gray-100">
          <Image
            src={"/logo.png"}
            alt="Hero Image"
            width={500}
            height={200}
            className="h-[100px] object-contain"
          />
        </div>

        {/* Social Media */}
        <div className="text-center border-0 md:border-r border-gray-100 mb-14 md:mb-0">
          <h2 className="font-medium text-gray-200 text-xl mt-8">
            Keep Connected
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            {/* Instagram */}
            <Link
              href="https://www.instagram.com/skillventures.sv?igsh=M3BwMGJlN2JtbHNt"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>

            {/* Facebook */}
            <Link
              href="https://www.facebook.com/share/162M9BS4Bq/"
              target="_blank"
            >
              <svg
                className="w-6 h-6 text-gray-100 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>

            {/* Linkedin */}
            <Link
              href="https://www.linkedin.com/company/skill-ventures/?viewAsMember=true"
              target="_blank"
            >
              <svg
                className="w-6 h-6 text-gray-100 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                  clip-rule="evenodd"
                />
                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Location */}
        <LocationBlock />
      </div>
    </footer>
  );
}

const LocationBlock = () => {
  return (
    <div className="">
      <h2 className="font-medium text-xl text-center">Locations</h2>
      <div className="flex flex-col items-center justify-center gap-4 mt-4">
        <a
          data-tooltip-id="bangladesh-tooltip"
          className="text-gray-300 text-lg hover:text-xl hover:underline hover:text-white transition-all duration-100"
        >
          Bangladesh
        </a>
        <a
          data-tooltip-id="singapore-tooltip"
          className="text-gray-300 text-lg hover:text-xl hover:underline hover:text-white transition-all duration-100"
        >
          Singapore
        </a>
        <a
          data-tooltip-id="uae-tooltip"
          className="text-gray-300 text-lg hover:text-xl hover:underline hover:text-white transition-all duration-100"
        >
          UAE
        </a>{" "}
        <a
          data-tooltip-id="usa-tooltip"
          className="text-gray-300 text-lg hover:text-xl hover:underline hover:text-white transition-all duration-100"
        >
          USA
        </a>
      </div>
      <Tooltip id="bangladesh-tooltip" style={{ backgroundColor: "black" }}>
        <div>
          <p>HOUSE#112</p>
          <p>Road#06</p>
          <p>MOHAKHALI DOHS</p>
          <p>DHAKA, BANGLADESH</p>
        </div>
      </Tooltip>
      <Tooltip id="singapore-tooltip" style={{ backgroundColor: "black" }}>
        <div>
          <p>151 CHIN SWEE ROAD,</p>
          <p>#02-24 Manhattan House,</p>
          <p>169876</p>
        </div>
      </Tooltip>
      <Tooltip id="uae-tooltip" style={{ backgroundColor: "black" }}>
        <div className="uppercase">
          <p>Business Center</p>
          <p>Sharjah Publishing City Free Zone</p>
          <p>United Arab Emirates</p>
        </div>
      </Tooltip>{" "}
      <Tooltip id="usa-tooltip" style={{ backgroundColor: "black" }}>
        <div className="uppercase">
          <p>2248 Broadway,</p>
          <p>#1619 NY 10024,</p>
          <p>New York</p>
        </div>
      </Tooltip>
    </div>
  );
};
