import React from 'react';
import TestingLibrary from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSWRQiitaList } from '../../../';

describe('use_swr_qiita_list', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('default', async () => {
    const TestComponent = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const result = useSWRQiitaList();

      return <div>{result.data && JSON.stringify(result.data)}</div>;
    };

    TestingLibrary.render(<TestComponent />);
    await TestingLibrary.waitFor(() => TestingLibrary.screen.getByText('[]'));
    expect(TestingLibrary.screen.getByText('[]')).toBeInTheDocument();
  });

  test('引数の指定があるとき', async () => {
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
      {
        name: '2016-04-03 22-40-41-非イラストレータが初めてPCでイラストを描いた話',
        path: 'data/igara/2016-04-03 22-40-41-非イラストレータが初めてPCでイラストを描いた話',
        sha: 'c0f3c6bae546dc396e765f867dd242cc0088bf44',
        size: 0,
        url: 'https://api.github.com/repos/igara/qiita-export/contents/data/igara/2016-04-03%2022-40-41-%E9%9D%9E%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%BF%E3%81%8C%E5%88%9D%E3%82%81%E3%81%A6PC%E3%81%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%82%92%E6%8F%8F%E3%81%84%E3%81%9F%E8%A9%B1?ref=master',
        html_url:
          'https://github.com/igara/qiita-export/tree/master/data/igara/2016-04-03%2022-40-41-%E9%9D%9E%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%BF%E3%81%8C%E5%88%9D%E3%82%81%E3%81%A6PC%E3%81%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%82%92%E6%8F%8F%E3%81%84%E3%81%9F%E8%A9%B1',
        git_url:
          'https://api.github.com/repos/igara/qiita-export/git/trees/c0f3c6bae546dc396e765f867dd242cc0088bf44',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/qiita-export/contents/data/igara/2016-04-03%2022-40-41-%E9%9D%9E%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%BF%E3%81%8C%E5%88%9D%E3%82%81%E3%81%A6PC%E3%81%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%82%92%E6%8F%8F%E3%81%84%E3%81%9F%E8%A9%B1?ref=master',
          git: 'https://api.github.com/repos/igara/qiita-export/git/trees/c0f3c6bae546dc396e765f867dd242cc0088bf44',
          html: 'https://github.com/igara/qiita-export/tree/master/data/igara/2016-04-03%2022-40-41-%E9%9D%9E%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%82%BF%E3%81%8C%E5%88%9D%E3%82%81%E3%81%A6PC%E3%81%A7%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%82%92%E6%8F%8F%E3%81%84%E3%81%9F%E8%A9%B1',
        },
      },
    ];

    const TestComponent = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const result = useSWRQiitaList(apiData);

      return <div>{result.data && JSON.stringify(result.data)}</div>;
    };

    TestingLibrary.render(<TestComponent />);
    const jsonString = JSON.stringify(apiData.slice().reverse());
    await TestingLibrary.waitFor(() => TestingLibrary.screen.getByText(jsonString));
    expect(TestingLibrary.screen.getByText(jsonString)).toBeInTheDocument();
  });
});
