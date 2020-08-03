import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TemplatePage from '../../../components/TemplatePage';
import CategoryWrapper from '../style';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import resources from '../../../repositories/categories';

function CategoryRegistration() {
  const defaultValues = {
    name: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(defaultValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    resources.getAll()
      .then((json) => setCategories([...json]));
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

            clearForm();
          }}
        >

          <FormField
            label="Título da Categoria"
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
            <li key={`${category.title}`}>
              {category.title}
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
