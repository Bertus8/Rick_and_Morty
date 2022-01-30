import React from 'react';
import './GalleryLocation.scss';

export default function Gallery({list})
{
    return(<div className='container-gallery'>
    {list.map(item => <div key={item.id}>
    <div className='container-text-1'> 
    <h3>{item.name}</h3>
    <p>{item.type}</p>
    <p>{item.dimension}</p>
    </div>
    </div>)}
    </div>)
    }
