import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { routers } from '../routes';

const AppRouter = () => {
  return (
    <Routes>
      {routers.map(({path, Component}) => (
        <Route key={path} path={path} element={<Component/>}/>
      ))}
    </Routes>
  );
};

export default AppRouter;