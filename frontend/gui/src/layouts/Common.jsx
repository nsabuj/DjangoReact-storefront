import React, { Component,Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import * as Bootstrap from 'react-bootstrap';
import './../assets/css/bootstrap.min.css';
import './../assets/css/owl.carousel.min.css';
import './../assets/css/owl.theme.default.min.css';
import './../assets/css/core.css';
import './../assets/css/shortcode/shortcodes.css';
import './../assets/css/style.css';
import './../assets/css/responsive.css';
import './../assets/css/custom.css';
import { connect } from 'react-redux';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import MainRoute from '../routes/MainRoute';
import Search from '../components/common/Search';
import Cart from '../components/common/Cart';
class CommonLayout extends Component{


    render(){
        console.log(this.props.showSearch);
        return (

            <Router>
            {/* Body main wrapper start */}
            <div className="wrapper">
            <Header/>
            <div className="body__overlay"></div>
            {/* Start Offset Wrapper */}
            <div className={this.props.showSearch?'offset__wrapper search__box__show__hide': 'offset__wrapper'}>
            <Search/>
            <Cart/>

            </div>
            {/* End Offset Wrapper */}
            <MainRoute/>

            <Footer/>
            </div>
            {/* Body main wrapper end */}
            </Router>

        );
    }
}


function mapStateToProps(state) {
    return {
        showSearch: state.showSearch,
        showCart:state.showCart
    };
}

export default connect(mapStateToProps, null)(CommonLayout);
