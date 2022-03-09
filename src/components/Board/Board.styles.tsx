import { css } from '@emotion/react';
import { variables } from '../../assets/styles/variables';

export const game = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const board = css`
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  overflow: hidden;
  margin: 50px auto 30px auto;
  position: relative;
  width: 300px;

  @media (${variables.media_query}) {
    height: 450px;
    width: 450px;
  }

  .square {
    background-color: ${variables.square_bg_color};
    border-radius: 10px;
    cursor: pointer;
    color: ${variables.square_color};
    height: 90px;
    margin: 5px;
    width: 90px;
    position: relative;
    ${variables.transition('background-color', '0.3s')};

    @media (${variables.media_query}) {
      height: 140px;
      width: 140px;
    }
  }

  &.player-1 .square:hover {
    background-color: ${variables.player1_color_normal};
  }

  &.player-2 .square:hover {
    background-color: ${variables.player2_color_normal};
  }

  .square {
    &.player-1,
    &.selected.player-1 {
      background-color: ${variables.player1_color_active};
    }

    &.player-2,
    &.selected.player-2 {
      background-color: ${variables.player2_color_active};
    }

    &:hover:after {
      opacity: 0.4;
    }

    &:after {
      left: 0;
      font-family: ${variables.icon_font};
      font-size: 45px;
      margin-top: -22.5px;
      opacity: 0;
      position: absolute;
      text-align: center;
      text-shadow: ${variables.square_text_shadow};
      top: 50%;
      width: 100%;

      @media (${variables.media_query}) {
        font-size: 60px;
        margin-top: -30px;
      }
    }
  }

  &.player-1 .square:after,
  .square.selected.player-1:after {
    content: ${variables.player1_icon};
  }

  &.player-2 .square:after,
  .square.selected.player-2:after {
    content: ${variables.player2_icon};
  }

  .square.selected {
    &.player-1:after,
    &.player-2:after {
      opacity: 1;
    }
  }
`;
