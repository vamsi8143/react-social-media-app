import { Chat, Home, Notifications, Person, Search } from "@material-ui/icons";
import { styled } from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;
  display: flex;
  height: 50px;
  width: 100%;
  background-color: rgba(11, 112, 236, 0.8);
  color: white;
  justify-content: center;
  align-items: center;
  z-index: 999;
  /* overflow: hidden; */
`;

const HomeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Titile = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: bold;
  margin-left: 10px;
`;

const SearchBar = styled.div`
  flex: 4;
  display: flex;
  width: 100%;
  background-color: white;
  align-items: center;
  border-radius: 15px;
`;

const SearchIcon = styled.span`
  color: gray;
  margin-top: 5px;
  margin-left: 10px;
`;

const Input = styled.input`
  width: 90%;
  height: 20px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const WrapperContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-top: 10px;
`;

const Icons = styled.span`
  position: relative;
  color: black;
  cursor: pointer;
`;

const IconBadge = styled.span`
  position: absolute;
  top: 10px;
  margin-left: -10px;
  border-radius: 50%;
  background-color: white;
  color: red;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

const Homepage = styled.div`
  cursor: pointer;
`;

const TimeLine = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* object-fit: cover; */
`;

const Navbar = () => {
  return (
    <Container>
      <HomeIcon>
        <Home />
        <Titile>E-BOOK</Titile>
      </HomeIcon>

      <SearchBar>
        <SearchIcon>
          <Search style={{ width: "17px" }} />
        </SearchIcon>
        <Input placeholder="Search for friends, posts and ......." />
      </SearchBar>

      <WrapperContainer>
        <Homepage>Homepage</Homepage>
        <TimeLine>TimeLine</TimeLine>
        <Wrapper>
          <Icons>
            <Person />
          </Icons>
          <IconBadge>1</IconBadge>
          <Icons>
            <Chat />
          </Icons>
          <IconBadge>1</IconBadge>
          <Icons>
            <Notifications />
          </Icons>
          <IconBadge>1</IconBadge>
        </Wrapper>

        <Image src="/assets/images/p8.jpg" alt="pic" />
      </WrapperContainer>
    </Container>
  );
};

export default Navbar;
