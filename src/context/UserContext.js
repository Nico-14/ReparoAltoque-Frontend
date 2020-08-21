import { createContext, useReducer, useContext, useEffect } from 'react';
import { onAuthStateChanged } from '../firebase';
import { useRouter } from 'next/router';

const UserContext = createContext();
const UserDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'CHANGE_DISPLAY_NAME':
      return { ...state, displayName: action.payload };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(reducer, { isLoading: true });
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((newUser) => {
      //Detectar cambios en firebase.auth
      if (newUser) {
        fetch(process.env.NEXT_PUBLIC_API_URL + '/User/index/' + newUser.uid)
          .then((res) => res.json())
          .then((res) => {
            if (!res?.user && Math.floor(Date.now() / 1000) - newUser.creationTime > 3600) {
              //Borrar el usuario si no existe en el backend y pasó más de una hora desde la creación en firebase
            } else {
              dispatch({ type: 'SET_USER', payload: newUser });
              if (res?.user?.type_of_user === 'professional' && res?.user?.line_of_work_id === 1) {
                router.push('/elegir-rubro');
              }
            }
          });
      } else dispatch({ type: 'SET_USER', payload: null });
    });
    return () => unsubscribe(); //Limpiar evento
  }, [dispatch]);
  /*
  useEffect(() => {
    const handleRouteChangeStart = (url) => {
      console.log(url);
    };
    Router.events.on('routeChangeStart', handleRouteChangeStart);
    return () => Router.events.off('routeChangeStart', handleRouteChangeStart);
  }, [user]);
*/
  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </UserDispatchContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export const useDispatchUser = () => useContext(UserDispatchContext);
