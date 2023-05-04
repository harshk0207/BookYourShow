import React, { useEffect,useState } from 'react'

const Bookings = () => {
    const [bookings,setBookings]=useState([]);
    const callData = async () => {
        const savedArray = await JSON.parse(localStorage.getItem('myShows'));
        // console.log(savedArray);
    };
    useEffect(() => {
        callData();
        setBookings(JSON.parse(localStorage.getItem('myShows')));
    },)
  return (
    <div style={{display:'block',overflowX:'auto'}}>
    {bookings&&bookings.length>0?<table
      className='table my-3 text-center'
      style={{ width: "80%", margin: "auto"}}
    >
      <thead className='table-dark'>
        <tr>
          <th scope='col'>S.No</th>
          <th scope='col'>Email</th>
          <th scope='col'>Show Name</th>
          <th scope='col'>Language</th>
          <th scope='col'>Price</th>
        </tr>
      </thead>
      <tbody>
        {bookings
          ? bookings.map((item, index) => {
              return (
                <tr>
                  <th scope='row'>{index + 1}</th>
                  <td>{item.email}</td>
                  <td>{item.showName}</td>
                  <td>{item.language}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })
          :''}
      </tbody>
    </table>:<h4 className='text-center my-5'>No Bookings Done!</h4>}
    </div>
  )
}

export default Bookings