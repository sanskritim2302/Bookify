import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import BookList from '../../components/BookPage/BookList';  

const Home = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Header />
      <Outlet />
      {isHomePage && <BookList />}
    </div>
  )
}

export default Home;
