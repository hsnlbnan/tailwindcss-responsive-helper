
# Tailwind CSS Screen Indicator


A Tailwind CSS plugin that displays the current screen breakpoint label (e.g., ```xs```, ```sm```, ```md```, ```lg```, ```xl```, ```2xl```) in the corner of your page. This helps developers quickly identify the active breakpoint while working on responsive designs.

<div style="display: flex; justify-content: space-between; gap: 10px;">
  <img src="https://github.com/user-attachments/assets/5402acf4-dd09-4d06-b2d4-789330dd294d" width="45%" />
  <img src="https://github.com/user-attachments/assets/77d8e7db-3aeb-4967-81c5-b1a8db50af44" width="45%" />
</div>

## Installation

Install the plugin via npm:

```bash
    npm install tailwindcss-responsive-helper
```
Then add it to your tailwind.config.js file:

```bash
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('tailwindcss-screen-indicator'),
    // ...other plugins
  ],
};
```



## Usage/Examples
To display the screen indicator, add the debug-screens class to your <body> element:


```javascript
<body class="debug-screens">
  <!-- Your content -->
</body>
```

The indicator will now appear in the corner of your page, showing the current Tailwind CSS breakpoint label.




# How It Works


The plugin creates a pseudo-element ```(::before)``` on the ```<body>``` tag that displays the current breakpoint label based on your Tailwind CSS configuration. It listens to screen size changes and updates the label accordingly.





## Customization
### Positioning
By default, the indicator appears at the bottom-right corner of the page. You can customize its position by overriding the CSS styles:

```bash
/* Your custom CSS */
body::before {
  bottom: auto;
  top: 1rem;
  right: auto;
  left: 1rem;
}
```
### Styling
To customize the appearance, you can override the default styles in your CSS:

```bash
/* Your custom CSS */
body::before {
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffcc00;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}

```

### Breakpoint Support
The plugin automatically detects all breakpoints defined in your tailwind.config.js, including custom screen sizes:

```bash
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        xs: '460px',
        '3xl': '1921px',
        // ...other custom screens
      },
    },
  },
  // ...other configurations
};
```
## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.



