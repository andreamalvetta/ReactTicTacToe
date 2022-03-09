/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import * as styles from './Status.styles';

interface StatusInterface {
  children: string;
}

const Status: FC<StatusInterface> = ({ children }) => (
  <div css={styles.status}>
    <h3>{children}</h3>
    <a href="./">Restart</a>
  </div>
);

export default Status;
