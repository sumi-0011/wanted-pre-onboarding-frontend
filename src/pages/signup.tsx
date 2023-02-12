import { type ChangeEvent, useState, useMemo } from 'react';
import { signUpAPI } from '../apis/auth';
import { validEmail, validPassword } from '../utils/valid';

function SignUp(): JSX.Element {
  const [signupInputs, setSignupInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = signupInputs;

  const isButtonDisable = useMemo(
    () => !(validEmail(email) && validPassword(password)),
    [email, password],
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setSignupInputs({ ...signupInputs, [name]: value });
  };

  const onSubmit = async (): Promise<void> => {
    const data = await signUpAPI(email, password);
    console.log('data: ', data);
  };

  return (
    <div>
      <input
        data-testid="email-input"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        data-testid="password-input"
        name="password"
        value={password}
        onChange={onChange}
      />

      <button
        type="submit"
        data-testid="signup-button"
        onClick={onSubmit}
        disabled={isButtonDisable}
      >
        회원가입
      </button>
    </div>
  );
}

export default SignUp;
