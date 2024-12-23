import Image from 'next/image';

const StayInTouch = () => {
  return (
    <div className="bg-yellow-400 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto">
      
      {/* Text Section */}
      <div className="text-center md:text-left mb-6 md:mb-0 w-full md:w-2/3">
        <h1 className="text-3xl custom-font text-black mb-2">
          Wanna stay in touch?
        </h1>
        <p className="text-black mb-4">
          Drop your resume here and follow us on Kibbi to receive job openings in real time
        </p>

        {/* Input Section */}
        <div className="flex items-center justify-center md:justify-start">
          <input
            type="text"
            placeholder="Text your phone number"
            className="p-3 rounded-l-full w-64 md:w-80 border border-black focus:outline-none"
          />
          <button className="bg-black text-white p-3 rounded-r-full">
            Send
          </button>
        </div>

        {/* Drop Resume Button */}
        <button className="bg-white text-black p-3 rounded-full mt-4">
          Or Drop Your Resume
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-64 h-64">
        <Image
          src="https://storage.googleapis.com/a1aa/image/KggQIxCTffubwk4F3Ryb4XEDOec0lKiGuVlzklmY5n3rZA7nA.jpg"
          alt="A man and a woman smiling and holding a phone"
          width={300}
          height={300}
          className="object-cover rounded-lg"
        />
        
        {/* Notification Section */}
        <div className="absolute bottom-0 left-0 bg-black text-white p-2 rounded-lg transform translate-x-1/4 translate-y-1/4 text-sm">
          Red&apos;s Diner just posted a job! Check out now!
        </div>
      </div>
    </div>
  );
};

export default StayInTouch;
