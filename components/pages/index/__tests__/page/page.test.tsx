import React from 'react';
import TestingLibrary from '@testing-library/react';
import { Page } from '../../page';

describe('Page確認', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<Page />);
    expect(
      '<div><div><main><h1>Welcome to <a href="https://nextjs.org">Next.js!</a></h1><p>ちょっとsyonetページ改造中</p><div><a href="https://nextjs.org/docs"><h2>Documentation →</h2><p>Find in-depth information about Next.js features and API.</p></a><a href="https://nextjs.org/learn"><h2>Learn →</h2><p>Learn about Next.js in an interactive course with quizzes!</p></a><a href="https://github.com/vercel/next.js/tree/master/examples"><h2>Examples →</h2><p>Discover and deploy boilerplate example Next.js projects.</p></a><a href="https://vercel.com/new?utm_source=create-next-app&amp;utm_medium=default-template&amp;utm_campaign=create-next-app"><h2>Deploy →</h2><p>Instantly deploy your Next.js site to a public URL with Vercel.</p></a></div></main><footer><a href="https://vercel.com?utm_source=create-next-app&amp;utm_medium=default-template&amp;utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">Powered by <span><span style="box-sizing: border-box; display: inline-block; overflow: hidden; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span style="box-sizing: border-box; display: block; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img style="display: block; max-width: 100%; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;" alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"></span><img alt="Vercel Logo" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="intrinsic" style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span></span></a></footer></div></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
