import React, { Component } from 'react'
import { connect } from 'react-redux';
import {CHANGE_SEARCH_SHOW,CHANGE_CART_SHOW} from '../../Store/actions/ActionTypes';
export class Cart extends Component {

    toggleCart= (e) => {

        e.preventDefault();
  
        this.props.changeCartShow(!this.props.showCart);

    }
    render() {
        return (
            <div>
            {/* Start Cart Panel */}
            <div className={this.props.showCart?'shopping__cart shopping__cart__on':'shopping__cart'}>
                <div className="shopping__cart__inner">
                    <div className="offsetmenu__close__btn">
                        <a href="#" onClick={this.toggleCart}><i className="zmdi zmdi-close"></i></a>
                    </div>
                    <div className="shp__cart__wrap">
                        <div className="shp__single__product">
                            <div className="shp__pro__thumb">
                                <a href="#">
                                    <img src={require("../../assets/images/product-2/sm-smg/1.jpg")} alt="product images"/>
                                </a>
                            </div>
                            <div className="shp__pro__details">
                                <h2><a href="product-details.html">BO&Play Wireless Speaker</a></h2>
                                <span className="quantity">QTY: 1</span>
                                <span className="shp__price">$105.00</span>
                            </div>
                            <div className="remove__btn">
                                <a href="#" title="Remove this item"><i className="zmdi zmdi-close"></i></a>
                            </div>
                        </div>
                        <div className="shp__single__product">
                            <div className="shp__pro__thumb">
                                <a href="#">
                                    <img src={require("../../assets/images/product-2/sm-smg/2.jpg")} alt="product images"/>
                                </a>
                            </div>
                            <div className="shp__pro__details">
                                <h2><a href="product-details.html">Brone Candle</a></h2>
                                <span className="quantity">QTY: 1</span>
                                <span className="shp__price">$25.00</span>
                            </div>
                            <div className="remove__btn">
                                <a href="#" title="Remove this item"><i className="zmdi zmdi-close"></i></a>
                            </div>
                        </div>
                    </div>
                    <ul className="shoping__total">
                        <li className="subtotal">Subtotal:</li>
                        <li className="total__price">$130.00</li>
                    </ul>
                    <ul className="shopping__btn">
                        <li><a href="cart.html">View Cart</a></li>
                        <li className="shp__checkout"><a href="checkout.html">Checkout</a></li>
                    </ul>
                </div>
            </div>
            {/* End Cart Panel */}                
            </div>
        )
    }
}

const mapDispachToProps = (dispach) => {
    return {
        changeCartShow: (val) => dispach({ type: CHANGE_CART_SHOW, value: val })
    }
}

function mapStateToProps(state) {
    return {
        showCart: state.common.showCart
    };
}

export default connect(mapStateToProps, mapDispachToProps)(Cart);
