"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugin = require('tailwindcss/plugin');
const tailwindPlugin = plugin(({ addBase, theme }) => {
    const screens = theme('screens', {});
    const sortedScreens = Object.entries(screens).sort((a, b) => parseInt(a[1]) - parseInt(b[1]));
    const baseStyles = {
        'body::before': {
            content: `"${sortedScreens[0][0]}"`,
            position: 'fixed',
            bottom: '1rem',
            right: '1rem',
            padding: '0.5rem 0.75rem',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            fontSize: '0.775rem',
            borderRadius: '0.25rem',
            zIndex: '9999',
        },
    };
    addBase(baseStyles);
    const mediaQueries = sortedScreens.reduce((acc, [label, size]) => {
        acc[`@media (min-width: ${size})`] = {
            'body::before': {
                content: `"${label}"`,
            },
        };
        return acc;
    }, {});
    addBase(mediaQueries);
    addBase({
        'body.debug-screens::before': {
            display: 'block',
        },
        'body:not(.debug-screens)::before': {
            display: 'none',
        },
    });
});
exports.default = tailwindPlugin;
