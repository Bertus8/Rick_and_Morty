import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Gallery from '../Gallery/Gallery';
import Pagination from '../Pagination/Pagination';
import Seeker from '../Seeker/Seeker';

import './Characters.scss';


export const Characters = () => {
  const [texto, setTexto] = useState("");
  const [characters, setCharacters] = useState([]);

  const getCharacaters = async(newPage=1) =>{
    const res = await axios("https://rickandmortyapi.com/api/character?page=" + newPage)
    setCharacters(res.data.results);
  }

  useEffect(() =>{
    getCharacaters();
  }, [])

  const charFilter = characters.filter((character) =>
  character.name.toLowerCase().includes(texto.toLowerCase())
);
  return (
    
  <div className='container-character'>
        <Seeker texto={texto} setTexto={setTexto} />
    <Pagination getData={getCharacaters}/>
  <div className='container-character-1'>

    <Gallery list={charFilter}/>
    </div>
    <Pagination getData={getCharacaters}/>
  </div>
)
};


