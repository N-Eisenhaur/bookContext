import React, { useContext } from 'react';
import BookDetails from './BookDetails';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (//if true add book list else empty
    <div className="book-list">
      <ul>
        {books.map(book => {//book prop here!!!
        /*
        book prop that I passed equal to individual books that is currently iterated
        
        */
          return ( <BookDetails book={book} key={book.id} /> );
        })}
      </ul>
    </div>
  ) : (//putting : then useing an opening bracket makes an else statement or not true statement

    <div className="empty">No books to read. Hello free time :).</div>
  );
}

export default BookList;