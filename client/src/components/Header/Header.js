import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Sidenav/Sidenav';


class Header extends Component {

    state = {
        showNav: false
    }

    onHideNav = () => {
        this.setState({ showNav: false })
    }

    render() {
        return (
            <div>
                <header>
                    <div className="open_nav">
                        <img src="/images/menu.png" alt="menu" onClick={() => this.setState({ showNav: true })} style={{ width: '100px', padding: '10px', cursor: 'pointer' }}/>
                    </div>
                    <Nav showNav={this.state.showNav} onHideNav={() => this.onHideNav()} />
                    <Link to="/"><img src="/images/logo.png" alt="Logo" className="logo"/></Link>
                </header>
            </div>
        );
    }
}

export default Header;