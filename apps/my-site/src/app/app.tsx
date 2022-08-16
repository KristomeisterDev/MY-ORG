import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { PageTitle } from '@my-org/ui-header';
import { ApiResponse, API_URL } from '@my-org/api-interface';
export function App() {

  const [apiResponse, setApiResponse] = useState<ApiResponse>({ message: 'Loading...' });
  useEffect( () => {fetch(API_URL).then( r => r.json()).then(setApiResponse);}, []);

  return (
    <>
      <NxWelcome title="my-site" />
      <div />

      <div className='app'>
        <header className='flex'>
            <img
            alt=''
            width='75'
            src='https://nx,dev/assets/images/nx-logo-white.svg'/>
            <PageTitle/>
            <h1>Welcome to my site!</h1>
        </header>
        <main>
          <h2>Resources &amp; Tools</h2>
          <p>Thenk you for using a showing some love for Nx.</p>
          <div className='flex github-star-container'>
            <a>href="https://github.com/nrwl/nx"</a>
          </div>
        </main>
      </div>

      <main>
        <p>
          {apiResponse.message}
        </p>
      </main>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
