import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignUp from './pages/signup';

function App(): JSX.Element {
	return (
		<div className="App">
			<BrowserRouter>
				<header>
					<Link to="/signup">
						<li>회원가입</li>
					</Link>
				</header>
				<Routes>
					<Route path="/signup" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
