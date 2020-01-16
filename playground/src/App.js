import React, { lazy, Suspense } from 'react';
import './App.css';
let Layout = lazy(() => import('./Components/Layout'));
class App extends React.Component {

  render() {
    return (
      <Suspense fallback={<div>Rendering...</div>}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <header >
            <Layout />
          </header>
        </div>
      </Suspense>
    );
  }
}

export default App;
