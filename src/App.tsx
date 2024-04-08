import { FC, Fragment } from 'react';
import './App.css';
import { AllNews } from './components/AllNews/AllNews';

export const App: FC = () => {
  return (
    <Fragment>
      <AllNews />
    </Fragment>
  );
};
