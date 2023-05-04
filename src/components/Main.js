import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const [allShows,setAllShows]=useState([]);
  const navigate = useNavigate();
  const getShows=async ()=>{
    let url="https://api.tvmaze.com/search/shows?q=all";
    let data=await fetch(url);
    let parsedData=await data.json();
    await setAllShows(parsedData);
    // console.log(parsedData);
  };

  useEffect(()=>{
    getShows();
  },[]);
  return (
    <div className="container" style={{display:'grid',gridTemplateColumns:'auto auto auto'}}>
    {allShows?allShows.map((item,index)=>{
        return (
          <div className="card" style={{width:'21rem', marginInline:"auto", marginTop:'5rem',textAlign:'center',alignItems:'center',alignContent:'center'}}>
              {item.show.rating.average?<h5><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                {item.show.rating.average} <i className="fa-solid fa-sm fa-star"></i>
              </span></h5>:''}
            <img src={item.show.image?item.show.image.original:"https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 style={{textAlign:"center"}}>{item.show.name}</h5>
              <p className="card-text">Language - {item.show.language}</p>
              <strong>Genre</strong>
              <p style={{display:'flex',marginTop:'0.5rem'}}>
                {item.show.genres?item.show.genres.map((genre,index)=>{
                  return <span className="badge text-bg-success mx-1">{genre}</span>
                }):''}
              </p>
              <p className="card-text">Status - {item.show.status}</p>
              <p className="card-text">Type - {item.show.type}</p>
            </div>
            <div className='mt-auto'>
              <div className='d-grid gap-2'>
                <a href={`http://localhost:3000/detail/${index}`} target='_blank' style={{width:'100%',textAlign:'center'}}>
                <button
                  className='btn btn-primary mx-2 my-2'
                  // onClick={() => navigate(`/detail/${index}`)}
                >
                  View Summary
                </button>
                </a>
              </div>
            </div>
          </div>
        )
      }):""}
  </div>
  )
}

export default Main