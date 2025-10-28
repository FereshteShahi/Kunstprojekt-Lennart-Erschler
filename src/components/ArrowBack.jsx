import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/arrowBack.css';

function ArrowBack() {

    const location = useLocation();

    if (location.pathname === '/')
        return null;


    return (

        <Link className='back-to-home main-container' to='/'><img className='arrow-back' src="/icons/pfeil-zurück.svg" alt="Arrow Icon" /></Link>

    )
}

export default ArrowBack