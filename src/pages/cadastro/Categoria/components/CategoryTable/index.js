import React from 'react';
import Table from './style';

function CategoryTable({ category }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Editar</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        {category.map((oneCategory) => (
          <tr key={oneCategory.title}>
            <td>{oneCategory.title}</td>
            <td>{oneCategory.description}</td>
            <td className="button">Editar</td>
            <td className="button">Remover</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CategoryTable;
