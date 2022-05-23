import "./App.css";

import MainBlock from "./components/main-block/main-block.component";

const App = () => {
	return (
		<div className='App'>
			<header className='header'>
				<h1>THINGS TO DO</h1>
			</header>
			<MainBlock />
		</div>
	);
};

export default App;
