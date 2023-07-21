import { MoreVert } from "@material-ui/icons";
import { styled } from "styled-components";
import { Users } from "../DummyData";
import { useState } from "react";

const Container = styled.div``;

const WrapperContainer = styled.div`
  width: 90%;
  /* height: 100px; */
  margin: 20px;
  /* -webkit-box-shadow: 1px 1px 10px -1px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 1px 1px 10px -1px rgba(0, 0, 0, 0.8);
  box-shadow: 1px 1px 10px -1px rgba(0, 0, 0, 0.8); */
  box-shadow: 3px 0px 20px 0px rgba(0, 0, 0, 0.1);
`;

const TopWrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50px;
  margin-top: 20px;
`;

const TextName = styled.span`
  /* justify-content: center; */
  margin-top: 20px;
  margin-left: 10px;
  /* margin-right: 20px; */
  font-weight: 700;
  font-size: 20px;
`;

const Date = styled.span`
  margin-top: 25px;
  margin-left: 20px;
  font-size: 13px;
  align-items: center;
  color: gray;
`;

const Icons = styled.div`
  margin-top: 30px;
  cursor: pointer;
`;

const CenterWrapper = styled.div`
  margin: 5px 5px 0px;
`;

const Text = styled.div`
  margin-bottom: 5px;
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const BottomWrapper = styled.div`
  margin-left: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const LikeImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-bottom: 5px;
  cursor: pointer;
`;

const CountLikes = styled.span`
  /* margin-top: 2px; */
  margin-left: 5px;
`;

const CommentText = styled.span`
  cursor: pointer;
  /* border-bottom: 1px dashed gray; */
  margin-top: 5px;
  margin-right: 10px;
`;

const Posts = ({ post }) => {
  const [like, setLike] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <Container>
      <WrapperContainer>
        <TopWrapper>
          <Wrapper>
            <Image
              src={Users.filter((user) => user.id === post.userId)[0].userImage}
              alt="profilepic"
            />
            <TextName>
              {Users.filter((user) => user.id === post.userId)[0].username}
            </TextName>
            <Date>{post.date}</Date>
          </Wrapper>

          <Icons>
            <MoreVert />
          </Icons>
        </TopWrapper>
        <CenterWrapper>
          <Text>{post.desc}</Text>
          <ImageContainer src={post.image} alt="Post Image" />
        </CenterWrapper>
        <BottomWrapper>
          <Wrapper>
            <LikeImage
              src="/assets/images/Like-Button-PNG.png"
              onClick={likeHandler}
              alt="like"
            />
            <LikeImage
              src="/assets/images/heart.jpg"
              onClick={likeHandler}
              alt="like"
            />
            <CountLikes>{like} people likes</CountLikes>
          </Wrapper>
          <CommentText>{post.comments}people comented on your post</CommentText>
        </BottomWrapper>
      </WrapperContainer>
    </Container>
  );
};

export default Posts;
