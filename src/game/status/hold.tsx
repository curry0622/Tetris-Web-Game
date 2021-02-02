import React from 'react';
import classNames from 'classnames';

const Hold: React.FC = () => {
  const blksArr = [
    [1, 1, 0],
    [0, 1, 1],
  ];

  // show block
  const showBlks = blksArr.map((row) => (
    <div className={classNames('status-hold-blocks-row')}>
      {row.map((i) =>
        i ? (
          <div className={classNames('status-hold-blocks-filled')} />
        ) : (
          <div className={classNames('status-hold-blocks-empty')} />
        ),
      )}
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
