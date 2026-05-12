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
    --main-color: #ffffff;
    --box-shadow-color: rgba(0, 0, 0, 0.1);
    --badge-bg: #f6e6ef;
    --badge-color: #c98aa6;
    --subtitle-color: #666;
    --primary-button: #d6a3b8;
    --primary-button-bg: #c78aa3;
    --text-color: #444;
    --card-border: #f4e8ed;
    --box-shadow: rgba(0, 0, 0, 0.06);
    --icon-bg: #e8b7ca;
    --text-dark-color: #555;
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
