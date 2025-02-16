import Image from "next/image";
import Navbar from "../../components/Navbar";
import './Contact_us.css';

export default function Home() {

  const heights = ["h-[320px]", "h-[290px]", "h-[260px]", "h-[230px]"];
  const opacity = ["opacity-100", "opacity-85", "opacity-70", "opacity-55"];
  const s_heights = ["h-[120px]", "h-[100px]", "h-[80px]", "h-[60px]"];

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-85px)] flex items-center justify-center bg-white">
        <div className="absolute left-0 top-[85px] flex">
          {[...Array(4)].map((_, i) => (
            <div
              key={`top-left-${i}`}
              className={`animate-wave-top ${heights[i]} ${opacity[i]}  w-[50px] bg-[#5373A6] rounded-b-[150px]`}
              style={{
                animationDelay: `${i * 0.2}s`,
                marginLeft: i === 0 ? "0" : "20px",
              }}
            />
          ))}
        </div>
        <div className="right-0 top-[85px] flex absolute">
          {[...Array(4)].map((_, i) => (
            <div
              key={`top-right-${i}`}
              className={`animate-wave-top ${s_heights[i]} ${opacity[i]}  w-[50px] bg-[#5373A6] rounded-b-[100px]`}
              style={{
                animationDelay: `${i * 0.2}s`,
                marginLeft: i === 0 ? "0" : "20px",
              }}
            />
          ))}
        </div>
        <div className="flex">
          {[...Array(4)].map((_, i) => (
            <div
              key={`bottom-left-${i}`}
              className={`absolute animate-wave-bottom bottom-0 left-0 ${s_heights[3 - i]} ${opacity[3 - i]}  w-[50px] bg-[#E63946] rounded-t-[100px]`}
              style={{
                animationDelay: `${i * 0.2}s`,
                marginLeft: i === 0 ? "0" : `${i * 70}px`,
              }}
            />
          ))}
        </div>
        <div className="flex">
          {[...Array(4)].map((_, i) => (
            <div
              key={`bottom-right-${i}`}
              className={`absolute animate-wave-bottom bottom-0 right-0 ${heights[i]} ${opacity[i]}  w-[50px] bg-[#E63946] rounded-t-[100px]`}
              style={{
                animationDelay: `${i * 0.2}s`,
                marginRight: i === 0 ? "0" : `${i * 70}px`,
              }}
            />
          ))}
        </div>
        <div className="relative flex flex-col items-center top-8">
          <div className="relative z-20 bg-[#e63946] text-white w-[520px] h-[480px] rounded-[100px] flex flex-col items-center p-10 pt-12 shadow-lg shadow-red-700/50">
            <div className="absolute -top-[100px] left-1/2 transform -translate-x-1/2 w-[150px] h-[150px] bg-white rounded-[90px] flex items-end justify-center">
              <Image
                src="/user.png"
                alt="Profile"
                className="m-6"
                width={110}
                height={110}
              />
            </div>
            <h2 className="text-[35px] font-semibold font-[lora]">Love to Hear From You</h2>
            <p className="text-center mt-1 text-[18px] font-[merriweather]">
              Want to suggest personality for the talk or willing to speak at one of our Extra Mural Lectures, we would love to hear from you. Here is how you can contact us.
            </p>

            <form className="flex flex-col items-start top-[195px] absolute ">
              <label className="text-[16px] mb-1">Name </label>
              <input type="text" className="w-[400px] h-[30px] bg-[#E63946] font-[lara] border-b-2 border-dashed border-white focus:outline-none focus:border-blue-500 p-0 text-[20px] m-0" />
              <label className="text-[16px] mt-3 mb-1">Email</label>
              <input type="text" className="w-[400px] h-[30px] bg-[#E63946] font-[lara] border-b-2 border-dashed border-white focus:outline-none focus:border-blue-500 p-0 text-[20px] m-0" />
              <label className="text-[16px] mt-3 mb-1">Message</label>
              <input type="text" className="w-[400px] h-[30px] bg-[#E63946] font-[lara] border-b-2 border-dashed border-white focus:outline-none focus:border-blue-500 p-0 text-[20px] m-0" />
              <button className="mt-4 bg-white text-[#E63946] w-[180px] h-[45px] rounded-[60px] text-[22px] font-[merriWeather]  absolute top-[200px] left-[115px] hover:bg-gray-300 ">Send Message</button>
            </form>

          </div>

          <div className="absolute z-0 bg-[#e63946]/50 text-white w-[520px] h-[480px] rounded-[100px] top-[20px] left-[20px]" />
        </div>
      </div>
    </>
  );
}
