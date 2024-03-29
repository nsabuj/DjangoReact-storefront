import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
        {/* Start Footer Area */}
        <footer id="htc__footer">
            {/* Start Footer Widget */}
            <div className="footer__container bg__cat--1">
                <div className="container">
                    <div className="row">
                        {/* Start Single Footer Widget */}
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="footer">
                                <h2 className="title__line--2">ABOUT US</h2>
                                <div className="ft__details">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                                    <div className="ft__social__link">
                                        <ul className="social__link">
                                            <li><a href="#"><i className="icon-social-twitter icons"></i></a></li>

                                            <li><a href="#"><i className="icon-social-instagram icons"></i></a></li>

                                            <li><a href="#"><i className="icon-social-facebook icons"></i></a></li>

                                            <li><a href="#"><i className="icon-social-google icons"></i></a></li>

                                            <li><a href="#"><i className="icon-social-linkedin icons"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Footer Widget */}
                        {/* Start Single Footer Widget */}
                        <div className="col-md-2 col-sm-6 col-xs-12 xmt-40">
                            <div className="footer">
                                <h2 className="title__line--2">information</h2>
                                <div className="ft__inner">
                                    <ul className="ft__list">
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Delivery Information</a></li>
                                        <li><a href="#">Privacy & Policy</a></li>
                                        <li><a href="#">Terms  & Condition</a></li>
                                        <li><a href="#">Manufactures</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* End Single Footer Widget */}
                        {/* Start Single Footer Widget */}
                        <div className="col-md-2 col-sm-6 col-xs-12 xmt-40 smt-40">
                            <div className="footer">
                                <h2 className="title__line--2">my account</h2>
                                <div className="ft__inner">
                                    <ul className="ft__list">
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="cart.html">My Cart</a></li>
                                        <li><a href="#">Login</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* End Single Footer Widget */}
                        {/* Start Single Footer Widget */}
                        <div className="col-md-2 col-sm-6 col-xs-12 xmt-40 smt-40">
                            <div className="footer">
                                <h2 className="title__line--2">Our service</h2>
                                <div className="ft__inner">
                                    <ul className="ft__list">
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="cart.html">My Cart</a></li>
                                        <li><a href="#">Login</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* End Single Footer Widget */}
                        {/* Start Single Footer Widget */}
                        <div className="col-md-3 col-sm-6 col-xs-12 xmt-40 smt-40">
                            <div className="footer">
                                <h2 className="title__line--2">NEWSLETTER </h2>
                                <div className="ft__inner">
                                    <div className="news__input">
                                        <input type="text" placeholder="Your Mail*"/>
                                        <div className="send__btn">
                                            <a className="fr__btn" href="#">Send Mail</a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        {/* End Single Footer Widget */}
                    </div>
                </div>
            </div>
            {/* End Footer Widget */}
            {/* Start Copyright Area */}
            <div className="htc__copyright bg__cat--5">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="copyright__inner">
                                <p>Copyright© <a href="https://freethemescloud.com/">Free themes Cloud</a> 2018. All right reserved.</p>
                                <a href="#"><img src={require('../../assets/images/others/shape/paypol.png')} alt="payment images"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Copyright Area */}
        </footer>
        {/* End Footer Style */}                
            </div>
        )
    }
}

export default Footer
