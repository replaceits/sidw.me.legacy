import { NavLink } from "react-router-dom";

import './Sidebar.scss';

function Sidebar() {
  return (
    <div className='sidebar'>
      <NavLink className='sidebar-about nostyle' activeClassName='active' exact to='/'>About</NavLink>
      <NavLink className='sidebar-code nostyle' activeClassName='active' exact to='/code'>Code</NavLink>
      <NavLink className='sidebar-music nostyle' activeClassName='active' exact to='/music'>Music</NavLink>
      <NavLink className='sidebar-art nostyle' activeClassName='active' exact to='/art'>Art</NavLink>
      <NavLink className='sidebar-poetry nostyle' activeClassName='active' exact to='/poetry'>Poetry</NavLink>
    </div>
  );
}

export default Sidebar;
