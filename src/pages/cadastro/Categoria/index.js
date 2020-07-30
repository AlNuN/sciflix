import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TemplatePage from '../../../components/TemplatePage';
import CategoryWrapper from '../style';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CategoryRegistration() {
  const defaultValues = {
    name: '',
    description: '',
    color: '#141414',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(defaultValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(eventInfo) {
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://sciflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (response) => {
        const json = await response.json();
        setCategories([...json]);
      });
  }, []);

  return (
    <TemplatePage>
      <CategoryWrapper>
        <h1>
          Cadastro de Categoria:
          {' '}
          {values.name}
        </h1>

        <form
          onSubmit={function commit(i) {
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

          <Button noMedia>
            Cadastrar
          </Button>

        </form>

        {categories.length === 0 && (
          <div>
            Loading...
          </div>
        )}

        <ul>
          {categories.map((category) => (
            <li key={`${category.name}`}>
              {category.name}
            </li>
          ))}
        </ul>

        <Link to="/">
          Ir para home
        </Link>

      </CategoryWrapper>
    </TemplatePage>
  );
}

export default CategoryRegistration;
