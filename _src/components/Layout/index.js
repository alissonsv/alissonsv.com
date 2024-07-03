import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlobalStyle from '../../styles/global';
import Sidebar from '../Sidebar';

const Content = styled.main`
  max-width: 80rem;
  margin: 0 auto 0 auto;
  padding: 24px;

  * {
    color: #adbac7;
  }

  @media screen and (max-width: 1170px) {
    padding-top: 140px;
  }

  @media not screen and (max-width: 1170px) {
    padding-left: 274px;
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Sidebar />
    <Content>{children}</Content>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
