import React from 'react';
import {Dropdown, ButtonGroup, Button} from 'react-bootstrap';
/**
 *
 *
 * @param {any} {children}
 * @returns
 */
export const ProfileMenu = ({children}) => {
    return (
        <React.Fragment>
            <Dropdown size="sm" as={ButtonGroup}>
                <Button  variant="success">Account</Button>
                <Dropdown.Toggle split variant="success" id="dropdown-split-basic"/>
                <Dropdown.Menu>
                    <Dropdown.Item hred="#/action-1">Profile</Dropdown.Item>
                    <Dropdown.Item hred="#/action-2">Account</Dropdown.Item>
                    <Dropdown.Item hred="#/action-3">Settings</Dropdown.Item>
                    <Dropdown.Item hred="#/action-3">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </React.Fragment>
    );
}
