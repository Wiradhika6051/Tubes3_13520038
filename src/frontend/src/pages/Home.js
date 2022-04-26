import React, {Component, Fragment} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Menu from './Menu';
import TambahkanPenyakit from './TambahkanPenyakit';
import TesDNA from './TesDNA';

class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Route path="/" exact component={Menu} />
                    <Route path="/tambahkanpenyakit" component={TambahkanPenyakit} />
                    <Route path="/tesdna" component={TesDNA} />
                </Fragment>
            </BrowserRouter>
        )
    }
}

export default Home;