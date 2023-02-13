import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';

function Header(): JSX.Element {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const access_token = localStorage.getItem('access_token');

  const isAuthStatus = access_token !== null;

  useEffect(() => {
    if (!isAuthStatus) {
      if (pathname === '/todo') {
        alert('로그인이 필요합니다. 로그인 화면으로 이동합니다.');
        navigate('/signin');
      }
    } else {
      if (pathname === '/signin' || pathname === '/signup') {
        navigate('/todo');
      }
    }
  }, [pathname]);

  if (isAuthStatus) {
    return <></>;
  }
  return (
    <Flex p={5} gap={3}>
      <Link to="/signup">
        <Button colorScheme="teal">회원가입</Button>
      </Link>
      <Link to="/signin">
        <Button colorScheme="teal">로그인</Button>
      </Link>
    </Flex>
  );
}
export default Header;
