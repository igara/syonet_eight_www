import React from 'react';
import { styles } from './layout.styles';
import { Header } from './parts';
import { Global } from '@emotion/react';

type Props = {};

export const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Global styles={styles.global()} />

      <div css={styles.layout()}>
        <Header />

        <div>
          <main>{props.children}</main>
          <footer>© syonet.work. All Rights Reserved.</footer>
        </div>
      </div>
    </>
  );
};
