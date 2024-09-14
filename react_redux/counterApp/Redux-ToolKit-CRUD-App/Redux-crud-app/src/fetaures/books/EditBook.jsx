import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateBook } from './booksSlice';

function EditBook() {

  const location = useLocation().state;

  const [id, setId] = useState(location.id);
  const [title, setTitle] = useState(location.title);
  const [author, setAuthor] = useState(location.author);


  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (e)=>{
    e.preventDefault();
    const book = {id, title, author};
    dispatch(updateBook(book));
    navigate("/show-books", {replace: true})
  }

  
  return (
    <div>
      <h1>Edit Book</h1>
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

        <button type='submit' className='btn'>Update Book</button>
      </form>
      </div>


    </div>
  )
}

export default EditBook
