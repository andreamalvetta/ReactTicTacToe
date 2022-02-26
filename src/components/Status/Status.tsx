import React from 'react';

const Status = props => {
  return (
    <div id="status" className={props.message ? 'visible' : ''}>
      <h3>{props.message}</h3>
      <a href="./">Restart</a>
    </div>
  );
};

export default Status;
