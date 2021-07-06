import React from 'react'
import {act, render, screen} from '@testing-library/react'
import ItemNavigationPanel from './ItemNavigationPanel'
import api from '../helpers/api';

jest.mock('../helpers/api', () => {
    return {
        Items: {
            get: jest.fn(),
        },
    };
});


describe('ItemNavigationPanel tests', () => {

    beforeEach(() => {
        jest.useFakeTimers();
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

    afterEach(() => {
        jest.clearAllMocks();
        jest.useRealTimers();
    });

    it('renders a input control', () => {
        render(<ItemNavigationPanel/>);
        expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    })

    it('renders a navigation list of items', async () => {

        const component = render(<ItemNavigationPanel/>);
        jest.advanceTimersByTime(1000);
        expect(await screen.findByText('Dark Chocolate Brownie')).toBeInTheDocument()
        expect(await screen.findByText('Mangajo Pomegranate')).toBeInTheDocument()
        expect(component.container.querySelector("ul")).toBeInTheDocument();
        expect(api.Items.get).toHaveBeenCalledTimes(1);
    })
})
