import styled from 'styled-components';

const Table = styled.table`
  border: 2px solid var(--primary);
  line-height: 24px;
  width: 90%;
  margin: 15px 0 10px 0;
  border-collapse: separate;
  border-spacing: 0px;

  th{
    border-right: 2px solid var(--primary);
    border-bottom: 2px solid var(--primary);
    font-size: 18px;
  } 

  td{
    border: 1px solid black;
    padding: 5px;
    color: var(--grayLight);
  }

  th:last-child, td:last-child{
    border-right:none;
  }

  td:first-child{
    border-left: none;
  }

  tr:last-child>td {
    border-bottom: none;
  }

  td.button{
    text-align: center;
  }

  @media (max-width: 800px) {
   display: none;
  }

`;

export default Table;
