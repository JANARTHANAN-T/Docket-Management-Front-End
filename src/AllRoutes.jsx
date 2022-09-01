import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './screen/Home/Home'
import Document from './screen/Document/Document'
import AddDocs from './screen/AddDocs/AddDocs'

const AllRoutes = () => {
    return ( 
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/docs/:id' element={<Document />}/>
          <Route path='/adddocs' element={<AddDocs />}/>
      </Routes>
    )
  }
  
  export default AllRoutes