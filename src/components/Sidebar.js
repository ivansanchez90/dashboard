import { NavLink } from "react-router-dom"
import * as FaIcons from 'react-icons/fa';


const Sidebar = () => {
  return (
    <div className="sidebar bg-light">
      <ul>
        <li>
          <NavLink to="/" exact className="text-dark rounded py-2 px-3 w-100 d-inline-block" activeClassName="active"><FaIcons.FaHome className="me-2" /> Home</NavLink>
        </li>
        <li>
          <NavLink to="/sales" exact className="text-dark rounded py-2 px-3 w-100 d-inline-block" activeClassName="active"><FaIcons.FaBoxes className="me-2" /> Products</NavLink>
        </li>
        <li>
          <NavLink to="/clients" exact className="text-dark rounded py-2 px-3 w-100 d-inline-block" activeClassName="active"><FaIcons.FaUsers className="me-2" /> Users</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar