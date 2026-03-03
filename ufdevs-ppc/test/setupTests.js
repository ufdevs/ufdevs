// add some helpful assertions
import '@testing-library/jest-dom';

// Mock for framer-motion
jest.mock('framer-motion', () => {
    const actual = jest.requireActual('framer-motion');
    return {
        ...actual,
        motion: {
            ...actual.motion,
            div: ({ children, ...props }) => <div {...props}>{children}</div>,
            button: ({ children, ...props }) => <button {...props}>{children}</button>,
        },
    };
}); 