import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Header/Nav';

const LayoutOne = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
        </>
    );
};

export default LayoutOne;