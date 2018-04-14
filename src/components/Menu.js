import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';


import '../css/components/Menu.css';


class DropMenu extends Component {
  render() {
    return (
      <Menu size="large" widths="4">
        <Menu.Item >
     Home
   </Menu.Item>
   <Menu.Item>
     About
   </Menu.Item>
   <Menu.Item>
     Contact
   </Menu.Item>
        <Dropdown text = 'Account' pointing className="link item">
           <Dropdown.Menu>
             <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Billing</Dropdown.Item>
            <Dropdown.Item>Help Centre</Dropdown.Item>
             <Dropdown.Item>Sign Out</Dropdown.Item>
           </Dropdown.Menu>
         </Dropdown>
      </Menu>
    );
  }
}

export default DropMenu;
