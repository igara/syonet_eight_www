import React from 'react';
import { styles } from './layout.styles';
import { Header, Profile } from './parts';
import { Global } from '@emotion/react';
import { MenuIcon, ArrowDownIcon, ArrowUpIcon } from 'syonet_eight_design_system';

type Props = {};

export const Layout: React.FC<Props> = (props) => {
  const [isSPProfileDetail, setIsSPProfileDetail] = React.useState(false);
  const [isProfileMenu, setIsSPProfileMenu] = React.useState(false);
  const profileRef = React.useRef<HTMLDivElement>(null);

  const openSPProfileDetailButtonCallback = React.useCallback(() => {
    setIsSPProfileDetail(true);
  }, []);
  const closeSPProfileDetailButtonCallback = React.useCallback(() => {
    if (!(profileRef.current instanceof HTMLDivElement)) return;

    profileRef.current.scrollTop = 0;
    setIsSPProfileDetail(false);
    setIsSPProfileMenu(false);
  }, []);

  React.useEffect(() => {
    profileRef.current &&
      profileRef.current.addEventListener('scroll', (e) => {
        const target = e.target;
        if (!(target instanceof HTMLDivElement)) return;

        if (target.scrollTop > 100) {
          setIsSPProfileMenu(true);
        } else {
          setIsSPProfileMenu(false);
        }
      });
  }, []);

  return (
    <>
      <Global styles={styles.global()} />

      <div css={styles.layout()}>
        <Header />

        <div css={styles.content()}>
          <main css={styles.main()}>{props.children}</main>
          <div css={styles.profile({ isSPProfileDetail })} ref={profileRef}>
            <Profile />

            {!isSPProfileDetail && (
              <button
                css={styles.openSPProfileDetailButton()}
                onClick={openSPProfileDetailButtonCallback}>
                <ArrowDownIcon />
              </button>
            )}
            {isSPProfileDetail && (
              <button
                css={styles.closeSPProfileDetailButton()}
                onClick={closeSPProfileDetailButtonCallback}>
                <ArrowUpIcon />
              </button>
            )}

            {isProfileMenu && (
              <a href="#目次" css={styles.profileMenuButton()}>
                <MenuIcon />
              </a>
            )}
          </div>
        </div>

        <footer>© syonet.work. All Rights Reserved.</footer>
      </div>
    </>
  );
};
