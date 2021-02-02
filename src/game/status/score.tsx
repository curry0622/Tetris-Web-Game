import React from 'react';
import classNames from 'classnames';

const Score: React.FC = () => (
  <div className={classNames('status-score')}>
    <div className={classNames('status-score-title')}>score</div>
    <div className={classNames('status-score-value-container')}>
      <div className={classNames('status-score-value')}>152</div>
    </div>
  </div>
);

export default Score;
