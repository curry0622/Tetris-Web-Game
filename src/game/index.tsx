/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import Status from './status';
import Screen from './screen';
import Control from './control';
import { defaultBlks } from './helper';

const Game: React.FC = () => {
  // state of key
  const [keyName, setKeyName] = useState<string>('');

  // blocks to display
  const [blks, setBlks] = useState<number[][]>(defaultBlks);

  // function to control blocks movement
  const handleBlksMove = (type: string) => {
    let collided = false;
    setBlks((prev) => {
      let newBlks;
      switch (type) {
        default:
          return prev;
        case 'down':
          newBlks = prev
            .slice()
            .reverse()
            .map((row, i) => {
              const newRow = row.map((el, j) => {
                if (
                  (i < 15 && el > 0 && prev.slice().reverse()[i + 1][j] < 0) ||
                  (i === 0 && el < 0)
                ) {
                  collided = true;
                }
                if (!collided) {
                  if (
                    i < 15 &&
                    prev.slice().reverse()[i + 1][j] < 0 &&
                    el <= 0
                  ) {
                    return prev.slice().reverse()[i + 1][j];
                  }
                  if (el < 0) {
                    return 0;
                  }
                  return el;
                }
                return Math.abs(el);
              });
              return newRow;
            });
          return newBlks.reverse();
        case 'left':
          newBlks = prev.map((row) => {
            const newRow = row.map((el, j) => {
              if ((j === 0 && el < 0) || (el > 0 && j < 10 && row[j + 1] < 0)) {
                collided = true;
              }
              if (!collided) {
                if (j < 10 && row[j + 1] < 0 && el === 0) {
                  return row[j + 1];
                }
                if (el < 0) {
                  return 0;
                }
              }
              return el;
            });
            return newRow;
          });
          return newBlks;
        case 'right':
          newBlks = prev.map((row) => {
            const newRow = row
              .slice()
              .reverse()
              .map((el, j) => {
                if (j < 10 && row.slice().reverse()[j + 1] < 0) {
                  return row.slice().reverse()[j + 1];
                }
                if (el < 0) {
                  return 0;
                }
                return el;
              });
            return newRow.reverse();
          });
          return newBlks;
      }
    });
  };

  // function to handle key down
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    setKeyName(e.key);
    switch (e.key) {
      default:
        break;
      case 'ArrowLeft':
        handleBlksMove('left');
        break;
      case 'ArrowRight':
        handleBlksMove('right');
        break;
      case 'ArrowDown':
        handleBlksMove('down');
        break;
    }
  };

  // drop blocks each second
  useEffect(() => {
    setInterval(() => handleBlksMove('down'), 1000);
  }, []);

  return (
    <main
      className={classNames('game-container')}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => handleKeyDown(e)}
      onKeyUp={() => setKeyName('')}
    >
      <div className={classNames('board-container')}>
        <Status />
        <Screen blks={blks} />
        <Control
          keyName={keyName}
          setKeyName={setKeyName}
          handleBlksMove={handleBlksMove}
        />
      </div>
    </main>
  );
};

export default Game;
