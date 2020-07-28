import React from 'react';
import TemplatePage from '../../../components/TemplatePage';
import { Link } from 'react-router-dom';
import CategoriaWrapper from '../style';

function CadastroCategoria(){
  return(
    <TemplatePage>
      <CategoriaWrapper>
        <h1>Cadastro de Categoria</h1>

        <form>

          <label>
            Nome da Categoria:
            <input
              type="text"
            />
          </label>

          <button>
            Cadastrar
          </button>
        </form>


        <Link to="/">
          Ir para home
        </Link>

      </CategoriaWrapper>
    </TemplatePage>
  )
}

export default CadastroCategoria;