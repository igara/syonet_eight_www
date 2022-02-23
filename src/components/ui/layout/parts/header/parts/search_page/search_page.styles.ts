import * as CSS from 'csstype';
import { css } from '@emotion/react';

export interface Props {
  size: number;
  color: CSS.Property.Color;
}

export const styles = {
  search_page: (props: Props) => css`
    width: ${props.size}px;
    height: ${props.size}px;
    color: ${props.color};
  `,
};
