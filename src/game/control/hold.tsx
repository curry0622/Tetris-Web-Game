import React from 'react';
import classNames from 'classnames';

const Hold: React.FC = () => (
  <div className={classNames('control-hold-container')}>
    <button type="button" className={classNames('control-hold-button')}>
      H O L D
    </button>
  </div>
);

export default Hold;
