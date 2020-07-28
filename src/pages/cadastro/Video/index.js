import React from 'react';
import TemplatePage from '../../../components/TemplatePage';
import { Link } from 'react-router-dom';
import CategoriaWrapper from '../style';

function CadastroVideo(){
  return(
    <TemplatePage>
      <CategoriaWrapper>
        <h1>Cadastro de Vídeo</h1>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </CategoriaWrapper>
    </TemplatePage>
  )
}

export default CadastroVideo;