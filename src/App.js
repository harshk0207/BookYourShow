import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./components/Main";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Bookings from "./components/Bookings";

function App() {
  if(localStorage.getItem('myShows')==null){
    const myShows = [];
    localStorage.setItem('myShows', JSON.stringify(myShows));
  }
//   window.onbeforeunload = function() {
//     localStorage.clear();
//  }
  return (
    <Router>
      <Routes>
        <Route path='' element={<Home/>}>
          <Route path='/' element={<Main/>}/>
          <Route
            path='detail/:index'
            element={<Detail/>}
          />
          <Route
            path='form/:index'
            element={<Form/>}
          />
           <Route
            path='bookings'
            element={<Bookings/>}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
