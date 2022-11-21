import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid text-center pb-5" style={{backgroundColor:'black'}}>
                <hr className="my-5" />
                <small className="text-muted">all rights reserved. <a target="_blank" className="link-warning mx-1" href="https://www.linkedin.com/in/nikhil-bakshi-0a6b60200/">Linkedin</a> <h5>Bakshi Store </h5> 
                bakshinikhil54@gmail.com<br/>
                7409874098
                </small>
            </div>
        );
    }
}

export default Footer;