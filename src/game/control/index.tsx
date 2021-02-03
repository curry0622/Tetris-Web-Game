import React from 'react';
import classNames from 'classnames';
import Directions from './directions';
import Hold from './hold';
import Drop from './drop';

const Control: React.FC = () => (
  <div className={classNames('control-container')}>
    <Directions />
    <div className={classNames('control-right-container')}>
      <Hold />
      <Drop />
    </div>
  </div>
);

export default Control;
