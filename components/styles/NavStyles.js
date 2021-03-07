import styled from 'styled-components';

const NavStyles = styled.ul`
  align-items: center;
  display: flex;
  font-size: 1rem;
  justify-self: end;
  list-style: none;
  margin: 0 2rem 0 0;
  padding: 0;
  a,
  button {
    background: none;
    border: 0;
    align-items: center;
    display: flex;
    font-family: 'Comfortaa', cursive;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    position: relative;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:after {
      height: 2px;
      background: var(--primary);
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      text-decoration: none;
      &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid var(--lightGray);
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
