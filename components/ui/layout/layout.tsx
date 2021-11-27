import React from 'react';
import { styles } from './layout.styles';
import { MenuIcon } from 'syonet_eight_design_system';

type Props = {};

export const Layout: React.FC<Props> = (props) => {
  return (
    <div css={styles.layout}>
      <nav>
        <MenuIcon />
        <div>ddd</div>
      </nav>
      <div>
        <header>syonet</header>
        <main>{props.children}</main>
        <footer>© syonet.work. All Rights Reserved.</footer>
      </div>
    </div>
  );
};
