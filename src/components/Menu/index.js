import React from 'react';
import Logo from '../../assets/img/Logo.png';
import {MenuWrapper, LogoImage} from './styles';
import Button from '../Button';

function Menu(){
  return(
    <MenuWrapper className="Menu">
      <a href="/">
        <LogoImage src={Logo} alt="Logo da Sciflix" />
      </a>

      <Button as="a" href="/" >
        Novo vídeo
      </Button>
    </MenuWrapper>
  )
}

export default Menu;