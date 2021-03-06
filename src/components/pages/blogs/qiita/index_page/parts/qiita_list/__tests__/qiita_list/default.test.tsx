import React from 'react';
import TestingLibrary from '@testing-library/react';
import '@testing-library/jest-dom';
import { QiitaList } from '../../';

describe('QiitaList', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', async () => {
    const qiitaList = [
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
        name: '2015-10-11 20-22-16-[メモ]GentooにH2O+PHP7.0.0RC4をインストールする。',
        path: 'data/igara/2015-10-11 20-22-16-[メモ]GentooにH2O+PHP7.0.0RC4をインストールする。',
        sha: '60f95ebedbab21341420920d283d97f723b63d17',
        size: 0,
        url: 'https://api.github.com/repos/igara/qiita-export/contents/data/igara/2015-10-11%2020-22-16-[%E3%83%A1%E3%83%A2]Gentoo%E3%81%ABH2O%2BPHP7.0.0RC4%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8B%E3%80%82?ref=master',
        html_url:
          'https://github.com/igara/qiita-export/tree/master/data/igara/2015-10-11%2020-22-16-[%E3%83%A1%E3%83%A2]Gentoo%E3%81%ABH2O%2BPHP7.0.0RC4%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8B%E3%80%82',
        git_url:
          'https://api.github.com/repos/igara/qiita-export/git/trees/60f95ebedbab21341420920d283d97f723b63d17',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/qiita-export/contents/data/igara/2015-10-11%2020-22-16-[%E3%83%A1%E3%83%A2]Gentoo%E3%81%ABH2O%2BPHP7.0.0RC4%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8B%E3%80%82?ref=master',
          git: 'https://api.github.com/repos/igara/qiita-export/git/trees/60f95ebedbab21341420920d283d97f723b63d17',
          html: 'https://github.com/igara/qiita-export/tree/master/data/igara/2015-10-11%2020-22-16-[%E3%83%A1%E3%83%A2]Gentoo%E3%81%ABH2O%2BPHP7.0.0RC4%E3%82%92%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8B%E3%80%82',
        },
      },
      {
        name: '2015-10-17 09-18-17-[メモ]VirtualBoxで作成したGentooからホストのフォルダを共有させる',
        path: 'data/igara/2015-10-17 09-18-17-[メモ]VirtualBoxで作成したGentooからホストのフォルダを共有させる',
        sha: '389363e86f50c3497242391e97f03e31b3cb1d0d',
        size: 0,
        url: 'https://api.github.com/repos/igara/qiita-export/contents/data/igara/2015-10-17%2009-18-17-[%E3%83%A1%E3%83%A2]VirtualBox%E3%81%A7%E4%BD%9C%E6%88%90%E3%81%97%E3%81%9FGentoo%E3%81%8B%E3%82%89%E3%83%9B%E3%82%B9%E3%83%88%E3%81%AE%E3%83%95%E3%82%A9%E3%83%AB%E3%83%80%E3%82%92%E5%85%B1%E6%9C%89%E3%81%95%E3%81%9B%E3%82%8B?ref=master',
        html_url:
          'https://github.com/igara/qiita-export/tree/master/data/igara/2015-10-17%2009-18-17-[%E3%83%A1%E3%83%A2]VirtualBox%E3%81%A7%E4%BD%9C%E6%88%90%E3%81%97%E3%81%9FGentoo%E3%81%8B%E3%82%89%E3%83%9B%E3%82%B9%E3%83%88%E3%81%AE%E3%83%95%E3%82%A9%E3%83%AB%E3%83%80%E3%82%92%E5%85%B1%E6%9C%89%E3%81%95%E3%81%9B%E3%82%8B',
        git_url:
          'https://api.github.com/repos/igara/qiita-export/git/trees/389363e86f50c3497242391e97f03e31b3cb1d0d',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/qiita-export/contents/data/igara/2015-10-17%2009-18-17-[%E3%83%A1%E3%83%A2]VirtualBox%E3%81%A7%E4%BD%9C%E6%88%90%E3%81%97%E3%81%9FGentoo%E3%81%8B%E3%82%89%E3%83%9B%E3%82%B9%E3%83%88%E3%81%AE%E3%83%95%E3%82%A9%E3%83%AB%E3%83%80%E3%82%92%E5%85%B1%E6%9C%89%E3%81%95%E3%81%9B%E3%82%8B?ref=master',
          git: 'https://api.github.com/repos/igara/qiita-export/git/trees/389363e86f50c3497242391e97f03e31b3cb1d0d',
          html: 'https://github.com/igara/qiita-export/tree/master/data/igara/2015-10-17%2009-18-17-[%E3%83%A1%E3%83%A2]VirtualBox%E3%81%A7%E4%BD%9C%E6%88%90%E3%81%97%E3%81%9FGentoo%E3%81%8B%E3%82%89%E3%83%9B%E3%82%B9%E3%83%88%E3%81%AE%E3%83%95%E3%82%A9%E3%83%AB%E3%83%80%E3%82%92%E5%85%B1%E6%9C%89%E3%81%95%E3%81%9B%E3%82%8B',
        },
      },
      {
        name: '2015-10-24 14-03-35-[メモ]node.jsでライブラリのバージョン管理する',
        path: 'data/igara/2015-10-24 14-03-35-[メモ]node.jsでライブラリのバージョン管理する',
        sha: '5c123de07f39ce5feaa14aeeb78a9e4ee23a7e85',
        size: 0,
        url: 'https://api.github.com/repos/igara/qiita-export/contents/data/igara/2015-10-24%2014-03-35-[%E3%83%A1%E3%83%A2]node.js%E3%81%A7%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%81%AE%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E7%AE%A1%E7%90%86%E3%81%99%E3%82%8B?ref=master',
        html_url:
          'https://github.com/igara/qiita-export/tree/master/data/igara/2015-10-24%2014-03-35-[%E3%83%A1%E3%83%A2]node.js%E3%81%A7%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%81%AE%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E7%AE%A1%E7%90%86%E3%81%99%E3%82%8B',
        git_url:
          'https://api.github.com/repos/igara/qiita-export/git/trees/5c123de07f39ce5feaa14aeeb78a9e4ee23a7e85',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/qiita-export/contents/data/igara/2015-10-24%2014-03-35-[%E3%83%A1%E3%83%A2]node.js%E3%81%A7%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%81%AE%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E7%AE%A1%E7%90%86%E3%81%99%E3%82%8B?ref=master',
          git: 'https://api.github.com/repos/igara/qiita-export/git/trees/5c123de07f39ce5feaa14aeeb78a9e4ee23a7e85',
          html: 'https://github.com/igara/qiita-export/tree/master/data/igara/2015-10-24%2014-03-35-[%E3%83%A1%E3%83%A2]node.js%E3%81%A7%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA%E3%81%AE%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E7%AE%A1%E7%90%86%E3%81%99%E3%82%8B',
        },
      },
      {
        name: '2015-10-24 15-35-32-[メモ]H2OでHTTP／2を使ってみる',
        path: 'data/igara/2015-10-24 15-35-32-[メモ]H2OでHTTP／2を使ってみる',
        sha: 'f6827a709440a436497ef4301619aff8a6ef5e5d',
        size: 0,
        url: 'https://api.github.com/repos/igara/qiita-export/contents/data/igara/2015-10-24%2015-35-32-[%E3%83%A1%E3%83%A2]H2O%E3%81%A7HTTP%EF%BC%8F2%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B?ref=master',
        html_url:
          'https://github.com/igara/qiita-export/tree/master/data/igara/2015-10-24%2015-35-32-[%E3%83%A1%E3%83%A2]H2O%E3%81%A7HTTP%EF%BC%8F2%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B',
        git_url:
          'https://api.github.com/repos/igara/qiita-export/git/trees/f6827a709440a436497ef4301619aff8a6ef5e5d',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/qiita-export/contents/data/igara/2015-10-24%2015-35-32-[%E3%83%A1%E3%83%A2]H2O%E3%81%A7HTTP%EF%BC%8F2%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B?ref=master',
          git: 'https://api.github.com/repos/igara/qiita-export/git/trees/f6827a709440a436497ef4301619aff8a6ef5e5d',
          html: 'https://github.com/igara/qiita-export/tree/master/data/igara/2015-10-24%2015-35-32-[%E3%83%A1%E3%83%A2]H2O%E3%81%A7HTTP%EF%BC%8F2%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B',
        },
      },
      {
        name: '2015-10-25 16-05-14-StoryBoardを生かしたアプリ作りについて',
        path: 'data/igara/2015-10-25 16-05-14-StoryBoardを生かしたアプリ作りについて',
        sha: '15c6257f2bf118f13aa28317c079a5c7454ed190',
        size: 0,
        url: 'https://api.github.com/repos/igara/qiita-export/contents/data/igara/2015-10-25%2016-05-14-StoryBoard%E3%82%92%E7%94%9F%E3%81%8B%E3%81%97%E3%81%9F%E3%82%A2%E3%83%97%E3%83%AA%E4%BD%9C%E3%82%8A%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6?ref=master',
        html_url:
          'https://github.com/igara/qiita-export/tree/master/data/igara/2015-10-25%2016-05-14-StoryBoard%E3%82%92%E7%94%9F%E3%81%8B%E3%81%97%E3%81%9F%E3%82%A2%E3%83%97%E3%83%AA%E4%BD%9C%E3%82%8A%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6',
        git_url:
          'https://api.github.com/repos/igara/qiita-export/git/trees/15c6257f2bf118f13aa28317c079a5c7454ed190',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/qiita-export/contents/data/igara/2015-10-25%2016-05-14-StoryBoard%E3%82%92%E7%94%9F%E3%81%8B%E3%81%97%E3%81%9F%E3%82%A2%E3%83%97%E3%83%AA%E4%BD%9C%E3%82%8A%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6?ref=master',
          git: 'https://api.github.com/repos/igara/qiita-export/git/trees/15c6257f2bf118f13aa28317c079a5c7454ed190',
          html: 'https://github.com/igara/qiita-export/tree/master/data/igara/2015-10-25%2016-05-14-StoryBoard%E3%82%92%E7%94%9F%E3%81%8B%E3%81%97%E3%81%9F%E3%82%A2%E3%83%97%E3%83%AA%E4%BD%9C%E3%82%8A%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6',
        },
      },
    ];

    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve({
            ok: true,
            status: 200,
            json: async () => qiitaList,
          });
        }),
    );

    TestingLibrary.render(<QiitaList />);
    await TestingLibrary.waitFor(() =>
      TestingLibrary.screen.getByText(qiitaList[0].name),
    );

    expect(TestingLibrary.screen.getByText(qiitaList[0].name)).toBeInTheDocument();
    expect(TestingLibrary.screen.getByText(qiitaList[1].name)).toBeInTheDocument();
    expect(TestingLibrary.screen.getByText(qiitaList[2].name)).toBeInTheDocument();
    expect(TestingLibrary.screen.getByText(qiitaList[3].name)).toBeInTheDocument();
    expect(TestingLibrary.screen.getByText(qiitaList[4].name)).toBeInTheDocument();
    expect(TestingLibrary.screen.getByText(qiitaList[5].name)).toBeInTheDocument();
  });
});
