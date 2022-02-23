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
      '<div><header><div class="css-118r9s0"><input type="search" placeholder="ページ検索" readonly="" class="css-1rjs02b" value=""></div></header></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
