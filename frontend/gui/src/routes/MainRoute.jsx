
import React, { PureComponent, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/home/Home'
import GridProducts from '../components/products/GridProducts';
import Product from '../components/products/Product';
export class MainRoute extends PureComponent {
    render() {
        return (
            <Switch>
                <Route path='/' component={Home} exact strict />                
                <Route path='/home' component={Home} exact strict />
                <Route path='/products' component={GridProducts} exact strict />
                <Route path='/product-details/:id' component={Product} exact strict />
               
            </Switch>
        )
    }
}

export default MainRoute
