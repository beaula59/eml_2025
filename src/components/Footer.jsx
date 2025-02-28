import React from 'react';
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaTimes } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

function Footer() {
    return (
        <div className='relative h-[22rem] md:overflow-hidden mt-[10rem]'>
            <div className='mt-[10rem] bg-gray-50'></div>

            <div className="absolute top-[1rem] left-[50%] -translate-x-[50%] h-[10rem] hidden md:block !bg-[#7A92BF] rounded-tl-[5rem] rounded-tr-[7rem] z-[100] w-[90vw]"></div>
            <div  className=" rotate-2 absolute hidden md:block top-[2rem] left-[50%] h-[18rem] -translate-x-[50%] !bg-[#5675A2] rounded-tl-[5rem] rounded-tr-[5rem] z-[100] w-[100vw] overflow-x-hidden"></div>

            <footer  className=" rounded-tl-[6rem] rounded-tr-[7rem] z-[200]  text-white absolute top-[3rem] py-12 left-0 w-full">
                {/* Background Shape */}

                <div className="container mx-auto rounded-2xl pt-10 md:pt-0 bg-[#5675A2] md:bg-transparent flex flex-col md:flex-row justify-between items-center px-6">
                    {/* Left Section */}
                    <div className="text-center md:text-left mb-10 md:ml-20 ">
                        <h2 className="text-xl font-semibold">EML IITH</h2>
                        <img src="/eml1.png" alt="EML Logo" className="w-12 h-12 mx-auto md:mx-0 my-4" />
                        <p className="text-lg font-medium">Follow us:</p>
                        <div className="flex justify-center md:justify-start space-x-4 mt-2">
                            <a href="https://in.linkedin.com/in/extra-mural-lectures-iit-hyderabad-246492194" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-xl cursor-pointer" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCVUaV9giaKOLXlf0euvP9Sg" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="text-xl cursor-pointer" />
                            </a>
                            <a href="https://www.instagram.com/eml_iith/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-xl cursor-pointer" />
                            </a>
                            <a href="https://www.facebook.com/emliith/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-xl cursor-pointer" />
                            </a>
                            <a href="https://twitter.com/emliith?s=20" target="_blank" rel="noopener noreferrer">
                                <FaTimes className="text-xl cursor-pointer" />
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Contact */}
                    <div className="text-center md:text-right mt-6 md:mt-0 mb-10 md:mr-20 ">
                        <h2 className="text-xl font-semibold">Contact</h2>
                        <p className="flex items-center justify-center md:justify-end mt-2">
                            <MdLocationOn className="mr-2" /> IIT Hyderabad
                        </p>
                        <p className="flex items-center justify-center md:justify-end mt-2">
                            <MdEmail className="mr-2" /> eml@iith.ac.in
                        </p>
                        <p className="flex items-center justify-center md:justify-end mt-2">
                            <MdPhone className="mr-2" /> +91 8788424840
                        </p>
                    </div>
                </div>

                {/* Bottom Copyright Section */}
                <div className="text-center py-5 text-sm bg-[#1D4F7C] font-[lora] w-full absolute bottom-0 left-0 z-[1000]">
                    © EML IIT Hyderabad 2025. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default Footer;
