import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative lg:mb-8 ">
      <Image
        alt="Red's Diner banner"
        src="/assets/img/banner.png"
        width={1920}
        height={500}
        className="w-full h-full object-cover"
      />
      <div className="absolute lg:-bottom-24 -bottom-16 left-12 p-4 flex items-center">
        <Image
          alt="Red's Diner logo"
          src="/assets/img/profile.png"
          width={80}
          height={80}
          className="lg:h-36 lg:w-36 rounded-full "
        />
        <div className="ml-4 lg:mt-12 mt-8">
          <h1 className="lg:text-2xl text-xl font-bold text-black flex items-end">
            Red&apos;s Diner 
            <p className="bg-[#E4F1EB] rounded-lg flex ml-4 px-3 py-1">
              <Image src="/assets/img/verified.png" width={14} height={14} className="w-4 h-4" alt="Verified" /> 
              <span className="text-black text-xs pl-1">Verified</span>
              </p>
          </h1>
          <p className="text-[#81868E] lg:text-base text-xs font-normal">13,445 Followers</p>
        </div>
      </div>
    </div>
  );
}
