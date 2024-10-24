import { useState } from 'react'
import './TitelCards.css'

import { useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'

interface TitelProps {
    title?:string;
    category?:string;
}

interface MovieResult {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


function TitleCards({title,category}:TitelProps) {

  const cardRef = useRef<HTMLDivElement>(null)
  const [apiData,setapiData] = useState< MovieResult[]>([])
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDM2NmZiMmU5NDI1NTZhZTgxNjkwOTBkYmEzNDVjNiIsIm5iZiI6MTcyOTY1NjkzNi41MDcyMTMsInN1YiI6IjYwYjNlOTYzYzc0MGQ5MDAyYjI1OTM0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cypqwi535RrrfiClkQcu6FX2-JKZ2N1d3uYg2sg5RCY'
    }
  };
  
 
  useEffect(()=> {

    try {

      fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => {
        setapiData(res.results)
        console.log(apiData)
      })
      .catch(err => console.error(err));
     
      cardRef.current?.addEventListener('wheel',handleWheel)
      
    } catch (error) {
       console.log('error happening here')
    }

  },[])
  
  const handleWheel = (event:WheelEvent)=> {
     event.preventDefault()
     
     if(cardRef.current) {
        cardRef.current.scrollLeft += event.deltaY;
     }
  }

 
     
  return (
    <div className='title-cards'>
       <h2>{title? title : "Popular in Netflix"}</h2>
       <div className="card-list" ref={cardRef}>
          {apiData.map((card,index)=> {
            return <Link to={`/player/${card.id}`} className="card"  key={index}>
                 <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path as string} alt="" />
                 <p>{card.original_title}</p>
            </Link>
          })}
       </div>
    </div>
  )
}

export default TitleCards
