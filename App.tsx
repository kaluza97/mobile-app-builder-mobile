import React from 'react';
import BottomTabNavigator from './src/components/Navigation/BottomTabNavigation';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faHeart,
  faUser,
  faHome,
  faSearch,
  faAdd,
  faEdit,
  faCamera,
  faShop,
  faMessage,
  faBell,
  faBasketShopping,
  faArchive,
  faStar,
  faX,
  faWallet,
  faEraser,
} from '@fortawesome/free-solid-svg-icons';
import {NavigationContextProvider} from './src/context/Navigation';

function App(): React.JSX.Element {
  library.add(
    faHeart,
    faUser,
    faHome,
    faSearch,
    faAdd,
    faEdit,
    faCamera,
    faShop,
    faMessage,
    faBell,
    faBasketShopping,
    faArchive,
    faStar,
    faX,
    faWallet,
    faEraser,
  );

  return (
    <NavigationContextProvider>
      <BottomTabNavigator />
    </NavigationContextProvider>
  );
}

export default App;
