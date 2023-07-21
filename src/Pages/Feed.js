import { styled } from "styled-components";
import ProfileView from "../Components/ProfileView";
import Posts from "../Components/Posts";
import { PostsData } from "../DummyData";

const Container = styled.div`
  flex: 6;
  height: calc(100vh - 50px);
`;

const Feed = () => {
  return (
    <Container>
      <ProfileView />
      {PostsData.map((post) => (
        <Posts key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default Feed;
