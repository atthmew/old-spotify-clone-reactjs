import React from 'react';
import styled from 'styled-components';

import { useStateProvider } from '../../utils/StateProvider';
import axios from 'axios';

function Volume(props) {
	const [{ token }] = useStateProvider();

	async function setVolume(e) {
		try {
			await axios.put(
				`https://api.spotify.com/v1/me/player/volume`,
				{},
				{
					params: {
						volume_percent: parseInt(e.target.value),
					},
					headers: {
						Authorization: 'Bearer ' + token,
						'Content-Type': 'application/json',
					},
				}
			);
		} catch (error) {
			if (error.response) {
				console.error('Request failed with status:', error.response.status);
				console.error('Response data:', error.response.data);
			} else if (error.request) {
				console.error('Request made but no response received:', error.request);
			} else {
				console.error('Error during request setup:', error.message);
			}
		}
	}

	return (
		<Container>
			<input type="range" min={0} max={100} onMouseUp={(e) => setVolume(e)} />
		</Container>
	);
}

export default Volume;
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	input {
		width: 15rem;
		border-radius: 2rem;
		height: 0.5rem;
	}
`;
