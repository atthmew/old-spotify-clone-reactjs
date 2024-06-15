import { createContext, useContext, useReducer } from 'react';

// basically a context is a storage ng mga data na pwedeng gamitin ng mga components mo, in here gumawa tayo ng storage.
export const StateContext = createContext();

// bali dito naman, gagamitin natin to as a wrapper sa index.js para maging accessible yung data sa children ng App which is technically is globally or lahat ng components natin ay may access dito dahil parent nila ang App.js.
export const StateProvider = ({ children, initialState, reducer }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

// while in here, ginamit naman natin yung data sa storage natin na ginawa kanina(StateContext). bali tatawagin lang natin tong useStateProvider para makuha yung data na gusto natin.
export const useStateProvider = () => useContext(StateContext);
