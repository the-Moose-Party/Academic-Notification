import React from 'react';
import ReactDOMClient from 'react-dom/client';
import Selection from '../Pages/Selection.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOMClient.createRoot(div).render(<Selection />);
});