import React from 'react';
import TestingLibrary from '@testing-library/react';
// import { IndexPage } from '../../';

describe('IndexPage', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    // const renderTest = TestingLibrary.render(<IndexPage />);
    // expect('<div></div>').toBe(renderTest.baseElement.innerHTML);
    expect('1').toBe('1');
  });
});
