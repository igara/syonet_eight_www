import css from 'styled-jsx/css';
import { Variables } from 'syonet_eight_design_system';

export const styles = css`
  .layout {
    display: flex;
  }
  @media screen and (max-width: ${Variables.breakpoints.small}) {
    .layout {
      color: black;
    }
  }
`;
