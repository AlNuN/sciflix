import React from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json'
import TemplatePage from '../../components/TemplatePage';

function Home() {
  return (
    <TemplatePage>
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área da os termos HTML, CSS e Javascript..."}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel 
        category={dadosIniciais.categorias[1]}
      />
      <Carousel 
        category={dadosIniciais.categorias[2]}
      />
    </TemplatePage>
  );
}

export default Home;
