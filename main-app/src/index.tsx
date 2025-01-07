import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/styles.css';

if (process.env.NODE_ENV !== 'production') {
  console.log(
    '%cLooks like we are in development mode!',
    'color: orange; font-size: large',
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
