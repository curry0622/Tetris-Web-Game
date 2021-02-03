import React from 'react';
import classNames from 'classnames';

const Directions: React.FC = () => (
  <div className={classNames('control-directions-container')}>
    <div className={classNames('control-directions-top-container')}>
      <button
        type="button"
        className={classNames(
          'control-directions-button',
          'control-directions-up',
        )}
      >
        &#8593;
      </button>
    </div>
    <div className={classNames('control-directions-bottom-container')}>
      <button
        type="button"
        className={classNames(
          'control-directions-button',
          'control-directions-left',
        )}
      >
        &#8592;
      </button>
      <button
        type="button"
        className={classNames(
          'control-directions-button',
          'control-directions-down',
        )}
      >
        &#8595;
      </button>
      <button
        type="button"
        className={classNames(
          'control-directions-button',
          'control-directions-right',
        )}
      >
        &#8594;
      </button>
    </div>
  </div>
);

export default Directions;
