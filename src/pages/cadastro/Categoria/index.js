import React, { useState } from 'react';
import TemplatePage from '../../../components/TemplatePage';
import { Link } from 'react-router-dom';
import CategoryWrapper from '../style';
import FormField from '../../../components/FormField';

function CategoryRegistration(){
  const defaultValues = {
    name: '',
    description: '',
    color: '#141414',
  }

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(defaultValues);

  function setValue(key, value){
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange (eventInfo) {
    setValue(
    eventInfo.target.getAttribute('name'),
    eventInfo.target.value
    );
  }

  return(
    <TemplatePage>
      <CategoryWrapper>
        <h1>Cadastro de Categoria: {values.name}</h1>

        <form
        style={{background: values.color}}
        onSubmit={function (i) {
          i.preventDefault();
          setCategories([...categories, values]);

          setValues(defaultValues);
        }}
        >

        <FormField 
          label="Nome da Categoria"
          value={values.name}
          onChange={handleChange}
          type="text"
          name="name"
        />

        <FormField 
          label="Descrição"
          value={values.description}
          onChange={handleChange}
          type="textarea"
          name="description"
        />

        <FormField 
          label="Cor"
          value={values.color}
          onChange={handleChange}
          type="color"
          name="color"
        />

          <button>
            Cadastrar
          </button>

        </form>

        <ul>
          {categories.map( (categoria, indice) => {
            return (
              <li key={` ${categoria}${indice}`}>
                {categoria.name}
              </li>
            )
          })}
        </ul>


        <Link to="/">
          Ir para home
        </Link>

      </CategoryWrapper>
    </TemplatePage>
  )
}

export default CategoryRegistration;