import { createContext, useState, useContext } from 'react';
import { onAuthStateChanged } from '../firebase';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged((newUser) => { //Detectar cambios en firebase.auth
      setTimeout(setUser, 600, newUser)
    })
    return () => unsubscribe() //Limpiar evento
  }, [setUser])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext);