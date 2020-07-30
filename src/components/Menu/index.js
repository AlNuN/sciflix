import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png';
import {MenuWrapper, LogoImage} from './styles';
import Button from '../Button';

function Menu(){
  return(
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage src={Logo} alt="Logo da Sciflix" />
      </Link>

      <Button as={Link} to="/cadastro/video" primary>
        Novo vídeo
      </Button>
    </MenuWrapper>
  )
}

export default Menu;