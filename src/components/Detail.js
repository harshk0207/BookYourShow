import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const Detail = () => {
    const {index} = useParams();
    const navigate = useNavigate();
    const [show,setShow]=useState(null);
    const getShow=async ()=>{
      let url="https://api.tvmaze.com/search/shows?q=all";
      let data=await fetch(url);
      let parsedData=await data.json();
      await setShow(parsedData[index]);
    //   console.log(parsedData);
    };
  
    useEffect(()=>{
      getShow();
    },[]);
    // console.log(index);
    return (
        <>
        {show?<div className="card mb-3 mt-5" style={{width: '70%',margin:'auto'}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src={show.show.image?show.show.image.original:'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{show.show.name}</h5>
                {/* <p className="card-text">{show.show.summary}</p> */}
                <p
                  className='card-text'
                  dangerouslySetInnerHTML={{ __html: show.show.summary }}
                />
                <p><strong>Time -</strong> {show.show.schedule.time}</p>
                <p>
                <strong>Days - </strong>
                {show.show.schedule.days?show.show.schedule.days.map((day,index)=>{
                return <>{day}</>
                }):''}
                </p>
                <div className='mt-auto'>
                    <div className='d-grid gap-2'>
                        <button
                        className='btn btn-success mx-2 my-2'
                        onClick={() => navigate(`/form/${index}`)}
                        >
                        Book
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>:''}
        </>
    )
}

export default Detail