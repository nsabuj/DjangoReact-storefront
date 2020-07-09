import React, { PureComponent,Fragment } from 'react'

class Home extends PureComponent {
    render() {
        return (
            <Fragment>
            <div className="body__overlay"></div>
                {/* Start Offset Wrapper */}
                <div className="offset__wrapper">
                    {/* Start Search Popap */}
                    <div className="search__area">
                        <div className="container" >
                            <div className="row" >
                                <div className="col-md-12" >
                                    <div className="search__inner">
                                        <form action="#" method="get">
                                            <input placeholder="Search here... " type="text"/>
                                            <button type="submit"></button>
                                        </form>
                                        <div className="search__close__btn">
                                            <span className="search__close__btn_icon"><i className="zmdi zmdi-close"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Search Popap */}
                    {/* Start Cart Panel */}
                    <div className="shopping__cart">
                        <div className="shopping__cart__inner">
                            <div className="offsetmenu__close__btn">
                                <a href="#"><i className="zmdi zmdi-close"></i></a>
                            </div>
                            <div className="shp__cart__wrap">
                                <div className="shp__single__product">
                                    <div className="shp__pro__thumb">
                                        <a href="#">
                                            <img src={require('../../assets/images/product-2/sm-smg/1.jpg')} alt="product images"/>
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
                                            <img src={require('../../assets/images/product-2/sm-smg/2.jpg')} alt="product images"/>
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
                {/* End Offset Wrapper */}
                {/* Start Slider Area */}
                <div className="slider__container slider--one bg__cat--3">
                    <div className="slide__container slider__activation__wrap owl-carousel">
                        {/* Start Single Slide */}
                        <div className="single__slide animation__style01 slider__fixed--height">
                            <div className="container">
                                <div className="row align-items__center">
                                    <div className="col-md-7 col-sm-7 col-xs-12 col-lg-6">
                                        <div className="slide">
                                            <div className="slider__inner">
                                                <h2>collection 2018</h2>
                                                <h1>NICE CHAIR</h1>
                                                <div className="cr__btn">
                                                    <a href="cart.html">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-5 col-xs-12 col-md-5">
                                        <div className="slide__thumb">
                                            <img src={require('../../assets/images/slider/fornt-img/1.png')} alt="slider images"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Slide */}
                        {/* Start Single Slide */}
                        <div className="single__slide animation__style01 slider__fixed--height">
                            <div className="container">
                                <div className="row align-items__center">
                                    <div className="col-md-7 col-sm-7 col-xs-12 col-lg-6">
                                        <div className="slide">
                                            <div className="slider__inner">
                                                <h2>collection 2018</h2>
                                                <h1>NICE CHAIR</h1>
                                                <div className="cr__btn">
                                                    <a href="cart.html">Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-5 col-xs-12 col-md-5">
                                        <div className="slide__thumb">
                                            <img src={require('../../assets/images/slider/fornt-img/2.png')} alt="slider images"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Slide */}
                    </div>
                </div>
                {/* Start Slider Area */}
                {/* Start Category Area */}
                <section className="htc__category__area ptb--100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section__title--2 text-center">
                                    <h2 className="title__line">New Arrivals</h2>
                                    <p>But I must explain to you how all this mistaken idea</p>
                                </div>
                            </div>
                        </div>
                        <div className="htc__product__container">
                            <div className="row">
                                <div className="product__list clearfix mt--30">
                                    {/* Start Single Category */}
                                    <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                                        <div className="category">
                                            <div className="ht__cat__thumb">
                                                <a href="product-details.html">
                                                    <img src={require('../../assets/images/product/1.jpg')} alt="product images"/>
                                                </a>
                                            </div>
                                            <div className="fr__hover__info">
                                                <ul className="product__action">
                                                    <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
        
                                                    <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
        
                                                    <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="fr__product__inner">
                                                <h4><a href="product-details.html">Largest Water Pot</a></h4>
                                                <ul className="fr__pro__prize">
                                                    <li className="old__prize">$30.3</li>
                                                    <li>$25.9</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Category */}
                                    {/* Start Single Category */}
                                    <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                                        <div className="category">
                                            <div className="ht__cat__thumb">
                                                <a href="product-details.html">
                                                    <img src={require('../../assets/images/product/2.jpg')}  alt="product images"/>
                                                </a>
                                            </div>
                                            <div className="fr__hover__info">
                                                <ul className="product__action">
                                                    <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
        
                                                    <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
        
                                                    <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="fr__product__inner">
                                                <h4><a href="product-details.html">nemo enim ipsam</a></h4>
                                                <ul className="fr__pro__prize">
                                                    <li className="old__prize">$30.3</li>
                                                    <li>$25.9</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Category */}
                                    {/* Start Single Category */}
                                    <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                                        <div className="category">
                                            <div className="ht__cat__thumb">
                                                <a href="product-details.html">
                                                    <img src= {require('../../assets/images/product/3.jpg')}  alt="product images"/>
                                                </a>
                                            </div>
                                            <div className="fr__hover__info">
                                                <ul className="product__action">
                                                    <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
        
                                                    <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
        
                                                    <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="fr__product__inner">
                                                <h4><a href="product-details.html">Chair collection</a></h4>
                                                <ul className="fr__pro__prize">
                                                    <li className="old__prize">$30.3</li>
                                                    <li>$25.9</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Category */}
                                    {/* Start Single Category */}
                                    <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                                        <div className="category">
                                            <div className="ht__cat__thumb">
                                                <a href="product-details.html">
                                                    <img src={require('../../assets/images/product/4.jpg')}  alt="product images"/>
                                                </a>
                                            </div>
                                            <div className="fr__hover__info">
                                                <ul className="product__action">
                                                    <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
        
                                                    <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
        
                                                    <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="fr__product__inner">
                                                <h4><a href="product-details.html">dummy Product name</a></h4>
                                                <ul className="fr__pro__prize">
                                                    <li className="old__prize">$30.3</li>
                                                    <li>$25.9</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Category */}
                                    {/* Start Single Category */}
                                    <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                                        <div className="category">
                                            <div className="ht__cat__thumb">
                                                <a href="product-details.html">
                                                    <img src={require('../../assets/images/product/5.jpg')}  alt="product images"/>
                                                </a>
                                            </div>
                                            <div className="fr__hover__info">
                                                <ul className="product__action">
                                                    <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
        
                                                    <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
        
                                                    <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="fr__product__inner">
                                                <h4><a href="product-details.html">donec ac tempus nrb</a></h4>
                                                <ul className="fr__pro__prize">
                                                    <li className="old__prize">$30.3</li>
                                                    <li>$25.9</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Category */}
                                    {/* Start Single Category */}
                                    <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                                        <div className="category">
                                            <div className="ht__cat__thumb">
                                                <a href="product-details.html">
                                                    <img src={require('../../assets/images/product/6.jpg')}  alt="product images"/>
                                                </a>
                                            </div>
                                            <div className="fr__hover__info">
                                                <ul className="product__action">
                                                    <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
        
                                                    <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
        
                                                    <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="fr__product__inner">
                                                <h4><a href="product-details.html">Product Title Here </a></h4>
                                                <ul className="fr__pro__prize">
                                                    <li className="old__prize">$30.3</li>
                                                    <li>$25.9</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Category */}
                                    {/* Start Single Category */}
                                    <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                                        <div className="category">
                                            <div className="ht__cat__thumb">
                                                <a href="product-details.html">
                                                    <img src={require('../../assets/images/product/7.jpg')}  alt="product images"/>
                                                </a>
                                            </div>
                                            <div className="fr__hover__info">
                                                <ul className="product__action">
                                                    <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
        
                                                    <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
        
                                                    <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="fr__product__inner">
                                                <h4><a href="product-details.html">Product Title Here </a></h4>
                                                <ul className="fr__pro__prize">
                                                    <li className="old__prize">$30.3</li>
                                                    <li>$25.9</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Category */}
                                    {/* Start Single Category */}
                                    <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                                        <div className="category">
                                            <div className="ht__cat__thumb">
                                                <a href="product-details.html">
                                                    <img src={require('../../assets/images/product/8.jpg')}  alt="product images"/>
                                                </a>
                                            </div>
                                            <div className="fr__hover__info">
                                                <ul className="product__action">
                                                    <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
        
                                                    <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
        
                                                    <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="fr__product__inner">
                                                <h4><a href="product-details.html">Product Title Here </a></h4>
                                                <ul className="fr__pro__prize">
                                                    <li className="old__prize">$30.3</li>
                                                    <li>$25.9</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Category */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Category Area */}
                {/* Start Prize Good Area */}
                <section className="htc__good__sale bg__cat--3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                <div className="fr__prize__inner">
                                    <h2>Contrary to popular belief is simply rand.</h2>
                                    <h3>Professor at Hamp deny dney College.</h3>
                                    <a className="fr__btn" href="#">Read More</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
                                <div className="prize__inner">
                                    <div className="prize__thumb">
                                        <img src={require('../../assets/images/banner/big-img/1.png')}  alt="banner images"/>
                                    </div>
                                    <div className="banner__info">
                                        <div className="pointer__tooltip pointer--3 align-left">
                                            <div className="tooltip__box">
                                                <h4>Tooltip Left</h4>
                                                <p>Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm asaerks.</p>
                                            </div>
                                        </div>
                                        <div className="pointer__tooltip pointer--4 align-top">
                                            <div className="tooltip__box">
                                                <h4>Tooltip Top</h4>
                                                <p>Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm asaerks.</p>
                                            </div>
                                        </div>
                                        <div className="pointer__tooltip pointer--5 align-bottom">
                                            <div className="tooltip__box">
                                                <h4>Tooltip Bottom</h4>
                                                <p>Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm asaerks.</p>
                                            </div>
                                        </div>
                                        <div className="pointer__tooltip pointer--6 align-top">
                                            <div className="tooltip__box">
                                                <h4>Tooltip Bottom</h4>
                                                <p>Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm asaerks.</p>
                                            </div>
                                        </div>
                                        <div className="pointer__tooltip pointer--7 align-top">
                                            <div className="tooltip__box">
                                                <h4>Tooltip Bottom</h4>
                                                <p>Lorem ipsum pisaci volupt atem accusa saes ntisdumtiu loperm asaerks.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Prize Good Area */}
                {/* Start Product Area */}
                <section className="ftr__product__area ptb--100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section__title--2 text-center">
                                    <h2 className="title__line">Best Seller</h2>
                                    <p>But I must explain to you how all this mistaken idea</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="product__wrap clearfix">
                                {/* Start Single Category */}
                                <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                                    <div className="category">
                                        <div className="ht__cat__thumb">
                                            <a href="product-details.html">
                                                <img src={require('../../assets/images/product/9.jpg')}  alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="fr__hover__info">
                                            <ul className="product__action">
                                                <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
        
                                                <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
        
                                                <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="fr__product__inner">
                                            <h4><a href="product-details.html">Special Wood Basket</a></h4>
                                            <ul className="fr__pro__prize">
                                                <li className="old__prize">$30.3</li>
                                                <li>$25.9</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Category */}
                                {/* Start Single Category */}
                                <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                                    <div className="category">
                                        <div className="ht__cat__thumb">
                                            <a href="product-details.html">
                                                <img src={require('../../assets/images/product/10.jpg')}  alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="fr__hover__info">
                                            <ul className="product__action">
                                                <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
        
                                                <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
        
                                                <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="fr__product__inner">
                                            <h4><a href="product-details.html">voluptatem accusantium</a></h4>
                                            <ul className="fr__pro__prize">
                                                <li className="old__prize">$30.3</li>
                                                <li>$25.9</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Category */}
                                {/* Start Single Category */}
                                <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                                    <div className="category">
                                        <div className="ht__cat__thumb">
                                            <a href="product-details.html">
                                                <img src={require('../../assets/images/product/11.jpg')}  alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="fr__hover__info">
                                            <ul className="product__action">
                                                <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
        
                                                <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
        
                                                <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="fr__product__inner">
                                            <h4><a href="product-details.html">Product Dummy Name</a></h4>
                                            <ul className="fr__pro__prize">
                                                <li className="old__prize">$30.3</li>
                                                <li>$25.9</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Category */}
                                {/* Start Single Category */}
                                <div className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                                    <div className="category">
                                        <div className="ht__cat__thumb">
                                            <a href="product-details.html">
                                                <img src={require('../../assets/images/product/12.jpg')}  alt="product images"/>
                                            </a>
                                        </div>
                                        <div className="fr__hover__info">
                                            <ul className="product__action">
                                                <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
        
                                                <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
        
                                                <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="fr__product__inner">
                                            <h4><a href="product-details.html">Product Title Here </a></h4>
                                            <ul className="fr__pro__prize">
                                                <li className="old__prize">$30.3</li>
                                                <li>$25.9</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Category */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Product Area */}
                {/* Start Testimonial Area */}
                <section className="htc__testimonial__area bg__cat--4">
                    <div className="container">
                        <div className="row">
                            <div className="ht__testimonial__activation clearfix">
                                {/* Start Single Testimonial */}
                                <div className="col-lg-6 col-md-6 single__tes">
                                    <div className="testimonial">
                                        <div className="testimonial__thumb">
                                            <img src={require('../../assets/images/test/client/1.png')}  alt="testimonial images"/>
                                        </div>
                                        <div className="testimonial__details">
                                            <h4><a href="#">Mr.Mike Band</a></h4>
                                            <p>I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success. </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Testimonial */}
                                {/* Start Single Testimonial */}
                                <div className="col-lg-6 col-md-6 single__tes">
                                    <div className="testimonial">
                                        <div className="testimonial__thumb">
                                            <img src={require('../../assets/images/test/client/2.png')}  alt="testimonial images"/>
                                        </div>
                                        <div className="testimonial__details">
                                            <h4><a href="#">Ms.Lucy Barton</a></h4>
                                            <p>I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success. </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Testimonial */}
                                {/* Start Single Testimonial */}
                                <div className="col-lg-6 col-md-6 single__tes">
                                    <div className="testimonial">
                                        <div className="testimonial__thumb">
                                            <img src={require('../../assets/images/test/client/1.png')} alt="testimonial images"/>
                                        </div>
                                        <div className="testimonial__details">
                                            <h4><a href="#">Ms.Lucy Barton</a></h4>
                                            <p>I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success. </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Testimonial */}
                                {/* Start Single Testimonial */}
                                <div className="col-lg-6 col-md-6 single__tes">
                                    <div className="testimonial">
                                        <div className="testimonial__thumb">
                                            <img src={require('../../assets/images/test/client/2.png')}  alt="testimonial images"/>
                                        </div>
                                        <div className="testimonial__details">
                                            <h4><a href="#">Ms.Lucy Barton</a></h4>
                                            <p>I’m up to something. Stay focused. The weather is amazing, walk with me through the pathway of more success. </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Testimonial */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Testimonial Area */}
                {/* Start Top Rated Area */}
                <section className="top__rated__area bg__white pt--100 pb--110">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section__title--2 text-center">
                                    <h2 className="title__line">Top Rated</h2>
                                    <p>But I must explain to you</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--20">
                            {/* Start Single Product */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="htc__best__product">
                                    <div className="htc__best__pro__thumb">
                                        <a href="product-details.html">
                                            <img src={require('../../assets/images/product-2/sm-img-2/1.jpg')} alt="small product"/>
                                        </a>
                                    </div>
                                    <div className="htc__best__product__details">
                                        <h2><a href="product-details.html">dummy Product title</a></h2>
                                        <ul className="rating">
                                            <li><i className="icon-star icons"></i></li>
                                            <li><i className="icon-star icons"></i></li>
                                            <li><i className="icon-star icons"></i></li>
                                            <li className="old"><i className="icon-star icons"></i></li>
                                            <li className="old"><i className="icon-star icons"></i></li>
                                        </ul>
                                        <ul  className="top__pro__prize">
                                            <li className="old__prize">$82.5</li>
                                            <li>$75.2</li>
                                        </ul>
                                        <div className="best__product__action">
                                            <ul className="product__action--dft">
                                                <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
                                                <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
                                                <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Product */}
                            {/* Start Single Product */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="htc__best__product">
                                    <div className="htc__best__pro__thumb">
                                        <a href="product-details.html">
                                            <img src={require('../../assets/images/product-2/sm-img-2/2.jpg')}  alt="small product"/>
                                        </a>
                                    </div>
                                    <div className="htc__best__product__details">
                                        <h2><a href="product-details.html">dummy Product title</a></h2>
                                        <ul className="rating">
                                            <li><i className="icon-star icons"></i></li>
                                            <li><i className="icon-star icons"></i></li>
                                            <li><i className="icon-star icons"></i></li>
                                            <li className="old"><i className="icon-star icons"></i></li>
                                            <li className="old"><i className="icon-star icons"></i></li>
                                        </ul>
                                        <ul  className="top__pro__prize">
                                            <li className="old__prize">$82.5</li>
                                            <li>$75.2</li>
                                        </ul>
                                        <div className="best__product__action">
                                            <ul className="product__action--dft">
                                                <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
                                                <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
                                                <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Product */}
                            {/* Start Single Product */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div className="htc__best__product">
                                    <div className="htc__best__pro__thumb">
                                        <a href="product-details.html">
                                            <img src= {require('../../assets/images/product-2/sm-img-2/3.jpg')}  alt="small product"/>
                                        </a>
                                    </div>
                                    <div className="htc__best__product__details">
                                        <h2><a href="product-details.html">dummy Product title</a></h2>
                                        <ul className="rating">
                                            <li><i className="icon-star icons"></i></li>
                                            <li><i className="icon-star icons"></i></li>
                                            <li><i className="icon-star icons"></i></li>
                                            <li className="old"><i className="icon-star icons"></i></li>
                                            <li className="old"><i className="icon-star icons"></i></li>
                                        </ul>
                                        <ul  className="top__pro__prize">
                                            <li className="old__prize">$82.5</li>
                                            <li>$75.2</li>
                                        </ul>
                                        <div className="best__product__action">
                                            <ul className="product__action--dft">
                                                <li><a href="wishlist.html"><i className="icon-heart icons"></i></a></li>
                                                <li><a href="cart.html"><i className="icon-handbag icons"></i></a></li>
                                                <li><a href="#"><i className="icon-shuffle icons"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Product */}
                        </div>
                    </div>
                </section>
                {/* End Top Rated Area */}
                {/* Start Brand Area */}
                <div className="htc__brand__area bg__cat--4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="ht__brand__inner">
                                    <ul className="brand__list owl-carousel clearfix">
                                        <li><a href="#"><img src= {require('../../assets/images/brand/1.png')}  alt="brand images"/></a></li>
                                        <li><a href="#"><img src= {require('../../assets/images/brand/2.png')} alt="brand images"/></a></li>
                                        <li><a href="#"><img src={require('../../assets/images/brand/3.png')}  alt="brand images"/></a></li>
                                        <li><a href="#"><img src={require('../../assets/images/brand/4.png')}  alt="brand images"/></a></li>
                                        <li><a href="#"><img src={require('../../assets/images/brand/5.png')}  alt="brand images"/></a></li>
                                        <li><a href="#"><img src={require('../../assets/images/brand/5.png')}  alt="brand images"/></a></li>
                                        <li><a href="#"><img src={require('../../assets/images/brand/1.png')}  alt="brand images"/></a></li>
                                        <li><a href="#"><img src={require('../../assets/images/brand/2.png')} alt="brand images"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}
                {/* Start Blog Area */}
                <section className="htc__blog__area bg__white ptb--100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="section__title--2 text-center">
                                    <h2 className="title__line">Our Blog</h2>
                                    <p>But I must explain to you how all this mistaken idea</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="ht__blog__wrap clearfix">
                                {/* Start Single Blog */}
                                <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                    <div className="blog">
                                        <div className="blog__thumb">
                                            <a href="blog-details.html">
                                                <img src={require('../../assets/images/blog/blog-img/1.jpg')}  alt="blog images"/>
                                            </a>
                                        </div>
                                        <div className="blog__details">
                                            <div className="bl__date">
                                                <span>March 22, 2016</span>
                                            </div>
                                            <h2><a href="blog-details.html">Lorem ipsum dolor sit amet, consec tetur adipisicing elit</a></h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className="blog__btn">
                                                <a href="blog-details.html">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Blog */}
                                {/* Start Single Blog */}
                                <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                    <div className="blog">
                                        <div className="blog__thumb">
                                            <a href="blog-details.html">
                                                <img src={require('../../assets/images/blog/blog-img/2.jpg')} alt="blog images"/>
                                            </a>
                                        </div>
                                        <div className="blog__details">
                                            <div className="bl__date">
                                                <span>May 22, 2017</span>
                                            </div>
                                            <h2><a href="blog-details.html">Lorem ipsum dolor sit amet, consec tetur adipisicing elit</a></h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className="blog__btn">
                                                <a href="blog-details.html">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Blog */}
                                {/* Start Single Blog */}
                                <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                    <div className="blog">
                                        <div className="blog__thumb">
                                            <a href="blog-details.html">
                                                <img src={require('../../assets/images/blog/blog-img/3.jpg')} alt="blog images"/>
                                            </a>
                                        </div>
                                        <div className="blog__details">
                                            <div className="bl__date">
                                                <span>March 22, 2018</span>
                                            </div>
                                            <h2><a href="blog-details.html">Lorem ipsum dolor sit amet, consec tetur adipisicing elit</a></h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className="blog__btn">
                                                <a href="blog-details.html">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Blog */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Blog Area */}
                {/* End Banner Area */}
            </Fragment>
        )
    }
}

export default Home
