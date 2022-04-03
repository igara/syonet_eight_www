import React from 'react';
import TestingLibrary from '@testing-library/react';
import { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { BlogsHatenaNamePage } from '../../';

describe('BlogsHatenaNamePage', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const hatenaDetail = 'hoge';

    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve({
            ok: true,
            status: 200,
            text: async () => hatenaDetail,
          });
        }),
    );

    const mockedRouter = {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      basePath: '/',
      isLocaleDomain: true,
      isReady: true,
      push: jest.fn(),
      prefetch: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
      isPreview: false,
    };

    const renderTest = TestingLibrary.render(
      <RouterContext.Provider value={mockedRouter}>
        <BlogsHatenaNamePage
          ssr={{
            hatenaDetailData: 'hatenaDetailData',
            ogp: { title: 'ogpTitle', description: 'ogpDescription', path: '/path' },
          }}
        />
      </RouterContext.Provider>,
    );
    expect(
      '<div><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><header><div class="css-1frwyh"><input type="search" placeholder="ページ検索" readonly="" class="css-19dbqj5" value=""></div><dialog class="css-us853g"><div class="css-nb6x2c"><div class="css-1jqu4hs"><div class="css-1frwyh"><input type="text" placeholder="ページ検索" class="css-19dbqj5" value=""></div><div class="css-19sk4h4"><select class="css-1si9jw1"><option value="10">10件表示</option><option value="20">20件表示</option></select><div class="css-1dejoba"></div><div class="css-22mrst"><label>10件表示</label><svg class="css-8w34lm" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31" fill="#C4C4C4" stroke="black" stroke-width="2"></circle><path d="M32 44L11.2154 26L52.7846 26L32 44Z" fill="black"></path></svg></div><div class="css-1jsa7p4"><div data-value="10" class="css-1rj6bi8">10件表示</div><div data-value="20" class="css-1rj6bi8">20件表示</div></div></div><div><div class="css-1qkhve4"><select multiple="" class="css-1si9jw1"></select><div class="css-1dejoba"></div><div class="css-22mrst"><label>検索タグを選択</label><svg class="css-8w34lm" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31" fill="#C4C4C4" stroke="black" stroke-width="2"></circle><path d="M32 44L11.2154 26L52.7846 26L32 44Z" fill="black"></path></svg></div><div class="css-c23fk0"></div></div></div><ul><li><a href="/">トップページ</a></li></ul></div><button type="button" class="css-105lmki"><svg class="css-m2k7uj" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31" fill="#C4C4C4" stroke="black" stroke-width="2"></circle><path d="M24.5373 52L52 12H39.4627L12 52H24.5373Z" fill="black"></path><path d="M39.4627 52L12 12H24.5373L52 52H39.4627Z" fill="black"></path></svg></button></div></dialog></header><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><main css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><div>hatenaDetailData</div></main><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."></div><button css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><svg class="css-m2k7uj" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31" fill="#C4C4C4" stroke="black" stroke-width="2"></circle><path d="M12 34.5L32 55.5L52 34.5L35.5 44.5L33 9L30.5 9L27.5 44.5L12 34.5Z" fill="black" stroke="black" stroke-width="2"></path></svg></button></div></div><footer>© syonet.work. All Rights Reserved.</footer></div></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
