import React from 'react';
import classNames from 'classnames';
import Status from './status';
import Screen from './screen';
import Control from './control';

const Board: React.FC = () => (
  <div className={classNames('board-container')}>
    <Status />
    <Screen />
    <Control />
  </div>
);

export default Board;
