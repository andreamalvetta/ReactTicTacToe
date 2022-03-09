import { css } from '@emotion/react';
import { variables } from '../../assets/styles/variables';

export const status = css`
  background: ${variables.status_bg_color};
  bottom: 5px;
  color: ${variables.content_color};
  left: 5px;
  padding-top: 55px;
  position: absolute;
  right: 5px;
  top: 5px;
  text-align: center;
  z-index: 11;

  @media (${variables.media_query}) {
    padding-top: 110px;
  }

  h3 {
    font-size: 30px;
    font-weight: 300;

    @media (${variables.media_query}) {
      font-size: 40px;
    }
  }

  a {
    background-color: ${variables.content_color};
    border-radius: 4px;
    color: ${variables.white};
    padding: 14px 45px;
    text-decoration: none;
    ${variables.transition('background-color', '0.2s')};

    &:hover {
      background-color: ${variables.content_color};
      cursor: pointer;
    }
  }
`;
