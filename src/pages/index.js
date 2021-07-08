import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Seo from '../components/seo';
import GlobalStyle from '../styles/global';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 100vh;
  width: 100vw;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 60%;
  width: 40%;
  padding: 50px;
  border-radius: 20px;

  background-color: #2f3640;
  font-weight: 700;
  font-size: 25px;

  * {
    color: #adbac7;
  }

  @media screen and (max-width: 1170px) {
    width: 60%;
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
  align-items: center;

  padding-top: 10px;
`;

const SocialLinks = styled.div`
  padding-top: 10px;
  font-size: 30px;
  a {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const BlogLink = styled(Link)`
  margin-top: auto;
`;

export default function IndexPage() {
  return (
    <Container>
      <Seo title="Home" />
      <GlobalStyle />

      <Main>
        <PhotoWrapper>
          <StaticImage
            src="../images/profile.jpg"
            alt="Alisson"
            width={150}
            quality={100}
          />
        </PhotoWrapper>

        <Social>
          <h1>Alisson Vargas</h1>

          <SocialLinks>
            <a href="https://github.com/alissonsv">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/alisson-vargas/">
              <FaLinkedin />
            </a>
          </SocialLinks>
        </Social>

        <BlogLink to="/blog">
          <h1>Acessar o Blog</h1>
        </BlogLink>
      </Main>
    </Container>
  );
}
