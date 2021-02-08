import React from 'react';
import classNames from 'classnames';

interface IProps {
  keyName: string;
  handleBlksMove(move: string): void;
}

// eslint-disable-next-line arrow-body-style
const Directions: React.FC<IProps> = ({ keyName, handleBlksMove }) => {
  return (
    <div className={classNames('control-directions-container')}>
      <div className={classNames('control-directions-top-container')}>
        <button
          type="button"
          className={classNames(
            'control-directions-button',
            `${
              keyName === 'ArrowUp' ? 'control-directions-button--active' : ''
            }`,
          )}
        >
          &#8593;
        </button>
      </div>
      <div className={classNames('control-directions-bottom-container')}>
        <button
          type="button"
          className={classNames(
            'control-directions-button',
            `${
              keyName === 'ArrowLeft' ? 'control-directions-button--active' : ''
            }`,
          )}
          onClick={() => handleBlksMove('left')}
        >
          &#8592;
        </button>
        <button
          type="button"
          className={classNames(
            'control-directions-button',
            `${
              keyName === 'ArrowDown' ? 'control-directions-button--active' : ''
            }`,
          )}
          onClick={() => handleBlksMove('down')}
        >
          &#8595;
        </button>
        <button
          type="button"
          className={classNames(
            'control-directions-button',
            `${
              keyName === 'ArrowRight'
                ? 'control-directions-button--active'
                : ''
            }`,
          )}
          onClick={() => handleBlksMove('right')}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Directions;
