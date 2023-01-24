import React from 'react'

const DropdownMenu=()=>{
  
    const DropdownItem=(props)=>{
      return(
        <div className="menu-item">
          
          {props.children}
      
        </div>
      );  
    } 
  
    return (
      <div className="dropdown">
        <DropdownItem> Cat 1</DropdownItem>
        <DropdownItem> Cat 2 </DropdownItem>
        <DropdownItem> Cat 3</DropdownItem>
        <DropdownItem> Cat 3</DropdownItem>
        <DropdownItem> Cat 3</DropdownItem>
        <DropdownItem> Cat 3</DropdownItem>
        <DropdownItem> Cat 3</DropdownItem>
        

      </div>
    );
  }

export default DropdownMenu