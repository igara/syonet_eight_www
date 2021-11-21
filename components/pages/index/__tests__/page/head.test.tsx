import React from 'react';
import TestingLibrary from '@testing-library/react';
import { Head } from '../../head';

describe('Head確認', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('初期表示', () => {
    const renderTest = TestingLibrary.render(<Head />);
    expect(
      '<div><title>syonet</title><meta name="description" content="syo.igarashiの実験場"><link rel="icon" href="/favicon.ico"></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
