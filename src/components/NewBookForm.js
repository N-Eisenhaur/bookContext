import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {/*dispatch is a function we call to dispatch an action to a reducer 
  so put what in the values in handlesubmit to bookreducer.js*/

  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', book: { title, author }});/*book takes to parameters { title, author }
    when adding dispatch to a function instead of variable add a  type of dispatch and the name of the case from your reducer you want to use
    */
    setTitle('');
    setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="book title" value={title}
        onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="author name" value={author}
        onChange={(e) => setAuthor(e.target.value)} required />
      <input type="submit" value="add book" />
    </form>
  );//e is event object so when form is changed do something
}
 
export default NewBookForm;