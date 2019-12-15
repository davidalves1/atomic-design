import React from 'react';
import { Link } from 'react-router-dom';

import NavbarMenu from '../../molecules/navbar-menu';
import KeyordSearch from '../../molecules/keyword-search';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">DevTech</Link>

      <NavbarMenu />
      <KeyordSearch />
    </nav>
  );
}
