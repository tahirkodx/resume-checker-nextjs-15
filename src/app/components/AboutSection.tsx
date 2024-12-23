import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="bg-white p-6 rounded-[20px]">
      <h2 className="text-red-500 text-3xl font-bold mb-4 font-caveat">
        About Business
      </h2>
      <p className="text-gray-700 text-center border-b border-[#E7E9EF] pb-4 mb-4">
        Enjoy breakfast all day Red&apos;s Diner! Farm-fresh ingredients and
        made-in-house. We believe in creating hearty meals that anyone can enjoy
        and feel like part of the family.
      </p>
      <ul className="text-gray-700 space-y-2">
        <li className="flex items-center space-x-3">
          <Image
            src="/assets/icons/info-circle.png"
            alt="Industry"
            width={24}
            height={24}
            className="self-center"
          />
          <p className="leading-none">
            <strong className="pr-1">Industry:</strong> Breakfast & Brunch Restaurant
          </p>
        </li>
        <li className="flex items-center space-x-3">
          <Image
            src="/assets/icons/location.png"
            alt="Address"
            width="24"
            height="24"
          />{" "}
          <p>
            <strong className="pr-1">Main Address:</strong> 910 7 Ave SW #1200, Calgary, AB T2P
            3N8
          </p>
        </li>
        <li className="flex items-center space-x-3">
          <Image
            src="/assets/icons/link.png"
            alt="Website"
            width="24"
            height="24"
          />{" "}
          <p>
            <strong className="pr-1">Website:</strong>{" "}
            <a href="https://www.Redsdiner.com" className="text-blue-500">
              https://www.Redsdiner.com
            </a>
          </p>
        </li>
        <li className="flex items-center space-x-3">
          <Image
            src="/assets/icons/call.png"
            alt="Business Phone"
            width="24"
            height="24"
          />{" "}
          <p>
            <strong className="pr-1">Business Phone:</strong> 0123456789
          </p>
        </li>
        <li className="flex items-center space-x-3">
          <Image
            src="/assets/icons/building.png"
            alt="Building Size"
            width="24"
            height="24"
          />{" "}
          <p>
            <strong className="pr-1">Business Size:</strong> 100
          </p>
        </li>
        <li className="flex items-center space-x-3">
          <Image
            src="/assets/icons/organization.png"
            alt="Organization Type"
            width="24"
            height="24"
          />{" "}
          <p>
            <strong className="pr-1">Organization Type:</strong> IT
          </p>
        </li>
      </ul>
    </div>
  );
}
