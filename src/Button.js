import React from 'react';

const Button = ({
    onClick,
    children,
}) => <button onClick={(event) => onClick(event)}>{children}</button>;

Button._props = {
    onClick: 'function',
    children: 'children',
};

export default Button;