import React from 'react';
import TestingLibrary from '@testing-library/react';
import { Page } from '../../page';

describe('Page確認', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<Page />);
    expect(
      '<div>すみません、syonet工事中です。<br>工事現場: https://github.com/igara/syonet_eight</div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
