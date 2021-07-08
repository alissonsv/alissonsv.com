import * as React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const Container = styled.div`
  position: fixed;
  background-color: #2f3640;
  z-index: 300;

  * {
    color: #adbac7;
  }

  @media screen and (max-width: 1170px) {
    height: 116px;
    width: 100%;
  }

  @media not screen and (max-width: 1170px) {
    width: 250px;
    height: 100vh;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  @media screen and (max-width: 1170px) {
    flex-direction: row;
  }

  @media not screen and (max-width: 1170px) {
    padding-top: 50px;
  }
`;

const PhotoWrapper = styled.div`
  .gatsby-image-wrapper {
    border-radius: 50%;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;

  @media not screen and (max-width: 1170px) {
    padding-top: 10px;
    align-items: center;
  }

  @media screen and (max-width: 1170px) {
    padding-left: 10px;
  }
`;

const Name = styled.h1`
  font-size: 24px;
`;

const SocialLinks = styled.div`
  display: flex;
  font-size: 30px;

  * {
    margin: 5px 5px 0 5px;

    @media screen and (max-width: 1170px) {
      margin: 5px 5px 0 0;
    }
  }
`;

export default function Sidebar() {
  return (
    <Container>
      <Profile>
        <PhotoWrapper>
          <Link to="/">
            <StaticImage
              src="../../images/profile.jpg"
              alt="Alisson"
              width={100}
              quality={100}
            />
          </Link>
        </PhotoWrapper>
        <Social>
          <Link to="/">
            <Name>Alisson Vargas</Name>
          </Link>
          <SocialLinks>
            <a href="https://github.com/alissonsv">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/alisson-vargas/">
              <FaLinkedin />
            </a>
          </SocialLinks>
        </Social>
      </Profile>
    </Container>
  );
}
