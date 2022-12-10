import React from "react";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Card from '../Components/Card'

const Favs = () => {

  const favs = localStorage.getItem('favs')
  const parsedFavs = JSON.parse(favs)

  const [id,name,username] = parsedFavs

  return (
    <>
      <Navbar/>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        <Card id={id} name={name} username={username}/>
      </div>
      <Footer/>
    </>
  );
};

export default Favs;
