/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import classNames from 'classnames';

interface IProps {
  keyName: string;
}

const Hold: React.FC<IProps> = ({ keyName }) => (
  <div className={classNames('control-hold-container')}>
    <button
      type="button"
      className={classNames(
        'control-hold-button',
        `${keyName === 'Shift' ? 'control-hold-button--active' : ''}`,
      )}
    >
      H O L D
    </button>
  </div>
);

export default Hold;
