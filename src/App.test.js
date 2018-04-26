import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Business from './Business';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Business />, div);
  ReactDOM.unmountComponentAtNode(div);
});
