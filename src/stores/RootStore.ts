import React, { createContext, useContext } from 'react';
import { AuthStore } from './AuthStore';

export class RootStore {
  auth: AuthStore;

  constructor() {
    this.auth = new AuthStore();
  }
}

export const rootStore = new RootStore();

const StoreContext = createContext<RootStore>(rootStore);

export const StoreProvider = ({ children }: { children: React.ReactNode }) =>
  React.createElement(StoreContext.Provider, { value: rootStore }, children);

export const useStore = () => useContext(StoreContext);
