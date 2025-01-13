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

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeHeroSection/>
            <HomeAboutArea/>
            <HomeTwoAbout/>
            {/* <HomeTwoMissionArea/> */}
            
            <HomeServices/>
            {/* <HomeFact/> */}
            <HomeCta/>
            <HomeOurTeam/>
            {/* <HomePricing/> */}
            {/* <HomeBlogs/> */}
            <HomeFooter/>
        </>
    );
};

export default Home;