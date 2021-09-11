import { SwipeWrapper, SwipeItem } from './components/SwipeWrapper';

import './App.css';

function App() {
	return (
		<>
			<SwipeWrapper>
				<SwipeItem>
					<img
						src="https://cdn.cloudflare.steamstatic.com/steam/apps/236430/header.jpg"
						alt="dar"
					/>
				</SwipeItem>
				<SwipeItem>
					<img
						src="https://cdn.cloudflare.steamstatic.com/steam/apps/236430/header.jpg"
						alt="dar"
					/>
				</SwipeItem>
				<SwipeItem>
					<img
						src="https://cdn.cloudflare.steamstatic.com/steam/apps/236430/header.jpg"
						alt="dar"
					/>
				</SwipeItem>
				<SwipeItem>
					<img
						src="https://cdn.cloudflare.steamstatic.com/steam/apps/236430/header.jpg"
						alt="dar"
					/>
				</SwipeItem>
			</SwipeWrapper>
		</>
	);
}

export default App;
