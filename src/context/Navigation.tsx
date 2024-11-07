import React, {createContext, useState} from 'react';
import {
  NavigationContextProviderProps,
  NavigationContextType,
  NavigationSchema,
  NavigationType,
} from './Navigation.types';
import data from '../data/data.json';

const defaultNavigationData: Array<NavigationType> = [
  {name: '', icon: '', view: '', _id: ''},
];

export const NavigationContext = createContext<NavigationContextType>({
  navigationData: defaultNavigationData,
  setNavigationData: () => {},
});

const NavigationContextProvider = ({
  children,
}: NavigationContextProviderProps) => {
  const [navigationData, setNavigationData] = useState<Array<NavigationType>>(
    data && data.navigation
      ? NavigationSchema.parse(data.navigation)
      : defaultNavigationData,
  );

  return (
    <NavigationContext.Provider value={{navigationData, setNavigationData}}>
      {children}
    </NavigationContext.Provider>
  );
};

export {NavigationContextProvider};
