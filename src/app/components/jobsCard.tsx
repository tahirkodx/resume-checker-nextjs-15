import Image from 'next/image';
import { Job } from '@/app/types/jobs';

interface JobCardProps {
  job: Job;
  borderClass: string;
}

const JobCard: React.FC<JobCardProps> = ({ job, borderClass }) => {
  const {
    logo,
    title,
    company,
    category,
    rate,
    location,
    hours,
    jobType,
    paymentType,
    language,
    positionsFilled,
    startDate,
    isNew,
    applyLink,
  } = job;

  return (
    <div className={`relative bg-[#FDF6F6] ${borderClass} rounded-lg p-6 lg:mx-16 mx-4 w-full`}>
      <div className="relative flex lg:flex-row flex-col items-start">
        
        <Image
          alt={`${company} logo`}
          src={logo}
          width={98}
          height={98}
          className="w-24 h-24 rounded-full lg:block hidden"
        />

        <div className="lg:ml-4 flex-1 w-full">
          
          <div className="flex flex-row items-start justify-between w-full">
            
            <Image
              alt={`${company} logo`}
              src={logo}
              width={48}
              height={48}
              className="w-16 h-16 rounded-full lg:hidden mb-2"
            />
            
            <div className="w-full lg:pl-0 pl-4">
              <div className="flex flex-row items-center">
                <h2 className="lg:text-xl text-base font-semibold">{title}</h2>
                {isNew && (
                  <span className="ml-2 mt-1 lg:mt-0 bg-yellow-300 text-yellow-800 text-xs font-semibold lg:px-2 px-1 py-1 rounded">
                    NEW
                  </span>
                )}
              </div>
              
              <p className="text-purple-700 mt-1 lg:mt-0 leading-tight">
                {company} <br className="lg:hidden" />
                <span className="text-gray-500">#{category}</span>
              </p>
            </div>

            <div className="text-left lg:text-right mt-4 lg:mt-0">
              <p className="lg:text-2xl text-lg text-[#456072] font-semibold">{rate}</p>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center text-gray-600 mb-2 gap-2">
              <Image src="/assets/icons/jobOpenings/location.png" alt="Location" width={24} height={24} />
              <p className="text-black">{location}</p>
            </div>

            <div className="flex items-center text-gray-600 mb-2 gap-2">
              <Image src="/assets/icons/jobOpenings/time.png" alt="Time" width={24} height={24} />
              <p className="text-black">{hours}</p>
              <span className="ml-4 flex items-center gap-2 text-black">
                <Image src="/assets/icons/jobOpenings/briefcase.png" alt="Briefcase" width={24} height={24} />
                {jobType}
              </span>
            </div>

            <div className="flex items-center text-gray-600 mb-2 gap-2">
              <Image src="/assets/icons/jobOpenings/money.png" alt="Payment" width={24} height={24} />
              <p className="text-black">Payment: {paymentType}</p>
              <span className="ml-4 flex items-center gap-2 text-black">
                <Image src="/assets/icons/jobOpenings/global.png" alt="Language" width={24} height={24} />
                {language}
              </span>
            </div>

            <div className="flex flex-wrap items-center text-gray-600 mb-4 gap-2">
              <Image src="/assets/icons/jobOpenings/position.png" alt="Positions" width={24} height={24} />
              <p className="text-black">{positionsFilled}</p>
              <span className="ml-4 flex items-center gap-2 text-black">
                <Image src="/assets/icons/jobOpenings/calendar.png" alt="Calendar" width={24} height={24} />
                Start Date: {startDate}
              </span>
              
              <a href={applyLink} className="ml-auto hidden lg:inline-block text-blue-600 font-semibold">
                Apply now
              </a>
            </div>

            <div className="w-full flex justify-center lg:hidden">
              <a href={applyLink} className="text-blue-600 font-semibold px-6 py-2">
                Apply now
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
