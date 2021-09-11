import SwipeGap, { SwipeItem } from './components/SwipeGap';

import './App.css';

function App() {
	return (
		<>
			<SwipeGap>
				<SwipeItem customClass="grid-item--example">
					<img
						src="https://cdn.cloudflare.steamstatic.com/steam/apps/236430/header.jpg"
						alt="dar"
					/>
				</SwipeItem>
				<SwipeItem customClass="grid-item--example">
					<img
						src="https://cdn.cloudflare.steamstatic.com/steam/apps/236430/header.jpg"
						alt="dar"
					/>
				</SwipeItem>
				<SwipeItem customClass="grid-item--example">
					<img
						src="https://cdn.cloudflare.steamstatic.com/steam/apps/236430/header.jpg"
						alt="dar"
					/>
				</SwipeItem>
				<SwipeItem customClass="grid-item--example">
					<img
						src="https://cdn.cloudflare.steamstatic.com/steam/apps/236430/header.jpg"
						alt="dar"
					/>
				</SwipeItem>
			</SwipeGap>
		</>
	);
}

export default App;
