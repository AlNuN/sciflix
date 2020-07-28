import React from 'react';
import styled from 'styled-components'
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background: var(--grayDark);
  flex: 1;
  color: var(--white);

  margin-top: var(--bodyMarginTopPc);

  @media(max-width: 800px){
    margin-top: var(--bodyMarginTopCel);
  }
`

function TemplatePage({ children }) {
  return (
    <>
    <Menu />
      <Main>
      {children}
      </Main>
    <Footer />
    </>
  );
}

export default TemplatePage;