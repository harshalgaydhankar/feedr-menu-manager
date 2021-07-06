import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import ItemPreviewPanel from './ItemPreviewPanel'
import api from "../helpers/api";

describe('ItemPreviewPanel tests', () => {

    it('renders a heading text', () => {
        render(<ItemPreviewPanel selectedItems={[]}/>)
        expect(screen.getByText('Menu preview')).toBeInTheDocument()
    })

    it('renders a empty list of item preview', () => {
        const component = render(<ItemPreviewPanel selectedItems={[]}/>);
        expect(component.container.querySelector("li")).not.toBeInTheDocument();
    })

    it('renders selected list of item preview', () => {
        let selectedItems = [
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
        const component = render(<ItemPreviewPanel selectedItems={selectedItems}/>);

        expect(component.container.querySelector("ul")).toBeInTheDocument();
        expect(screen.getByText('Dark Chocolate Brownie')).toBeInTheDocument();
        expect(screen.getByText('Mangajo Pomegranate')).toBeInTheDocument();
    })

    it('removes item preview from panel on close button click', () => {
        const props = {
            selectedItems: [
                {
                    id: 10018,
                    name: 'Dark Chocolate Brownie',
                    dietaries: ['v', 'gf'],
                }
            ],
            removeItem: jest.fn()
        }
        render(<ItemPreviewPanel {...props}/>);
        fireEvent.click(screen.getByText('x'));
        expect(props.removeItem).toHaveBeenCalledTimes(1);
        expect(props.removeItem).toHaveBeenCalledWith(10018);
    })

})
