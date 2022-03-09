import React, { FC } from 'react';
import Board from '../Board';
import { Global } from '@emotion/react';
import { app } from './App.styles';

const App: FC = () => (
  <>
    <Global styles={app} />
    <Board />
  </>
);

export default App;
