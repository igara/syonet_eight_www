import React from 'react';
import TestingLibrary from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSWRQiitaListFetch } from '../../../';

describe('use_swr_qiita_list_fetch', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('default', async () => {
    const apiData = [
      {
        name: '2015-10-11 18-51-31-[メモ]Vagrantを使ってVMを起動する',
        path: 'data/igara/2015-10-11 18-51-31-[メモ]Vagrantを使ってVMを起動する',
        sha: 'a028836ad3f7ae754fd0f2d67c03b73818b7ae49',
        size: 0,
        url: 'https://api.github.com/repos/igara/qiita-export/contents/data/igara/2015-10-11%2018-51-31-[%E3%83%A1%E3%83%A2]Vagrant%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6VM%E3%82%92%E8%B5%B7%E5%8B%95%E3%81%99%E3%82%8B?ref=master',
        html_url:
          'https://github.com/igara/qiita-export/tree/master/data/igara/2015-10-11%2018-51-31-[%E3%83%A1%E3%83%A2]Vagrant%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6VM%E3%82%92%E8%B5%B7%E5%8B%95%E3%81%99%E3%82%8B',
        git_url:
          'https://api.github.com/repos/igara/qiita-export/git/trees/a028836ad3f7ae754fd0f2d67c03b73818b7ae49',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/qiita-export/contents/data/igara/2015-10-11%2018-51-31-[%E3%83%A1%E3%83%A2]Vagrant%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6VM%E3%82%92%E8%B5%B7%E5%8B%95%E3%81%99%E3%82%8B?ref=master',
          git: 'https://api.github.com/repos/igara/qiita-export/git/trees/a028836ad3f7ae754fd0f2d67c03b73818b7ae49',
          html: 'https://github.com/igara/qiita-export/tree/master/data/igara/2015-10-11%2018-51-31-[%E3%83%A1%E3%83%A2]Vagrant%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6VM%E3%82%92%E8%B5%B7%E5%8B%95%E3%81%99%E3%82%8B',
        },
      },
    ];

    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve({
            ok: true,
            status: 200,
            json: async () => apiData,
          });
        }),
    );

    const TestComponent = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const result = useSWRQiitaListFetch();

      return <div>{result.data && JSON.stringify(result.data)}</div>;
    };

    TestingLibrary.render(<TestComponent />);
    const jsonString = JSON.stringify(apiData);
    await TestingLibrary.waitFor(() => TestingLibrary.screen.getByText(jsonString));
    expect(TestingLibrary.screen.getByText(jsonString)).toBeInTheDocument();
  });
});
