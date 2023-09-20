/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Video from './index';
import { renderProvider } from 'src/utils/test';
import { TEST_ID } from 'src/constants/testId';

test('Video 표시', () => {
  renderProvider(<Video />);
  const video = screen.getByTestId(TEST_ID.VIDEO) as HTMLVideoElement;
  expect(video).toBeInTheDocument();
});
