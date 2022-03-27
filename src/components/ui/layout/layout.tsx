import React from 'react';
import { styles } from './layout.styles';
import { Header, Profile } from './parts';
import { Global } from '@emotion/react';

type Props = {};

export const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Global styles={styles.global()} />

      <div css={styles.layout()}>
        <Header />

        <div css={styles.content()}>
          <main css={styles.main()}>{props.children}</main>
          <div css={styles.profile()}>
            <Profile />
          </div>
        </div>

        <footer>© syonet.work. All Rights Reserved.</footer>
      </div>
    </>
  );
};
