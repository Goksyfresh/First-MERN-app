import { Box, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Createpage from './pages/CreatePage'


function App() {
  

  return (
    <>
   <Box minH={"100vh"}>
    <Navbar/> 

    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/create" element={<Createpage/>}/>
    </Routes>
   </Box>
    </>
  )
}

export default App
