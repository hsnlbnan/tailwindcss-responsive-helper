const merge = require('lodash/merge');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const customPlugin = require('./index.js');

expect.extend({
  toMatchCss: cssMatcher,
});

function generatePluginCss(overrides) {
  const config = {
    theme: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
    },
    corePlugins: false,
    plugins: [customPlugin],
  };

  return postcss(tailwindcss(merge(config, overrides)))
    .process('@tailwind base; @tailwind utilities', {
      from: undefined,
    })
    .then(({ css }) => css);
}

test('temel stiller ve medya sorguları oluşturulabilir', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(`
      body::before {
        content: "xs";
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        padding: 0.5rem 0.75rem;
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        font-size: 0.775rem;
        border-radius: 0.25rem;
        z-index: 9999;
      }
      @media (min-width: 480px) {
        body::before {
          content: "xs";
        }
      }
      @media (min-width: 640px) {
        body::before {
          content: "sm";
        }
      }
      @media (min-width: 768px) {
        body::before {
          content: "md";
        }
      }
      @media (min-width: 1024px) {
        body::before {
          content: "lg";
        }
      }
      @media (min-width: 1280px) {
        body::before {
          content: "xl";
        }
      }
      @media (min-width: 1536px) {
        body::before {
          content: "2xl";
        }
      }
      @media (min-width: 1920px) {
        body::before {
          content: "3xl";
        }
      }
      body.debug-screens::before {
        display: block;
      }
      body:not(.debug-screens)::before {
        display: none;
      }
    `);
  });
});
