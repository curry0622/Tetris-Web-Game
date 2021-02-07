/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Status from './status';
import Screen from './screen';
import Control from './control';
import { defaultBlks } from './helper';

const Game: React.FC = () => {
  // state of key
  const [keyName, setKeyName] = useState<string>('');

  // key down event
  document.addEventListener('keydown', (e) => {
    setKeyName(e.key.toString());
  });

  // key down event
  document.addEventListener('keyup', () => {
    setKeyName('');
  });

  // blocks to display
  const [blks, setBlks] = useState<number[][]>(defaultBlks);

  // function to determine blocks
  const handleBlksChange = () => {
    setBlks((prev) => {
      const tmpBlks = [...prev];
      return tmpBlks;
    });
  };

  // trigger handleBlksChange each interval
  useEffect(() => {
    setInterval(handleBlksChange, 500);
  }, []);

  return (
    <main className={classNames('game-container')}>
      <div className={classNames('board-container')}>
        <Status />
        <Screen blks={blks} />
        <Control keyName={keyName} setKeyName={setKeyName} />
      </div>
    </main>
  );
};

export default Game;
