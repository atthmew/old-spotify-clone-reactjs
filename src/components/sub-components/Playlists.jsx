import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { reducerCases } from '../../utils/Constants';
import { useStateProvider } from '../../utils/StateProvider';

function Playlists(props) {
	const [{ token, playlists }, dispatch] = useStateProvider();

	useEffect(() => {
		const getPlaylistData = async () => {
			const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
				headers: {
					Authorization: 'Bearer ' + token,
					'Content-Type': 'application/json',
				},
			});

			const { items } = response.data;
			const playlists = items.map(({ name, id }) => {
				return { name, id };
			});

			dispatch({ type: reducerCases.SET_PLAYLISTS, playlists: playlists });
			console.log(playlists);
		};
		getPlaylistData();
	}, [token, dispatch]);

	const changeCurrentPlaylist = (selectedPlaylistId) => {
		dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId: selectedPlaylistId });
	};

	return (
		<Container>
			<ul>
				{playlists.map(({ name, id }) => {
					return (
						<li key={id} onClick={() => changeCurrentPlaylist(id)}>
							{name}
						</li>
					);
				})}
			</ul>
		</Container>
	);
}

export default Playlists;

const Container = styled.div`
	height: 100%;
	overflow: hidden;
	ul {
		height: 52vh;
		max-height: 100%;
		overflow: auto;
		&::-webkit-scrollbar {
			width: 0.7rem;
			&-thumb {
				background-color: rgba(255, 255, 255, 0.6);
			}
		}
	}
`;
