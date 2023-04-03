import Cart from '../screens/Cart';
import Details from '../screens/Details';
import Favorites from '../screens/Favorites';
import Products from '../screens/Products';
import Profile from '../screens/Profile';
import TabNavigation from './stacks/Tab';

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

export const stacks = {
  Tab: {
    name: 'Tab',
    component: TabNavigation
  },
}

export default screens;
