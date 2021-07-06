import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header tests', () => {

    it('renders a message', () => {
        render(<Header />);
        expect(screen.getByText('6 items')).toBeInTheDocument();
    })

})
