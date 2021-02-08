/* eslint-disable no-alert */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
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

  // should generate new blocks or not
  const [shouldGen, setShouldGen] = useState<boolean>(true);

  // game over or not
  const [gameOver, setGameOver] = useState<boolean>(false);

  // function to generate random blocks
  const genNewTet = () => {
    const tetType = ['I', 'J', 'L', 'S', 'Z', 'T', 'O'];
    const newTet = tetType[Math.floor(Math.random() * tetType.length)];
    switch (newTet) {
      default:
        break;
      case 'I':
        setBlks((prev) => {
          const newBlks = prev.slice();
          for (let i = 3; i <= 6; i += 1) {
            if (prev[0][i] > 0) {
              setGameOver(true);
            }
            newBlks[0][i] = -5;
          }
          return newBlks;
        });
        break;
      case 'J':
        setBlks((prev) => {
          const newBlks = prev.slice();
          if (prev[0][4] > 0) {
            setGameOver(true);
          } else newBlks[0][4] = -2;
          for (let i = 4; i <= 6; i += 1) {
            if (prev[1][i] > 0) {
              setGameOver(true);
            } else newBlks[1][i] = -2;
          }
          return newBlks;
        });
        break;
      case 'L':
        setBlks((prev) => {
          const newBlks = prev.slice();
          if (prev[0][6] > 0) {
            setGameOver(true);
          } else newBlks[0][6] = -6;
          for (let i = 4; i <= 6; i += 1) {
            if (prev[1][i] > 0) {
              setGameOver(true);
            } else newBlks[1][i] = -6;
          }
          return newBlks;
        });
        break;
      case 'S':
        setBlks((prev) => {
          const newBlks = prev.slice();
          if (
            newBlks[0][5] > 0 ||
            newBlks[0][6] > 0 ||
            newBlks[1][4] > 0 ||
            newBlks[1][5] > 0
          ) {
            setGameOver(true);
          } else {
            newBlks[0][5] = -1;
            newBlks[0][6] = -1;
            newBlks[1][4] = -1;
            newBlks[1][5] = -1;
          }
          return newBlks;
        });
        break;
      case 'Z':
        setBlks((prev) => {
          const newBlks = prev.slice();
          if (
            newBlks[0][4] > 0 ||
            newBlks[0][5] > 0 ||
            newBlks[1][5] > 0 ||
            newBlks[1][6] > 0
          ) {
            setGameOver(true);
          } else {
            newBlks[0][4] = -4;
            newBlks[0][5] = -4;
            newBlks[1][5] = -4;
            newBlks[1][6] = -4;
          }
          return newBlks;
        });
        break;
      case 'T':
        setBlks((prev) => {
          const newBlks = prev.slice();
          if (prev[0][5] > 0) {
            setGameOver(true);
          } else newBlks[0][5] = -7;
          for (let i = 4; i <= 6; i += 1) {
            if (prev[1][i] > 0) {
              setGameOver(true);
            } else newBlks[1][i] = -7;
          }
          return newBlks;
        });
        break;
      case 'O':
        setBlks((prev) => {
          const newBlks = prev.slice();
          if (
            newBlks[0][4] > 0 ||
            newBlks[0][5] > 0 ||
            newBlks[1][4] > 0 ||
            newBlks[1][5] > 0
          ) {
            setGameOver(true);
          } else {
            newBlks[0][4] = -3;
            newBlks[0][5] = -3;
            newBlks[1][4] = -3;
            newBlks[1][5] = -3;
          }
          return newBlks;
        });
        break;
    }
  };

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
                  setShouldGen(true);
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
                if (j < 10 && row[j + 1] < 0 && el <= 0) {
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
                if (
                  (j === 0 && el < 0) ||
                  (el > 0 && j < 10 && row.slice().reverse()[j + 1] < 0)
                ) {
                  collided = true;
                }
                if (!collided) {
                  if (j < 10 && row.slice().reverse()[j + 1] < 0) {
                    return row.slice().reverse()[j + 1];
                  }
                  if (el < 0) {
                    return 0;
                  }
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

  // if shouldGen is true, generate new tetrimino
  useEffect(() => {
    if (shouldGen) {
      genNewTet();
      setShouldGen(false);
    }
  }, [shouldGen]);

  // if game over, reload
  useEffect(() => {
    if (gameOver) {
      setGameOver(false);
      alert('Game Over');
      window.location.reload();
    }
  }, [gameOver]);

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
