import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/pricing/premium">Premium pricing</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/starships/2">Starships</Link></li>
        <li><Link to="/millennium-falcon">Millennium Falcon</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation