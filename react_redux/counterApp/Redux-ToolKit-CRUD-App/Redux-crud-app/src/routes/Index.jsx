import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import NavBar from '../layouts/NavBar'
import ViewBook from '../fetaures/books/ViewBook'
import AddBook from '../fetaures/books/addBook'
import EditBook from '../fetaures/books/EditBook'

export default function Index() {
  return <BrowserRouter>
  <NavBar/>
  <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='*' element={<Error/>}/>
     <Route path='/show-books' element={<ViewBook/>}/>
     <Route path='/add-book' element={<AddBook/>}/>
     <Route path='/edit-book' element={<EditBook/>}/>
  </Routes>
  </BrowserRouter>
}
