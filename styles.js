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
    --main-color: #d6a3b8;
    --main-color-bg: #c78aa3;
    --text-color: #444;
    --card-border: #f4e8ed;
    --box-shadow: rgba(0, 0, 0, 0.06);
    --icon-bg: #e8b7ca;
    --text-dark-color: #555;
    --icon-hover: #6d455a;
    --tag-color: #5f4a56;
    --tag-hover: #e8d7df;
    --border-color: #d39ab5;
    --box-shadow: 0 12px 30px rgba(211, 154, 181, 0.18),
      0 4px 12px rgba(0, 0, 0, 0.06);
    --before-item-bg: #ead5df;
    --year-color: #d39ab5;
    --icon-color: #f3d6e3;
    --input-border-color: #eee;
    --white-color: #fff;
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
