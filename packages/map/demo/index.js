import React from 'react';
import ReactDOM from 'react-dom';
import { TMCMap } from '../src/index';

function App () {
  return React.createElement(TMCMap);
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
