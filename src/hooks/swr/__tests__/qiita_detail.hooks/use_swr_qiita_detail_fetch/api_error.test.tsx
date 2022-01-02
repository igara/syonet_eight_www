import React from 'react';
import TestingLibrary from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSWRQiitaDetailFetch } from '../../..';

const spyConsoleError = jest.spyOn(global.console, 'error').mockImplementation();

describe('use_swr_qiita_list_fetch', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('api_error', async () => {
    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((_, reject) => {
          reject({
            ok: false,
            status: 500,
          });
        }),
    );

    const TestComponent = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const result = useSWRQiitaDetailFetch(
        '2015-10-11 18-51-31-[メモ]Vagrantを使ってVMを起動する',
      );

      return <div>{result.error && 'error message'}</div>;
    };

    TestingLibrary.render(<TestComponent />);
    await TestingLibrary.waitFor(() => TestingLibrary.screen.getByText('error message'));
    expect(TestingLibrary.screen.getByText('error message')).toBeInTheDocument();

    expect([[{ ok: false, status: 500 }]]).toEqual(spyConsoleError.mock.calls);
  });
});
