import { type ChangeEvent, useMemo, useState } from 'react';
import { Input, Button, HStack, VStack, Heading } from '@chakra-ui/react';
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
    <VStack gap="3">
      <Heading size="md">로그인</Heading>

      <Input
        name="email"
        value={email}
        data-testid="email-input"
        onChange={onChange}
        placeholder="이메일을 입력해주세요"
      />
      <Input
        name="password"
        value={password}
        data-testid="password-input"
        onChange={onChange}
        placeholder="비밀번호를 입력해주세요"
      />
      <Button
        colorScheme="teal"
        w="full"
        type="submit"
        data-testid="signin-button"
        onClick={onSubmit}
        isDisabled={isButtonDisable}
      >
        로그인
      </Button>
    </VStack>
  );
}
export default SignIn;
