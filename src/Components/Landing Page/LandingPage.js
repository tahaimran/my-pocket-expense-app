import React from "react";
import Header from "./NavBar/Header"
import TopBanner from "./TopBanner/TopBanner"
import MainInfo from './MainInfo/MainInfo'
import FooterTop from './FooterTop/FooterTop'
import FooterBot from './FooterBot/FooterBot'
import Whatsapp from './Whatsapp CTA/whatsapp'
import CeoMsg from './CEOMSG/CeoMsg'
import './LandingPage.css'
function LandingPage() {
    return(
        <div>
            <Header />
            <TopBanner />
            <Whatsapp />
            <MainInfo />
            <CeoMsg />
            <FooterTop />
            <FooterBot />
        </div>
    )
}
export default LandingPage;