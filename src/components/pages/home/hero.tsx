import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="min-h-[600px] flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="max-w-[600px]">
            <h1 className="text-4xl md:text-[50px] text-white text-center md:text-left leading-tight uppercase">
              Your global <br /> partner in <br /> a dynamic <br />
              digital landscape.
            </h1>
          </div>
          <div>
            <Image
              src={
                "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4434bc42-bcc7-4386-813a-0e5ff712b787/ddoo7vb-b7d10d6b-5405-4e6f-ba20-28a3206ee3b5.png/v1/fill/w_1920,h_1920/cyberpunk_logo_design_by_gavirlas_ddoo7vb-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ0MzRiYzQyLWJjYzctNDM4Ni04MTNhLTBlNWZmNzEyYjc4N1wvZGRvbzd2Yi1iN2QxMGQ2Yi01NDA1LTRlNmYtYmEyMC0yOGEzMjA2ZWUzYjUucG5nIiwiaGVpZ2h0IjoiPD0xOTIwIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNDQzNGJjNDItYmNjNy00Mzg2LTgxM2EtMGU1ZmY3MTJiNzg3XC9nYXZpcmxhcy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.eimmX_56BVIchdjorMFx_R2v88Y0xrZs3UrYxof3Fxc"
              }
              alt="Hero Image"
              width={500}
              height={300}
              className="w-full h-[300px] object-contain "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
