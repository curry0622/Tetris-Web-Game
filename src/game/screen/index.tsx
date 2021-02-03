/* eslint-disable arrow-body-style */
import React from 'react';
import classNames from 'classnames';
import { blocks } from './blocks';

const Screen: React.FC = () => {
  const showBlks = blocks.map((row) => {
    return (
      <div className={classNames('screen-row')}>
        {row.map((i) => {
          return i ? (
            <div className={classNames('screen-block--filled')} />
          ) : (
            <div className={classNames('screen-block--empty')}>&#8226;</div>
          );
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
