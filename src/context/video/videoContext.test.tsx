/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { renderProvider } from 'src/utils/test';
import { useVideo } from './context';
import { VIDEO_INFO } from 'src/common/Constants';

test('useVideo', async () => {
  function TestComponent({}) {
    const { runningTime, setRunningTime, playTime, setPlayTime, isPlay, setIsPlay, isEnd, setIsEnd } = useVideo();
    return (
      <>
        <span
          data-testid="runningTime"
          onClick={() => setRunningTime((prevRunningTime) => prevRunningTime + 1)}
        >{`${runningTime}`}</span>
        <span
          data-testid="playTime"
          onClick={() => setPlayTime((prevPlayTime) => prevPlayTime + 1)}
        >{`${playTime}`}</span>
        <span data-testid="isPlay" onClick={() => setIsPlay(!isPlay)}>{`${isPlay}`}</span>
        <span data-testid="isEnd" onClick={() => setIsEnd(!isEnd)}>{`${isEnd}`}</span>
      </>
    );
  }
  renderProvider(<TestComponent />);

  const runningTimeEle = screen.getByTestId('runningTime');
  const playTimeEle = screen.getByTestId('playTime');
  const isPlayEle = screen.getByTestId('isPlay');
  const isEndEle = screen.getByTestId('isEnd');

  expect(runningTimeEle).toHaveTextContent(`${VIDEO_INFO.TIME.START}`);
  expect(playTimeEle).toHaveTextContent(`${VIDEO_INFO.TIME.START}`);
  expect(isPlayEle).toHaveTextContent('true');
  expect(isEndEle).toHaveTextContent('false');

  userEvent.click(runningTimeEle);
  userEvent.click(playTimeEle);
  userEvent.click(isPlayEle);
  userEvent.click(isEndEle);

  await waitFor(() => {
    expect(runningTimeEle).toHaveTextContent(`${VIDEO_INFO.TIME.START + 1}`);
    expect(playTimeEle).toHaveTextContent(`${VIDEO_INFO.TIME.START + 1}`);
    expect(isPlayEle).toHaveTextContent('false');
    expect(isEndEle).toHaveTextContent('true');
  });
});
