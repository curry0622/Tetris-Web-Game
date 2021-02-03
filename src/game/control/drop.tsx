import React from 'react';
import classNames from 'classnames';

const Drop: React.FC = () => (
  <div className={classNames('control-drop-container')}>
    <button type="button" className={classNames('control-drop-button')}>
      D R O P
    </button>
  </div>
);

export default Drop;
