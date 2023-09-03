'use client'
import Navbar from "@/components/Navbar";
import React, {useEffect, useState} from "react";
import VisibilitySensor from 'react-visibility-sensor'
import Header from "@/components/Header";
import Fintech from "@/components/Fintech";
import Iot from "@/components/Iot";
import Education from "@/components/Education";
import CheckMore from "@/components/CheckMore";
import Client from "@/components/Client";
import Software from "@/components/Software";
import Teams from "@/components/Teams";
import Footer from "@/components/Footer";

export default function Home() {
    const [visibleHeader, setVisibleHeader]: any = useState(false);
    const [visibleFooter, setVisibleFooter]: any = useState(false);
    const [visibleSection, setVisibleSection]: any = useState({fintech: false});
    const [visiblity, setVisibility] = useState(false)
    const listenScrollEvent = (event) => {
        if (window.scrollY < window.innerHeight) {
            setVisibleHeader(true);
            setVisibleFooter(false)
        }
        if (window.scrollY > (window.innerHeight)) {
            setVisibleHeader(false);
            setVisibleFooter(true);
        }
        if (window.scrollY > (window.innerHeight) && window.scrollY < (window.innerHeight * 2)) {

        }
    }


    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    useEffect((): any => {
        console.log(visibleSection)
    }, [visibleSection])

    return (
        <main>
            <Navbar/>
            <Header visibleHeader={visibleHeader}/>

            <div className="min-h-screen w-1 h-[554px]"></div>

            <Fintech setVisibleSection={setVisibleSection} />

            <Iot visibleSection={visibleSection} />

            <Education />

            <CheckMore />

            <Client />
            <Software />
            <Teams />
            <div className="lg:h-[1003px] md:h-0 w-full relative bg-[#16181c]"></div>

            <Footer />
        </main>
    )
}
