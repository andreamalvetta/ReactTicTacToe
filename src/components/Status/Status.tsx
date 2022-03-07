import React, { FC } from 'react';

interface StatusInterface {
  children: string;
}

const Status: FC<StatusInterface> = ({ children }) => (
  <div id="status">
    <h3>{children}</h3>
    <a href="./">Restart</a>
  </div>
);

export default Status;
