import { styled } from "styled-components";
import Feed from "./Feed";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;
const Container = styled.div`
  width: 100%;
  /* height: 100%; */
`;
const NavWrapper = styled.div`
  /* position: sticky;
  top: 0;
  margin-bottom: 10px;
  width: 100%;
  z-index: 1; */
  z-index: 999;
`;

const HomePage = () => {
  return (
    <Container>
      <NavWrapper>
        <Navbar />
      </NavWrapper>

      <Wrapper>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Wrapper>
    </Container>
  );
};

export default HomePage;
