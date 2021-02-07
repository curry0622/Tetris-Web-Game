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
    setKeyName(e.key);
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    // handleBlksChange();
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
      const newBlks = prev
        .slice()
        .reverse()
        .map((row, i) => {
          const newRow = row.map((el, j) => {
            if (i < 15 && prev.slice().reverse()[i + 1][j] < 0) {
              return prev.slice().reverse()[i + 1][j];
            }
            if (el < 0) {
              return 0;
            }
            return el;
          });
          return [...newRow];
        });
      return newBlks.reverse();
    });
  };

  useEffect(() => {
    setInterval(() => handleBlksChange(), 1000);
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
