import { styled } from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 400px;
  height: 230px;
  margin: 10px;
`;

const TextTiltle = styled.h1`
  color: blue;
`;

const Desc = styled.span`
  font-size: 20px;
`;

const Input = styled.input`
  margin: 10px;
  font-size: 20px;
  /* border: none; */
  &:focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
  margin: 10px;
  font-size: 20px;
  background-color: #1e90ff;
  cursor: pointer;
  border-radius: 5px;
`;

const Text = styled.a`
  /* margin: 10px; */
  margin-bottom: 10px;
  align-self: center;
  color: blue;
  cursor: pointer;
`;

const CreateButton = styled.button`
  background-color: green;
  width: 200px;
  height: 35px;
  font-size: 15px;
  align-self: center;
  cursor: pointer;
  border-radius: 5px;
`;

const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <TextTiltle>EBook</TextTiltle>
        <Desc>Connect the friends and the world around you on the ebook.</Desc>
      </Wrapper>
      <LoginWrapper>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <LoginButton>Login</LoginButton>
        <Text>forgot password?</Text>
        <CreateButton>Create Account</CreateButton>
      </LoginWrapper>
    </Container>
  );
};

export default LoginPage;
