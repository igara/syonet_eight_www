import React from 'react';
import TestingLibrary from '@testing-library/react';
import '@testing-library/jest-dom';
import { ZennArticleList } from '../../';

const spyConsoleError = jest.spyOn(global.console, 'error').mockImplementation();

describe('ZennArticleList', () => {
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

    TestingLibrary.render(<ZennArticleList />);
    await TestingLibrary.waitFor(() =>
      TestingLibrary.screen.getByText('GitHubからZennの投稿を取得するのに失敗しました'),
    );

    expect(
      TestingLibrary.screen.getByText('GitHubからZennの投稿を取得するのに失敗しました'),
    ).toBeInTheDocument();

    expect([[{ ok: false, status: 500 }]]).toEqual(spyConsoleError.mock.calls);
  });
});
