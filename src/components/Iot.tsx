'use client'
import React from 'react';

const Iot = ({visibleSection}) => {
    return (
        <section id="iot"
                 className={`${visibleSection.fintech && 'bg-[#3f2caa]'} bg-[#01B5AC] transition-all duration-300  lg:h-screen `}>
            <div className="max-w-[1290px] mx-auto p-[20px] md:px-[40px] text-white">
                <div
                    className="grid md:grid-cols-2 grid-cols-1 lg:py-[200px] md:py-[140px] lg:place-content-center">
                    <div className="h-full flex py-[15px] md:py-0">
                        <img className="max-w-full mx-auto my-auto block" src="/industry-iot.webp" alt=""/>
                    </div>
                    <div className="md:px-[20px] mx-auto text-left max-w-[460px]">
                        <h3 className="lg:leading-[70px] md:leading-[52px] leading-[54px] text-[63px] font-normal text-white pb-[9px]">Industrial
                            IoT</h3>
                        <p className="lg:text-[32px] md:text-[22px] text-[24px]  lg:leading-[40px] md:leading-[30px] text-opacity-60 text-white pb-[35px] font-normal">Providing
                            a better connected experience</p>
                        <div className="mb-[30px]">
                                <span
                                    className="inline-block leading-[34px] rounded-[32px] bg-tag text-[14px] px-[13px] text-[14px] text-[#f4f4f4] text-center text-[#f4f4f4] min-w-[30px] mr-[6px]">Connected manufacturing</span>
                            <span
                                className="inline-block leading-[34px] rounded-[32px] bg-tag text-[14px] px-[13px] text-[14px] text-[#f4f4f4] text-center text-[#f4f4f4] min-w-[30px] mr-[6px]">Aviation</span>
                            <span
                                className="inline-block leading-[34px] rounded-[32px] bg-tag text-[14px] px-[13px] text-[14px] text-[#f4f4f4] text-center text-[#f4f4f4] min-w-[30px] mr-[6px]">Smart Building</span>
                        </div>
                        <div>
                            <p className="font-[20px] pb-[45px]">

                                Revolutionize your industry with our innovative IoT solutions. Our software
                                development services offer connected manufacturing, pollution control, smart
                                transportation, and intelligent farming, agriculture, and forestry. With our
                                expertise, you can harness the power of technology to increase efficiency,
                                reduce
                                waste, and optimize operations for a sustainable future.

                            </p>
                        </div>
                        <div className="text-center">
                            <a href=""
                               className="inline-block relative after:content-['→'] after:absolute after:top-[45%] after:-translate-y-[50%] hover:after:right-[8px] hover:border-[#ffffff] after:duration-200 after:transition-all min-w-[250px] max-w-full text-[#ffffff] hover:bg-white duration-300 hover:text-black border border-[#ffffff] text-[20px] px-[30px] pt-[11px] pb-[14px] cursor-pointer outline-none rounded-[50px] overflow-hidden transparent border">See
                                full case study</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Iot;