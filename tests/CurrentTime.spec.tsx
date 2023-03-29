import React from 'react';
import {render, screen} from '@testing-library/react';
import CurrentTime from '../src/components/CurrentTime';

describe('CurrentTime', () => {
    const timeRegex = /\d{1,2}:\d{2}:\d{2}\s(AM|PM)/;

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it('displays the current time', () => {
        const dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1648767600000); // 2023-03-01T00:00:00.000Z
        render(<CurrentTime />);
        const displayedTime = screen.getByTestId('current-time').textContent;
        expect(displayedTime).toMatch(timeRegex);
        dateNowSpy.mockRestore();
    });

    it('updates the time every second', () => {
        const dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1648767600000); // 2023-03-01T00:00:00.000Z
        render(<CurrentTime />);
        expect(screen.getByTestId('current-time').textContent).toMatch(timeRegex);
        jest.advanceTimersByTime(1000);
        expect(screen.getByTestId('current-time').textContent).toMatch(timeRegex);
        dateNowSpy.mockRestore();
    });
});
