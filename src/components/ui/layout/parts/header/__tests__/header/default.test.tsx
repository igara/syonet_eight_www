import React from 'react';
import TestingLibrary from '@testing-library/react';
import { Header } from '../../';

describe('Header', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<Header />);
    expect(
      '<div><header><div class="css-1frwyh"><input type="search" placeholder="ページ検索" readonly="" class="css-19dbqj5" value=""></div><dialog class="css-us853g"><div class="css-nb6x2c"><div class="css-1jqu4hs"><div class="css-1frwyh"><input type="text" placeholder="ページ検索" class="css-19dbqj5" value=""></div><div class="css-19sk4h4"><select class="css-1si9jw1"><option value="10">10件表示</option><option value="20">20件表示</option></select><div class="css-1dejoba"></div><div class="css-22mrst"><label>10件表示</label><svg class="css-8w34lm" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31" fill="#C4C4C4" stroke="black" stroke-width="2"></circle><path d="M32 44L11.2154 26L52.7846 26L32 44Z" fill="black"></path></svg></div><div class="css-1jsa7p4"><div data-value="10" class="css-1rj6bi8">10件表示</div><div data-value="20" class="css-1rj6bi8">20件表示</div></div></div><div><div class="css-1qkhve4"><select multiple="" class="css-1si9jw1"></select><div class="css-1dejoba"></div><div class="css-22mrst"><label>検索タグを選択</label><svg class="css-8w34lm" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31" fill="#C4C4C4" stroke="black" stroke-width="2"></circle><path d="M32 44L11.2154 26L52.7846 26L32 44Z" fill="black"></path></svg></div><div class="css-c23fk0"></div></div></div><ul><li><a href="/">トップページ</a></li></ul></div><button type="button" class="css-105lmki"><svg class="css-m2k7uj" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="31" fill="#C4C4C4" stroke="black" stroke-width="2"></circle><path d="M24.5373 52L52 12H39.4627L12 52H24.5373Z" fill="black"></path><path d="M39.4627 52L12 12H24.5373L52 52H39.4627Z" fill="black"></path></svg></button></div></dialog></header></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
