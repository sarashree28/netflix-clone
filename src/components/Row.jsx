import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Row =({title,fetchUrl}) => {
    const [movies,setMovies]=useState([]);


    async function fetchData(){
        const res= await axios.get(fetchUrl);
        console.log(res);
        return res;
        // const data=await res.json;
    }

    useEffect(() =>{
        fetchData();
    },[]);

  return (
    <div>
        <h2>{title}</h2>
    </div>
  )
}

export default Row