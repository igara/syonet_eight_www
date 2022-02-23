import React from 'react';
import TestingLibrary from '@testing-library/react';
import { SearchPage } from '../..';

describe('SearchPage', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<SearchPage />);
    expect(
      '<div><div class="css-118r9s0"><input type="search" placeholder="ページ検索" readonly="" class="css-1rjs02b" value=""></div></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
