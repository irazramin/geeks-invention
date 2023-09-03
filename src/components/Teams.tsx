import React from 'react';

const Teams = () => {
    return (
        <section id="teams" className="bg-[#16181c] transition-all duration-300 border-0">
            <div className="md:pt-[135px] pt-[50px] relative text-center">
                <div>
                    <h2 className="md:pb-[35px] md:px-0 px-[5%] text-center md:text-[66px] text-[36px]  text-white relative">Only
                        dedicated teams
                    </h2>
                    <div
                        className="max-w-[770px] mx-auto py-[20px] px-[5%] md:py-0 md:px-0 md:pb-[130px] text-white text-opacity-80">
                        <p className="text-[20px] leading-[27px] text-white">Our team is 100% concentrated on
                            your
                            project and you have full control over management of the dedicated team members.

                        </p>
                    </div>
                </div>

                <ul className="md:pb-[100px] max-w-[1440px] mx-auto flex md:flex-row flex-col">
                    <li className="px-[15px] pt-[50px] md:pt-0 w-auto md:w-[33.3%] block">
                        <div className="mb-[24px] flex h-[105px] items-end justify-center">
                            <img src="/agile-0aab98f2053db8490987560a2e9f37fe.svg" alt=""/>
                        </div>
                        <span className="text-[24px] leading-[32px] text-white">Agile approach</span>
                    </li>
                    <li className="px-[15px] pt-[50px] md:pt-0 w-auto md:w-[33.3%] block">
                        <div className="mb-[24px] flex h-[105px] items-end justify-center">
                            <img src="/deep-tech-7f909bfebb1eebf6eda5832f658cbbaa.svg" alt=""/>
                        </div>
                        <span className="text-[24px] leading-[32px] text-white">Deep tech expertise</span>
                    </li>
                    <li className="px-[15px] pt-[50px] md:pt-0 w-auto md:w-[33.3%] block">
                        <div className="mb-[24px] flex h-[105px] items-end justify-center">
                            <img src="/pc-293103263e599a94d7a2d886fab89b42.svg" alt=""/>
                        </div>
                        <span className="text-[24px] leading-[32px] text-white">Personal commitment</span>
                    </li>
                </ul>
                <ul className="md:pb-[100px] max-w-[1440px] mx-auto flex md:flex-row flex-col">
                    <li className="px-[15px] pt-[50px] md:pt-0 w-auto md:w-[33.3%] block">
                        <div className="mb-[24px] flex h-[105px] items-end justify-center">
                            <img src="/reg-rep-732453cad7b07eb4cc4147fa41423c4a.svg" alt=""/>
                        </div>
                        <span className="text-[24px] leading-[32px] text-white">Regular reporting</span>
                    </li>
                    <li className="px-[15px] pt-[50px] md:pt-0 w-auto md:w-[33.3%] block">
                        <div className="mb-[24px] flex h-[105px] items-end justify-center">
                            <img src="/time-track-d7afee36956a4a6c0bb1e734af7909fc.svg" alt=""/>
                        </div>
                        <span className="text-[24px] leading-[32px] text-white">Time tracking</span>
                    </li>
                    <li className="px-[15px] pt-[50px] md:pt-0 w-auto md:w-[33.3%] block">
                        <div className="mb-[24px] flex h-[105px] items-end justify-center">
                            <img src="/scale-33474d0929577c56ca4d116820e24ee8.svg" alt=""/>
                        </div>
                        <span className="text-[24px] leading-[32px] text-white">Scalability</span>
                    </li>
                </ul>

                <div className="py-[50px] md:py-0 md:pt-[30px] lg:pb-[150px] md:pb-[50px] ">
                    <a href=""
                       className="inline-block relative after:content-['→'] after:absolute after:top-[45%] after:-translate-y-[50%] hover:after:right-[15px] hover:border-[#ff5300] after:duration-500 after:transition-all min-w-[250px] max-w-full text-[#ff5300] hover:bg-[#ff5300] duration-500 hover:text-white border border-[#ff5300] text-[20px] px-[30px] pt-[11px] pb-[14px] cursor-pointer outline-none rounded-[50px] overflow-hidden transparent border">See
                        our services</a>
                </div>
            </div>
        </section>
    );
};

export default Teams;