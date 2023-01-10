import React, { FC } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { useStyles } from './styles';
import { ERoutes } from './types/enums';

const App: FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Where in the world?</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={ERoutes.search} replace />} />
          {routes.map(({ component: Component, path }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
