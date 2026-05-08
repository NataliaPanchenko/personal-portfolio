import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --header-bg: rgba(246, 241, 244, 0.9);
    --logo-bg: #ddb6cb;
    --nav-color: #3b3b3b;
    --nav-hover-color: #cb97b0;
    --theme-button: #ddd3d9;
    --mobile-menu-bg: #f6f1f4;
    --border-color: #e7dfe4;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
