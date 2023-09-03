import React from 'react';

const Software = () => {
    return (
        <section id="software" className="bg-[#16181c] transition-all duration-300 ">
            <div className="lg:pt-[135px] md:pt-[80px] text-center relative ">
                <div className="text-center">
                    <div className="pb-[35px]">
                        <h2 className="md:text-[66px] text-[36px] text-white relative">Software for modern
                            platforms</h2>
                    </div>

                    <div
                        className="max-w-[770px] mx-auto md:pb-[130px] pb-[40px]  text-opacity-80 text-white text-center">
                        <p className="text-center leading-[27px] text-[20px] text-white">We develop applications
                            for
                            mobile, web, wearables, and TV.</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto justify-around ">
                    <div className="lg:w-[33.3%] w-auto flex justify-around lg:pb-0 pb-[50px]">
                        <div className="px-[15px]">
                            <div className="mb-[24px] flex h-[105px] items-end justify-center">
                                <img className="" src="/web-45bb148b27e8f57f2af5936654ab0d96.svg" alt=""/>
                            </div>
                            <span className="leading-[32px] text-[27px] text-white">Web</span>
                        </div>
                        <div className="px-[15px]">
                            <div className="mb-[24px] flex h-[105px] items-end justify-center">
                                <img className="" src="/ios-00fc94480a85413ba6276b2392cbaa0a.svg" alt=""/>
                            </div>
                            <span className="leading-[32px] text-[27px] text-white">IOS</span>
                        </div>
                    </div>
                    <div className="lg:w-[33.3%] w-auto flex justify-around lg:pb-0 pb-[50px]">
                        <div className="px-[15px]">
                            <div className="mb-[24px] flex h-[105px] items-end justify-center">
                                <img className="" src="/android-163d4b8d487bb2c3ade6e7aad7dda588.svg" alt=""/>
                            </div>
                            <span className="leading-[32px] text-[27px] text-white">Android</span>
                        </div>
                        <div className="px-[15px]">
                            <div className="mb-[24px] flex h-[105px] items-end justify-center">
                                <img className="" src="/hybrid-b835b200edfc426c9f5a6ef76412aff6.svg" alt=""/>
                            </div>
                            <span className="leading-[32px] text-[27px] text-white">Hybrid</span>
                        </div>
                    </div>
                    <div className="lg:w-[33.3%] w-auto flex justify-around">
                        <div className="px-[15px]">
                            <div className="mb-[24px] flex h-[105px] items-end justify-center">
                                <img className="" src="/wear-6f1886d1d03002e8fe1d04e499125d00.svg" alt=""/>
                            </div>
                            <span className="leading-[32px] text-[27px] text-white">Wearables</span>
                        </div>
                        <div className="px-[15px]">
                            <div className="mb-[24px] flex h-[105px] items-end justify-center">
                                <img className="" src="/tv-f6c551eb20333d6604e9fff685c392d1.svg" alt=""/>
                            </div>
                            <span className="leading-[32px] text-[27px] text-white">TV</span>
                        </div>
                    </div>
                </div>

                <div className="lg:pt-[130px] pt-[70px] lg:pb-[157px] pb-[50px]">
                    <a href=""
                       className="inline-block relative after:content-['→'] after:absolute after:top-[45%] after:-translate-y-[50%] hover:after:right-[8px] hover:border-[#ff5300] after:duration-500 after:transition-all min-w-[250px] max-w-full text-[#ff5300] hover:bg-[#ff5300] duration-500 hover:text-white border border-[#ff5300] text-[20px] px-[30px] pt-[11px] pb-[14px] cursor-pointer outline-none rounded-[50px] overflow-hidden transparent border">
                        See our tech stack
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Software;