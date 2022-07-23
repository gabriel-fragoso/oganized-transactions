import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #f8f2f5;
    --red: #e52e4d;
    --shape: #FFFF;
    --text-body: #969cb3;
    --text-title: #363f5f;
    --black-light: #222;
    --black: #5A5A5A;
    --green: #33CC95;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1000px){
      font-size: 93.75%;  // 15px
    }

    @media (max-width: 720px){
      font-size: 87.5%;  // 14px
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content:  center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close  {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border: none;
      background-color: transparent;

      transition: filter 0.2s;

      &:hover{
        filter: brightness(0.8)
      }
  }

`