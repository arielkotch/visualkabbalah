import React from 'react';
import Login from 'components/Login/index.jsx';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, Dropdown,Breadcrumb, DropdownButton, Badge} from 'react-bootstrap'
import { Brand} from './styled.jsx'
import {ThemeProvider} from 'styled-components';
import {ProfileMenu} from 'components/ProfileMenu/index.jsx'
/**
 *
 *
 * @param {any} {brand,links}
 */

class Navigation extends React.Component {
    // props brand,links

    handleSelect = (selection) => {
        this.setState({active: selection});
    }
    renderBreadcrumb = (path) => (
        <Breadcrumb>
        {
            path.map(({route,name,active})=>(
                <Breadcrumb.Item active={active} href={route}>{name}</Breadcrumb.Item>
            ))
        }
        </Breadcrumb>
    )
    renderBadge = (val) => ((val !== 0)
        ? (
            <Badge variant="success">{val}</Badge>
        )
        : (null))

    renderTab = ({
        path,
        name,
        badge,
        show,
        dropdown
    }, index) => ((show)
        ? (
            <NavItem key={path}>
                <Link key={path} to={path} className="nav-link" activeClassName={"active"}>
              {  (dropdown.length!==0)?(<DropdownButton id="dropdown-item-button" title={name}>
                        {dropdown.map((item, index) => (
                            <Link key={item} to={path+'/'+item.replace(/[&\/\\#,+()$~%.'":*?<>{}\s\-/]/g, '-').toLowerCase()} className="nav-link" activeClassName={"active"}>
                            <Dropdown.Item as="button" key={index}>{item}</Dropdown.Item>

                            </Link>
                        ))}
                    </DropdownButton>):(
                        <Link key={path} to={path} className="nav-link" activeClassName={"active"}>{name}</Link>
                    )}

                </Link>

            </NavItem>

        )
        : (null))
                            /*
                            {this.renderBreadcrumb([
                                {route:'/home',
                                name:path,
                                active:true}
                            ])}
                            */
    // {this.renderBadge(badge.value)} RENDER BADGE

    render() {
        const {routes, brand} = this.props;
        return (
            <React.Fragment>
                <ThemeProvider theme={{
                    mode: 'light'
                }}>
                    <Navbar>
                        <Navbar.Brand>
                            <Brand>{brand}</Brand>
                        </Navbar.Brand>
                        <Nav>
                            {routes.map((route, index) => {
                                return (this.renderTab(route))
                            })
}
                        </Nav>
                    </Navbar>

                </ThemeProvider>
            </React.Fragment>
        );

    }
}

export default Navigation;
