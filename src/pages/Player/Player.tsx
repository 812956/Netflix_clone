import React from 'react'
import './player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

interface ApiDatatype {
  name:string;
  key:string;
  published_at:string;
  type:string;
}

function Player() {

  const [apiData,setApiData] = useState<ApiDatatype | null>(null)
  const {id} = useParams()
  const navigate = useNavigate()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDM2NmZiMmU5NDI1NTZhZTgxNjkwOTBkYmEzNDVjNiIsIm5iZiI6MTcyOTY1NjkzNi41MDcyMTMsInN1YiI6IjYwYjNlOTYzYzc0MGQ5MDAyYjI1OTM0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cypqwi535RrrfiClkQcu6FX2-JKZ2N1d3uYg2sg5RCY'
    }
  };

  useEffect(() => {

    try {
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));

    } catch (error) {

    }

  }, [])


  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={()=> navigate(-1)} alt="" />
      <iframe width='90%' height='90%'
        src={`https://www.youtube.com/embed/${apiData?.key}`}
        title='trailer'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData?.published_at.slice(0,10)}</p>
        <p>{apiData?.name}</p>
        <p>{apiData?.type}</p>
      </div>
    </div>
  )
}

export default Player
