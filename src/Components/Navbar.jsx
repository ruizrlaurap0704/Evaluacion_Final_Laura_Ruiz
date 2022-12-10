import React from 'react'
import { routes } from '../routes'
import { Link } from 'react-router-dom'
import { useGlobalStates } from './utils/global.context'

const Navbar = () => {
  
  const {state,dispatch} = useGlobalStates()

  return (
    <nav className=' '>
      {<Link to={routes.home} >Home</Link>}
      {<Link to={routes.contact}>Contact</Link>}
      {<Link to={routes.favs}>Favorites</Link>}
      {state === 'light' ?     
      <button onClick = {()=> dispatch ({type:'dark', 
      payload: {
      font: 'white',
      background: 'black'
      } 
      })}>Change theme 🌙 </button>
      :
      <button onClick = {()=> dispatch ({type:'light', 
      payload: {
      font: 'black',
      background: 'white'
      } 
      })}>Change theme 🌙 </button>
    }
    </nav>
  )
}

export default Navbar