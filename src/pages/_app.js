import '../styles/scss/argon-design-system.scss';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCoffee,
  faStarHalf,
  faStar,
  faHeart,
  faUser,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { UserProvider } from '../context/UserContext';

library.add(fab, faCoffee, faStar, farStar, faStarHalf, faHeart, faUser, faSignOutAlt); //Añadir los íconos que vamos a usar globalmente

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
