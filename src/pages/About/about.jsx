import React from 'react';
import "./about.css";
import aboutImg from "../../images/about.jpg";

const about = () => {
  return (
    <section className='about'>
      <div className='container'>
        {/* <div className='section-title'>
          <h2>About</h2>
        </div> */}

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Bookify</h2>
            <p className='fs-17'>Welcome to Bookify, your premier destination for exploring a diverse collection of over 80 captivating titles across various genres. With our user-friendly search feature, discovering your next favorite read has never been easier. Simply type the book's name into our search bar, and instantly unlock a world of literary treasures.</p>
            <p className='fs-17'>But Bookify offers more than just book listings – delve deeper into the world of each publication by clicking on any title to access detailed book pages. From author names to publication years, find all the essential details in one convenient location. Let Bookify be your guide as you embark on a journey of discovery, learning, and literary adventure.</p>
            <p className='fs-17'>At Bookify, we believe that every book has a story to tell and every reader deserves a chance to explore new worlds and ideas. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about