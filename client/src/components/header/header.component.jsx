import React from 'react';
import {signOutStart}  from '../../redux/user/user.actions'

import {connect} from 'react-redux';

import {default as CartIcon} from '../cart-icon/cart-icon.container'
import { ReactComponent as Logo} from '../../assets/solar-system.svg'
import {default as CartDropDown} from '../cart-dropdown/cart-dropdown.container'
import {createStructuredSelector} from 'reselect';

import {selectCurrentUser} from '../../redux/user/user.selectors'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'


const Header = ({ currentUser,hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
          {" "}
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">
          {" "}
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);