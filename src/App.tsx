import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Todo from './pages/todo';

function App(): JSX.Element {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Header />
          <Box px={5}>
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/todo" element={<Todo />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
