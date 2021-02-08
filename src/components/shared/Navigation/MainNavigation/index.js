import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import NavLinks from '../NavLink';
import MainHeader from '../MainHeader';
import SideDrawer from '../SideDrawer';
import Backdrop from '../../Backdrop';
import './index.css';

const MainNavigation = props => {
  const [drawerIsOpen, setdrawerIsOpen] = useState(false);

  const opendrawer = () => {
    setdrawerIsOpen(true)
  }

  const closedrawer = () => {
    setdrawerIsOpen(false)
  }

  return (
    <> 
      {drawerIsOpen && <Backdrop onClick={closedrawer}/>}
      <SideDrawer onClick={closedrawer}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks/>
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={opendrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav>
          <NavLinks/>
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
