import { type ChangeEvent, useMemo, useState } from 'react';
import { validEmail, validPassword } from '../utils/valid';

function SignIn(): JSX.Element {
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
