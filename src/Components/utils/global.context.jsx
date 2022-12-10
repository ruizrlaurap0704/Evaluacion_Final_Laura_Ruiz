import axios from "axios";
import { createContext, useContext , useState, useEffect, useReducer} from "react";

const initialState = {theme: "light"}

const GlobalStates = createContext( );

const reducer = (state , action) => {
  switch(action.type){
    case 'dark': 
      return {...state,theme:action.payload}
    case 'light':
      return {...state, theme:action.payload}
    default:
      return state
  }
}

const Context = ({ children }) => {

  const [favs,setFavs] = useState([])

  const [state,dispach] = useReducer(reducer, initialState)

  const url = `https://jsonplaceholder.typicode.com/users`
  const [doctor, setDoctor] = useState([])
  useEffect ( () => {
    axios(url)
    .then(res => setDoctor(res.data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ ])

  return (
    <GlobalStates.Provider 
      value={{
        doctor,state,dispach,favs,setFavs
      }}
    >
      {children}
    </GlobalStates.Provider>
  );
};

export default Context

export const useGlobalStates = () => {
  return useContext(GlobalStates)
}
