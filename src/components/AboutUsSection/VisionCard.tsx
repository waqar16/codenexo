
"use client"

import { Card } from "../CardSwap";

export default function VisionCard() {
  return (
    <Card
      className="relative p-8 overflow-hidden rounded-2xl bg-cover bg-center"
      style={{
        backgroundImage: `url('/bg-card-1.jpg')`, // 👈 replace with your image
      }}
    >
      {/* Blurred Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
        <p className="text-base leading-relaxed">
          At CodeNexo, our vision is to empower businesses and individuals through
          cutting-edge digital solutions that inspire innovation, drive growth,
          and shape a smarter future. We strive to be a global leader in technology
          by delivering seamless experiences and creating meaningful impact across industries.
        </p>
      </div>
    </Card>
  );
}