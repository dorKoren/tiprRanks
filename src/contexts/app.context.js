import React, { createContext } from "react";
import { useImmerReducer } from "use-immer";
import appReducer from "reducers/app.reducers";

const initialState = {
  stocksData: null,

  stockName: {
    value: "",
    checkCount: 0,
  },

  submit: {
    count: 0,
  },
};

export const Context = createContext();
export const Dispatch = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appReducer, initialState);
  return (
    <Context.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </Context.Provider>
  );
};
