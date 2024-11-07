import {Dispatch, ReactNode, SetStateAction} from 'react';
import {z} from 'zod';

export interface NavigationType {
  name: string;
  icon: string;
  view: string;
  _id: string;
}

export interface NavigationContextType {
  navigationData: Array<NavigationType>;
  setNavigationData: Dispatch<SetStateAction<Array<NavigationType>>>;
}

export interface NavigationContextProviderProps {
  children: ReactNode;
}

export const NavigationObjectSchema = z.object({
  name: z.string(),
  icon: z.string(),
  view: z.string(),
  _id: z.string(),
});

export const NavigationSchema = z.array(NavigationObjectSchema);
