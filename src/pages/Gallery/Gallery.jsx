import React from 'react';
import './Gallery.scss';

export default function Gallery({list})
{
    return(<div className='container-gallery'>
    {list.map(item => <div key={item.id}>
    <img className='image' src={item.image} alt={item.name} />
    <div className='container-text'> 
    <h3>{item.name}</h3>
    </div>
    </div>)}
    </div>)
    }
