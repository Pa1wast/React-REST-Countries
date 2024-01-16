import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { CountriesProvider } from './contexts/CountriesProvider';
import Home from './components/Home';
import Country from './components/Country';
import AppHeader from './components/AppHeader';

function App() {
	
	return (
		<CountriesProvider>
			<div className="h-screen overflow-hidden ">
				<AppHeader />
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/country/:id" element={<Country />} />
					</Routes>
				</Router>
			</div>
		</CountriesProvider>
	);
}

export default App;
