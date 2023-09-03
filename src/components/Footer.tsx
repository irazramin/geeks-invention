'use client'
import React from 'react';

const Footer = ({visibleFooter}) => {
    return (
        <div>
            {visibleFooter &&
                <footer id="footer"
                        className="bg-[#16181c] px-[15px] md:px-[40px] pt-[58px] md:pt-0 pb-[20px] md:pb-[18px] w-full left-0 bottom-0 md:relative lg:fixed border-0">
                    <div
                        className="bg-[#16181c] flex justify-center items-center text-center overflow-hidden text-[20px] w-full">
                        <div className="md:py-[100px] py-[52px] lg:py-0 lg:pt-[175px] lg:pb-[100px]">
                            <div className="max-w-[790px] mx-auto">
                                <div className="px-[37px] md:px-[10px] pb-[19px] md:pb-[33px]">
                                    <h2 className="md:text-[48px] text-[32px] leading-[37px] font-normal text-white">Get
                                        to know us better!</h2>
                                </div>
                                <div className="px-[5%] pb-[36px] md:px-[40px] md:pb-[45px]">
                                    <p className="text-[20px] leading-[27px] font-normal text-white text-opacity-80">
                                        It is a pleasure to have you on our website. Let us know if there's an
                                        opportunity
                                        to do something together.
                                    </p>
                                </div>
                                <a className="inline-block relative transition-all min-w-[250px] max-w-full text-[#ff5300] hover:bg-white bg-[#ff5300] duration-500 hover:text-[#ff5300] text-white text-[20px] px-[30px] pt-[11px] pb-[14px] cursor-pointer outline-none rounded-[50px] overflow-hidden transparent cursor-pointer">Drop
                                    us a message</a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex lg:flex-row flex-col  realtive pt-[42px] pb-[29px] justify-between items-center ">
                        <div className="w-[280px] md:pb-[10px] lg:pb-0">
                            <a rel="nofollow" className="text-[18px] px-[5px] py-1 leading-[21px] text-white"
                               href="index.html">
                                <img src="/geeks-logo-white.svg" alt=""/>
                            </a>
                            <p className="text-white text-opacity-700 text-center md:text-start"> 447 Broadway, 2nd
                                Floor Suite #772, New York
                                10013,
                                United States
                                <br/> +1-347-535-0004</p>
                        </div>

                        <nav className="text-center">
                            <ul className="py-[10px] md:py-0">
                                <li className="inline-block mr-[20px] pb-[10px]">
                                    <a rel="nofollow" className="text-[18px] px-[5px] py-1 leading-[21px] text-white">
                                        <span>Works</span>
                                    </a>
                                </li>
                                <li className="inline-block mr-[20px] pb-[10px]">
                                    <a rel="nofollow" className="text-[18px] px-[5px] py-1 leading-[21px] text-white">
                                        <span>Technologies</span>
                                    </a>
                                </li>
                                <li className="inline-block mr-[20px] pb-[10px]">
                                    <a rel="nofollow" className="text-[18px] px-[5px] py-1 leading-[21px] text-white">
                                        <span>Services</span>
                                    </a>
                                </li>
                                <li className="inline-block mr-[20px] pb-[10px]">
                                    <a rel="nofollow" className="text-[18px] px-[5px] py-1 leading-[21px] text-white">
                                        <span>Company</span>
                                    </a>
                                </li>
                                <li className="inline-block mr-[20px] pb-[10px]">
                                    <a rel="nofollow" className="text-[18px] px-[5px] py-1 leading-[21px] text-white">
                                        <span>Contacts</span>
                                    </a>
                                </li>
                                <li className="inline-block mr-[20px] pb-[10px]">
                                    <a className="text-[18px] px-[5px] py-1 leading-[21px] text-white">
                                        <span>Terms and Conditions</span>
                                    </a>
                                    <a className="text-[18px] px-[5px] py-1 leading-[21px] text-white">
                                        <span>Privacy Policy</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className="text-center">
                            <a href=""
                               className="inline-block relative hover:border-[#ffffff] after:duration-200 after:transition-all min-w-[250px] max-w-full text-[#ffffff] hover:bg-white duration-300 hover:text-black border border-[#ffffff] text-[20px] px-[30px] pt-[11px] pb-[14px] cursor-pointer outline-none rounded-[50px] overflow-hidden transparent border">See
                                full case study</a>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-[14px] leading-[17px] text-white text-opacity-20">©&nbsp;Copyright 2023
                            <span> – Mobile App Design and Development Company</span>. All Rights Reserved</p>
                    </div>
                </footer>}
        </div>
    );
};

export default Footer;