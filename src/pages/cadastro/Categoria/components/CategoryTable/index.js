import React, { useState } from 'react';
import { Table, TableButton as Button, Input } from './style';
import resources from '../../../../../repositories/categories';

function CategoryTable({ serverCategories }) {
  const [categories, setCategories] = useState(serverCategories);

  function handleChange(e, id) {
    const newArray = [...categories];
    newArray[id - 1][e.target.name] = e.target.value;
    setCategories(newArray);
  }

  function edit(category) {
    resources.modify(category);
  }

  return (
    <Table key="table">
      <thead key="head">
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Editar</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody key="body">
        {categories.map((category) => (
          <tr key={`Row_${category.id}`}>
            <td width="150px" key={`titlee_${category.id}`}>
              <Input
                value={category.title}
                onChange={(e) => handleChange(e, category.id)}
                name="title"
                key={`title_${category.id}`}
              />
            </td>
            <td key={`descriptioon_${category.id}`}>
              <Input
                value={category.description}
                onChange={(e) => handleChange(e, category.id)}
                name="description"
                key={`description_${category.id}`}
              />
            </td>
            <td className="button"><Button onMouseUp={() => edit(category)}>Editar</Button></td>
            <td className="button"><Button>Remover</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CategoryTable;
