import React, { useState } from 'react';
import bannerImg from '../../assets/img/Rectangle-1.jpg'
import Banner from './Banner';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Booking from './Booking';

const Header = () => {
    const [dynamicBgImg, setDynamicBgImg] = useState()
    const [booking, setBooking] = useState(null)
    return (
        <header style={{ backgroundImage: `url(${dynamicBgImg || bannerImg})` }} className=' bg-cover bg-center bg-no-repeat bg-slate-700 bg-blend-overlay'>
            <Nav></Nav>
            {!booking ? <Banner setBooking={setBooking} setDynamicImg={setDynamicBgImg}></Banner> : <Booking booking={booking}></Booking>}
        </header>
    );
};

export default Header;