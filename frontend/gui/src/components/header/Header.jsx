import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {CHANGE_SEARCH_SHOW,CHANGE_CART_SHOW} from '../../Store/actions/ActionTypes';
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
           showSearch: false,
           showCart: false
        }

        
    }

    toggleSearch = (e) => {

        e.preventDefault();
     
        this.props.changeSearchShow(!this.props.showSearch);

    }

    toggleCart= (e) => {

        e.preventDefault();
  
        this.props.changeCartShow(!this.props.showCart);

    }
    
    render() {
        return (
            <div> 
         <header id="htc__header" className="htc__header__area header--one">
           
            <div id="sticky-header-with-topbar" className="mainmenu__wrap sticky__header">
                <div className="container">
                    <div className="row">
                        <div className="menumenu__container clearfix">
                            <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5"> 
                                <div className="logo">
                                <NavLink className="" to='/home'> <img src={require('../../assets/images/logo/4.png')} alt="logo images"/> </NavLink>  
                                </div>
                            </div>
                            <div className="col-md-7 col-lg-8 col-sm-5 col-xs-3">
                                <nav className="main__menu__nav hidden-xs hidden-sm">
                                    <ul className="main__menu">
                                        <li className="drop"><NavLink to="/home">Home</NavLink></li>
                                        <li className="drop"><NavLink to="#">women</NavLink> 
                                            <ul className="dropdown mega_dropdown">
                                                {/* Start Single Mega MEnu */}
                                                <li><NavLink className="mega__title" to="product-grid.html">Shop Pages</NavLink> 
                                                    <ul className="mega__item">
                                                        <li><NavLink className="" to='/products'> Product Grid</NavLink></li>
                                                        <li><NavLink to="">cart</NavLink> </li>
                                                        <li><NavLink to="">checkout</NavLink> </li>
                                                        <li><NavLink to="">wishlist</NavLink> </li>
                                                    </ul>
                                                </li>
                                                {/* End Single Mega MEnu */}
                                                {/* Start Single Mega MEnu */}
                                                <li><NavLink className="mega__title" to="product-grid.html">Variable Product</NavLink> 
                                                    <ul className="mega__item">
                                                        <li><NavLink to="">Category</NavLink> </li>
                                                        <li><NavLink to="/login">My Account</NavLink> </li>
                                                        <li><NavLink to="">Wishlist</NavLink> </li>
                                                        <li><NavLink to="">Shopping Cart</NavLink> </li>
                                                        <li><NavLink to="">Checkout</NavLink> </li>
                                                    </ul>
                                                </li>
                                                {/* End Single Mega MEnu */}
                                                {/* Start Single Mega MEnu */}
                                                <li><NavLink className="mega__title" to="product-grid.html">Product Types</NavLink> 
                                                    <ul className="mega__item">
                                                        <li><NavLink to="#">Simple Product</NavLink> </li>
                                                        <li><NavLink to="#">Variable Product</NavLink> </li>
                                                        <li><NavLink to="#">Grouped Product</NavLink> </li>
                                                        <li><NavLink to="#">Downloadable Product</NavLink> </li>
                                                        <li><NavLink to="#">Simple Product</NavLink> </li>
                                                    </ul>
                                                </li>
                                                {/* End Single Mega MEnu */}
                                            </ul>
                                        </li>
                                        <li className="drop"><NavLink to="#">men</NavLink> 
                                            <ul className="dropdown mega_dropdown">
                                                {/* Start Single Mega MEnu */}
                                                <li><NavLink className="mega__title" to="product-grid.html">Shop Pages</NavLink> 
                                                    <ul className="mega__item">
                                                        <li><NavLink className="" to='/products'> Product Grid</NavLink></li>
                                                        <li><NavLink to="">cart</NavLink> </li>
                                                        <li><NavLink to="">checkout</NavLink> </li>
                                                        <li><NavLink to="/wishlist">wishlist</NavLink> </li>
                                                    </ul>
                                                </li>
                                                {/* End Single Mega MEnu */}
                                                {/* Start Single Mega MEnu */}
                                                <li><NavLink className="mega__title" to="product-grid.html">Variable Product</NavLink> 
                                                    <ul className="mega__item">
                                                        <li><NavLink to="#">Category</NavLink> </li>
                                                        <li><NavLink to="/login">My Account</NavLink> </li>
                                                        <li><NavLink to="/wishlist">Wishlist</NavLink> </li>
                                                        <li><NavLink to="/cart">Shopping Cart</NavLink> </li>
                                                        <li><NavLink to="/checkout">Checkout</NavLink> </li>
                                                    </ul>
                                                </li>
                                                {/* End Single Mega MEnu */}
                                                {/* Start Single Mega MEnu */}
                                                <li><NavLink className="mega__title" to="product-grid.html">Product Types</NavLink> 
                                                    <ul className="mega__item">
                                                        <li><NavLink to="#">Simple Product</NavLink> </li>
                                                        <li><NavLink to="#">Variable Product</NavLink> </li>
                                                        <li><NavLink to="#">Grouped Product</NavLink> </li>
                                                        <li><NavLink to="#">Downloadable Product</NavLink> </li>
                                                        <li><NavLink to="#">Simple Product</NavLink> </li>
                                                    </ul>
                                                </li>
                                                {/* End Single Mega MEnu */}
                                            </ul>
                                        </li>
                                        <li className="drop"><NavLink to="/products">Product</NavLink> 

                                        </li>
                                        <li className="drop"><NavLink to="/blog">blog</NavLink> 
                                        </li>
                                        <li className="drop"><NavLink to="#">Pages</NavLink> 
                                            <ul className="dropdown">
                                                <li><NavLink to="/blog">Blog</NavLink> </li>
                                                
                                                <li><NavLink to="/cart/">Cart page</NavLink> </li>
                                                <li><NavLink to="/checkout">checkout</NavLink> </li>
                                                <li><NavLink to="/contact">contact</NavLink> </li>
                                                <li><NavLink to="/products">product grid</NavLink> </li>
                                                
                                                <li><NavLink to="/wishlist">wishlist</NavLink> </li>
                                            </ul>
                                        </li>
                                        <li><NavLink to="/contact">contact</NavLink> </li>
                                    </ul>
                                </nav>

                                <div className="mobile-menu clearfix visible-xs visible-sm">
                                    <nav id="mobile_dropdown">
                                        <ul>
                                            <li><NavLink to="/home">Home</NavLink> </li>
                                            <li><NavLink to="/blog">blog</NavLink> </li>
                                            <li><NavLink to="#">pages</NavLink> 
                                                <ul>
                                                    <li><NavLink to="/blog">Blog</NavLink> </li>
                                                    
                                                    <li><NavLink to="/cart">Cart page</NavLink> </li>
                                                    <li><NavLink to="/checkout">checkout</NavLink> </li>
                                                    <li><NavLink to="/contact">contact</NavLink> </li>
                                                    <li><NavLink to="/products">product grid</NavLink> </li>
                                                    
                                                    <li><NavLink to="/wishlist">wishlist</NavLink> </li>
                                                </ul>
                                            </li>
                                            <li><NavLink to="/contact">contact</NavLink> </li>
                                        </ul>
                                    </nav>
                                </div>  
                            </div>
                            <div className="col-md-3 col-lg-2 col-sm-4 col-xs-4">
                                <div className="header__right">
                                    <div className="header__search search search__open">
                                        <a to="#" onClick={this.toggleSearch}><i className="icon-magnifier icons"></i></a> 
                                    </div>
                                    <div className="header__account">
                                        <NavLink to="#"><i className="icon-user icons"></i></NavLink> 
                                    </div>
                                    <div className="htc__shopping__cart">
                                        <a className="cart__menu" href="#"><i className="icon-handbag icons" onClick={this.toggleCart}></i></a> 
                                        <NavLink to="#"><span className="htc__qua">2</span></NavLink> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-menu-area"></div>
                </div>
            </div>
            
        </header>
        </div>     
          
        )
    }
}

const mapDispachToProps = (dispach) => {
    return {
        changeSearchShow: (val) => dispach({ type: CHANGE_SEARCH_SHOW, value: val }),
        changeCartShow: (val) => dispach({ type: CHANGE_CART_SHOW, value: val }),
    }
}

function mapStateToProps(state) {
    return {
        showSearch: state.common.showSearch,
        showCart:state.common.showCart
    };
}

export default connect(mapStateToProps, mapDispachToProps)(Header);

