import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import ItemFilterPanel from "./ItemFilterPanel";

describe('ItemFilterPanel tests', () => {
    const props = {
        searchItems : jest.fn()
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders a input control', () => {
        render(<ItemFilterPanel {...props}/>);
        expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    });

    it('search for item on change of input', async () => {
        const searchString = "BroCcoli";
        const component = await render(<ItemFilterPanel {...props} />);
        const searchStringInput = screen.getByTestId('searchStringInput');
        fireEvent.change(searchStringInput, {
            target: { value: searchString },
        });
        expect(props.searchItems).toHaveBeenCalledWith(searchString);
    });
})
