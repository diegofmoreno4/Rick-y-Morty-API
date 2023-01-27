import { useState } from 'react'

import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

import { Routes, Route } from 'react-router-dom'
import About from './components/About/About.jsx'
import Detail from './components/Detail/Detail.jsx'

function App() {

  const [characters, setCharacters] = useState([])

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
    <Navbar onSearch={onSearch} />
    <Routes>
      <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/detail/:detailId' element={<Detail/>}/>
    </Routes>
    </div>
  )
}

export default App
