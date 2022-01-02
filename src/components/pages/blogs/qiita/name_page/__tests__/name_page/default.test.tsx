import React from 'react';
import TestingLibrary from '@testing-library/react';
import { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { BlogsQiitaNamePage } from '../../';

describe('BlogsQiitaNamePage', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const qiitaDetail = 'hoge';

    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve({
            ok: true,
            status: 200,
            text: async () => qiitaDetail,
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
        <BlogsQiitaNamePage
          ssr={{
            qiitaDetailData: 'qiitaDetailData',
            ogp: { title: 'ogpTitle', description: 'ogpDescription', path: '/path' },
          }}
        />
      </RouterContext.Provider>,
    );
    expect('<div><div>qiitaDetailData</div></div>').toBe(
      renderTest.baseElement.innerHTML,
    );
  });
});
