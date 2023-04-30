import React from 'react';
import Nav from '../Header/Nav';
import { Outlet } from 'react-router-dom';

const LayoutOne = () => {
    return (
        <>
            <Nav></Nav>   
            <Outlet></Outlet>
        </>
    );
};

export default LayoutOne;