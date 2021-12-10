import React from "react";
import Header from "./NavBar/Header"
import TopBanner from "./TopBanner/TopBanner"
import MainInfo from './MainInfo/MainInfo'
import FooterTop from './FooterTop/FooterTop'
import FooterBot from './FooterBot/FooterBot'
import './LandingPage.css'
function LandingPage() {
    return(
        <div>
            <Header />
            <TopBanner />
            <MainInfo />
            <FooterTop />
            <FooterBot />
        </div>
    )
}
export default LandingPage;