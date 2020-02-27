import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Auxilary from '../../hoc/Auxilary';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {

        // ovo ispod je uradjeno da se izbjegnu nedostatci ako koristimo setstate zbo async prirode koda

        this.setState( (prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer};
        })
    }

    render() {
        return (
            <Auxilary>

                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxilary>
        )
    }
}

export default Layout;