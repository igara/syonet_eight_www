import React from 'react';
import TestingLibrary from '@testing-library/react';
import '@testing-library/jest-dom';
import { BlogsHatenaIndexPage } from '../../';

describe('BlogsHatenaIndexPage', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', async () => {
    const hatenaList = [
      {
        name: '2017-09-03 00-00-00 OSC Chiba 2017 Fall レポート的な何か',
        path: 'data/igara1119/2017-09-03 00-00-00 OSC Chiba 2017 Fall レポート的な何か',
        sha: 'a1d6d5d87e5fd6c9ca320d62ef875cfee1ac57a6',
        size: 0,
        url: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2017-09-03%2000-00-00%20OSC%20Chiba%202017%20Fall%20%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88%E7%9A%84%E3%81%AA%E4%BD%95%E3%81%8B?ref=master',
        html_url:
          'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2017-09-03%2000-00-00%20OSC%20Chiba%202017%20Fall%20%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88%E7%9A%84%E3%81%AA%E4%BD%95%E3%81%8B',
        git_url:
          'https://api.github.com/repos/igara/hatenablog-export/git/trees/a1d6d5d87e5fd6c9ca320d62ef875cfee1ac57a6',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2017-09-03%2000-00-00%20OSC%20Chiba%202017%20Fall%20%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88%E7%9A%84%E3%81%AA%E4%BD%95%E3%81%8B?ref=master',
          git: 'https://api.github.com/repos/igara/hatenablog-export/git/trees/a1d6d5d87e5fd6c9ca320d62ef875cfee1ac57a6',
          html: 'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2017-09-03%2000-00-00%20OSC%20Chiba%202017%20Fall%20%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88%E7%9A%84%E3%81%AA%E4%BD%95%E3%81%8B',
        },
      },
      {
        name: '2017-11-09 00-00-00 IT Japan Expo 2017 秋 2017／11／9',
        path: 'data/igara1119/2017-11-09 00-00-00 IT Japan Expo 2017 秋 2017／11／9',
        sha: '775af4400afeeafddf6ce70b2f1f4dde0e9b2342',
        size: 0,
        url: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2017-11-09%2000-00-00%20IT%20Japan%20Expo%202017%20%E7%A7%8B%202017%EF%BC%8F11%EF%BC%8F9?ref=master',
        html_url:
          'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2017-11-09%2000-00-00%20IT%20Japan%20Expo%202017%20%E7%A7%8B%202017%EF%BC%8F11%EF%BC%8F9',
        git_url:
          'https://api.github.com/repos/igara/hatenablog-export/git/trees/775af4400afeeafddf6ce70b2f1f4dde0e9b2342',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2017-11-09%2000-00-00%20IT%20Japan%20Expo%202017%20%E7%A7%8B%202017%EF%BC%8F11%EF%BC%8F9?ref=master',
          git: 'https://api.github.com/repos/igara/hatenablog-export/git/trees/775af4400afeeafddf6ce70b2f1f4dde0e9b2342',
          html: 'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2017-11-09%2000-00-00%20IT%20Japan%20Expo%202017%20%E7%A7%8B%202017%EF%BC%8F11%EF%BC%8F9',
        },
      },
      {
        name: '2018-09-23 00-00-00 しんどみの技術書典5 中間報告的な何か',
        path: 'data/igara1119/2018-09-23 00-00-00 しんどみの技術書典5 中間報告的な何か',
        sha: '959c708a5d8a3ee42c544bfb10b3b71b66ca395f',
        size: 0,
        url: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2018-09-23%2000-00-00%20%E3%81%97%E3%82%93%E3%81%A9%E3%81%BF%E3%81%AE%E6%8A%80%E8%A1%93%E6%9B%B8%E5%85%B85%20%E4%B8%AD%E9%96%93%E5%A0%B1%E5%91%8A%E7%9A%84%E3%81%AA%E4%BD%95%E3%81%8B?ref=master',
        html_url:
          'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2018-09-23%2000-00-00%20%E3%81%97%E3%82%93%E3%81%A9%E3%81%BF%E3%81%AE%E6%8A%80%E8%A1%93%E6%9B%B8%E5%85%B85%20%E4%B8%AD%E9%96%93%E5%A0%B1%E5%91%8A%E7%9A%84%E3%81%AA%E4%BD%95%E3%81%8B',
        git_url:
          'https://api.github.com/repos/igara/hatenablog-export/git/trees/959c708a5d8a3ee42c544bfb10b3b71b66ca395f',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2018-09-23%2000-00-00%20%E3%81%97%E3%82%93%E3%81%A9%E3%81%BF%E3%81%AE%E6%8A%80%E8%A1%93%E6%9B%B8%E5%85%B85%20%E4%B8%AD%E9%96%93%E5%A0%B1%E5%91%8A%E7%9A%84%E3%81%AA%E4%BD%95%E3%81%8B?ref=master',
          git: 'https://api.github.com/repos/igara/hatenablog-export/git/trees/959c708a5d8a3ee42c544bfb10b3b71b66ca395f',
          html: 'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2018-09-23%2000-00-00%20%E3%81%97%E3%82%93%E3%81%A9%E3%81%BF%E3%81%AE%E6%8A%80%E8%A1%93%E6%9B%B8%E5%85%B85%20%E4%B8%AD%E9%96%93%E5%A0%B1%E5%91%8A%E7%9A%84%E3%81%AA%E4%BD%95%E3%81%8B',
        },
      },
      {
        name: '2019-03-03 00-00-00 サークルのHPリニューアルしました',
        path: 'data/igara1119/2019-03-03 00-00-00 サークルのHPリニューアルしました',
        sha: '0755fa8cd84471776562d8646cb573cbb2eda10e',
        size: 0,
        url: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2019-03-03%2000-00-00%20%E3%82%B5%E3%83%BC%E3%82%AF%E3%83%AB%E3%81%AEHP%E3%83%AA%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%A2%E3%83%AB%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F?ref=master',
        html_url:
          'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2019-03-03%2000-00-00%20%E3%82%B5%E3%83%BC%E3%82%AF%E3%83%AB%E3%81%AEHP%E3%83%AA%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%A2%E3%83%AB%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F',
        git_url:
          'https://api.github.com/repos/igara/hatenablog-export/git/trees/0755fa8cd84471776562d8646cb573cbb2eda10e',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2019-03-03%2000-00-00%20%E3%82%B5%E3%83%BC%E3%82%AF%E3%83%AB%E3%81%AEHP%E3%83%AA%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%A2%E3%83%AB%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F?ref=master',
          git: 'https://api.github.com/repos/igara/hatenablog-export/git/trees/0755fa8cd84471776562d8646cb573cbb2eda10e',
          html: 'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2019-03-03%2000-00-00%20%E3%82%B5%E3%83%BC%E3%82%AF%E3%83%AB%E3%81%AEHP%E3%83%AA%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%A2%E3%83%AB%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F',
        },
      },
      {
        name: '2020-02-01 00-00-00 2020／2時点で最近やっていること思うことをいろいろ書いてみる',
        path: 'data/igara1119/2020-02-01 00-00-00 2020／2時点で最近やっていること思うことをいろいろ書いてみる',
        sha: 'c59f547124876f74422764ad3afe6ac58da6fcfa',
        size: 0,
        url: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2020-02-01%2000-00-00%202020%EF%BC%8F2%E6%99%82%E7%82%B9%E3%81%A7%E6%9C%80%E8%BF%91%E3%82%84%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E6%80%9D%E3%81%86%E3%81%93%E3%81%A8%E3%82%92%E3%81%84%E3%82%8D%E3%81%84%E3%82%8D%E6%9B%B8%E3%81%84%E3%81%A6%E3%81%BF%E3%82%8B?ref=master',
        html_url:
          'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2020-02-01%2000-00-00%202020%EF%BC%8F2%E6%99%82%E7%82%B9%E3%81%A7%E6%9C%80%E8%BF%91%E3%82%84%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E6%80%9D%E3%81%86%E3%81%93%E3%81%A8%E3%82%92%E3%81%84%E3%82%8D%E3%81%84%E3%82%8D%E6%9B%B8%E3%81%84%E3%81%A6%E3%81%BF%E3%82%8B',
        git_url:
          'https://api.github.com/repos/igara/hatenablog-export/git/trees/c59f547124876f74422764ad3afe6ac58da6fcfa',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2020-02-01%2000-00-00%202020%EF%BC%8F2%E6%99%82%E7%82%B9%E3%81%A7%E6%9C%80%E8%BF%91%E3%82%84%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E6%80%9D%E3%81%86%E3%81%93%E3%81%A8%E3%82%92%E3%81%84%E3%82%8D%E3%81%84%E3%82%8D%E6%9B%B8%E3%81%84%E3%81%A6%E3%81%BF%E3%82%8B?ref=master',
          git: 'https://api.github.com/repos/igara/hatenablog-export/git/trees/c59f547124876f74422764ad3afe6ac58da6fcfa',
          html: 'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2020-02-01%2000-00-00%202020%EF%BC%8F2%E6%99%82%E7%82%B9%E3%81%A7%E6%9C%80%E8%BF%91%E3%82%84%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%81%93%E3%81%A8%E6%80%9D%E3%81%86%E3%81%93%E3%81%A8%E3%82%92%E3%81%84%E3%82%8D%E3%81%84%E3%82%8D%E6%9B%B8%E3%81%84%E3%81%A6%E3%81%BF%E3%82%8B',
        },
      },
      {
        name: '2020-05-10 00-00-00 Ergodox EZ キーボードのカスタム',
        path: 'data/igara1119/2020-05-10 00-00-00 Ergodox EZ キーボードのカスタム',
        sha: '1268758b8ac14702a8450ce72532aa869d67f2ec',
        size: 0,
        url: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2020-05-10%2000-00-00%20Ergodox%20EZ%20%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%81%AE%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0?ref=master',
        html_url:
          'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2020-05-10%2000-00-00%20Ergodox%20EZ%20%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%81%AE%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0',
        git_url:
          'https://api.github.com/repos/igara/hatenablog-export/git/trees/1268758b8ac14702a8450ce72532aa869d67f2ec',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2020-05-10%2000-00-00%20Ergodox%20EZ%20%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%81%AE%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0?ref=master',
          git: 'https://api.github.com/repos/igara/hatenablog-export/git/trees/1268758b8ac14702a8450ce72532aa869d67f2ec',
          html: 'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2020-05-10%2000-00-00%20Ergodox%20EZ%20%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%E3%81%AE%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0',
        },
      },
      {
        name: '2020-09-26 00-00-00 PC組んでみたのでいろいろ書く記事',
        path: 'data/igara1119/2020-09-26 00-00-00 PC組んでみたのでいろいろ書く記事',
        sha: '84e7085f556f83383ab9780e52d3f5866df200fa',
        size: 0,
        url: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2020-09-26%2000-00-00%20PC%E7%B5%84%E3%82%93%E3%81%A7%E3%81%BF%E3%81%9F%E3%81%AE%E3%81%A7%E3%81%84%E3%82%8D%E3%81%84%E3%82%8D%E6%9B%B8%E3%81%8F%E8%A8%98%E4%BA%8B?ref=master',
        html_url:
          'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2020-09-26%2000-00-00%20PC%E7%B5%84%E3%82%93%E3%81%A7%E3%81%BF%E3%81%9F%E3%81%AE%E3%81%A7%E3%81%84%E3%82%8D%E3%81%84%E3%82%8D%E6%9B%B8%E3%81%8F%E8%A8%98%E4%BA%8B',
        git_url:
          'https://api.github.com/repos/igara/hatenablog-export/git/trees/84e7085f556f83383ab9780e52d3f5866df200fa',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2020-09-26%2000-00-00%20PC%E7%B5%84%E3%82%93%E3%81%A7%E3%81%BF%E3%81%9F%E3%81%AE%E3%81%A7%E3%81%84%E3%82%8D%E3%81%84%E3%82%8D%E6%9B%B8%E3%81%8F%E8%A8%98%E4%BA%8B?ref=master',
          git: 'https://api.github.com/repos/igara/hatenablog-export/git/trees/84e7085f556f83383ab9780e52d3f5866df200fa',
          html: 'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2020-09-26%2000-00-00%20PC%E7%B5%84%E3%82%93%E3%81%A7%E3%81%BF%E3%81%9F%E3%81%AE%E3%81%A7%E3%81%84%E3%82%8D%E3%81%84%E3%82%8D%E6%9B%B8%E3%81%8F%E8%A8%98%E4%BA%8B',
        },
      },
      {
        name: '2020-12-04 00-00-00 USキーボード OSの違い キーバインド 違和感',
        path: 'data/igara1119/2020-12-04 00-00-00 USキーボード OSの違い キーバインド 違和感',
        sha: '1790ced05290e16cb92743428c4b77932d2f7585',
        size: 0,
        url: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2020-12-04%2000-00-00%20US%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%20OS%E3%81%AE%E9%81%95%E3%81%84%20%E3%82%AD%E3%83%BC%E3%83%90%E3%82%A4%E3%83%B3%E3%83%89%20%E9%81%95%E5%92%8C%E6%84%9F?ref=master',
        html_url:
          'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2020-12-04%2000-00-00%20US%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%20OS%E3%81%AE%E9%81%95%E3%81%84%20%E3%82%AD%E3%83%BC%E3%83%90%E3%82%A4%E3%83%B3%E3%83%89%20%E9%81%95%E5%92%8C%E6%84%9F',
        git_url:
          'https://api.github.com/repos/igara/hatenablog-export/git/trees/1790ced05290e16cb92743428c4b77932d2f7585',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2020-12-04%2000-00-00%20US%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%20OS%E3%81%AE%E9%81%95%E3%81%84%20%E3%82%AD%E3%83%BC%E3%83%90%E3%82%A4%E3%83%B3%E3%83%89%20%E9%81%95%E5%92%8C%E6%84%9F?ref=master',
          git: 'https://api.github.com/repos/igara/hatenablog-export/git/trees/1790ced05290e16cb92743428c4b77932d2f7585',
          html: 'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2020-12-04%2000-00-00%20US%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89%20OS%E3%81%AE%E9%81%95%E3%81%84%20%E3%82%AD%E3%83%BC%E3%83%90%E3%82%A4%E3%83%B3%E3%83%89%20%E9%81%95%E5%92%8C%E6%84%9F',
        },
      },
      {
        name: '2020-12-08 00-00-00 2020年の t_igarashi_sho を振り返る',
        path: 'data/igara1119/2020-12-08 00-00-00 2020年の t_igarashi_sho を振り返る',
        sha: '289f32cb0283dd90a270e9ce941d9d3a9491ab4f',
        size: 0,
        url: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2020-12-08%2000-00-00%202020%E5%B9%B4%E3%81%AE%20t_igarashi_sho%20%E3%82%92%E6%8C%AF%E3%82%8A%E8%BF%94%E3%82%8B?ref=master',
        html_url:
          'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2020-12-08%2000-00-00%202020%E5%B9%B4%E3%81%AE%20t_igarashi_sho%20%E3%82%92%E6%8C%AF%E3%82%8A%E8%BF%94%E3%82%8B',
        git_url:
          'https://api.github.com/repos/igara/hatenablog-export/git/trees/289f32cb0283dd90a270e9ce941d9d3a9491ab4f',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2020-12-08%2000-00-00%202020%E5%B9%B4%E3%81%AE%20t_igarashi_sho%20%E3%82%92%E6%8C%AF%E3%82%8A%E8%BF%94%E3%82%8B?ref=master',
          git: 'https://api.github.com/repos/igara/hatenablog-export/git/trees/289f32cb0283dd90a270e9ce941d9d3a9491ab4f',
          html: 'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2020-12-08%2000-00-00%202020%E5%B9%B4%E3%81%AE%20t_igarashi_sho%20%E3%82%92%E6%8C%AF%E3%82%8A%E8%BF%94%E3%82%8B',
        },
      },
      {
        name: '2021-12-15 00-00-00 プライベートと現場',
        path: 'data/igara1119/2021-12-15 00-00-00 プライベートと現場',
        sha: 'fb2f9f4bdc422e98f14db83b47320394b7d682b8',
        size: 0,
        url: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2021-12-15%2000-00-00%20%E3%83%97%E3%83%A9%E3%82%A4%E3%83%99%E3%83%BC%E3%83%88%E3%81%A8%E7%8F%BE%E5%A0%B4?ref=master',
        html_url:
          'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2021-12-15%2000-00-00%20%E3%83%97%E3%83%A9%E3%82%A4%E3%83%99%E3%83%BC%E3%83%88%E3%81%A8%E7%8F%BE%E5%A0%B4',
        git_url:
          'https://api.github.com/repos/igara/hatenablog-export/git/trees/fb2f9f4bdc422e98f14db83b47320394b7d682b8',
        download_url: null,
        type: 'dir',
        _links: {
          self: 'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119/2021-12-15%2000-00-00%20%E3%83%97%E3%83%A9%E3%82%A4%E3%83%99%E3%83%BC%E3%83%88%E3%81%A8%E7%8F%BE%E5%A0%B4?ref=master',
          git: 'https://api.github.com/repos/igara/hatenablog-export/git/trees/fb2f9f4bdc422e98f14db83b47320394b7d682b8',
          html: 'https://github.com/igara/hatenablog-export/tree/master/data/igara1119/2021-12-15%2000-00-00%20%E3%83%97%E3%83%A9%E3%82%A4%E3%83%99%E3%83%BC%E3%83%88%E3%81%A8%E7%8F%BE%E5%A0%B4',
        },
      },
    ];

    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve({
            ok: true,
            status: 200,
            json: async () => hatenaList,
          });
        }),
    );

    TestingLibrary.render(<BlogsHatenaIndexPage />);
    await TestingLibrary.waitFor(() =>
      TestingLibrary.screen.getByText(hatenaList[0].name),
    );

    expect(TestingLibrary.screen.getByText(hatenaList[0].name)).toBeInTheDocument();
  });
});
