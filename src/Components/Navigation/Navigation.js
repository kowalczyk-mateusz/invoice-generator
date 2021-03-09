import React from 'react';
import {Link} from 'react-router-dom'
import {StyledNavigation,
    Logo,
    Menu,
    MenuItem,

} from './NavigationStyles'
const Navigation = () => {
    return (
        <StyledNavigation>
            <Logo>
                Faktury
            </Logo>
            <Menu>
                <MenuItem>
                  <Link to="/">Wystaw</Link>
                </MenuItem>
                <MenuItem>
                   <Link to="/documents"> Dokumenty</Link>
                </MenuItem>
                <MenuItem>
                    Wyloguj
                </MenuItem>
            </Menu>
        </StyledNavigation>
    );
}

export default Navigation;