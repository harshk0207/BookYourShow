import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate();
  const onDelete=()=>{
    localStorage.clear();
    const myShows = [];
    localStorage.setItem('myShows', JSON.stringify(myShows));
  }
  return (
    <nav className="navbar" style={{backgroundColor:'#e3f2fd'}}>
        <div className="container-fluid">
            <Link className="navbar-brand" to='/' style={{fontFamily:"cursive"}}><i class="fa-solid fa-house mx-2"></i>Book Your Show </Link>
            <div className="d-flex">
            <button className="btn btn-danger mx-2" onClick={onDelete}>Clear All Bookings</button>
            <button className="btn btn-success" onClick={() => navigate(`/bookings`)}>My Bookings</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar