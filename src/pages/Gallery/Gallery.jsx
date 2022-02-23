import React from 'react';
import './Gallery.scss';
import { ProfileContext} from '../Context/ProfileContext'
import { useContext } from '/react/cjs/react.development';
import { Link } from 'react-router-dom';
import { generatePath } from 'react-router-dom';

export default function Gallery({list}){
    const {setProfile} = useContext(ProfileContext);
    return(<div className='container-gallery'>
    {list.map(item => <div key={item.id}>
    <Link to={generatePath("/characters/:id", { id: item.id })}>
    <img className='image' src={item.image} alt={item.name} />
    </Link>
    <div className='container-text'> 
    <h3>{item.name}</h3>
    <button onClick={() => setProfile(item)}>Mutar</button>

  
   
    </div>
    </div>)}
    </div>)
    }
