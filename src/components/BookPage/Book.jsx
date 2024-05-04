import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";
import cover from '../../images/cover.jpg';
const Book = ({ book }) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={cover} alt="Book cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to={`/book/${book.id}`}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.authors[0]}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Page Count: </span>
          <span>{book.pageCount}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>ISBN: </span>
          <span>{book.isbn}</span>
        </div>
      </div>
    </div>
  )
}

export default Book;
