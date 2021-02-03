import React, { useState } from 'react';
import classNames from 'classnames';
import Directions from './directions';
import Hold from './hold';
import Drop from './drop';

const Control: React.FC = () => {
  // button class name
  const [keyName, setKeyName] = useState<string>('');

  // keyName down event
  document.addEventListener('keydown', (e) => {
    setKeyName(e.key.toString());
  });

  // keyName down event
  document.addEventListener('keyup', () => {
    setKeyName('');
  });

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
