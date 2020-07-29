import React from 'react';

function FormField({value, onChange, type, name, label}){
  const Tag = `${type === 'textarea' ? 'textarea' : 'input'}`;
  return (
    <div>
      <label>
        {label}: 
        <Tag
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default FormField;