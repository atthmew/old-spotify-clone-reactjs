import { reducerCases } from './Constants';

export const initialState = {
	token: null,
	playlists: [],
	userInfo: null,
	selectedPlaylistId: '2E6vAIGycJq6Oj8qixDEpa',
	selectedPlaylist: null,
	currentlyPlaying: null,
	playerState: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		// you can see here na SET_TOKEN yung action.type natin, which is makikita mo dun sa dispatch sa App.js, ang type natin dun is SET_TOKEN. and nag algay tayo ng isa pang property which is yung token, then dito makikita natin na nireturn natin yon.
		case reducerCases.SET_TOKEN: {
			return {
				...state,
				token: action.token,
			};
		}

		case reducerCases.SET_PLAYLISTS: {
			return {
				...state,
				playlists: action.playlists,
			};
		}

		case reducerCases.SET_USER: {
			return {
				...state,
				userInfo: action.userInfo,
			};
		}

		case reducerCases.SET_PLAYLIST: {
			return {
				...state,
				selectedPlaylist: action.selectedPlaylist,
			};
		}

		case reducerCases.SET_PLAYING: {
			return {
				...state,
				currentlyPlaying: action.currentlyPlaying,
			};
		}

		case reducerCases.SET_PLAYER_STATE: {
			return {
				...state,
				playerState: action.playerState,
			};
		}

		case reducerCases.SET_PLAYLIST_ID: {
			return {
				...state,
				selectedPlaylistId: action.selectedPlaylistId,
			};
		}

		default:
			return state;
	}
};

export default reducer;
