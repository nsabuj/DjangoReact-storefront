import React, { Component,Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export class GridProducts extends Component {


    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }  

    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/api/products/`)
        .then(res => {
            console.log(res.data);
          this.setState({ products:  res.data});
        })
    }

    render() {
        console.log(this.state.products);
        var bg=require("../../assets/images/bg/4.jpg")
        const inlinestyle={
            background: 'rgba(0, 0, 0, 0) url('+bg+') no-repeat scroll center center / cover' 
        }
        return (
            <Fragment>
     
        {/* Start Bradcaump area */}

        <div className="ht__bradcaump__area" style={inlinestyle}>
            <div className="ht__bradcaump__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="bradcaump__inner">
                                <nav className="bradcaump-inner">
                                  <NavLink className="breadcrumb-item" to="index.html">Home</NavLink>
                                  <span className="brd-separetor"><i className="zmdi zmdi-chevron-right"></i></span>
                                  <span className="breadcrumb-item active">Products</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Bradcaump area */}
        {/* Start Product Grid */}
        <section className="htc__product__grid bg__white ptb--100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-lg-push-3 col-md-9 col-md-push-3 col-sm-12 col-xs-12">
                        <div className="htc__product__rightidebar">
                            <div className="htc__grid__top">
                                <div className="htc__select__option">
                                    <select className="ht__select">
                                        <option>Default softing</option>
                                        <option>Sort by popularity</option>
                                        <option>Sort by average rating</option>
                                        <option>Sort by newness</option>
                                    </select>
                                    <select className="ht__select">
                                        <option>Show by</option>
                                        <option>Sort by popularity</option>
                                        <option>Sort by average rating</option>
                                        <option>Sort by newness</option>
                                    </select>
                                </div>
                                <div className="ht__pro__qun">
                                    <span>Showing 1-12 of 1033 products</span>
                                </div>
                                {/* Start List And Grid View */}
                                <ul className="view__mode" role="tablist">
                                    <li role="presentation" className="grid-view active"><NavLink to="#grid-view" role="tab" data-toggle="tab"><i className="zmdi zmdi-grid"></i></NavLink></li>
                                    <li role="presentation" className="list-view"><NavLink to="#list-view" role="tab" data-toggle="tab"><i className="zmdi zmdi-view-list"></i></NavLink></li>
                                </ul>
                                {/* End List And Grid View */}
                            </div>
                            {/* Start Product View */}
                            
                            <div className="row">
                                <div className="shop__grid__view__wrap">
                                    <div role="tabpanel" id="grid-view" className="single-grid-view tab-pane fade in active clearfix">
                                        {/* Start Single Product */}
                                        {
                                       this.state.products.map( product =>
                                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12" key={product.id}>
                                            <div className="category">
                                                <div className="ht__cat__thumb">
                                                    <NavLink to={`product-details/${product.id}`}>
                                                        <img src={product.image} alt="product images"/>
                                                    </NavLink>
                                                </div>
                                                <div className="fr__hover__info">
                                                    <ul className="product__action">
                                                        <li><NavLink to="wishlist.html"><i className="icon-heart icons"></i></NavLink></li>

                                                        <li><NavLink to="cart.html"><i className="icon-handbag icons"></i></NavLink></li>

                                                        <li><NavLink to="#"><i className="icon-shuffle icons"></i></NavLink></li>
                                                    </ul>
                                                </div>
                                                <div className="fr__product__inner">
                                                    <h4><NavLink to="product-details/´$´">{product.title}</NavLink></h4>
                                                    <ul className="fr__pro__prize">
                                       <li className="old__prize">${product.price}</li>
                                                        <li>{(product.discount_price)?'$'+product.discount_price:''}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                               )
                                            }
                                        {/* End Single Product */}

                                    </div>
                                    <div role="tabpanel" id="list-view" className="single-grid-view tab-pane fade clearfix">
                                        <div className="col-xs-12">
                                            <div className="ht__list__wrap">
                                                {/* Start List Product */}
                                                <div className="ht__list__product">
                                                    <div className="ht__list__thumb">
                                                        <NavLink to="product-details"><img src={require("../../assets/images/product-2/pro-1/1.jpg")} alt="product images"/></NavLink>
                                                    </div>
                                                    <div className="htc__list__details">
                                                        <h2><NavLink to="product-details">Product Title Here </NavLink></h2>
                                                        <ul  className="pro__prize">
                                                            <li className="old__prize">$82.5</li>
                                                            <li>$75.2</li>
                                                        </ul>
                                                        <ul className="rating">
                                                            <li><i className="icon-star icons"></i></li>
                                                            <li><i className="icon-star icons"></i></li>
                                                            <li><i className="icon-star icons"></i></li>
                                                            <li className="old"><i className="icon-star icons"></i></li>
                                                            <li className="old"><i className="icon-star icons"></i></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consec adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqul Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        <div className="fr__list__btn">
                                                            <NavLink className="fr__btn" to="cart.html">Add To Cart</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End List Product */}
                                                {/* Start List Product */}
                                                <div className="ht__list__product">
                                                    <div className="ht__list__thumb">
                                                        <NavLink to="product-details"><img src={require("../../assets/images/product-2/pro-1/2.jpg")} alt="product images"/></NavLink>
                                                    </div>
                                                    <div className="htc__list__details">
                                                        <h2><NavLink to="product-details">Product Title Here </NavLink></h2>
                                                        <ul  className="pro__prize">
                                                            <li className="old__prize">$82.5</li>
                                                            <li>$75.2</li>
                                                        </ul>
                                                        <ul className="rating">
                                                            <li><i className="icon-star icons"></i></li>
                                                            <li><i className="icon-star icons"></i></li>
                                                            <li><i className="icon-star icons"></i></li>
                                                            <li className="old"><i className="icon-star icons"></i></li>
                                                            <li className="old"><i className="icon-star icons"></i></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consec adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqul Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        <div className="fr__list__btn">
                                                            <NavLink className="fr__btn" to="cart.html">Add To Cart</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End List Product */}
                                                {/* Start List Product */}
                                                <div className="ht__list__product">
                                                    <div className="ht__list__thumb">
                                                        <NavLink to="product-details"><img src={require("../../assets/images/product-2/pro-1/3.jpg")} alt="product images"/></NavLink>
                                                    </div>
                                                    <div className="htc__list__details">
                                                        <h2><NavLink to="product-details">Product Title Here </NavLink></h2>
                                                        <ul  className="pro__prize">
                                                            <li className="old__prize">$82.5</li>
                                                            <li>$75.2</li>
                                                        </ul>
                                                        <ul className="rating">
                                                            <li><i className="icon-star icons"></i></li>
                                                            <li><i className="icon-star icons"></i></li>
                                                            <li><i className="icon-star icons"></i></li>
                                                            <li className="old"><i className="icon-star icons"></i></li>
                                                            <li className="old"><i className="icon-star icons"></i></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consec adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqul Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        <div className="fr__list__btn">
                                                            <NavLink className="fr__btn" to="cart.html">Add To Cart</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End List Product */}
                                                {/* Start List Product */}
                                                <div className="ht__list__product">
                                                    <div className="ht__list__thumb">
                                                        <NavLink to="product-details"><img src={require("../../assets/images/product-2/pro-1/4.jpg")} alt="product images"/></NavLink>
                                                    </div>
                                                    <div className="htc__list__details">
                                                        <h2><NavLink to="product-details">Product Title Here </NavLink></h2>
                                                        <ul  className="pro__prize">
                                                            <li className="old__prize">$82.5</li>
                                                            <li>$75.2</li>
                                                        </ul>
                                                        <ul className="rating">
                                                            <li><i className="icon-star icons"></i></li>
                                                            <li><i className="icon-star icons"></i></li>
                                                            <li><i className="icon-star icons"></i></li>
                                                            <li className="old"><i className="icon-star icons"></i></li>
                                                            <li className="old"><i className="icon-star icons"></i></li>
                                                        </ul>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisLorem ipsum dolor sit amet, consec adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqul Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                        <div className="fr__list__btn">
                                                            <NavLink className="fr__btn" to="cart.html">Add To Cart</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End List Product */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Product View */}
                        </div>
                        {/* Start Pagenation */}
                        <div className="row">
                            <div className="col-xs-12">
                                <ul className="htc__pagenation">
                                   <li><NavLink to="#"><i className="zmdi zmdi-chevron-left"></i></NavLink></li> 
                                   <li><NavLink to="#">1</NavLink></li> 
                                   <li className="active"><NavLink to="#">3</NavLink></li>   
                                   <li><NavLink to="#">19</NavLink></li> 
                                   <li><NavLink to="#"><i className="zmdi zmdi-chevron-right"></i></NavLink></li> 
                                </ul>
                            </div>
                        </div>
                        {/* End Pagenation */}
                    </div>
                    <div className="col-lg-3 col-lg-pull-9 col-md-3 col-md-pull-9 col-sm-12 col-xs-12 smt-40 xmt-40">
                        <div className="htc__product__leftsidebar">
                            {/* Start Prize Range */}
                            <div className="htc-grid-range">
                                <h4 className="title__line--4">Price</h4>
                                <div className="content-shopby">
                                    <div className="price_filter s-filter clear">
                                        <form action="#" method="GET">
                                            <div id="slider-range"></div>
                                            <div className="slider__range--output">
                                                <div className="price__output--wrap">
                                                    <div className="price--output">
                                                        <span>Price :</span><input type="text" id="amount" readOnly/>
                                                    </div>
                                                    <div className="price--filter">
                                                        <NavLink to="#">Filter</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* End Prize Range */}
                            {/* Start Category Area */}
                            <div className="htc__category">
                                <h4 className="title__line--4">categories</h4>
                                <ul className="ht__cat__list">
                                    <li><NavLink to="#">Clothing</NavLink></li>
                                    <li><NavLink to="#">Bags</NavLink></li>
                                    <li><NavLink to="#">Shoes</NavLink></li>
                                    <li><NavLink to="#">Jewelry</NavLink></li>
                                    <li><NavLink to="#">Accessories</NavLink></li>
                                    <li><NavLink to="#">Food / Drink Store</NavLink></li>
                                    <li><NavLink to="#">Gift Store</NavLink></li>
                                    <li><NavLink to="#">Accessories</NavLink></li>
                                    <li><NavLink to="#">Watch</NavLink></li>
                                    <li><NavLink to="#">Other</NavLink></li>
                                </ul>
                            </div>
                            {/* End Category Area */}
                            
                            {/* Start Pro Color */}
                            <div className="ht__pro__color">
                                <h4 className="title__line--4">color</h4>
                                <ul className="ht__color__list">
                                    <li className="grey"><NavLink to="#">grey</NavLink></li>
                                    <li className="lamon"><NavLink to="#">lamon</NavLink></li>
                                    <li className="white"><NavLink to="#">white</NavLink></li>
                                    <li className="red"><NavLink to="#">red</NavLink></li>
                                    <li className="black"><NavLink to="#">black</NavLink></li>
                                    <li className="pink"><NavLink to="#">pink</NavLink></li>
                                </ul>
                            </div>
                            {/* End Pro Color */}
                            {/* Start Pro Size */}
                            <div className="ht__pro__size">
                                <h4 className="title__line--4">Size</h4>
                                <ul className="ht__size__list">
                                    <li><NavLink to="#">xs</NavLink></li>
                                    <li><NavLink to="#">s</NavLink></li>
                                    <li><NavLink to="#">m</NavLink></li>
                                    <li><NavLink to="#">reld</NavLink></li>
                                    <li><NavLink to="#">xl</NavLink></li>
                                </ul>
                            </div>
                            {/* End Pro Size */}
                            {/* Start Tag Area */}
                            <div className="htc__tag">
                                <h4 className="title__line--4">tags</h4>
                                <ul className="ht__tag__list">
                                    <li><NavLink to="#">Clothing</NavLink></li>
                                    <li><NavLink to="#">bag</NavLink></li>
                                    <li><NavLink to="#">Shoes</NavLink></li>
                                    <li><NavLink to="#">Jewelry</NavLink></li>
                                    <li><NavLink to="#">Food</NavLink></li>
                                    <li><NavLink to="#">Aceessories</NavLink></li>
                                    <li><NavLink to="#">Store</NavLink></li>
                                    <li><NavLink to="#">Watch</NavLink></li>
                                    <li><NavLink to="#">Other</NavLink></li>
                                </ul>
                            </div>
                            {/* End Tag Area */}
                            {/* Start Compare Area */}
                            <div className="htc__compare__area">
                                <h4 className="title__line--4">compare</h4>
                                <ul className="htc__compare__list">
                                    <li><NavLink to="#">White men’s polo<i className="icon-trash icons"></i></NavLink></li>
                                    <li><NavLink to="#">T-shirt for style girl...<i className="icon-trash icons"></i></NavLink></li>
                                    <li><NavLink to="#">Basic dress for women...<i className="icon-trash icons"></i></NavLink></li>
                                </ul>
                                <ul className="ht__com__btn">
                                    <li><NavLink to="#">clear all</NavLink></li>
                                    <li className="compare"><NavLink to="#">Compare</NavLink></li>
                                </ul>
                            </div>
                            {/* End Compare Area */}
                            {/* Start Best Sell Area */}
                            <div className="htc__recent__product">
                                <h2 className="title__line--4">best seller</h2>
                                <div className="htc__recent__product__inner">
                                    {/* Start Single Product */}
                                    <div className="htc__best__product">
                                        <div className="htc__best__pro__thumb">
                                            <NavLink to="product-details">
                                                <img src={require("../../assets/images/product-2/sm-smg/1.jpg")} alt="small product"/>
                                            </NavLink>
                                        </div>
                                        <div className="htc__best__product__details">
                                            <h2><NavLink to="product-details">Product Title Here</NavLink></h2>
                                            <ul className="rating">
                                                <li><i className="icon-star icons"></i></li>
                                                <li><i className="icon-star icons"></i></li>
                                                <li><i className="icon-star icons"></i></li>
                                                <li className="old"><i className="icon-star icons"></i></li>
                                                <li className="old"><i className="icon-star icons"></i></li>
                                            </ul>
                                            <ul  className="pro__prize">
                                                <li className="old__prize">$82.5</li>
                                                <li>$75.2</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="htc__best__product">
                                        <div className="htc__best__pro__thumb">
                                            <NavLink to="product-details">
                                                <img src={require("../../assets/images/product-2/sm-smg/2.jpg")} alt="small product"/>
                                            </NavLink>
                                        </div>
                                        <div className="htc__best__product__details">
                                            <h2><NavLink to="product-details">Product Title Here</NavLink></h2>
                                            <ul className="rating">
                                                <li><i className="icon-star icons"></i></li>
                                                <li><i className="icon-star icons"></i></li>
                                                <li><i className="icon-star icons"></i></li>
                                                <li className="old"><i className="icon-star icons"></i></li>
                                                <li className="old"><i className="icon-star icons"></i></li>
                                            </ul>
                                            <ul  className="pro__prize">
                                                <li className="old__prize">$82.5</li>
                                                <li>$75.2</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="htc__best__product">
                                        <div className="htc__best__pro__thumb">
                                            <NavLink to="product-details">
                                                <img src={require("../../assets/images/product-2/sm-smg/1.jpg")} alt="small product"/>
                                            </NavLink>
                                        </div>
                                        <div className="htc__best__product__details">
                                            <h2><NavLink to="product-details">Product Title Here</NavLink></h2>
                                            <ul className="rating">
                                                <li><i className="icon-star icons"></i></li>
                                                <li><i className="icon-star icons"></i></li>
                                                <li><i className="icon-star icons"></i></li>
                                                <li className="old"><i className="icon-star icons"></i></li>
                                                <li className="old"><i className="icon-star icons"></i></li>
                                            </ul>
                                            <ul  className="pro__prize">
                                                <li className="old__prize">$82.5</li>
                                                <li>$75.2</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                </div>
                            </div>
                            {/* End Best Sell Area */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Product Grid */}
        {/* Start Brand Area */}
        <div className="htc__brand__area bg__cat--4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ht__brand__inner">
                            <ul className="brand__list owl-carousel clearfix">
                                <li><NavLink to="#"><img src={require("../../assets/images/brand/1.png")} alt="brand images"/></NavLink></li>
                                <li><NavLink to="#"><img src={require("../../assets/images/brand/2.png")} alt="brand images"/></NavLink></li>
                                <li><NavLink to="#"><img src={require("../../assets/images/brand/3.png")} alt="brand images"/></NavLink></li>
                                <li><NavLink to="#"><img src={require("../../assets/images/brand/4.png")} alt="brand images"/></NavLink></li>
                                <li><NavLink to="#"><img src={require("../../assets/images/brand/5.png")} alt="brand images"/></NavLink></li>
                                <li><NavLink to="#"><img src={require("../../assets/images/brand/5.png")} alt="brand images"/></NavLink></li>
                                <li><NavLink to="#"><img src={require("../../assets/images/brand/1.png")} alt="brand images"/></NavLink></li>
                                <li><NavLink to="#"><img src={require("../../assets/images/brand/2.png")} alt="brand images"/></NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Brand Area */}
        {/* Start Banner Area */}
        <div className="htc__banner__area">
            <ul className="banner__list owl-carousel owl-theme clearfix">
                <li><NavLink to="product-details"><img src={require("../../assets/images/banner/big-img/1.png")} alt="banner images"/></NavLink></li>
                <li><NavLink to="product-details"><img src={require("../../assets/images/banner/big-img/2.png")} alt="banner images"/></NavLink></li>
                <li><NavLink to="product-details"><img src={require("../../assets/images/banner/big-img/1.png")} alt="banner images"/></NavLink></li>
                <li><NavLink to="product-details"><img src={require("../../assets/images/banner/big-img/2.png")} alt="banner images"/></NavLink></li>
                <li><NavLink to="product-details"><img src={require("../../assets/images/banner/big-img/2.png")} alt="banner images"/></NavLink></li>
                <li><NavLink to="product-details"><img src={require("../../assets/images/banner/big-img/1.png")} alt="banner images"/></NavLink></li>
                <li><NavLink to="product-details"><img src={require("../../assets/images/banner/big-img/1.png")} alt="banner images"/></NavLink></li>
                <li><NavLink to="product-details"><img src={require("../../assets/images/banner/big-img/2.png")} alt="banner images"/></NavLink></li>
            </ul>
        </div>
        {/* End Banner Area */}
        {/* End Banner Area */}               
            </Fragment>
        )
    }
}

export default GridProducts
