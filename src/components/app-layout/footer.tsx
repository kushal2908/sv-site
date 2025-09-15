import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className=" flex justify-center items-center py-14 px-4 bg-gradient-to-b from-[#551b5e] to-[#401444] text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border-0 md:border-r border-gray-100">
          <Image
            src={
              "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4434bc42-bcc7-4386-813a-0e5ff712b787/ddoo7vb-b7d10d6b-5405-4e6f-ba20-28a3206ee3b5.png/v1/fill/w_1920,h_1920/cyberpunk_logo_design_by_gavirlas_ddoo7vb-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ0MzRiYzQyLWJjYzctNDM4Ni04MTNhLTBlNWZmNzEyYjc4N1wvZGRvbzd2Yi1iN2QxMGQ2Yi01NDA1LTRlNmYtYmEyMC0yOGEzMjA2ZWUzYjUucG5nIiwiaGVpZ2h0IjoiPD0xOTIwIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNDQzNGJjNDItYmNjNy00Mzg2LTgxM2EtMGU1ZmY3MTJiNzg3XC9nYXZpcmxhcy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.eimmX_56BVIchdjorMFx_R2v88Y0xrZs3UrYxof3Fxc"
            }
            alt="Hero Image"
            width={500}
            height={300}
            className="h-[100px] object-contain"
          />
        </div>

        <div className="text-center border-0 md:border-r border-gray-100">
          <h2 className="font-medium text-xl">Keep Connected</h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            {/* Instagram */}
            <Link href="#" target="_blank">
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
            <Link href="#" target="_blank">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
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
            <Link href="#" target="_blank">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
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

        <div className="text-center">
          <h2 className="font-medium text-xl">Locations</h2>
          <div className="flex flex-col items-center justify-center gap-4 mt-4">
            <p className="mb-0">Bangladesh</p>
            <p className="mb-0">Singapore</p>
            <p className="mb-0">UAE</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
