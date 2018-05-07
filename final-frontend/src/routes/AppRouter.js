import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import { App } from '../App';
import LoginForm from '../LoginForm';
import { connect } from 'react-redux';
import Weather from '../containers/Weather';
import { verifyToken } from '../action/verify';
const Login = ()=>(
    <div>
        <input type="text"/>
        <input type="text"/>
    </div>
)
const ErrorPage = ()=> (
    <div>
        <h2>
            404 not found
            <Link to="/">Home</Link>
        </h2>
    </div>
)

const Header = () => (
    <div>
        <h2>This is a header</h2>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/Register" activeClassName="is-active">Register</NavLink>
        <NavLink to="/Weather" activeClassName="is-active">Weather</NavLink>
    </div>
)

const Children = ({ match }) => (
    <div>
        <h4>This is a thing?</h4>
        <p>This page is visited by {match.params.id}</p>
    </div>
)

const PrivateRoute = ({ component: Component, auth:Auth }) => (
    <Route
      render={props =>
        Auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

class AppRouter extends Component {

componentWillMount(){
    let localToken = localStorage.getItem('user');
    if(!localToken){

    }
    else{
        this.props.checkToken(localToken);
    }
}

render(){
    return (
    <Router>
    <div>
    <Header />
        <Switch>
        <Route path="/Login" component={LoginForm} />
        <PrivateRoute path="/" component={App} exact={true} auth={this.props.login.isAuthenticated} />
        <Route path="/Register" component={Login} />
        <Route path="/Children/:id" component={Children} />
        <PrivateRoute path="/Weather" component={Weather} exact={true} auth={this.props.login.isAuthenticated}/>
        <Route path="" component={ErrorPage} />
        </Switch>
    </div>
    </Router>
    )
}}

const mapStateToProps = (state) => {
    return {
        login :state.login
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        checkToken: (token) => {dispatch(verifyToken(token))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppRouter);
