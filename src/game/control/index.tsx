import React from 'react';
import classNames from 'classnames';
import Directions from './directions';
import Hold from './hold';
import Drop from './drop';

interface IProps {
  keyName: string;
  setKeyName(keyName: string): void;
}

// eslint-disable-next-line arrow-body-style
const Control: React.FC<IProps> = ({ keyName }) => {
  return (
    <div className={classNames('control-container')}>
      <Directions keyName={keyName} />
      <div className={classNames('control-right-container')}>
        <Hold keyName={keyName} />
        <Drop keyName={keyName} />
      </div>
    </div>
  );
};

export default Control;
