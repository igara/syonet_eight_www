import { css } from '@emotion/react';
import { mediaQueryBreakpoints } from 'syonet_eight_design_system';

export const styles = {
  global: () => css`
    body {
      margin: 0;
      font-family: 'Noto Sans JP', sans-serif;
    }
  `,
  layout: () => css`
    padding: 8px;
    display: flex;
    flex-direction: column;
  `,
  content: () => css`
    display: flex;
    flex-direction: column;

    ${mediaQueryBreakpoints.small} {
      flex-direction: row;
    }
  `,
  main: () => css`
    width: 100%;
  `,
  profile: () => css`
    width: 100%;
    height: 740px;
    overflow-x: scroll;
    overflow-y: hidden;

    ${mediaQueryBreakpoints.small} {
      width: 140px;
      height: 640px;
      overflow-x: scroll;
      overflow-y: scroll;
      transition: width 1s ease-in-out;

      &:hover {
        width: 100%;
      }
    }
  `,
};
