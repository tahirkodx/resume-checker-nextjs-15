import Image from "next/image";

export default function JoinOurTeam() {
  return (
    <div className=" flex flex-col lg:flex-row items-center justify-center p-6 lg:p-8 my-8 rounded-2xl relative overflow-hidden">
      
      <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
        <Image
          src="/assets/img/team.png"
          alt="Join Our Team"
          width={800}
          height={500}
          className="rounded-2xl w-full"
        />
      </div>
      
      <div className="w-full lg:w-1/2 p-1 lg:p-8 lg:-ml-20 -mt-16 lg:mt-0">
        <div className="relative">
          
          <div className="absolute lg:bottom-7 lg:right-7 bottom-4 right-4 translate-x-1/3 translate-y-1/3 z-0">
            <Image
              src="/assets/icons/redDots.png" 
              alt="Decorative Dots"
              width={170}
              height={170}
              className="w-[120px] lg:w-[170px]"
            />
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-6 lg:px-4 lg:py-12 rounded-xl shadow-sm relative z-10">
            <h2 className="text-red-500 text-3xl font-bold mb-4 font-caveat">
              Why Join Our Team
            </h2>
            <p className="text-gray-700 leading-relaxed lg:text-base text-sm">
              Join the Reds Diner team in Calgary and become part of a vibrant, 
              friendly, and dynamic workplace! At Reds Diner, we pride ourselves 
              on delivering exceptional food and service, creating memorable dining 
              experiences for our guests. As a member of our team, you&apos;ll enjoy a 
              supportive environment where your skills and contributions are valued. 
              We offer competitive wages, opportunities for growth, and a welcoming 
              atmosphere that feels like family. Whether you&apos;re passionate about 
              hospitality, culinary arts, or customer service, Reds Diner is the 
              perfect place to advance your career and make a difference in the 
              community. Join us and be part of a tradition of excellence!
            </p>
            
            <div className="absolute -top-2 -right-2 text-red-400">
              <Image 
                src="/assets/icons/notePin.png" 
                alt="Pin Icon" 
                width={40} 
                height={40} 
                className="w-[40px] lg:w-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
