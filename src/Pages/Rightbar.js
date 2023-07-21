import { styled } from "styled-components";
import { Users } from "../DummyData";

const Container = styled.div`
  flex: 3;
  margin-top: 20px;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
  border: 1px solid black;
`;

const TestWrapper = styled.span`
  margin-top: 10px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;

const NameText = styled.b`
  justify-content: center;
  align-items: center;
`;

const ImageAd = styled.img`
  margin: 10px 0px;
  width: 300px;
  height: 150px;
  border-radius: 3%;
  /* object-fit: cover; */
`;

const TitleName = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const BottomWrapper = styled.div`
  margin-top: 10px;
`;

// const Ul = styled.div`
//   display: flex;
//   margin-left: 0px;
//   margin-top: 10px;
//   flex-direction: column;
//   /* flex-wrap: wrap; */
// `;

const Li = styled.div`
  /* list-style: none; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin: 5px;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  /* margin-left: -215px; */
`;

const ProfileName = styled.span`
  font-weight: bold;
  margin-left: 10px;
`;

const Indicator = styled.span`
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 25px;
`;

const AddressWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
`;

const Text = styled.span`
  font-weight: 900;
  color: gray;
  margin-right: 10px;
  /* display: flex; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const UserWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

const FriendImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
`;

const FriendName = styled.span``;

const Rightbar = () => {
  const HomeRightBar = () => {
    return (
      <>
        <TopWrapper>
          <Image src="/assets/images/gift.jpg" alt="giftImage" />
          <TestWrapper>
            <NameText>Vamsi</NameText> and <NameText>3 other friends</NameText>{" "}
            have a birthday today.
          </TestWrapper>
        </TopWrapper>
        <ImageAd src="/assets/images/p2.jpg" alt="" />
        <TitleName>Online Friends</TitleName>
        <BottomWrapper>
          {/* <Ul> */}
          {Users.map((user) => (
            <Li>
              <ProfileImage src={user.userImage} alt="" />
              <Indicator></Indicator>
              <ProfileName>{user.username}</ProfileName>
            </Li>
          ))}

          {/* </Ul> */}
        </BottomWrapper>
      </>
    );
  };

  const ProfilePageRightBar = () => {
    return (
      <>
        <Container>
          <div>
            <h4>User Information</h4>
            <AddressWrapper>
              <Text>City :</Text>
              <span>Vijayawada</span>
            </AddressWrapper>
            <AddressWrapper>
              <Text>From :</Text>
              <span>India</span>
            </AddressWrapper>
            <AddressWrapper>
              <Text>Relationship :</Text>
              <span>Single</span>
            </AddressWrapper>
            <Wrapper>
              <UserWrapper>
                <FriendImage src="/assets/images/p2.jpg" alt="image" />
                <FriendName>Naveen</FriendName>
              </UserWrapper>
              <UserWrapper>
                <FriendImage src="/assets/images/p1.jpg" alt="image" />
                <FriendName>Naveen</FriendName>
              </UserWrapper>
              <UserWrapper>
                <FriendImage src="/assets/images/p1.jpg" alt="image" />
                <FriendName>Naveen</FriendName>
              </UserWrapper>
              <UserWrapper>
                <FriendImage src="/assets/images/p1.jpg" alt="image" />
                <FriendName>Naveen</FriendName>
              </UserWrapper>
              <UserWrapper>
                <FriendImage src="/assets/images/p1.jpg" alt="image" />
                <FriendName>Naveen</FriendName>
              </UserWrapper>
              <UserWrapper>
                <FriendImage src="/assets/images/p1.jpg" alt="image" />
                <FriendName>Naveen</FriendName>
              </UserWrapper>
            </Wrapper>
          </div>
        </Container>
      </>
    );
  };
  return (
    <Container>
      <ProfilePageRightBar />
    </Container>
  );
};

export default Rightbar;
