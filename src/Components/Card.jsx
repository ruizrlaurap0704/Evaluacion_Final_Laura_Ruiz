import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { routes } from '../routes';
import { useGlobalStates } from './utils/global.context';

const Card = ({ id, name, username}) => {

  const {favs,setFav} = useGlobalStates()

  useEffect(() => {
    localStorage.setItem('favs',JSON.stringify(favs))
  },[])

  const addFav = ({ id, name, username})=>{   
     setFav([...favs,{ id, name, username}])
  }

  return (
    <div className="card">
        <img src="./images/doctor.jpg" alt='' width={200}/>
        <h1>{id}</h1>
        <h1>{name}</h1>
        <h2>{username}</h2>
        {<Link to={routes.detail}>Detail</Link>}
        <button onClick={() => addFav ({ id, name, username})} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
