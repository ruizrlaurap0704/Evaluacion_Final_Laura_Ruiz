import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useState, useEffect } from "react";
import axios from 'axios';

const Detail = ({id}) => {

  const [detail, setDetail] = useState([])  

  const getDetail = () => {
    axios(`https://jsonplaceholder.typicode.com/users/:${id}`)
    .then(res => setDetail(res.data))
  }

  useEffect ( () => {
    getDetail()
  },[ ])

  return (
    <>
      <Navbar/>
      <h1>Detail Dentist id </h1>
      <div className="card">
        <img src="./images/doctor.jpg" alt='' width={200}/>
        <h1>{detail.name}</h1>
        <h1>{detail.email}</h1>
        <h1>{detail.phone}</h1>
        <h1>{detail.website}</h1>
      </div>
      <Footer/>
    </>
  )
}

export default Detail