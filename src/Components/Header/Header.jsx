import React, { useState } from 'react';
import bannerImg from '../../assets/img/Rectangle-1.jpg'
import Banner from './Banner';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
    const [dynamicBgImg, setDynamicBgImg] = useState()
    return (
        <header style={{ backgroundImage: `url(${dynamicBgImg || bannerImg})`}} className=' bg-cover bg-center bg-no-repeat min-h-screen bg-slate-700 bg-blend-overlay'>
            <Nav></Nav>
            <Banner setDynamicImg={setDynamicBgImg}></Banner>
            {/* <Outlet></Outlet> */}
        </header>
    );
};

export default Header;