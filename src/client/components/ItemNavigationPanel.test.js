import React from 'react'
import { render, screen } from '@testing-library/react'
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
        api.Items.get.mockReturnValueOnce(
            Promise.resolve({
                json: () => Promise.resolve(['123']),
            }),
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders a input control', () => {
        render(<ItemNavigationPanel />);
        expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    })

    it('renders a navigation list of items', () => {
        const component  = render(<ItemNavigationPanel />);
        expect(component.container.querySelector("ul")).toBeInTheDocument();
        expect(api.Items.get).toHaveBeenCalledTimes(1);
    })
})
