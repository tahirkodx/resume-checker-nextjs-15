import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 lg:px-24 px-2">
        <div className="flex items-center">
          <Image
            alt="Kibbi logo"
            src="/assets/img/logo.png"
            width={170}
            height={57}
            priority
          />
        </div>
        <button className="bg-white border border-[#141414] text-[#1D1D1F] font-semibold px-4 py-2 rounded-lg">
          Sign Up/Log In
        </button>
      </div>
    </header>
  );
}
