
import React, { PureComponent, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute'
import Home from '../components/home/Home'
import GridProducts from '../components/products/GridProducts';
import Product from '../components/products/Product';
import LoginForm from '../components/pages/LogIn';
import SignUp from '../components/pages/SignUp'
import MyAccount from '../components/pages/MyAccount'
import Category from '../components/pages/Category'
export class MainRoute extends PureComponent {



    render() {
       
      
        return (
            <Switch  >
                <Route path='/' component={Home} exact strict />                
                <Route path='/home' component={Home} exact strict />
                <Route path='/products' component={GridProducts} exact strict />
                <Route path='/product-details/:id' component={Product} exact strict />
                <Route path='/login' component={LoginForm} exact strict />
                <Route path='/signup' component={SignUp} exact strict />
                <Route path='/category' component={Category} exact strict />
               
                <Route path='/my-account' exact component={AuthRoute(MyAccount)} />
               
            </Switch>
        )
    }
}


export default MainRoute;

