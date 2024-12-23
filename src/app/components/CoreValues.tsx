import Image from "next/image";

export default function CoreValues() {
  return (
    <div className="p-6 mt-8">
      <h2 className="text-red-500 text-3xl font-bold font-caveat mb-6 flex justify-center items-center">
        <Image
          alt="Core Values Star Icon"
          src="/assets/icons/coreValues/star.png"
          width={48}
          height={48}
          className="w-12 h-12"
        />
        <span className="ml-4">Our Core Values</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreValuesData.map((value) => (
          <div
            key={value.title}
            className="flex flex-col items-start bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="w-16 h-16 flex items-start justify-start mb-4">
              <Image
                alt={value.alt}
                src={value.icon}
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const coreValuesData = [
  {
    title: "Fun",
    description: "If we're not having fun, we're doing it wrong",
    icon: "/assets/icons/coreValues/iceCream.png",
    alt: "Fun icon",
  },
  {
    title: "Global",
    description: "Together we can move mountains, or at least rearrange some furniture.",
    icon: "/assets/icons/coreValues/globe.png",
    alt: "Global icon",
  },
  {
    title: "Teamwork",
    description: "Together we can move mountains, or at least rearrange some furniture.",
    icon: "/assets/icons/coreValues/handshake.png",
    alt: "Teamwork icon",
  },
  {
    title: "Customer Obsession",
    description: "Because without you, we're just standing around talking to ourselves.",
    icon: "/assets/icons/coreValues/human.png",
    alt: "Customer Obsession icon",
  },
  {
    title: "Quality",
    description: "If it's not good enough for Grandma, it's not good enough.",
    icon: "/assets/icons/coreValues/badge.png",
    alt: "Quality icon",
  },
  {
    title: "Loyalty",
    description: "Like a golden retriever, but with business acumen.",
    icon: "/assets/icons/coreValues/thumb.png",
    alt: "Loyalty icon",
  },
];
