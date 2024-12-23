import React from "react";
import Image from "next/image";
import JobFilterSlider from "./JobFilterSlider";
import JobCard from "./jobsCard";
import { Job } from "@/app/types/jobs";

const OurJobOpenings = () => {
    const jobs: Job[] = [
        {
          logo: '/assets/img/profile.png',
          title: 'Server',
          company: "Red's Diner",
          category: 'Food & Beverage',
          rate: '$18/h',
          location: '620 10 Ave SW #134, Calgary, AB T2R 1C3',
          hours: '4PM - 10PM (6 Hours)',
          jobType: 'Full-Time',
          paymentType: 'Hourly',
          language: 'Basic English Needed',
          positionsFilled: '3/5 positions filled',
          startDate: 'ASAP',
          isNew: true,
          applyLink: '#',
        },
        {
          logo: '/assets/img/profile.png',
          title: 'Barista',
          company: 'Green Cafe',
          category: 'Coffee Shop',
          rate: '$16/h',
          location: '123 Main St, Vancouver, BC',
          hours: '7AM - 3PM (8 Hours)',
          jobType: 'Part-Time',
          paymentType: 'Hourly',
          language: 'English Required',
          positionsFilled: '2/4 positions filled',
          startDate: 'Next Week',
          applyLink: '#',
        },
        {
          logo: '/assets/img/profile.png',
          title: 'Line Cook',
          company: "Blue's Kitchen",
          category: 'Restaurant',
          rate: '$20/h',
          location: '456 Maple St, Toronto, ON',
          hours: '2PM - 10PM (8 Hours)',
          jobType: 'Full-Time',
          paymentType: 'Hourly',
          language: 'Intermediate English',
          positionsFilled: '1/3 positions filled',
          startDate: 'Next Month',
          isNew: true,
          applyLink: '#',
        },
        {
          logo: '/assets/img/profile.png',
          title: 'Receptionist',
          company: 'Hotel Luxe',
          category: 'Hospitality',
          rate: '$22/h',
          location: '789 Elm St, Montreal, QC',
          hours: '9AM - 5PM (8 Hours)',
          jobType: 'Full-Time',
          paymentType: 'Hourly',
          language: 'Fluent English',
          positionsFilled: '5/5 positions filled',
          startDate: 'Closed',
          applyLink: '#',
        },
      ];

  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="container flex flex-col items-center justify-center bg-white rounded-2xl py-12 max-w-5xl w-full">
        <h2 className="text-red-500 text-3xl font-bold mb-8 font-caveat flex items-center justify-center text-center gap-4">
          <Image
            src="/assets/icons/jobOpenings/left.png"
            alt="Left Arrow"
            width={40}
            height={40}
          />
          Our Job Openings
          <Image
            src="/assets/icons/jobOpenings/right.png"
            alt="Right Arrow"
            width={40}
            height={40}
          />
        </h2>
        <div className="w-full flex justify-center">
          <JobFilterSlider />
        </div>

        {jobs.map((job, index) => (
          <div className="w-full flex justify-center mt-8" key={index}>
            <JobCard job={job} borderClass={index % 2 === 0 ? 'gradient-border-r' : 'gradient-border-l'} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurJobOpenings;
