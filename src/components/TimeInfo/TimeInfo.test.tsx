/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderProvider } from 'src/utils/test';
import TimeInfo from '.';
import { TEST_ID } from 'src/constants/testId';

test('TimeInfo', () => {
  renderProvider(<TimeInfo />);
  const runningTime = screen.getByTestId(TEST_ID.RUNNING_TIME);
  const playTime = screen.getByTestId(TEST_ID.PLAY_TIME);
  expect(runningTime).toBeInTheDocument();
  expect(playTime).toBeInTheDocument();
});
