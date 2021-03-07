import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <li>
        <Link href="/products">Tienda</Link>
      </li>
      <li>
        <Link href="/sell">Vender</Link>
      </li>
      <li>
        <Link href="/orders">Mis compras</Link>
      </li>
      <li>
        <Link href="/account">Mi cuenta</Link>
      </li>
    </NavStyles>
  );
}
