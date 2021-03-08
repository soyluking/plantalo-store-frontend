import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const FormStyles = styled.form`
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.075);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5;
  margin: 50px;
  padding: 40px;
  label {
    display: block;
    margin-bottom: 1.5rem;
  }
  input,
  textarea,
  select {
    border: 1px solid black;
    font-size: 1rem;
    margin-top: 0.5rem;
    padding: 0.5rem;
    width: 100%;
    &:focus {
      outline: 0;
      border-color: var(--primary);
    }
  }
  button,
  input[type='submit'] {
    align-items: center;
    background: var(--primary);
    border: 0;
    color: white;
    cursor: pointer;
    display: inline-flex;
    font-size: 1.25rem;
    font-weight: 700;
    padding: 0.5rem 1.2rem;
    width: auto;

    &:hover {
      background: var(--black);
    }

    i {
      margin-left: 0.5rem;
    }
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }

    &::before {
      height: 10px;
      content: '';
      display: block;
      margin-bottom: 1rem;
      background-image: linear-gradient(
        to right,
        #9fc1b6 0%,
        #e1ece7 50%,
        #9fc1b6 100%
      );
    }

    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default FormStyles;
