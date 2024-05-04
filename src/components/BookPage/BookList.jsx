import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import Book from "../BookPage/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";
import axios from 'axios';
import { FaSearch } from "react-icons/fa";

const BookList = () => {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { loading, resultTitle } = useGlobalContext();

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get('https://softwium.com/api/books');
        const lists = response.data;
        setList(lists);
        setFilteredBooks(lists);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    getBooks();
  }, []);

  useEffect(() => {
    const filtered = list.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [list, searchTerm]);

  if (loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        {/* <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div> */}
        {/* Search bar */}
        <div className='search-container'>
          <form onSubmit={(e) => e.preventDefault()} className='search-form'>
            <div className='search-input-container'>
              <input
                type="text"
                className='search-input'
                placeholder="Search books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {/* Search icon */}
              <FaSearch className='search-icon' size={32} />
            </div>
          </form>
        </div>
        <div className='booklist-content grid'>
          {/* Render filtered books */}
          {filteredBooks.map((item, index) => (
            <Book key={index} book={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookList;





// import React, { useEffect, useState } from 'react';
// import { useGlobalContext } from '../../context';
// import Book from "../BookPage/Book";
// import Loading from "../Loader/Loader";
// import coverImg from "../../images/cover_not_found.jpg";
// import "./BookList.css";
// import axios from 'axios';
// //https://covers.openlibrary.org/b/id/240727-S.jpg

// const BookList = () => {
//   const [list,setlist] = useState ([])

  
//   useEffect(() => {
//     const getBooks = async () => {
//       try {
//         const response = await axios.get('https://softwium.com/api/books');
//         const lists = response.data;
//         console.log(lists);
//         setlist(lists)
//       } catch (error) {
//         console.error('Error fetching books:', error);
//       }
//     };

//     getBooks(); // Call the function to fetch books when the component mounts
//   }, []); // Empty dependency array means this effect runs only once when the component mounts

//   const {books, loading, resultTitle} = useGlobalContext();
//   const booksWithCovers = books.map((singleBook) => {
//     return {
//       ...singleBook,
//       // removing /works/ to get only id
//       id: (singleBook.id).replace("/works/", ""),
//       cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
//     }
//   });

//   if(loading) return <Loading />;

//   return (
//     <section className='booklist'>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>{resultTitle}</h2>
//         </div>
//         <div className='booklist-content grid'>
//           {
//             list.slice(0, 30).map((item, index) => {
//               return (
//                 <Book key = {index} {...item} />
//               )
//             })
//           }
//         </div>
//       </div>
//     </section>
//   )
// }

// export default BookList