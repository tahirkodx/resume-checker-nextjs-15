import Image from "next/image";

export default function Sidebar() {
    return (
      <div className="grid grid-cols-1 gap-6">
  <div className="bg-white p-6 rounded-2xl flex gap-4 justify-center">
    <button className="flex items-center border border-b-4 text-nowrap border-red-500 rounded-xl pl-4 pr-6 py-4 gap-2 font-bold">
      <Image
        src="/assets/icons/sidebar/clip.png"
        alt="Drop Resume"
        width={12}
        height={12}
      />
      Drop Resume
    </button>
    <button className="flex items-center border border-b-4 text-nowrap border-red-500 rounded-xl pl-4 pr-6 py-4 gap-2 font-bold">
      <Image
        src="/assets/icons/sidebar/mobile.png"
        alt="Follow Business"
        width={12}
        height={12}
      />
      Follow Business
    </button>
  </div>
  <div className="bg-white p-6 rounded-2xl flex flex-col gap-6 text-center">
    <h1 className="text-3xl font-bold text-start font-caveat text-red-500">
      We Are Proudly
    </h1>
    <div className="grid grid-cols-2 gap-4 items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/assets/icons/sidebar/Group.png"
          alt="Father-Owned"
          width={80}
          height={80}
        />
        <p className="text-lg">Father-Owned</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image
          src="/assets/icons/sidebar/PetLover.png"
          alt="Pet-Lover-Owned"
          width={90}
          height={90}
        />
        <p className="text-lg">Pet-Lover-Owned</p>
      </div>
    </div>
  </div>
</div>

    );
  }
  