import React from 'react';

const CheckMore = () => {
    return (
        <section id="check-more" className="md:pt-[65px] md:pb-[150px] pt-[10px] px-[15px] pb-[80px] bg-black ">
            <div className="max-w-[750px] mx-auto text-center">
                <h2 className="text-[32px] md:text-[48px] text-white font-normal px-[10px] pb-[33px]">Check out
                    more
                    works by Geeks
                    Invention</h2>
                <p className={`leading-[27px] text-[20px] text-white text-opacity-80 px-[40px] pb-[59px]`}>
                    Our case studies describe design and development solutions implemented at our Geeks
                    Invention
                    projects. The stories are a
                    valuable resource for those looking to develop their own mobile apps.
                </p>

                <a href=""
                   className="inline-block relative after:content-['→'] after:absolute after:top-[45%] after:-translate-y-[50%] hover:after:right-[8px] hover:border-[#ff5300] after:duration-500 after:transition-all min-w-[250px] max-w-full text-[#ff5300] hover:bg-[#ff5300] duration-500 hover:text-white border border-[#ff5300] text-[20px] px-[30px] pt-[11px] pb-[14px] cursor-pointer outline-none rounded-[50px] overflow-hidden transparent border">See
                    full case study</a>
            </div>
        </section>
    );
};

export default CheckMore;