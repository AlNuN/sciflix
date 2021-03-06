import styled from 'styled-components';

const media = `
  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
  }
  `;

const Button = styled.button`
  color: ${(props) => (`var(--${props.color})`)};
  background-color: ${(props) => (`var(--${props.bg})`)};
  border: 1px solid ${(props) => `var(--${props.bg || 'white'})`};
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  ${(props) => (!props.noMedia && media)
}
`;

export default Button;
