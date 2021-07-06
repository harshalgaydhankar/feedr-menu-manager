import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App tests', () => {
    it('renders header', () => {
        render(<App />)
        expect(screen.getByTestId('header')).toBeInTheDocument()
    })

    it('renders Item Navigation Panel', () => {
        render(<App />)
        expect(screen.getByTestId('itemNavigationPanel')).toBeInTheDocument()
    })

    it('renders Item Preview Panel', () => {
        render(<App />)
        expect(screen.getByTestId('itemPreviewPanel')).toBeInTheDocument()
    })
})
