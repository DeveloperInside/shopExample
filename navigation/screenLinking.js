import Cart from '../screens/Cart';
import Details from '../screens/Details';
import Favorites from '../screens/Favorites';
import Products from '../screens/Products';
import Profile from '../screens/Profile';

const screens = {
  Products: {
    name: 'Products',
    component: Products,
  },
  Favorites: {
    name: 'Favorites',
    component: Favorites,
  },
  Cart: {
    name: 'Cart',
    component: Cart,
  },
  Profile: {
    name: 'Profile',
    component: Profile,
  },
  Details: {
    name: 'Details',
    component: Details,
  },
};

export default screens;
