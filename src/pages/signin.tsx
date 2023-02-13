import { type ChangeEvent, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInAPI } from '../apis/auth';
import { validEmail, validPassword } from '../utils/valid';

function SignIn(): JSX.Element {
  const navigate = useNavigate();

  const [signInInputs, setSignInInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = signInInputs;

  const isButtonDisable = useMemo(
    () => !(validEmail(email) && validPassword(password)),
    [email, password],
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setSignInInputs({ ...signInInputs, [name]: value });
  };

  const onSubmit = async (): Promise<void> => {
    const { data, status } = await signInAPI(email, password);
    if (status === 200) {
      const { access_token } = data;
      localStorage.setItem('access_token', access_token);
      alert('로그인 성공');
      navigate('/todo');
    }
  };

  return (
    <div>
      <input
        name="email"
        value={email}
        data-testid="email-input"
        onChange={onChange}
      />
      <input
        name="password"
        value={password}
        data-testid="password-input"
        onChange={onChange}
      />
      <button
        type="submit"
        data-testid="signin-button"
        onClick={onSubmit}
        disabled={isButtonDisable}
      >
        로그인
      </button>
    </div>
  );
}
export default SignIn;
