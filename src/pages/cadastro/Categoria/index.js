import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TemplatePage from '../../../components/TemplatePage';
import CategoryWrapper from '../style';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import resources from '../../../repositories/categories';
import Loading from '../../../components/Loading';
import CategoryTable from './components/CategoryTable';

function CategoryRegistration() {
  const defaultValues = {
    title: '',
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
          {values.title}
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
            value={values.title}
            onChange={handleChange}
            type="text"
            name="title"
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

        {categories.length === 0
          ? (<Loading />)
          : (<CategoryTable category={categories} />)}

        <Link to="/">
          Ir para home
        </Link>

      </CategoryWrapper>
    </TemplatePage>
  );
}

export default CategoryRegistration;
