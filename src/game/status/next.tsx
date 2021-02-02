import React from 'react';
import classNames from 'classnames';

const Next: React.FC = () => {
  const blksArr = [
    [0, 1, 0],
    [1, 1, 1],
  ];

  // show block
  const showBlks = blksArr.map((row) => (
    <div className={classNames('status-next-blocks-row')}>
      {row.map((i) =>
        i ? (
          <div className={classNames('status-next-blocks-filled')} />
        ) : (
          <div className={classNames('status-next-blocks-empty')} />
        ),
      )}
    </div>
  ));

  return (
    <div className={classNames('status-next')}>
      <div className={classNames('status-next-title')}>NEXT</div>
      <div className={classNames('status-next-blocks-container')}>
        {showBlks}
      </div>
    </div>
  );
};

export default Next;
