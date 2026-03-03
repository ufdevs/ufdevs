import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
    test('renders button with children', () => {
        render(<Button>Test Button</Button>);
        expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    test('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('applies variant classes', () => {
        const { container } = render(<Button variant="primary">Primary Button</Button>);
        expect(container.firstChild).toHaveClass('bg-emerald-600');

        const { container: container2 } = render(<Button variant="secondary">Secondary Button</Button>);
        expect(container2.firstChild).toHaveClass('bg-gray-700');

        const { container: container3 } = render(<Button variant="gradient">Gradient Button</Button>);
        expect(container3.firstChild).toHaveClass('bg-gradient-to-r');
    });

    test('applies size classes', () => {
        const { container } = render(<Button size="sm">Small Button</Button>);
        expect(container.firstChild).toHaveClass('text-sm');

        const { container: container2 } = render(<Button size="md">Medium Button</Button>);
        expect(container2.firstChild).toHaveClass('text-base');

        const { container: container3 } = render(<Button size="lg">Large Button</Button>);
        expect(container3.firstChild).toHaveClass('text-lg');
    });

    test('renders icon when provided', () => {
        const testIcon = <span data-testid="test-icon">Icon</span>;
        render(<Button icon={testIcon}>Button with Icon</Button>);
        expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });
}); 