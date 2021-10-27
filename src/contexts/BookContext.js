import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');//gets books from localstorage calls it localdata
    return localData ? JSON.parse(localData) : [];//if true there is data in localdata take that data as an inital value otherwise empty array
  });
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));//JSON.stringify(books) is the data we have
    /*  localStorage.setItem('books' mirrors the books reducer variable
    then turns the books into a string and everytime we update we set that data in local storage in the browser


    */


  }, [books]);//when books data changes run this hook
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;