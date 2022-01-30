import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Gallery from '../Gallery/Gallery';
import Pagination from '../Pagination/Pagination';
import './Characters.scss';


export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacaters = async(newPage=1) =>{
    const res = await axios("https://rickandmortyapi.com/api/character?page=" + newPage)
    setCharacters(res.data.results);
  }

  useEffect(() =>{
    getCharacaters();
  }, [])
  return (
  <div className='container-character'>
    <Pagination getData={getCharacaters}/>
  <div className='container-character-1'>

    <Gallery list={characters}/>
    </div>
    <Pagination getData={getCharacaters}/>
  </div>
)
};


