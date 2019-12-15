import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarMenu() {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/kanban">Kanban</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/atomic">Atomic</Link>
      </li>
    </ul>
  );
}
