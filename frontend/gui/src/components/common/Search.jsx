import React, { Component } from 'react'
import { connect } from 'react-redux';
import {CHANGE_SEARCH_SHOW,CHANGE_CART_SHOW} from '../../Store/actions/ActionTypes';
export class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
           showSearch: false
        }  
    }


    toggleSearch = (e) => {

        e.preventDefault();
       
        this.props.changeSearchShow(!this.props.showSearch);

    }

    render() {
        return (
            <div className="">
        <div className="search__area">
            {/* Start Search Popap */}
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-12" >
                            <div className="search__inner">
                                <form action="#" method="get">
                                    <input placeholder="Search here... " type="text"/>
                                    <button type="submit"></button>
                                </form>
                                <div className="search__close__btn" onClick={this.toggleSearch}>
                                    <span className="search__close__btn_icon"><i className="zmdi zmdi-close"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Popap */}                
            </div>
        )
    }
}

const mapDispachToProps = (dispach) => {
    return {
        changeSearchShow: (val) => dispach({ type: CHANGE_SEARCH_SHOW, value: val })
    }
}

function mapStateToProps(state) {
    return {
        showSearch:state.showSearch
    };
}

export default connect(mapStateToProps, mapDispachToProps)(Search);


