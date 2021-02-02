import React from 'react';
import classNames from 'classnames';
import Next from './next';
import Hold from './hold';
import Score from './score';

const Status: React.FC = () => (
  <div className={classNames('status-container')}>
    <Next />
    <Hold />
    <Score />
  </div>
);

export default Status;
