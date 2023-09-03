'use client'
import React from 'react';
import VisibilitySensor from "react-visibility-sensor";

const Fintech = ({ setVisibleSection }) => {
    return (
        <VisibilitySensor onChange={(isVisible): any => setVisibleSection({fintech: isVisible})} offset={{top: 5}}
                          minTopValue={100} intervalCheck={true} scrollCheck={true}>
            <section id="fintech" className={`bg-[#3f2caa] transition-all duration-300 `}>
                <div className="max-w-[1290px] mx-auto p-[20px] md:px-[40px] text-white">
                    <div
                        className="grid md:grid-cols-2 grid-cols-1 lg:py-[200px] md:py-[140px] lg:place-content-center">
                        <div className="md:px-[20px] order-2 md:order-1">
                            <h3 className="lg:leading-[70px] md:leading-[52px] leading-[54px] text-[63px] font-normal text-white pb-[9px]">Fintech
                                Solution</h3>
                            <p className="lg:text-[32px] md:text-[22px] text-[24px]  lg:leading-[40px] md:leading-[30px] text-opacity-60 text-white pb-[35px] font-normal">Transforming
                                Fintech with AI</p>
                            <div className="mb-[30px]">
                                <span
                                    className="inline-block leading-[34px] rounded-[32px] bg-tag text-[14px] px-[13px] text-[14px] text-[#f4f4f4] text-center text-[#f4f4f4] min-w-[30px] mr-[6px]">Fraud detection</span>
                                <span
                                    className="inline-block leading-[34px] rounded-[32px] bg-tag text-[14px] px-[13px] text-[14px] text-[#f4f4f4] text-center text-[#f4f4f4] min-w-[30px] mr-[6px]">Transaction categorisation</span>
                                <span
                                    className="inline-block leading-[34px] rounded-[32px] bg-tag text-[14px] px-[13px] text-[14px] text-[#f4f4f4] text-center text-[#f4f4f4] min-w-[30px] mr-[6px]">Risk Scoring</span>
                            </div>
                            <div>
                                <p className="font-[20px] pb-[45px]">
                                    Empower your financial institution with our advanced fintech solutions. From
                                    real-time
                                    fraud
                                    detection to easy bookkeeping, our software development services provide credit
                                    risk
                                    scoring
                                    for accurate lending eligibility, transaction categorization for seamless
                                    organization,
                                    and
                                    anomaly detection to safeguard your assets
                                </p>
                            </div>
                            <div className="text-center">
                                <a href=""
                                   className="inline-block relative after:content-['→'] after:absolute after:top-[45%] after:-translate-y-[50%] hover:after:right-[8px] hover:border-[#ffffff] after:duration-200 after:transition-all min-w-[250px] max-w-full text-[#ffffff] hover:bg-white duration-300 hover:text-black border border-[#ffffff] text-[20px] px-[30px] pt-[11px] pb-[14px] cursor-pointer outline-none rounded-[50px] overflow-hidden transparent border">See
                                    full case study</a>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 h-full my-auto py-[15px] md:py-0">
                            <img className="max-w-full mx-auto my-auto h-full block" src="/industry-fintech.svg"
                                 alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </VisibilitySensor>
    );
};

export default Fintech;