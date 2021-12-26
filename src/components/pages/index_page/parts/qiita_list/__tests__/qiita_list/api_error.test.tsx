import React from 'react';
import TestingLibrary from '@testing-library/react';
import '@testing-library/jest-dom';
import { QiitaList } from '../../';

const spyConsoleError = jest.spyOn(global.console, 'error').mockImplementation();

describe('pages/index_page/parts/QiitaList', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('APIエラー', async () => {
    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((_, reject) => {
          reject({
            ok: false,
            status: 500,
          });
        }),
    );

    TestingLibrary.render(<QiitaList />);
    await TestingLibrary.waitFor(() =>
      TestingLibrary.screen.getByText('GitHubからQiitaの投稿を取得するのに失敗しました'),
    );

    expect(
      TestingLibrary.screen.getByText('GitHubからQiitaの投稿を取得するのに失敗しました'),
    ).toBeInTheDocument();

    expect([[{ ok: false, status: 500 }]]).toEqual(spyConsoleError.mock.calls);
  });
});
