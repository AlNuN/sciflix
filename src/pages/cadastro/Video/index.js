import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import styled from 'styled-components';
import TemplatePage from '../../../components/TemplatePage';
import CategoriaWrapper from '../style';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import categoriesRepository from '../../../repositories/categories';
import videosRepository from '../../../repositories/videos';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function getYouTubeThumb(videoURL) {
  return `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
}

function hasYouTube(string) {
  return /youtube/i.test(string);
}

const Small = styled.small`
  color: red;
`;

function CadastroVideo() {
  const defaultValues = {
    title: '',
    url: '',
    category: '',
    img: '',
  };
  const history = useHistory();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((sentCategories) => {
        setCategories(sentCategories);
      });
  }, []);

  function validation(inputs) {
    const errors = {};
    const categoriesTitle = categories.map((item) => item.title);
    if (!inputs.title) {
      errors.title = 'Campo obrigatório';
    }
    if (!inputs.url) {
      errors.url = 'Campo obrigatório';
    }
    if (!inputs.category) {
      errors.category = 'Campo obrigatório';
    } else if (!categoriesTitle.some((item) => item === inputs.category)) {
      errors.category = 'Categoria inválida';
    }

    return errors;
  }

  function checkErrors(inputs, { setSubmitting }) {
    setTimeout(() => {
      const chosenCategory = categories.find((category) => category.title === inputs.category);

      videosRepository.create({
        title: inputs.title,
        url: inputs.url,
        categoryId: chosenCategory.id,
        img: hasYouTube(inputs.url) ? getYouTubeThumb(inputs.url) : inputs.img,
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
      <CategoriaWrapper>
        <h1>Novo Item</h1>

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
                label="Título"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <Small>{errors.url && touched.url && errors.url}</Small>
              <FormField
                label="Url"
                name="url"
                value={values.url}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              { !hasYouTube(values.url)
                && (
                <>
                  <Small>{errors.img && touched.img && errors.img}</Small>
                  <FormField
                    label="Url da Imagem"
                    name="img"
                    value={values.img}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </>
                )}

              <Small>{errors.category && touched.category && errors.category}</Small>
              <FormField
                label="Categoria"
                name="category"
                value={values.category}
                onChange={handleChange}
                suggestions={categories.map((category) => category.title)}
                onBlur={handleBlur}
              />

              <Button noMedia type="submit" color="white" bg="primary">
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

        <Link className="Link" to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </CategoriaWrapper>
    </TemplatePage>
  );
}

export default CadastroVideo;
