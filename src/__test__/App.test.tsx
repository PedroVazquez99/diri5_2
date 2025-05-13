// Imports
import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// To Test
import App from '../App';
// Tests
describe('Renders main page correctly', async () => {

    /*** Reseteamos todos los renderizadores tras cada test */
    afterEach(() => {
        cleanup();
    });

    // TEST 1
    it('Should render the page correctly', async () => {
        render(<App />);
        const h1 = await screen.queryByText('Vite + React');
        expect(h1).not.toBeNull();
    });

    // TEST 2
    it('Should show the button count set to 0', async () => {
        // Inicialización
        await render(<App />);
        const button = await screen.queryByText('count is 0');
        // Comprobaciones
        expect(button).not.toBeNull();
    });

    // TEST 3
    it('Should show the button count set to 3', async () => {
        // Inicialización
        await render(<App />);
        const button = await screen.queryByText('count is 0');
        // Comprobaciones previas
        expect(button).not.toBeNull();
        // Acciones
        fireEvent.click(button as HTMLElement);
        fireEvent.click(button as HTMLElement);
        fireEvent.click(button as HTMLElement);
        // Comprobaciones posteriores
        expect(button?.innerHTML).toBe('count is 3');
    });

    // TEST 4
    it('Should show the button count set to 3', async () => {
        const user = userEvent.setup();
        // Inicialización
        await render(<App />);
        const button = await screen.queryByText('count is 0');
        // Comprobaciones previas
        expect(button).not.toBeNull();
        // Acciones
        //fireEvent.click(button as HTMLElement);
        await user.click(button as HTMLElement);
    });

    // TEST 5
    it('Should render the page correctly', async () => {
        // Inicialización
        render(<App />);
        const h1 = await screen.queryByText('Vite + React');
        // Comprobaciones
        // Antes expect(h1).not.toBeNull();
        // Con Jest DOM
        expect(h1).toBeInTheDocument();
    });

    it('renders two images with the correct URLs', () => {
        render(<App />)

        // Grab all <img> elements
        const images = screen.getAllByRole('img')
        expect(images).toHaveLength(2)

        // Check that each has the correct src
        // Depending on your build, the actual URLs might differ, so you can do substring checks:
        expect(images[0]).toHaveAttribute('src', expect.stringContaining('vite.svg'))
        expect(images[1]).toHaveAttribute('src', expect.stringContaining('react.svg'))
    });



});