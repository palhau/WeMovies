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
  font-family: 'Courier New', monospace;
  font-size: 16px;
  line-height: 1.5;
}

/* Define global colors */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --background-color: #f8f9fa;
  --text-color: #333;
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
  justify-content: center;
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
