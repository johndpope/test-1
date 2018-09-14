/**
 * Created by guy on 8/19/18.
 */
import React, {Component, Fragment} from 'react'
import {Menu, Segment, Button, Form, Grid, Input, Image} from 'semantic-ui-react'
import Slider from "react-slick";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {connect} from 'react-redux'
const templates = require('./index');

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        const path = this.props.location.path;
        console.log(path);
    }

    render() {
        return (
            <div className="" style={{display:'flex', alignItems: 'center', padding: 16}}>
                <div className="" style={{maxWidth: 60}}>
                    <Link to={'/menu'}> <img width={28} height={28} src={require('../static/images/menu.svg')}/></Link>
                </div>
                <div  style={{flex: 1, textAlign: 'center'}}>
                    <img width={160}  src={require('../static/images/logo-header.svg')}/>
                </div>
                <div className="" style={{maxWidth: 60}}>
                    {!this.props.user.token &&
                    <Link to="/login"><p style={{color: '#F3817A'}}>Login</p></Link>}
                </div>
            </div>
        )
    }
}

export default connect(state => {
    return {
        user: state.user
    }
})(Header)