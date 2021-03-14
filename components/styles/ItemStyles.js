import styled from 'styled-components';

const ItemStyles = styled.div`
  background: white;
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    cursor: pointer;
    height: auto;
    width: 100%;
    object-fit: cover;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .productInfo {
    border: 1px solid var(--lightGray);
    border-top: 0;
    text-align: center;
  }
  .buttonList {
    background: var(--lightGray);
    border-top: 1px solid var(--lightGray);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    text-align: center;
    width: 100%;
    & > * {
      background: white;
      border: 0;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 700;
      padding: 0.25rem;
      &:hover {
        background-color: var(--lightGray);
        text-decoration: none;
      }
    }
  }
`;

export default ItemStyles;
