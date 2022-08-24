import CartWidjet from "../CartWidjet/CartWidjet";


const NavBar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <li class="nav">
        <ul>
          <a className="nav-link itemNav " aria-current="page" href="index.html">Home</a>
        </ul>
        <a className="nav-link itemNav" aria-current="page" href="index.html">Productos</a>
        <ul>
          <a className="nav-link itemNav" aria-current="page" href="index.html">Quienes Somos</a>
        </ul>
        <ul>
          <CartWidjet />
        </ul>
      </li>
    </nav>
  )
}

export default NavBar;