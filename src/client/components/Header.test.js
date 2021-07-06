import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import api from "../helpers/api";

describe('Header tests', () => {
    let dietaries = new Map();
    dietaries.set('ve',6);
    dietaries.set('v',4);
    dietaries.set('n!',12);

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    it('renders a message which shows no of item selected', () => {
        render(<Header itemCount={9} dietaries={dietaries}/>);
        expect(screen.getByText('9 items')).toBeInTheDocument();
    })

    it('renders a dietaries of selected items', async () => {
        render(<Header itemCount={9} dietaries={dietaries}/>);

        expect(screen.getByText((content, node) => {
            const hasText = (node) => node.textContent === "6x";
            const nodeHasText = hasText(node);
            const childrenDontHaveText = Array.from(node.children).every(
                (child) => !hasText(child)
            );

            return nodeHasText && childrenDontHaveText;
        })).toBeInTheDocument();

    })

})
