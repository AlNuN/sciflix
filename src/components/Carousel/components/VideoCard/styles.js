import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus{
    div{
      background-color: rgba(0,0,0,0.5);
      background-size: cover; 
      width: 100%;
      height: 100%;
      opacity: unset;
      position: absolute;
      bottom: 0;
      left:0;
      color: white;
      display: flex;
      align-items: flex-end;
    }

    h3{
      font-size: 18px;
      margin: 10px;
      display: inline;
    } 
  }

  h3{
    display: none;
  }


  @media (max-width: 800px) {
    div{
      background-color: rgba(0,0,0,0.5);
      background-size: cover; 
      width: 100%;
      height: 100%;
      opacity: unset;
      position: absolute;
      bottom: 0;
      left:0;
      color: white;
      display: flex;
      align-items: flex-end;
    }
    h3{
      font-size: 18px;
      margin: 10px;
      display: inline;
    } 
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
