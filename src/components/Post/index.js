import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const PostItem = styled.li`
  border-bottom: 1px dotted;
`;

const PostWrapper = styled.section`
  padding: 15px 0 15px 0;
`;

const PostTitle = styled.h1`
  padding-top: 10px;
  font-size: 28px;
`;

const PostDate = styled.time`
  font-size: 12px;
`;

const PostContent = styled.h2`
  font-size: 15px;
  padding-top: 15px;
`;

export default function Post({ slug, title, date, description }) {
  return (
    <PostItem>
      <Link to={`${slug}`}>
        <PostWrapper>
          <PostTitle>{title}</PostTitle>
          <PostDate>{date}</PostDate>

          <PostContent>{description}</PostContent>
        </PostWrapper>
      </Link>
    </PostItem>
  );
}
