import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from './booksSlice';
import { Link } from 'react-router-dom';

function ViewBook() {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div>
      {books && books.length < 1 ? (
        <h1>There are no books available at this moment!</h1>
      ) : (
        <div className='BooksView'>
          <h2>List Of Books</h2>
          <div className='table-container'>
            <table className="styled-table">
              <thead>
                <tr className='table-row'>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {books && books.map((book) => {
                  const { id, title, author } = book;
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{title}</td>
                      <td>{author}</td>
                      <td className='action-btn'>
                        <Link to="/edit-book" state={{ id, title, author }}>
                          <button>Edit</button>
                        </Link>
                        <button className='Delete-btn' onClick={() => handleDelete(id)}>Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewBook;
