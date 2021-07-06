import React from 'react'
import { render, screen } from '@testing-library/react'
import ItemNavigationPanel from './ItemNavigationPanel'

describe('ItemNavigationPanel tests', () => {

    it('renders a input control', () => {
        render(<ItemNavigationPanel />);
        expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    })

    it('renders a navigation list of items', () => {
        const component  = render(<ItemNavigationPanel />);
        expect(component.container.querySelector("ul")).toBeInTheDocument();
    })
})
