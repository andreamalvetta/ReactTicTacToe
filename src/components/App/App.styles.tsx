import { css } from '@emotion/react';
import { variables } from '../../assets/styles/variables';

export const app = css`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,300,700');

  body {
    color: ${variables.content_color};
    font-family: ${variables.font};
    margin: 0;
    text-align: center;
  }
`;
