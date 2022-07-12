import React from 'react';
import WorkingSince from './WorkingSince';
import Media from './Media';
import Causes from './Causes';
import NextEvent from './NextEvent';
import PerfectTeam from './PerfectTeam';
import HelpStart from './HelpStart';
import Blog from './Blog';
import BrandSlider from './BrandSlider';
import Footer1 from '../Footer/Footer1';
import CopyRight from '../Copyright/CopyRight';
import BigImage from './BigImage';
import Header from '../Header/Header';

function Home() {
    return (
        <div id='main'>
            <div id="d-help" className="d-relf-wrapper">
                <Header />
                <BigImage />
                <div className="main-contant-wrap">
                    <WorkingSince />
                    <Media />
                    <Causes />
                    <NextEvent />
                    <PerfectTeam />
                    <HelpStart />
                    <Blog />
                </div>
                <BrandSlider />
                <Footer1 />
                <CopyRight />
            </div>
        </div>
    );
}

export default Home;