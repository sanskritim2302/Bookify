import React from 'react'
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import SearchForm from '../Search/Search';

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Embark on a Reading Journey</h2><br />
                {/* <h3 >Your Next Chapter Awaits in the World of Coding!</h3> */}
                <p className='header-text fs-18 fw-3'>Your Next Chapter Awaits in the World of Coding!🚀 <br/>Get Ready to Hack, Debug, and Create the Next Big Thing! Explore the World of Coding Enthusiasts and Ignite Your Innovation by Simply Searching for Your Next Read! </p>
            </div>
        </header>
    </div>
  )
}

export default Header
