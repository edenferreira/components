import React from 'react';

const InputText = ({
    onChange
}) => (
    <input type='text' onChange={({target}) => onChange(target.value)} />
);

InputText._props = {
  onChange: 'callback',
}

export default InputText;