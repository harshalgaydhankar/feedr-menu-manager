import React from 'react'
import { render, screen } from '@testing-library/react'
import ItemPreview from "./ItemPreview";
import ItemPreviewPanel from "./ItemPreviewPanel";

describe('ItemPreview tests', () => {

    it('previews an item with close button', () => {
        const item = {
                id: 10018,
                name: 'Dark Chocolate Brownie',
                dietaries: ['v', 'gf'],
            };
        const component  = render(<ItemPreview item={item}/>);

        expect(component.container.querySelector("li")).toBeInTheDocument();
        expect( screen.getByText('Dark Chocolate Brownie')).toBeInTheDocument();
        expect(screen.getByText('x')).toBeInTheDocument();
    })

})
