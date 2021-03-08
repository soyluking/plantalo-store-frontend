import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.p`
  align-items: center;
  color: var(--black);
  cursor: pointer;
  display: flex;
  font-family: 'Comfortaa', cursive;
  font-size: 1.65rem;
  font-weight: 700;
  margin: 1rem 0 1rem 2rem;
  position: relative;
  z-index: 2;
  img {
    max-width: 55px;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    align-items: stretch;
    border-bottom: 2px solid var(--lightGrey);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
  }

  .sub-bar {
    border-bottom: 1px solid var(--black, black);
    grid-template-columns: 1fr auto;
    display: grid;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Link href="/">
          <Logo>
            <img src="/static/plantalo-logo.png" alt="Logo Plántalo" />
            Plántalo
          </Logo>
        </Link>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </HeaderStyles>
  );
}
