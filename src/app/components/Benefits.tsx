import Image from "next/image";

export default function Benefits() {
  const benefits = [
    { icon: "/assets/icons/benefits/graph.png", label: "Career Growth Opportunities" },
    { icon: "/assets/icons/benefits/card.png", label: "Insurance" },
    { icon: "/assets/icons/benefits/money.png", label: "Tips & Bonuses" },
    { icon: "/assets/icons/benefits/daimond.png", label: "Insurance" },
  ];

  return (
    <div className="pt-10 pb-20 ">
      <div className="text-center mb-12">
        <h2 className="text-red-500 text-3xl font-bold italic flex items-center justify-center">
          <Image
            src="/assets/icons/benefits/tick.png"
            alt="Tick"
            width={30}
            height={30}
            className="inline-block mr-2"
          />
          Our Benefits
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Image
                src={benefit.icon}
                alt={benefit.label}
                width={90}
                height={90}
                className="w-20 h-20"
              />
            </div>
            <p className="text-lg font-medium">{benefit.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
