import React, { useEffect, useState } from 'react';
import './CharacterDetail.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CharacterDetail = () => {
    const { id } = useParams("id");
    const [character, setCharacter ] = useState({});

    useEffect(() =>{
    const getCharacater = async () => {
       const { data } = await axios("https://rickandmortyapi.com/api/character/"+ id)
        setCharacter(data);
    }
    getCharacater();
}, [])


  return <div className='character-container'>
      <h1>{character.name}</h1>
      <div>
          <img className='img' src={character.image} alt={character.name} />
      </div>
      <ul>
        <li>{character.status}</li>
        <li>{character.species}</li>
        <li>{character.gender}</li>
    </ul>

  </div>;
};

export default CharacterDetail;
