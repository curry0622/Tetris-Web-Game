import React from 'react';
import classNames from 'classnames';
import Board from './board';

const Game: React.FC = () => (
  <main className={classNames('game-container')}>
    <Board />
  </main>
);

export default Game;
