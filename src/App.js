import { styled } from "styled-components";
// import HomePage from "./Pages/HomePage";
// import ProfilePage from "./Pages/ProfilePage";
import LoginPage from "./Pages/LoginPage";

const Container = styled.div`
  width: 100%;
`;
function App() {
  return (
    <Container>
      {/* <HomePage /> */}
      {/* <ProfilePage /> */}
      <LoginPage />
    </Container>
  );
}

export default App;
