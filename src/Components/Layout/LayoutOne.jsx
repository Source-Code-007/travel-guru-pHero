import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const LayoutOne = () => {
    return (
        <>
            <Header></Header>   
            <Outlet></Outlet>
        </>
    );
};

export default LayoutOne;