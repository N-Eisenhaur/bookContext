import uuid from 'uuid/v4';

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK'://takes current value of state etc 
      return [...state, {
        title: action.book.title, 
        author: action.book.author, 
        id: uuid()}//adds action id
      ]
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
      /*when we send an action we will send an id property of what we want to remove that action will only happen if 
      if the book id and action ids are not the same 
      */
    default:
      return state;
  }
} 