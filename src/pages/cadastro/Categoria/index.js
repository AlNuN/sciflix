import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import styled from 'styled-components';
import TemplatePage from '../../../components/TemplatePage';
import CategoryWrapper from '../style';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import resources from '../../../repositories/categories';
import Loading from '../../../components/Loading';
import CategoryTable from './components/CategoryTable';

const Small = styled.small`
  color: red;
`;

function CategoryRegistration() {
  const history = useHistory();
  const defaultValues = {
    title: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    resources.getAll()
      .then((json) => setCategories([...json]));
  }, []);

  function validation(inputs) {
    const errors = {};
    if (!inputs.title) {
      errors.title = 'Campo obrigatório';
    }
    if (!inputs.description) {
      errors.description = 'Campo obrigatório';
    }
    if (!inputs.color) {
      errors.description = 'Campo obrigatório';
    }

    return errors;
  }

  function checkErrors(inputs, { setSubmitting }) {
    setTimeout(() => {
      resources.create({
        title: inputs.title,
        color: inputs.color,
        description: inputs.description,
      })
        .then(() => {
          console.log('Cadastro realizado com sucesso');
          history.push('/');
        });

      setSubmitting(false);
    }, 400);
  }

  return (
    <TemplatePage>
      <CategoryWrapper>
        <h1>
          Nova Categoria
        </h1>

        <Formik
          initialValues={defaultValues}
          validate={validation}
          onSubmit={checkErrors}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            resetForm,
          }) => (
            <form onSubmit={handleSubmit}>

              <Small>{errors.title && touched.title && errors.title}</Small>
              <FormField
                label="Título da Categoria"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="title"
              />

              <Small>{errors.description && touched.description && errors.description}</Small>
              <FormField
                label="Descrição"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                type="textarea"
                name="description"
              />

              <Small>{errors.color && touched.color && errors.color}</Small>
              <FormField
                label="Cor"
                value={values.color}
                onChange={handleChange}
                onBlur={handleBlur}
                type="color"
                name="color"
              />

              <Button noMedia color="white" bg="primary">
                Salvar
              </Button>
              <Button
                noMedia
                color="white"
                bg="backEnd"
                className="clear"
                onMouseUp={resetForm}
              >
                Limpar
              </Button>

            </form>
          )}
        </Formik>

        {categories.length === 0
          ? (<Loading />)
          : (<CategoryTable serverCategories={categories} />)}

        <Link className="Link" to="/">
          Ir para home
        </Link>

      </CategoryWrapper>
    </TemplatePage>
  );
}

export default CategoryRegistration;
