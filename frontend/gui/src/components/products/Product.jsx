import React, { Fragment,PureComponent } from 'react'
import axios from 'axios';

export class Product extends PureComponent{
    constructor(props) {
        super(props);

        this.state = {
          product_id:'',
          data: []
        }

        document.title="Product details";


    }

    componentDidMount(){
        

        const id = this.props.match.params.id;



        axios.get(`http://127.0.0.1:8000/api/products/`+id)
        .then(res => {
            console.log(res.data);
          this.setState({ data:  res.data});
        })
        console.log(this.state.data);

        this.setState({
            product_id: id
        });


    }


    render() {
        
        var bg=require("../../assets/images/bg/4.jpg")
        const bgstyle={
            background: 'rgba(0, 0, 0, 0) url('+bg+') no-repeat scroll center center / cover' 
        }
        const data=this.state.data;
        return (
            <Fragment>

        {/* Start Bradcaump area */}
        <div className="ht__bradcaump__area" style={bgstyle}>
            <div className="ht__bradcaump__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="bradcaump__inner">
                                <nav className="bradcaump-inner">
                                  <a className="breadcrumb-item" href="index.html">Home</a>
                                  <span className="brd-separetor"><i className="zmdi zmdi-chevron-right"></i></span>
                                  <a className="breadcrumb-item" href="product-grid.html">Products</a>
                                  <span className="brd-separetor"><i className="zmdi zmdi-chevron-right"></i></span>
                                  <span className="breadcrumb-item active">ean shirt</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Bradcaump area */}
        {/* Start Product Details Area */}
        <section className="htc__product__details bg__white ptb--100">
            {/* Start Product Details Top */}
            <div className="htc__product__details__top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                            <div className="htc__product__details__tab__content">
                                {/* Start Product Big Images */}
                                <div className="product__big__images">
                                    <div className="portfolio-full-image tab-content">
                                        <div role="tabpanel" className="tab-pane fade in active" id="img-tab-1">
                                            <img src={require("../../assets/images/product-2/big-img/1.jpg")} alt="full-image"/>
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="img-tab-2">
                                            <img src={require("../../assets/images/product-2/big-img/2.jpg")} alt="full-image"/>
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="img-tab-3">
                                            <img src={require("../../assets/images/product-2/big-img/3.jpg")} alt="full-image"/>
                                        </div>
                                    </div>
                                </div>
                                {/* End Product Big Images */}
                                {/* Start Small images */}
                                <ul className="product__small__images" role="tablist">
                                    <li role="presentation" className="pot-small-img active">
                                        <a href="#img-tab-1" role="tab" data-toggle="tab">
                                            <img src={require("../../assets/images/product-2/sm-img-3/3.jpg")} alt="small-image"/>
                                        </a>
                                    </li>
                                    <li role="presentation" className="pot-small-img">
                                        <a href="#img-tab-2" role="tab" data-toggle="tab">
                                            <img src={require("../../assets/images/product-2/sm-img-3/1.jpg")} alt="small-image"/>
                                        </a>
                                    </li>
                                    <li role="presentation" className="pot-small-img">
                                        <a href="#img-tab-3" role="tab" data-toggle="tab">
                                            <img src={require("../../assets/images/product-2/sm-img-3/2.jpg")} alt="small-image"/>
                                        </a>
                                    </li>
                                </ul>
                                {/* End Small images */}
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 smt-40 xmt-40">
                            <div className="ht__product__dtl">
                                <h2>{data.title}</h2>
                                <h6>Model: <span>MNG001</span></h6>
                                <ul className="rating">
                                    <li><i className="icon-star icons"></i></li>
                                    <li><i className="icon-star icons"></i></li>
                                    <li><i className="icon-star icons"></i></li>
                                    <li className="old"><i className="icon-star icons"></i></li>
                                    <li className="old"><i className="icon-star icons"></i></li>
                                </ul>
                                <ul  className="pro__prize">
                                  <li className="old__prize">${data.price}</li>
                                  <li>{(data.discount_price)?'$'+data.discount_price:''}</li>
                                </ul>
                                <p className="pro__info">{data.description}</p>
                                <div className="ht__pro__desc">
                                    <div className="sin__desc">
                                        <p><span>Availability:</span> In Stock</p>
                                    </div>
                                    <div className="sin__desc align--left">
                                        <p><span>color:</span></p>
                                        <ul className="pro__color">
                                            <li className="red"><a href="#">red</a></li>
                                            <li className="green"><a href="#">green</a></li>
                                            <li className="balck"><a href="#">balck</a></li>
                                        </ul>
                                        <div className="pro__more__btn">
                                            <a href="#">more</a>
                                        </div>
                                    </div>
                                    <div className="sin__desc align--left">
                                        <p><span>size</span></p>
                                        <select className="select__size">
                                            <option>s</option>
                                            <option>l</option>
                                            <option>xs</option>
                                            <option>xl</option>
                                            <option>m</option>
                                            <option>s</option>
                                        </select>
                                    </div>
                                    <div className="sin__desc align--left">
                                        <p><span>Categories:</span></p>
                                        <ul className="pro__cat__list">
                                            <li><a href="#">{data.category}</a></li>

                                        </ul>
                                    </div>
                                    <div className="sin__desc align--left">
                                        <p><span>Product tags:</span></p>
                                        <ul className="pro__cat__list">
                                            <li><a href="#">Fashion,</a></li>
                                            <li><a href="#">Accessories,</a></li>
                                            <li><a href="#">Women,</a></li>
                                            <li><a href="#">Men,</a></li>
                                            <li><a href="#">Kid,</a></li>
                                        </ul>
                                    </div>

                                    <div className="sin__desc product__share__link">
                                        <p><span>Share this:</span></p>
                                        <ul className="pro__share">
                                            <li><a href="#" target="_blank"><i className="icon-social-twitter icons"></i></a></li>

                                            <li><a href="#" target="_blank"><i className="icon-social-instagram icons"></i></a></li>

                                            <li><a href="https://www.facebook.com/Furny/?ref=bookmarks" target="_blank"><i className="icon-social-facebook icons"></i></a></li>

                                            <li><a href="#" target="_blank"><i className="icon-social-google icons"></i></a></li>

                                            <li><a href="#" target="_blank"><i className="icon-social-linkedin icons"></i></a></li>

                                            <li><a href="#" target="_blank"><i className="icon-social-pinterest icons"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Product Details Top */}
        </section>
        {/* End Product Details Area */}
        {/* Start Product Description */}
        <section className="htc__produc__decription bg__white">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        {/* Start List And Grid View */}
                        <ul className="pro__details__tab" role="tablist">
                            <li role="presentation" className="description active"><a href="#description" role="tab" data-toggle="tab">description</a></li>
                            <li role="presentation" className="review"><a href="#review" role="tab" data-toggle="tab">review</a></li>
                            <li role="presentation" className="shipping"><a href="#shipping" role="tab" data-toggle="tab">shipping</a></li>
                        </ul>
                        {/* End List And Grid View */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="ht__pro__details__content">
                            {/* Start Single Content */}
                            <div role="tabpanel" id="description" className="pro__single__content tab-pane fade in active">
                                <div className="pro__tab__content__inner">
                                    <p>Formfitting clothing is all about a sweet spot. That elusive place where an item is tight but not clingy, sexy but not cloying, cool but not over the top. Alexandra Alvarez’s label, Alix, hits that mark with its range of comfortable, minimal, and neutral-hued bodysuits.</p>
                                    <h4 className="ht__pro__title">Description</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                                    <h4 className="ht__pro__title">Standard Featured</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in</p>
                                </div>
                            </div>
                            {/* End Single Content */}
                            {/* Start Single Content */}
                            <div role="tabpanel" id="review" className="pro__single__content tab-pane fade">
                                <div className="pro__tab__content__inner">
                                    <p>Formfitting clothing is all about a sweet spot. That elusive place where an item is tight but not clingy, sexy but not cloying, cool but not over the top. Alexandra Alvarez’s label, Alix, hits that mark with its range of comfortable, minimal, and neutral-hued bodysuits.</p>
                                    <h4 className="ht__pro__title">Description</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                                    <h4 className="ht__pro__title">Standard Featured</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                                </div>
                            </div>
                            {/* End Single Content */}
                            {/* Start Single Content */}
                            <div role="tabpanel" id="shipping" className="pro__single__content tab-pane fade">
                                <div className="pro__tab__content__inner">
                                    <p>Formfitting clothing is all about a sweet spot. That elusive place where an item is tight but not clingy, sexy but not cloying, cool but not over the top. Alexandra Alvarez’s label, Alix, hits that mark with its range of comfortable, minimal, and neutral-hued bodysuits.</p>
                                    <h4 className="ht__pro__title">Description</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                                    <h4 className="ht__pro__title">Standard Featured</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem</p>
                                </div>
                            </div>
                            {/* End Single Content */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* End Product Description */}
        {/* Start Product Area */}
        <section className="htc__product__area--2 pb--100 product-details-res">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section__title--2 text-center">
                            <h2 className="title__line">New Arrivals</h2>
                            <p>But I must explain to you how all this mistaken idea</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="product__wrap clearfix">
                        {/* Start Single Product */}
                        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                            <div className="category">
                                <div className="ht__cat__thumb">
                                    <a href="product-details.html">
                                        <img src={require("../../assets/images/product/1.jpg")} alt="product images"/>
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
                        {/* End Single Product */}
                        {/* Start Single Product */}
                        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                            <div className="category">
                                <div className="ht__cat__thumb">
                                    <a href="product-details.html">
                                        <img src={require("../../assets/images/product/2.jpg")} alt="product images"/>
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
                        {/* End Single Product */}
                        {/* Start Single Product */}
                        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                            <div className="category">
                                <div className="ht__cat__thumb">
                                    <a href="product-details.html">
                                        <img src={require("../../assets/images/product/3.jpg")} alt="product images"/>
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
                        {/* End Single Product */}
                        {/* Start Single Product */}
                        <div className="col-md-3 col-lg-3 col-sm-6 col-xs-12">
                            <div className="category">
                                <div className="ht__cat__thumb">
                                    <a href="product-details.html">
                                        <img src={require("../../assets/images/product/4.jpg")} alt="product images"/>
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
                        {/* End Single Product */}
                    </div>
                </div>
            </div>
        </section>
        {/* End Product Area */}
        {/* Start Banner Area */}
        <div className="htc__brand__area bg__cat--4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="ht__brand__inner">
                            <ul className="brand__list owl-carousel clearfix">
                                <li><a href="#"><img src={require("../../assets/images/brand/1.png")} alt="brand images"/></a></li>
                                <li><a href="#"><img src={require("../../assets/images/brand/2.png")} alt="brand images"/></a></li>
                                <li><a href="#"><img src={require("../../assets/images/brand/3.png")} alt="brand images"/></a></li>
                                <li><a href="#"><img src={require("../../assets/images/brand/4.png")} alt="brand images"/></a></li>
                                <li><a href="#"><img src={require("../../assets/images/brand/5.png")} alt="brand images"/></a></li>
                                <li><a href="#"><img src={require("../../assets/images/brand/5.png")} alt="brand images"/></a></li>
                                <li><a href="#"><img src={require("../../assets/images/brand/1.png")} alt="brand images"/></a></li>
                                <li><a href="#"><img src={require("../../assets/images/brand/2.png")} alt="brand images"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Banner Area */}
        {/* End Banner Area */}               
            </Fragment>
        )
    }
}

export default Product
