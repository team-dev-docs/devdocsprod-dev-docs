

  ---
# High Level Context
## context
This file is a custom wrapper for the Footer component in a Docusaurus-based website. It extends the functionality of the original Footer component by adding several features:

1. It imports and uses a custom Parser component.
2. It implements a table of contents (TOC) highlighting feature that activates when links are clicked.
3. It adds social media classes to specific footer elements for styling purposes.
4. It includes a global dark mode handler component.
5. It imports a custom font (Inter) and a background gradient animation component.

The component uses React hooks (useEffect, useLocation, useColorMode) to manage side effects and access routing information. It manipulates the DOM to add classes and event listeners, enhancing the interactivity of the footer and table of contents.

This wrapper is designed to be a drop-in replacement for the original Footer component, adding these extra features while maintaining the original functionality.

---
# FooterWrapper src/theme/Footer/index.js
## Imported Code Object
In this code snippet, `FooterWrapper` is a React functional component that serves as a wrapper for the main `Footer` component. Its primary purposes are:

1. To handle side effects related to the footer and table of contents (TOC) using the `useEffect` hook.

2. To add interactivity to the table of contents links by toggling an active class when clicked.

3. To dynamically add CSS classes to social media links in the footer.

4. To render the `Footer` component with any props passed to `FooterWrapper`.

5. To include a `GlobalDarkModeHandler` component, which likely manages dark mode functionality for the entire application.

The component uses React hooks like `useLocation` and `useEffect` to perform these tasks and ensure they're updated when the route changes. It also includes cleanup functionality to remove event listeners when the component unmounts.

  