import { css } from '@emotion/react';
import { Variables } from 'syonet_eight_design_system';

export const styles = {
  layout: css`
    display: flex;

    @media screen and (max-width: ${Variables.breakpoints.small}) {
      color: black;
    }
  `,
};
