/* eslint-disable arrow-body-style */
import React from 'react';
import classNames from 'classnames';

const Screen: React.FC = () => {
  const showBlks = [...Array(10)].map(() => {
    return <div className={classNames('screen-block')} />;
  });

  return (
    <div className={classNames('screen-container')}>
      <div className={classNames('screen-row')}>{showBlks}</div>
    </div>
  );
};

export default Screen;
