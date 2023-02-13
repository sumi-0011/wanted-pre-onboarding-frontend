import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header(): JSX.Element {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if (access_token === null) {
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

  return (
    <div>
      <ul>
        <Link to="/signup">
          <li>회원가입</li>
        </Link>
        <Link to="/signin">
          <li>로그인</li>
        </Link>
        <Link to="/todo">
          <li>TODO</li>
        </Link>
      </ul>
    </div>
  );
}
export default Header;
