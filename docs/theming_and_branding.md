

  # Customizing Branding and Theming

The Dev-Docs template allows you to easily apply your own branding and customize the visual theme. This guide covers how to:

- Change the logo
- Modify the color scheme 
- Adjust other visual elements

## Changing the Logo

To use your own logo:

1. Replace the default logo image file in the `static/img` directory with your own logo file.

2. Update the `logo` configuration in `docusaurus.config.js`:

```js
navbar: {
  logo: {
    alt: 'Your Logo Alt Text',
    src: 'img/your-logo-filename.png',
  },
},
```

3. You can also specify different logos for light/dark modes:

```js
navbar: {
  logo: {
    alt: 'Your Logo',
    src: 'img/logo-light.png',
    srcDark: 'img/logo-dark.png',
  },
},
```

## Modifying the Color Scheme

The primary colors and other theme variables are defined in `src/css/custom.scss`. To change the color scheme:

1. Open `src/css/custom.scss`

2. Locate the `:root` section at the top

3. Modify the color variables to match your brand colors:

```scss
:root {
  --ifm-color-primary: #25c2a0;
  --ifm-color-primary-dark: #21af90;
  --ifm-color-primary-darker: #1fa588;
  --ifm-color-primary-darkest: #1a8870;
  --ifm-color-primary-light: #29d5b0;
  --ifm-color-primary-lighter: #32d8b4;
  --ifm-color-primary-lightest: #4fddbf;
}
```

4. You can use tools like [ColorBox](https://www.colorbox.io/) to generate a full color palette based on your primary brand color.

## Additional Theming Customizations

The `custom.scss` file allows for extensive theme customization:

- Font styles and sizes
- Spacing and layout variables  
- Component-specific styles

Refer to the [Docusaurus theming docs](https://docusaurus.io/docs/styling-layout) for more advanced customization options.

## Applying Brand Assets

Don't forget to update other brand assets:

- Favicon (`static/img/favicon.ico`)
- Social card image for link previews
- Any custom illustrations or graphics

By customizing these elements, you can fully align the Dev-Docs template with your brand identity.

  