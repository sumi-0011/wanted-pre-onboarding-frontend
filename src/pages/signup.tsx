import { type ChangeEvent, useState, useMemo } from 'react';
import { Input, Button, VStack, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { signUpAPI } from '../apis/auth';
import { validEmail, validPassword } from '../utils/valid';

function SignUp(): JSX.Element {
  const navigate = useNavigate();

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
    const { data, status } = await signUpAPI(email, password);
    console.log('data: ', data);
    if (status === 201) {
      alert('회원가입에 성공하셨습니다. 로그인 화면으로 이동합니다.');
      navigate('/signin');
    }
  };

  return (
    <VStack gap="3">
      <Heading size="md">회원가입</Heading>
      <Input
        type="email"
        data-testid="email-input"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="이메일을 입력해주세요"
      />
      <Input
        type="password"
        data-testid="password-input"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="비밀번호를 입력해주세요"
      />

      <Button
        colorScheme="teal"
        w="full"
        type="submit"
        data-testid="signup-button"
        onClick={onSubmit}
        isDisabled={isButtonDisable}
      >
        회원가입
      </Button>
    </VStack>
  );
}

export default SignUp;
