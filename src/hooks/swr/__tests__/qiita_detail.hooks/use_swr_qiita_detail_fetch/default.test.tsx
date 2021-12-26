import React from 'react';
import TestingLibrary from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSWRQiitaDetailFetch } from '../../../';

describe('use_swr_qiita_list_fetch', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('default', async () => {
    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve({
            ok: true,
            status: 200,
            text: async () => 'hoge',
          });
        }),
    );

    const TestComponent = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const result = useSWRQiitaDetailFetch(
        '2015-10-11 18-51-31-[メモ]Vagrantを使ってVMを起動する',
      );

      return <div>{result.data}</div>;
    };

    TestingLibrary.render(<TestComponent />);
    await TestingLibrary.waitFor(() => TestingLibrary.screen.getByText('hoge'));
    expect(TestingLibrary.screen.getByText('hoge')).toBeInTheDocument();
  });
});
