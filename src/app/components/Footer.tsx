import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col items-center text-center justify-between py-4 mt-8 border-t border-red-500 px-16">
      <div className="flex lg:flex-row flex-col items-center lg:gap-4 text-[#81868E]">
        POWERED BY{" "}
        <Image src="/assets/img/logo.png" alt="Kibbi" width="160" height="53" />
      </div>
      <div className="text-[#81868E]">Privacy Policy Terms of Use </div>
      <div className="text-[#81868E]">Copyright 2024 Kibbi Technologies Inc. All rights reserved </div>
    </div>
  );
};

export default Footer;
