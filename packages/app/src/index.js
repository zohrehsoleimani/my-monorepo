// packages/app/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'common-components';

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Hello from Monorepo!</h1>
      <Button label="Click Me!" onClick={handleClick} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
