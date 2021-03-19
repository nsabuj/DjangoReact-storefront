import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import * as actions from '../../Store/actions/Auth'
import history from '../../history';
import LoginValidation from '../../validations/LogIn'


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            remember: false,
            errors: {},
            isValid: false,
            isLoading: false,
            isFormValid: true,
            server_message: 'Incorret email address or password provided',
            login_success:false
        }
        
       

       
    }

    componentDidMount(){
        console.log(this.props.isAuthenticated);
        if(this.props.isAuthenticated){
           
            history.push('/my-account');
         } 
    }

    componentDidUpdate(nextProps){
       console.log(nextProps.isAuthenticated);
        if(nextProps.isAuthenticated){
            history.push('/my-account');
        }
    }


    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoading : true });
    const rtn = LoginValidation(this.state);
    this.setState(rtn);
      if (rtn.isValid) {
        this.props.onAuth(this.state.email, this.state.password);
      //  window.location.href = "/my-account";
      console.log(this.state);
      this.setState({isLoading : false});
      console.log(this.state);
      if(this.props.isAuthenticated){
      this.timeout = setTimeout(() => {
        
      
        history.push('/my-account');
      }, 3000);
    }
            
        
      }
    
  }

  render() {


   
    let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    }

    const { errors } = this.state;

    
    return (
        <div className="container">
            
            <div className="row">

                <div className="col-lg-12">


<div className="global-container">
	<div className="card login-form">
	<div className="card-body">
		<h3 className="card-title text-center">Log in</h3>
		<div className="card-text">
			
			<div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> 
			<form>
				
				<div className="form-group">
					<label htmlFor="email">Email address</label>
					<input type="email" name="email" value={this.state.email} onChange={this.changeHandler} className={classnames('form-control form-control-sm', { 'error': errors.email })} />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<a href="#" style={{float:'right',fontSize:'12px'}}>Forgot password?</a>
					<input type="password" name="password" value={this.state.password} onChange={this.changeHandler} className={classnames('form-control form-control-sm', { 'error': errors.password })} />
				</div>
				<button type="submit" onClick ={this.handleSubmit} className="btn btn-primary btn-block">Sign in</button>
				
				<div className="sign-up">
					Don't have an account? <a href="/signup">Create One</a>
				</div>
			</form>
		</div>
	</div>
</div>
</div>
</div>
        </div>


        </div>

    );
  }
}



const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token!==null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);