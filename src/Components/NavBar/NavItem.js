import React from 'react'

const NavItem = (props) => {  
    return (
      <>
          <a style={{ color: 'inherit', textDecoration: 'none' }} href={props.link}>{props.name}</a>
      </>
    );
  }
  
export default NavItem