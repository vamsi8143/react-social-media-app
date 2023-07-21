import { EmojiEmotions, Label, PermMedia, Room } from "@material-ui/icons";
import { styled } from "styled-components";

const Container = styled.div`
  width: 90%;
  /* height: 100px; */
  margin: 20px;
  /* -webkit-box-shadow: 1px 1px 10px -1px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 1px 1px 10px -1px rgba(0, 0, 0, 0.8); */
  /* box-shadow: 1px 1px 10px -1px rgba(0, 0, 0, 0.8); */
  box-shadow: 3px 0px 20px 0px rgba(0, 0, 0, 0.1);
`;

const WrapperContainer = styled.div`
  margin: 10px;
  display: flex;
`;

const TopWrapper = styled.div`
  display: flex;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 32px;
  width: 32px;
  margin-top: 20px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 20px;
  margin-top: 20px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Hr = styled.hr`
  margin: 5px;
`;

const Icons = styled.span`
  display: flex;
  margin: 15px 0px;
`;

const Text = styled.span`
  display: flex;
  margin-left: 2px;
  margin-right: 20px;
`;

const Button = styled.button`
  width: 80px;
  height: 30px;
  margin-left: 20px;
  margin-top: 10px;
  background-color: green;
  /* font-size: 15px; */
  /* font-weight: 500; */
`;

const ProfileView = () => {
  return (
    <Container>
      <TopWrapper>
        <Image src="/assets/images/p8.jpg" alt="Profilepic" />
        <Input placeholder="What's on your mind...." />
      </TopWrapper>
      <Hr />
      <WrapperContainer>
        <Wrapper>
          <Icons>
            <PermMedia htmlColor="yellow" />
          </Icons>
          <Text>Photos or Videos</Text>
        </Wrapper>
        <Wrapper>
          <Icons>
            <Label htmlColor="blue" />
          </Icons>
          <Text>Tag</Text>
        </Wrapper>
        <Wrapper>
          <Icons>
            <Room htmlColor="green" />
          </Icons>
          <Text>Location</Text>
        </Wrapper>
        <Wrapper>
          <Icons>
            <EmojiEmotions htmlColor="gold" />
          </Icons>
          <Text>Feelings..</Text>
        </Wrapper>
        <Button>share</Button>
      </WrapperContainer>
    </Container>
  );
};

export default ProfileView;
