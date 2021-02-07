/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import React from 'react';
import classNames from 'classnames';

interface IProps {
  blks: number[][];
}

const Screen: React.FC<IProps> = ({ blks }) => {
  const showBlks = blks.map((row) => {
    return (
      <div className={classNames('screen-row')}>
        {row.map((i) => {
          switch (Math.abs(i)) {
            default:
              return (
                <div className={classNames('screen-block--empty')}>&#8226;</div>
              );
            case 0:
              return (
                <div className={classNames('screen-block--empty')}>&#8226;</div>
              );
            case 1:
              return (
                <div
                  className={classNames(
                    'screen-block--filled',
                    'screen-block--red',
                  )}
                >
                  &#8226;
                </div>
              );
            case 2:
              return (
                <div
                  className={classNames(
                    'screen-block--filled',
                    'screen-block--orange',
                  )}
                >
                  &#8226;
                </div>
              );
            case 3:
              return (
                <div
                  className={classNames(
                    'screen-block--filled',
                    'screen-block--yellow',
                  )}
                >
                  &#8226;
                </div>
              );
            case 4:
              return (
                <div
                  className={classNames(
                    'screen-block--filled',
                    'screen-block--green',
                  )}
                >
                  &#8226;
                </div>
              );
            case 5:
              return (
                <div
                  className={classNames(
                    'screen-block--filled',
                    'screen-block--blue',
                  )}
                >
                  &#8226;
                </div>
              );
            case 6:
              return (
                <div
                  className={classNames(
                    'screen-block--filled',
                    'screen-block--indigo',
                  )}
                >
                  &#8226;
                </div>
              );
            case 7:
              return (
                <div
                  className={classNames(
                    'screen-block--filled',
                    'screen-block--purple',
                  )}
                >
                  &#8226;
                </div>
              );
          }
        })}
      </div>
    );
  });

  return (
    <div className={classNames('screen-container')}>
      <div className={classNames('screen-blocks-container')}>{showBlks}</div>
    </div>
  );
};

export default Screen;
