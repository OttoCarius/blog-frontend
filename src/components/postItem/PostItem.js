import React from "react";
import { AiFillEye, AiOutlineMessage } from "react-icons/ai";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import {
  PostItemContainer,
  ImgWrap,
  ImgWrapTWo,
  Img,
  UserWrap,
  UserName,
  Date,
  PostTitle,
  TextPost,
  IconWrap,
  ViewsBtn,
  CommentsBtn,
  NoPost,
} from "./PostItem.styled";

export default function PostItem({ post }) {
  if (!post) {
    return <NoPost>Загрузка...</NoPost>;
  }

  return (
    <Link to={`/${post._id}`}>
      <PostItemContainer>
        <ImgWrap>
          {post?.imgUrl ? <ImgWrap /> : <ImgWrapTWo />}
          {post?.imgUrl && (
            <Img
              src={`https://art-blog.onrender.com/${post.imgUrl}`}
              alt="img"
            />
          )}
        </ImgWrap>
        <UserWrap>
          <UserName>{post.username}</UserName>
          <Date>
            <Moment date={post.createdAt} format="D MMM YYYY" />
          </Date>
        </UserWrap>
        <PostTitle>{post.title}</PostTitle>
        <TextPost>{post.text}</TextPost>
        <IconWrap>
          <ViewsBtn>
            <AiFillEye />
            <span>{post.views}</span>
          </ViewsBtn>
          <CommentsBtn>
            <AiOutlineMessage />
            <span>{post.comments?.length || 0}</span>
          </CommentsBtn>
        </IconWrap>
      </PostItemContainer>
    </Link>
  );
}
