import { createContext, useReducer, useContext, useEffect } from 'react';
import { onAuthStateChanged } from '../firebase';

const UserContext = createContext();
const UserDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'CHANGE_DISPLAY_NAME':
      return { ...state, displayName: action.payload }
    default:
      return state;
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged((newUser) => { //Detectar cambios en firebase.auth
      setTimeout(dispatch, 600, { type: 'SET_USER', payload: newUser })
    })
    return () => unsubscribe() //Limpiar evento
  }, [dispatch])

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserContext.Provider value={state}>
        {children}
      </UserContext.Provider>
    </UserDispatchContext.Provider>
  )
}

export const useUser = () => useContext(UserContext);
export const useDispatchUser = () => useContext(UserDispatchContext)