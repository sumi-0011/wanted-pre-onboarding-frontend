import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignIn from './pages/signin';
import SignUp from './pages/signup';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/signup">
            <li>회원가입</li>
          </Link>
          <Link to="/signin">
            <li>로그인</li>
          </Link>
        </header>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
