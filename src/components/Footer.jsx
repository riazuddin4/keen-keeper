import React from 'react';
import Image from 'next/image';
import fImage from '../assets/facebook.png';
import iImage from '../assets/instagram.png';
import tImage from '../assets/twitter.png';

const Footer = () => {
    return (
        <div className="bg-green-900 text-white py-10">
            <div className="max-w-5xl mx-auto text-center px-4">

                
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="font-bold">Keen</span>Keeper
                </h1>

                
                <p className="text-gray-300 max-w-2xl mx-auto mb-2">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Social Links */}
                <h3 className="text-sm text-gray-400 mb-3">Social Links</h3>

                <div className="flex justify-center gap-4 mb-6">
                    {/* {["facebook", "github", "twitter"].map((item, i) => (
                        <div
                            key={i}
                            className="w-10 h-10 flex items-center justify-center bg-white text-green-900 rounded-full hover:bg-green-500 hover:text-white transition cursor-pointer"
                        >
                            
                            <span className="text-sm font-bold">
                                {item[0].toUpperCase()}
                            </span>
                        </div>
                    ))} */}
                    <a href="#"><Image src={iImage} width={30} height={30} alt="Facebook" /></a>
                    <a href="#"><Image src={fImage} width={30} height={30} alt="Facebook" /></a>
                    <a href="#"><Image src={tImage} width={30} height={30} alt="Facebook" /></a>
                </div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 border-t border-green-700 pt-6 gap-3">

                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Cookies
                        </a>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Footer;