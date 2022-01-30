import './Location.scss';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Gallery from './GalleryLocation';
import Pagination from '../Pagination/Pagination';


export const Location = () => {
    const [locations, setLocations] = useState([]);
  
    const getLocations= async(newPage=1) =>{
      const res = await axios("https://rickandmortyapi.com/api/location?page=" + newPage)
      setLocations(res.data.results);
    }
  
    useEffect(() =>{
      getLocations();
    }, [])
    return(
        <div className='container-location'>
    <Pagination getData={getLocations}/>
  <div className='container-location-1'>

    <Gallery list={locations}/>
    </div>
    <Pagination getData={getLocations}/>
  </div>)
};