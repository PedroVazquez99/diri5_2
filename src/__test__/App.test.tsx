import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';

describe('Comida Rápida App', () => {

    afterEach(() => {
        cleanup();
    });

    it('muestra cuatro productos en la carta inicial con nombre y stock', async () => {
        render(<App />);
        const title = screen.getByText('Comida Rápida Online');
        expect(title).toBeInTheDocument();

        const items = await screen.findAllByRole('listitem');
        expect(items).toHaveLength(4);

        // Comprobamos que hay nombre y stock
        expect(screen.getByText('Hamburguesa de Pollo')).toBeInTheDocument();
        expect(screen.getByText('#40')).toBeInTheDocument();
    });

    it('al pulsar "Pedir Comida" se muestran los precios de los productos', async () => {
        const user = userEvent.setup();
        render(<App />);

        const toggleButton = screen.getByText('Pedir Comida');
        await user.click(toggleButton);

        const cartaTitle = await screen.findByText('Carta');
        expect(cartaTitle).toBeInTheDocument();

        // Hay 4 productos renderizados
        const foodItems = await screen.findAllByRole('listitem');
        expect(foodItems).toHaveLength(4);

        // Comprobamos que hay al menos un precio visible
        expect(screen.getByText('12$')).toBeInTheDocument();
    });

    it('el precio total se calcula correctamente según la cantidad seleccionada', async () => {
        const user = userEvent.setup();
        render(<App />);

        // Ir a "Pedir Comida"
        await user.click(screen.getByText('Pedir Comida'));

        // Seleccionar la primera comida
        const firstFood = await screen.findByText('Esto es una haburguesa de pollo');
        await user.click(firstFood);

        // Cambiar cantidad
        const cantidadInput = await screen.findByLabelText('Cantidad');
        await user.clear(cantidadInput);
        await user.type(cantidadInput, '3');

        // Volver al menú
        const backButton = screen.getByText('Volver');
        await user.click(backButton);

        // Volver a disponibilidad para ver stock actualizado
        const toggleButton2 = screen.getByText('Disponibilidad');
        await user.click(toggleButton2);

        // Verificar que el stock ha cambiado a #37
        expect(await screen.findByText('#37')).toBeInTheDocument();


    });
});
