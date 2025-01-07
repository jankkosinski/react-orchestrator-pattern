import React from 'react';
import { createRoot } from 'react-dom/client';
import { MicroFE } from '../src/app';

console.log(
  '%cLooks like we are in development mode!',
  'color: orange; font-size: large',
);

const root = createRoot(document.getElementById('root')!);
root.render(<MicroFE />);
