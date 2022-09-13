import CartWidjet from "../CartWidjet/CartWidjet";


const NavBar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <li class="nav">
        <ul>
          <a className="nav-link itemNav " aria-current="page" href="/">Home</a>
        </ul>
        <a className="nav-link itemNav" aria-current="page" href="/producto/productoId">Productos</a>
        <ul>
          <a className="nav-link itemNav" aria-current="page" href="/">Quienes Somos</a>
        </ul>
        <ul>
          <CartWidjet />
        </ul>
      </li>
    </nav>
  )
}

export default NavBar;