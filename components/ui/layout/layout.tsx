import React from 'react';
import { styles } from './layout.style';

type Props = {};

export const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <style jsx>{styles}</style>

      <div className="layout">
        <nav>
          <div>aaaa</div>
        </nav>
        <div>
          <header>syonet</header>
          <main>{props.children}</main>
          <footer>© syonet.work. All Rights Reserved.</footer>
        </div>
      </div>
    </>
  );
};
