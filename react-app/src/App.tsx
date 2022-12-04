import { SwipeWrapper, SwipeItem } from './components/SwipeWrapper';

import './App.css';

function App() {
	return (
		<>
			<h2>Swipe 1</h2>
			<SwipeWrapper fluid gap={10} margin={20} customClass="wrapper" id="swipe1">
				<SwipeItem customClass="item">
					<img src="/b1.jpg" alt="dar" />
				</SwipeItem>
				<SwipeItem customClass="item">
					<img src="/b2.jpg" alt="dar" />
				</SwipeItem>
				<SwipeItem customClass="item">
					<img src="/b3.jpg" alt="dar" />
				</SwipeItem>
				<SwipeItem customClass="item">
					<img src="/b4.jpg" alt="dar" />
				</SwipeItem>
				<SwipeItem customClass="item">
					<img src="/b5.jpg" alt="dar" />
				</SwipeItem>
			</SwipeWrapper>

			<h2>Swipe 2</h2>
			<SwipeWrapper column={2} snap gap={0} margin={0} id="swipe2" hasDots>
				<SwipeItem customClass="item-div">
					<div>
						<h3>#1 Title Foo</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat magni
							accusantium quae ipsa rerum explicabo laborum, esse asperiores inventore!
						</p>
					</div>
				</SwipeItem>
				<SwipeItem customClass="item-div">
					<div>
						<h3>#2 Title Foo</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat magni
							accusantium quae ipsa rerum explicabo laborum, esse asperiores inventore!
						</p>
					</div>
				</SwipeItem>
				<SwipeItem customClass="item-div">
					<div>
						<h3>#3 Title Foo</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat magni
							accusantium quae ipsa rerum explicabo laborum, esse asperiores inventore!
						</p>
					</div>
				</SwipeItem>
				<SwipeItem customClass="item-div">
					<div>
						<h3>#4 Title Foo</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat magni
							accusantium quae ipsa rerum explicabo laborum, esse asperiores inventore!
						</p>
					</div>
				</SwipeItem>
				<SwipeItem customClass="item-div">
					<div>
						<h3>#5 Title Foo</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat magni
							accusantium quae ipsa rerum explicabo laborum, esse asperiores inventore!
						</p>
					</div>
				</SwipeItem>
			</SwipeWrapper>

			<h2>Swipe 3</h2>
			<SwipeWrapper fluid snap gap={10} margin={20} snapDirection="center" id="swipe3">
				<SwipeItem customClass="item-fluid">
					<div>
						<h3>#1 Title Foo</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat magni
							accusantium quae ipsa rerum explicabo laborum, esse asperiores inventore!
						</p>
					</div>
				</SwipeItem>
				<SwipeItem customClass="item-fluid">
					<div>
						<h3>#1 Title Foo</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat magni
							accusantium quae ipsa rerum explicabo laborum, esse asperiores inventore!
						</p>
					</div>
				</SwipeItem>
				<SwipeItem customClass="item-fluid">
					<div>
						<h3>#1 Title Foo</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio repellat magni
							accusantium quae ipsa rerum explicabo laborum, esse asperiores inventore!
						</p>
					</div>
				</SwipeItem>
			</SwipeWrapper>
		</>
	);
}

export default App;
