import { css } from '@emotion/react';
import { mediaQueryBreakpoints } from 'syonet_eight_design_system';

export const styles = {
  dialogContent: () => css`
    width: 80%;
    height: 80%;

    ${mediaQueryBreakpoints.small} {
      width: 60%;
      height: 60%;
    }
  `,
  hits: () => css`
    height: calc(100% - 180px);
    overflow: scroll;
  `,
  pageDetail: () => css`
    display: flex;
  `,
  image: () => css`
    width: 128px;
    height: 128px;
    aspect-ratio: auto 128 / 128;
    cursor: pointer;
  `,
  pageDetailTextArea: () => css`
    padding: 8px;
    width: 100%;
  `,
  pageDetailTextAreaTitle: () => css`
    font-size: 16px;
  `,
  pageDetailTextAreaDescription: () => css`
    font-size: 16px;
  `,
};
