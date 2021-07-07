import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import api from '../helpers/api';

jest.mock('../helpers/api', () => {
    return {
        Items: {
            get: jest.fn(),
        },
    };
});

describe('App tests', () => {

    beforeEach(() => {
        api.Items.get.mockReturnValueOnce(
            Promise.resolve({
                items: [
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
                ]
            }),
        );
    });

    it('renders header', () => {
        render(<App />)
        expect(screen.getByTestId('header')).toBeInTheDocument()
    })

    it('renders Item Navigation Panel', () => {
        render(<App />)
        expect(screen.getByTestId('itemNavigationPanel')).toBeInTheDocument()
    })

    it('renders Item Preview Panel', () => {
        render(<App />)
        expect(screen.getByTestId('itemPreviewPanel')).toBeInTheDocument()
    })
})
