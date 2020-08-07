import styled from 'styled-components';

const CategoriaWrapper = styled.div`
  margin-left: 6%;
  margin-top: 50px;

  &>h1{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    margin-bottom: 35px;
    text-align: center;
  }

  .Link{
    display: inline-block;
    margin: 20px 0 20px 0;
    text-decoration: none;
    font-weight: 700;
  }

  .Link:hover{
    color: var(--primary);
  }

  .clear{ 
    margin-left: 10px;
  }
`;

export default CategoriaWrapper;
