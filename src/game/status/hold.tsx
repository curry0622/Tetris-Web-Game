/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import classNames from 'classnames';

const Hold: React.FC = () => {
  const blksArr = [
    [1, 1, 0],
    [0, 1, 1],
  ];

  // show block
  const showBlks = blksArr.map((row, index) => (
    <div className={classNames('status-hold-blocks-row')}>
      {row.map((i) => (i ? <div>1</div> : <div>0</div>))}
    </div>
  ));

  return (
    <div className={classNames('status-hold')}>
      <div className={classNames('status-hold-title')}>HOLD</div>
      <div className={classNames('status-hold-blocks-container')}>
        {showBlks}
      </div>
    </div>
  );
};

export default Hold;
