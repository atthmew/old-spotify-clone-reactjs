import React, { useEffect } from 'react';

import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';

import Login from './components/Login';
import Spotify from './components/Spotify';

function App(props) {
	// useStateProvider ay custom hook na ginawa natin para makuha yung mga data sa state easily without using props.
	const [{ token }, dispatch] = useStateProvider();
	useEffect(() => {
		const hash = window.location.hash;

		if (hash) {
			const token = hash.substring(1).split('&')[0].split('=')[1];
			// the dispatch is ang mag dedetermine kung ano ang gusto mong ilagay na data, which is yung sa type, then sa reducer.js makikita mo na gumamit tayo ng switch case to organize anong data ang pag lalagyan na binigay sa dispatch
			dispatch({ type: reducerCases.SET_TOKEN, token: token });
		}
	}, [token, dispatch]);
	return <div>{token ? <Spotify /> : <Login />}</div>;
}

export default App;
