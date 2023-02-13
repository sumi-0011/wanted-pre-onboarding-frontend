import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Box,
  ChakraProvider,
  defineStyleConfig,
  extendTheme,
} from '@chakra-ui/react';
import Header from './components/Header';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Todo from './pages/todo';
import Home from './pages/Home';

const tealTheme = defineStyleConfig({
  defaultProps: {
    colorScheme: 'teal',
  },
});

const theme = extendTheme({
  components: {
    Button: tealTheme,
    Checkbox: tealTheme,
  },
});

function App(): JSX.Element {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Box px={5} width="700px">
            <Routes>
              <Route path="/" element={<Home />} />
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
