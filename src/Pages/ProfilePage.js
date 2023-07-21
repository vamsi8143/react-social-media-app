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
  flex: 3;
  z-index: 999;
`;

const ProfilePageWrapper = styled.div`
  display: flex;
  flex: 9;
  margin: 10px;
  flex-direction: column;
`;
const ProfileTopWrapper = styled.div`
  /* display: flex; */
`;

const ProfileBottomWrapper = styled.div`
  display: flex;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 300px;
  position: relative;
`;
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  border: 1px solid white;
  left: 140px;
  right: 0;
  margin: auto;
  top: 250px;
  /* object-fit: cover; */
  /* justify-content: center; */
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const ProfilePage = () => {
  return (
    <Container>
      <NavWrapper>
        <Navbar />
      </NavWrapper>

      <Wrapper>
        <Sidebar />
        <ProfilePageWrapper>
          <ProfileTopWrapper>
            <CoverImage src="/assets/images/p15.jpg" alt="cover Image" />
            <ProfileImage src="/assets/images/p8.jpg" alt="profile image" />
            <ProfileInfo>
              <h4>Kolli Karthik</h4>
              <span>Hi My Dear Friends</span>{" "}
            </ProfileInfo>
          </ProfileTopWrapper>
          <ProfileBottomWrapper>
            <Feed />
            <Rightbar />
          </ProfileBottomWrapper>
        </ProfilePageWrapper>
      </Wrapper>
    </Container>
  );
};

export default ProfilePage;
