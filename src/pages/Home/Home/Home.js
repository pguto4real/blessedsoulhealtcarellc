import React from 'react';
import HomeAboutArea from './HomeAboutArea/HomeAboutArea';
import HomeBlogs from './HomeBlogs/HomeBlogs';
import HomeCta from './HomeCta/HomeCta';
import HomeFact from './HomeFact/HomeFact';
import HomeFooter from './HomeFooter/HomeFooter';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';
import HomeOurTeam from './HomeOurTeam/HomeOurTeam';
import HomePricing from './HomePricing/HomePricing';
import HomeServices from './HomeServices/HomeServices';
import HomeTwoAbout from '../../HomeTwo/HomeTwoAbout/HomeTwoAbout';
import HomeTwoMissionArea from '../../HomeTwo/HomeTwoMissionArea/HomeTwoMissionArea';
import HomeVision from './HomeAboutArea/HomeVision';
import PortfolioSliderArea from '../../PortfolioSlider/PortfolioSliderArea/PortfolioSliderArea';

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeHeroSection/>
            <HomeAboutArea/>
            <HomeTwoAbout/>
            <HomeVision/>
            {/* <HomeTwoMissionArea/> */}
            
            <HomeServices/>
            {/* <HomeFact/> */}
            <HomeCta/>
            <HomeOurTeam/>
            {/* <PortfolioSliderArea/> */}
            {/* <HomePricing/> */}
            {/* <HomeBlogs/> */}
            <HomeFooter/>
        </>
    );
};

export default Home;