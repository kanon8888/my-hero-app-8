import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-10 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
               
                <div className="text-2xl font-bold text-white mb-6 md:mb-0">
                    MyHero <span className="text-blue-500">Apps</span>
                </div>

               
                <div className="flex flex-wrap justify-center gap-8 text-lg font-medium mb-6 md:mb-0">
                    <a href="#" className="hover:text-white transition-colors">
                        Home
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Apps
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        About
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Contact
                    </a>
                </div>

                
                <div className="flex gap-6 text-2xl">
                    <a
                        href="#"
                        className="hover:text-blue-500 transition-transform transform hover:scale-110"
                        aria-label="Facebook"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="#"
                        className="hover:text-blue-400 transition-transform transform hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="#"
                        className="hover:text-gray-100 transition-transform transform hover:scale-110"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                </div>
            </div>

            
            <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} MyHero Apps — All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
