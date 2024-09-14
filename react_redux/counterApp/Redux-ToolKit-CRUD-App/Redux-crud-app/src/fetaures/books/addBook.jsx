import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './booksSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [title, setTitle] = useState(""); 
  const [author, setAuthor] = useState(""); 


  const numberOfBooks = useSelector((state)=>state.booksReducer.books.length)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (e)=>{
    e.preventDefault();
    const book = {id:numberOfBooks + 1, title, author};
    dispatch(addBook(book));
    navigate("/show-books", {replace: true})
  }
  return (
    <div>
      <h1>Add Book</h1>
      <div className='form-containers'>
      <form onSubmit={handleSubmit} className='form-container'>
        <div className='form-field'>
            <label htmlFor="title">Title: </label> <br />
            <input type="text" name='title' id='title' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
        </div>

        <div className='form-field'>
            <label htmlFor="author">Author: </label> <br />
            <input type="text" name='author' id='author' value={author} onChange={(e)=>setAuthor(e.target.value)} required/>
        </div>

        <button type='submit' className='btn'>Add Book</button>
      </form>
      </div>
    </div>
  )
}

export default AddBook
