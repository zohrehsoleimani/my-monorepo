// packages/common-components/src/Button.js

import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
      {label}
    </button>
  );
};

export default Button;
