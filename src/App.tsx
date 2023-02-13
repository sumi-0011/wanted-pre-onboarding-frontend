import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Todo from './pages/todo';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
