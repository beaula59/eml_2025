"use client";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import "./Contact_us.css";
import { BadgeCheck } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [showNotification, setShowNotification] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval;
    let timeout;

    if (showNotification) {
      const startTime = Date.now();
      const duration = 3000;

      progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(newProgress);
      }, 16);

      timeout = setTimeout(() => {
        setShowNotification(false);
        setProgress(0);
      }, duration);
    }

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, [showNotification]);

  const handleShowNotification = () => {
    setShowNotification(true);
    setProgress(0);
  };

  const heights = ["h-[320px]", "h-[290px]", "h-[260px]", "h-[230px]"];
  const opacity = ["opacity-100", "opacity-85", "opacity-70", "opacity-55"];
  const s_heights = ["h-[120px]", "h-[100px]", "h-[80px]", "h-[60px]"];
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "9d1a5661-3604-4c9a-ab6c-6586080af756",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex bg-white justify-between">
        <div className="flex-col justify-between min-h-[calc(100vh-70px)] hidden lg:flex">
          <div className=" top-[70px] flex">
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
          <div className="items-end flex">
            {[...Array(4)].map((_, i) => (
              <div
                key={`bottom-left-${i}`}
                className={`animate-wave-bottom ${s_heights[3 - i]} ${
                  opacity[3 - i]
                }  w-[50px] bg-[#E63946] rounded-t-[100px]`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  marginLeft: i === 0 ? "0" : `${20}px`,
                  bottom: i === 0 ? "0" : `${20}px`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative flex-1 flex justify-center items-center px-4 py-8 min-h-[calc(100vh-70px)]">
          <div className="relative w-full max-w-[520px] mt-[60px]">
            <div className="relative z-20 bg-[#e63946] text-white w-full rounded-[30px] sm:rounded-[40px] lg:rounded-[100px] p-6 sm:p-8 lg:p-10 lg:pb-6 shadow-lg">
              <div className="absolute -top-[60px] sm:-top-[75px] lg:-top-[100px] left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[148px] bg-white rounded-full flex items-center justify-center">
                <img
                  src="./user.png"
                  alt="Profile"
                  className="w-20 h-20 sm:w-20 sm:h-20 lg:w-[110px] lg:h-[110px] object-contain"
                />
              </div>

              <div className="md:mt-2 mt-5">
                <h2 className="text-[21px] sm:text-[27px] lg:text-[34px] font-semibold font-[merriweather] text-center">
                  Love to Hear From You
                </h2>
                <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-[merriweather] text-center opacity-90">
                  Want to suggest personality for the talk or willing to speak
                  at one of our Extra Mural Lectures, we would love to hear you.
                  Here is how you can contact us.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col w-full max-w-[400px] mx-auto"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="626efd10-5aa7-4a97-a91a-db2f11b4cb22"
                  />
                  <div className="space-y-1 pb-2">
                    <label className="text-[14px] sm:text-[16px]">Name</label>
                    <input
                      autoComplete="off"
                      type="text"
                      name="name"
                      className="w-full h-[30px] bg-[#E63946] font-serif border-b-2 border-dashed border-white focus:outline-none focus:border-blue-500 p-0 text-[16px] sm:text-[18px] lg:text-[20px]"
                    />
                  </div>

                  <div className="space-y-1 pb-2">
                    <label className="text-[14px] sm:text-[16px]">Email</label>
                    <input
                      autoComplete="off"
                      type="email"
                      name="email"
                      className="focus:border-blue-500 w-full h-[30px] bg-[#E63946] font-serif border-b-2 border-dashed border-white focus:outline-none p-0 text-[16px] sm:text-[18px] lg:text-[20px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[14px] sm:text-[16px]">
                      Message
                    </label>
                    <input
                      autoComplete="off"
                      type="text"
                      name="message"
                      className="focus:border-blue-500 w-full h-[30px] bg-[#E63946] font-serif border-b-2 border-dashed border-white focus:outline-none p-0 text-[16px] sm:text-[18px] lg:text-[20px] resize-none"
                    />
                  </div>

                  <div className="pt-4 flex justify-center">
                    <button
                      onClick={handleShowNotification}
                      type="submit"
                      className="bg-white text-[#E63946] px-8 py-3 rounded-full text-[18px] sm:text-[20px] lg:text-[20px] font-[lora] hover:bg-gray-200 transform transition-all duration-200 active:scale-95 hover:scale-110 "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="hidden md:block absolute z-10 bg-[#e63946]/50 w-full h-full rounded-[30px] sm:rounded-[40px] lg:rounded-[100px] top-[18px] left-[18px]" />
          </div>
        </div>

        <div className="flex-col justify-between min-h-[calc(100vh-70px)] hidden lg:flex">
          <div className="top-[70px] flex">
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
          <div className="flex items-end">
            {[...Array(4)].map((_, i) => (
              <div
                key={`bottom-right-${i}`}
                className={`animate-wave-bottom bottom-0 right-0 ${
                  heights[3 - i]
                } ${opacity[3 - i]}  w-[50px] bg-[#E63946] rounded-t-[100px]`}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  marginLeft: i === 0 ? "0" : `${20}px`,
                }}
              />
            ))}
          </div>
        </div>
        <div
          className={`z-50 fixed sm:bottom-6 sm:right-6 ease-out bottom-3 right-3 ${
            showNotification
              ? "translate-x-0 opacity-100"
              : "translate-x-[200%] opacity-0"
          }`}
        >
          <div className="bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.5)] rounded-t-2xl md:w-[360px] md:h-36 md:p-6 w-[240px] h-[100px] p-3 flex items-start md:gap-4 gap-1">
            <div className="mt-2">
              <BadgeCheck className="w-12 h-12 md:w-20 md:h-20 text-white fill-green-500" />
            </div>
            <div>
              <h2 className="md:text-[26px] text-[20px] font-semibold text-green-600 mb-1">
                Message Sent!
              </h2>
              <div>
                <p className="text-gray-700 md:text-[17px] text-[12px]">
                  Thank you for your message
                </p>
                <p className="text-gray-600 md:text-[17px] text-[12px]">
                  We'll get back to you shortly
                </p>
              </div>
            </div>
          </div>
          <div
            className="md:w-[360px] w-[240px] bg-green-500 h-1 rounded-b-2xl transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        {/* <div className="absolute bg-white shadow-[0px_0px_10px_rgba(0,0,0,0.5)] h-40 w-[330px] bottom-5 rounded-[30px] right-5 flex ">
          <div className="flex items-center ml-4 ">
          <BadgeCheck size={80} className="fill-green-500" color="white"/>
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="text-[28px] font-semibold font-[lora] text-green-500 text-center mt-6">
              Message Sent!
            </h2>
            <p className="text-[18px] font-[merriweather] text-center opacity-80 mt-2">
              Thanks for your message
            </p>
            <p className="text-[18px] font-[merriweather] text-center opacity-80 ">
              We will get back to you soon...
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}