import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import api from '../helpers/api';

jest.mock('../helpers/api', () => {
    return {
        Items: {
            get: jest.fn(),
            search: jest.fn()
        },
    };
});

describe('App tests', () => {
    const items = [
        {
            id: 10018,
            name: 'Dark Chocolate Brownie',
            dietaries: ['v', 'gf'],
        },
        {
            id: 10019,
            name: 'Mangajo Pomegranate',
            dietaries: ['ve', 'df', 'gf'],
        }
    ];
    beforeEach(() => {
        api.Items.get.mockReturnValueOnce(
            Promise.resolve({
                items
            }),
        );
        api.Items.search.mockReturnValueOnce(
            Promise.resolve({
                items
            }),
        );
    });

    it('renders header', () => {
        render(<App />);
        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(api.Items.get).toBeCalled();
    })

    it('renders Item Filter Panel', () => {
        render(<App />);
        expect(screen.getByTestId('itemFilterPanel')).toBeInTheDocument();
        expect(api.Items.get).toBeCalled();
    })

    it('renders Item Navigation Panel', () => {
        render(<App />);
        expect(screen.getByTestId('itemNavigationPanel')).toBeInTheDocument();
        expect(api.Items.get).toBeCalled();
    })

    it('renders Item Preview Panel', () => {
        render(<App />);
        expect(screen.getByTestId('itemPreviewPanel')).toBeInTheDocument();
        expect(api.Items.get).toBeCalled();
    })
})
