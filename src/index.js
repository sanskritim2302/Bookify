import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import Home from './pages/Home/Home';
import About from './pages/About/about';
import BookPage from './components/BookPage/BookList';
import BookDetails from './components/BookDetails/BookDetails';
import SearchForm from './components/Search/Search';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="book" element={<BookPage />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="search" element={<SearchForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
