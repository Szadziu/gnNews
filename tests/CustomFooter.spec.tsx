import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomFooter from '../src/components/CustomFooter';

describe('CustomFooter', () => {
    test('articles amount renders correctly', () => {
        render(<CustomFooter />);
        expect(screen.getByText(/Liczba wyświetlanych artykułów: \d+/i)).toBeInTheDocument();
    });
});
