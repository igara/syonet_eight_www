import React from 'react';
import TestingLibrary from '@testing-library/react';
import { IndexPage } from '../../index_page';

describe('IndexPage確認', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<IndexPage />);
    expect(
      '<div>すみません、syonet工事中です。<br>工事現場: <a href="https://github.com/igara/syonet_eight" target="_blank" rel="noreferrer">https://github.com/igara/syonet_eight</a></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
