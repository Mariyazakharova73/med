import { observer } from 'mobx-react-lite';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Header, Sidebar } from './components';
import { routeConfig } from './routes';

const App = observer(() => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {Object.entries(routeConfig).map(([key, route]) => (
              <Route
                key={key}
                path={route.path}
                element={<main className="main">{route.element}</main>}
              />
            ))}
          </Routes>
        </Suspense>
      </div>
    </div>
  );
});

export default App;
