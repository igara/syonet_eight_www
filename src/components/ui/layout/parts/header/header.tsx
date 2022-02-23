import React from 'react';
import * as Styles from './header.styles';

import { SearchPage } from './parts';

interface Props {
  size?: Styles.Props['size'];
  color?: Styles.Props['color'];
}

export const Header: React.FC<Props> = (props) => {
  return (
    <header>
      <SearchPage />
    </header>
  );
};
