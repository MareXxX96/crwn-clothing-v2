import {NavigationContainer, NavLinksContainer, NavLink, LogoContainer} from './navigation.styles.jsx'
import { Fragment, useContext} from 'react';
import {Outlet, Link} from 'react-router-dom';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils'

import CartIcon from '../../components/card-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {cartOpened} = useContext(CartContext)

    return (<Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
        <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinksContainer>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {
              currentUser ? (
                <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>   
              ) : (
                <NavLink to='/sign-in'>
                  SIGN IN
                </NavLink>
              )
            }
            <CartIcon />
        </NavLinksContainer>
        {cartOpened && <CartDropdown/>}
      </NavigationContainer>
      <Outlet />
    </Fragment>)
}

export default Navigation;