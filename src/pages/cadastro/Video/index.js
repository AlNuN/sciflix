import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TemplatePage from '../../../components/TemplatePage';
import CategoriaWrapper from '../style';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const { handleChange, values } = useForm({
    title: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=9pBdSP9gzP0',
    category: 'Front End',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((sentCategories) => {
        setCategories(sentCategories);
      });
  }, []);

  // console.log(categories);

  return (
    <TemplatePage>
      <CategoriaWrapper>
        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={(event) => {
          event.preventDefault();

          const chosenCategory = categories.find((category) => {
            return category.title === values.category;
          });

          videosRepository.create({
            title: values.title,
            url: values.url,
            categoryId: chosenCategory.id,
          })
            .then(() => {
              console.log('Cadastro realizado com sucesso');
              history.push('/');
            });
        }}
        >

          <FormField
            label="Título do Vídeo"
            name="title"
            value={values.title}
            onChange={handleChange}
          />

          <FormField
            label="URL"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Categoria"
            name="category"
            value={values.category}
            onChange={handleChange}
            suggestions={categories.map((category) => category.title)}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </CategoriaWrapper>
    </TemplatePage>
  );
}

export default CadastroVideo;
