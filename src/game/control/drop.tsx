/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import classNames from 'classnames';

interface IProps {
  keyName: string;
}

const Drop: React.FC<IProps> = ({ keyName }) => (
  <div className={classNames('control-drop-container')}>
    <button
      type="button"
      className={classNames(
        'control-drop-button',
        `${keyName === ' ' ? 'control-drop-button--active' : ''}`,
      )}
    >
      D R O P
    </button>
  </div>
);

export default Drop;
