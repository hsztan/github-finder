import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { SWRConfig } from 'swr';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <SWRConfig
    value={{
      fetcher: (...args) => {
        return fetch(...args).then((res) => res.json());
      },
      suspense: true,
    }}
  >
    <App />
  </SWRConfig>
);

// BEFORE
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
