import React, { useState, useContext, useEffect, useCallback } from 'react';

const URL = "https://softwium.com/api/books";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}${encodeURIComponent(searchTerm)}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      const { docs } = data;

      if (docs) {
        const newBooks = docs.map((bookSingle) => {
          const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle ?? {};
          return {
            id: key,
            title: title,
            isbn: bookSingle.isbn || "", 
            pageCount: bookSingle.pageCount || 0, 
            authors: bookSingle.authors || [], 
            cover_id: cover_i,
          };
        });

        setBooks(newBooks);

        if (newBooks.length > 0) {
          setResultTitle("Your Search Result");
        }
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider value={{
      loading, books, setSearchTerm, resultTitle, setResultTitle,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
