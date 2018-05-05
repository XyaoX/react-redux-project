import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../action/weatherQuery';

class WeatherSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term:''};
    }

    onInputChange = (e)=>{
        this.setState({term:e.target.value});
    }


    onFormSubmit = (e)=> {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

    render() {
        return (
    <div>
    <form onSubmit={this.onFormSubmit} className="input-group">
    <input type="text" placeholder="Get a five-day forecast in your fav cities" className="form-control" value={this.state.term} onChange={this.onInputChange}/>
    <span className="input-group-btn">
        <Button bsStyle="primary" type="submit" >Submit</Button>
    </span>
    </form>
    <p>{this.state.term}</p>
    </div>
    
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({ fetchWeather },dispatch);
}



export default connect(null,mapDispatchToProps)(WeatherSearchBar);