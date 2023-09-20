/**
 * @jest-environment jsdom
 */

import { convertTime, getPlayTimeRange, getRunningTime } from './rangeUtils';
import VIDEO from 'src/Assets/video/Big_Buck_Bunny.mp4';

describe('rangeUtils', () => {
  test('convertTime 함수', () => {
    expect(convertTime(3600)).toBe('1:00:00');
    expect(convertTime(596)).toBe('9:56');
  });

  test('getPlayTimeRange 함수', () => {
    const video = document.createElement('video');
    video.src = VIDEO;
    const playTime = 10;
    const setPlayTime = jest.fn();

    getPlayTimeRange({ video, playTime, setPlayTime });
    expect(setPlayTime).toBeCalledWith(Math.floor(video.currentTime));
  });

  test('getRunningTime 함수', () => {
    const video = document.createElement('video');
    video.src = VIDEO;
    const setRunningTime = jest.fn();
    getRunningTime({ video, setRunningTime });

    expect(setRunningTime).toBeCalledWith(Math.floor(video.duration));
  });
});
