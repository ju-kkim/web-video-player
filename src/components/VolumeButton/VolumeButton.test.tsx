/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VolumeButton from './index';
import { renderProvider } from 'src/utils/test';
import { TEST_ID } from 'src/constants/testId';
import Video from '../Video';

describe('VolumeButton', () => {
  test('VolumeButton 표시', () => {
    renderProvider(<VolumeButton />);
    const Button = screen.getByTestId(TEST_ID.VOLUME_BUTTON);
    expect(Button).toBeInTheDocument();
  });

  test('isVolumeOff가 true일 때 음소거 버튼 아이콘 변경', async () => {
    renderProvider(
      <>
        <Video />
        <VolumeButton />
      </>,
    );

    const video = screen.getByTestId(TEST_ID.VIDEO);
    const iconButton = screen.getByTestId(TEST_ID.MUTE);
    expect(video).toBeInTheDocument();
    expect(iconButton).toBeInTheDocument();

    userEvent.click(iconButton);

    await waitFor(() => {
      const changeTestid = iconButton.getAttribute('data-testid');
      expect(changeTestid).not.toBe(TEST_ID.MUTE);
      expect(changeTestid).toBe(TEST_ID.NOT_MUTE);
    });
  });
});
