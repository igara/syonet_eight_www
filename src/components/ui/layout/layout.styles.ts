import { css } from '@emotion/react';

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
};
