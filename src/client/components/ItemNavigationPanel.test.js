import React from 'react'
import {act, fireEvent, render, screen} from '@testing-library/react'
import ItemNavigationPanel from './ItemNavigationPanel'

describe('ItemNavigationPanel tests', () => {
    const props = {
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
        ],
        addToSelectedItems: jest.fn()
    }

    it('renders a navigation list of items', () => {

        const component = render(<ItemNavigationPanel {...props}/>);
        expect(screen.getByText('Dark Chocolate Brownie')).toBeInTheDocument();
        expect(screen.getByText('Mangajo Pomegranate')).toBeInTheDocument();
        expect(component.container.querySelector("ul")).toBeInTheDocument();
    })

    it('adds item to preview panel on click of item', async () => {

        render(<ItemNavigationPanel {...props}/>);
        const item = await screen.getByText('Dark Chocolate Brownie');
        fireEvent.click(item);
        expect(props.addToSelectedItems).toHaveBeenCalledTimes(1);
        expect(props.addToSelectedItems).toHaveBeenCalledWith({
            id: 10018,
            name: 'Dark Chocolate Brownie',
            dietaries: ['v', 'gf'],
        });
    })
})
