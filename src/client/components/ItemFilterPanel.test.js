import React from 'react'
import { render, screen } from '@testing-library/react'
import ItemFilterPanel from "./ItemFillterPanel";

describe('ItemFilterPanel tests', () => {

    it('renders a input control', () => {
        render(<ItemFilterPanel />);
        expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    })

})
