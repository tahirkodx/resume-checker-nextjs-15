
const StayInTouch = () => {
  return (
    <div 
      className="p-12 my-8 flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto bg-mobile-bg md:bg-desktop-bg lg:bg-contain bg-cover bg-center bg-no-repeat"
    //   style={{
    //     backgroundImage: 'url(/assets/img/GetInTouch/rectangle-bg.png)',
    //   }}
    >
      
      <div className="text-center md:text-left mb-6 md:mb-0 w-full md:w-2/3">
  <h1 className="text-black mb-2 font-caveat font-bold lg:text-5xl text-4xl">
    Wanna stay in touch?
  </h1>
  <p className="text-black mb-4 lg:pr-40 pr-0 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
    Drop your resume here and follow us on Kibbi to receive job openings in real time
  </p>

        <div className="flex items-center justify-center md:justify-start">
          <input
            type="text"
            placeholder="Text your phone number"
            className="p-3 rounded-xl w-64 md:w-80 border border-white focus:outline-none"
          />
          <button className="bg-[#231F20] text-white p-3 rounded-xl  ml-3">
            Send
          </button>
        </div>

        <button className="bg-[#F0F2F6] text-black p-3 rounded-xl mt-4">
          Or Drop Your Resume
        </button>
      </div>

      <div className="relative w-64 h-64 lg:block hidden">
        
        <div className="absolute text-end bottom-0 left-120 font-bold text-white rounded-lg transform -translate-x-[65%] -translate-y-[60%] text-sm px-12 lg:block hidden">
          Red&apos;s Diner just posted a job! Check out now!
        </div>
      </div>
    </div>
  );
};


export default StayInTouch;