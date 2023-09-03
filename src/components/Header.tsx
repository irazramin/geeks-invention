'use client'
import React from 'react';

const Header = ({ visibleHeader }: any) => {
    return (
        <div>
            {visibleHeader && <section
                id="top-section"
                className="bg-[#16181c] fixed pt-[42px] pr-[32px] pl-[40px] top-0 left-0 bottom-0 right-0 h-screen w-screen  flex items-center justify-center ">
                <div className="bg-[#16181c] z-7">
                    <div className="bg-[#16181c]">
                        <h1 className="md:text-[66px] text-[36px] md:leading-[82px] leading-[50px] text-center md:pt-[23px] pt-[14px] text-white font-normal ">EMBRACE
                            THE
                            FUTURE</h1>
                        <p className="pt-[23px] text-white text-center font-normal md:text-[36px] text-[20px]">Welcome
                            to the Age of
                            Action</p>
                    </div>
                </div>
            </section>}
        </div>
    );
};

export default Header;