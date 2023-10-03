import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/* Reset default browser styles */
body, h1, h2, h3, p, ul, ol, li {
  margin: 0;
  padding: 0;
}

/* Set a consistent box-sizing model */
* {
  box-sizing: border-box;
}

/* Apply a base font size and family */
body {
  font-family: Open Sans;
  font-size: 16px;
  line-height: 1.5;
}

/* Define global colors */
:root {
  --primary-color: #009EDD;
  --secondary-color: #039B00;
  --background-color: #2f2e41;
  --text-color: #FFFFFF;
}

/* Apply global styles to common HTML elements */
body {
  background-color: var(--background-color);
  color: var(--text-color);
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: darken(var(--primary-color), 10%);
}

/* Create a container for your app content */
#root {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

/* Additional global styles and media queries can be added here */

/* Define breakpoints for responsive design */
@media (max-width: 768px) {
  /* Add responsive styles here */
}

`;

export default GlobalStyles;
