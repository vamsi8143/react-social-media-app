import {
  Description,
  Event,
  GroupAdd,
  GroupSharp,
  OndemandVideo,
  Restore,
  RssFeed,
  SportsEsports,
  Store,
} from "@material-ui/icons";
import { styled } from "styled-components";
import "./Sidebar.css";
import { Users } from "../DummyData";

const Container = styled.div`
  flex: 2;
  /* background-color: rgba(242, 237, 240, 0.8); */
  height: calc(100vh-50px);
  position: sticky;
  top: 50px;
  overflow-y: scroll;

  ::-webkit-scroll {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #c61d1d;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(76, 0, 255);
  }
`;

const WrapperContainer = styled.ul`
  list-style: none;
  margin: 5px;
  padding: 0px;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.li`
  margin: 5px;
  position: relative;
  cursor: pointer;
`;

const Icons = styled.span``;

const Text = styled.span`
  margin-left: 10px;
  position: absolute;
  top: 7px;
`;

const Button = styled.button`
  width: 150px;
  padding: 5px;
  margin-left: 20px;
`;

const Image = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* object-fit: cover; */
`;

const Sidebar = () => {
  return (
    <Container>
      <WrapperContainer>
        <Wrapper>
          <Icons>
            <GroupAdd />
          </Icons>
          <Text>Friends</Text>
        </Wrapper>
        <Wrapper>
          <Icons>
            <GroupSharp />
          </Icons>
          <Text>Groups</Text>
        </Wrapper>
        <Wrapper>
          <Icons>
            <RssFeed />
          </Icons>
          <Text>Feed</Text>
        </Wrapper>
        <Wrapper>
          <Icons>
            <Store />
          </Icons>
          <Text>Marketplace</Text>
        </Wrapper>
        <Wrapper>
          <Icons>
            <OndemandVideo />
          </Icons>
          <Text>Videos On Watch</Text>
        </Wrapper>
        <Wrapper>
          <Icons>
            <Restore />
          </Icons>
          <Text>On this day</Text>
        </Wrapper>
        <Wrapper>
          <Icons>
            <Event />
          </Icons>
          <Text>Event</Text>
        </Wrapper>
        <Wrapper>
          <Icons>
            <Description />
          </Icons>
          <Text>Pages</Text>
        </Wrapper>
        <Wrapper>
          <Icons>
            <SportsEsports />
          </Icons>
          <Text>Gaming</Text>
        </Wrapper>
      </WrapperContainer>
      <Button>Show more</Button>
      <hr></hr>
      <WrapperContainer>
        {Users.map((user) => (
          <Wrapper>
            <Image src={user.userImage} alt="profileImage" />
            <Text>{user.username}</Text>
          </Wrapper>
        ))}
      </WrapperContainer>
    </Container>
  );
};

export default Sidebar;
