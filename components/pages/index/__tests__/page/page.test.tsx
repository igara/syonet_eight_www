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
      '<div><div css="You have tried to stringify object returned from `css` function. It isn\'t supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."><nav><i class="css-fsfbn2">c</i><div>ddd</div></nav><div><header>syonet</header><main>aaa</main><footer>© syonet.work. All Rights Reserved.</footer></div></div></div>',
    ).toBe(renderTest.baseElement.innerHTML);
  });
});
