import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header tests', () => {

    it('renders a message', () => {
        render(<Header itemCount={9}/>);
        expect(screen.getByText('9 items')).toBeInTheDocument();
    })

})
