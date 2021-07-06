import React from 'react'
import { render, screen } from '@testing-library/react'
import ItemPreviewPanel from './ItemPreviewPanel'

describe('ItemPreviewPanel tests', () => {

    it('renders a message', () => {
        render(<ItemPreviewPanel />)
        expect(screen.getByText('Menu preview')).toBeInTheDocument()
    })

    it('renders a list of item preview', () => {
        const component  = render(<ItemPreviewPanel />);
        expect(component.container.querySelector("ul")).toBeInTheDocument();
    })

})
