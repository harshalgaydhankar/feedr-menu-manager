import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import ItemPreview from "./ItemPreview";

describe('ItemPreview tests', () => {

    it('previews an item with close button', () => {
        const item = {
                id: 10018,
                name: 'Dark Chocolate Brownie',
                dietaries: ['v', 'gf'],
            };
        const component  = render(<ItemPreview item={item}/>);

        expect(component.container.querySelector("li")).toBeInTheDocument();
        expect(screen.getByText('Dark Chocolate Brownie')).toBeInTheDocument();
        expect(screen.getByText('x')).toBeInTheDocument();
    })

    it('calls closePreview prop on close button click', () => {
        const props = {
            item: {
                id: 10018,
                name: 'Dark Chocolate Brownie',
                dietaries: ['v', 'gf'],
            },
            closePreview : jest.fn()
        };
        render(<ItemPreview {...props}/>);
        fireEvent.click(screen.getByText('x'));
        expect(props.closePreview).toHaveBeenCalledTimes(1);
    })

})
