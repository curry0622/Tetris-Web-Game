/* eslint-disable arrow-body-style */
import React from 'react';
import classNames from 'classnames';

const Screen: React.FC = () => {
  const showBlks = [...Array(16)].map(() => {
    return (
      <div className={classNames('screen-row')}>
        {[...Array(10)].map(() => {
          return <div className={classNames('screen-block')} />;
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
