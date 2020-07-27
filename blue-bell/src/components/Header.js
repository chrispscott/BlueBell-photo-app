import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='container1'>
                <a className='bell' src='##'><i class="fa fa-bell" aria-hidden="true"></i></a>
                <h1 className='title1'><a> BlueBell </a></h1>
                <a className='settings' src='##'><i class="fa fa-cogs" aria-hidden="true"></i> settings</a>
            </div>
        );
    }
}

export default Header;