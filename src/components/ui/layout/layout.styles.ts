import { css } from '@emotion/react';
import { mediaQueryBreakpoints } from 'syonet_eight_design_system';

type Profile = {
  isSPProfileDetail: boolean;
};
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
    position: relative;
    display: flex;
    flex-direction: column;

    ${mediaQueryBreakpoints.small} {
      flex-direction: row;
    }
  `,
  main: () => css`
    width: 100%;
  `,
  profile: (props: Profile) => css`
    width: 100%;
    height: ${props.isSPProfileDetail ? '400px' : '240px'};
    overflow-x: scroll;
    overflow-y: ${props.isSPProfileDetail ? 'scroll' : 'hidden'};

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
  openSPProfileDetailButton: () => css`
    position: absolute;
    right: 60px;
    bottom: 22px;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;

    svg {
      width: 30px;
      height: 30px;
    }

    ${mediaQueryBreakpoints.small} {
      display: none;
    }
  `,
  closeSPProfileDetailButton: () => css`
    position: absolute;
    right: 60px;
    bottom: 22px;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;

    svg {
      width: 30px;
      height: 30px;
    }

    ${mediaQueryBreakpoints.small} {
      display: none;
    }
  `,
  profileMenuButton: () => css`
    position: absolute;
    right: 24px;
    bottom: 20px;

    svg {
      width: 30px;
      height: 30px;
    }

    ${mediaQueryBreakpoints.small} {
      position: fixed;
      right: 24px;
      bottom: 20px;
    }
  `,
};
