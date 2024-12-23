"use client";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const JobFilterSlider = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4, 
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 4, spacing: 10 }, 
      },
      "(max-width: 768px)": {
        slides: { perView: 3, spacing: 8 }, 
      },
      "(max-width: 480px)": {
        slides: { perView: 2.5, spacing: 6 }, 
      },
    },
  });

  const filters = [
    "City",
    "Location",
    "Job Type",
    "Schedule",
    "Job Location Type",
    "New Slide",
    "Check This",
    "New Resume"
  ];

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <div className="w-full lg:w-full">
      <div ref={sliderRef} className="keen-slider py-4">
        {filters.map((filter, index) => (
          <div
            key={index}
            className="keen-slider__slide flex items-center justify-center"
            onClick={() => handleTabClick(index)}
          >
            <div
              className={`border rounded-lg px-6 py-2 cursor-pointer flex items-center gap-x-2 min-w-max ${
                selectedTab === index
                  ? "bg-red-500 text-white border-red-500"
                  : "hover:border-red-400 hover:text-red-500"
              }`}
            >
              <ChevronRightIcon
                className={`w-5 h-5 ${
                  selectedTab === index ? "text-white" : "text-gray-500"
                }`}
              />
              <span className="whitespace-nowrap">{filter}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobFilterSlider;
