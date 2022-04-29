import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import TambahkanPenyakit from './TambahkanPenyakit';
import TesDNA from './TesDNA';
import Pencarian from './Penarian';
import ShowUrutan from './ShowUrutan';
import styles from './Home.module.css';

class Home extends Component {
    render() {
        return (
            <Router>
                <div className = {styles.navigation}>
                    <Link to="/">Home</Link>
                    <Link to="/TambahkanPenyakit">Tambahkan Penyakit</Link>
                    <Link to="/TesDNA">Tes DNA</Link>
                    <Link to="/Pencarian">Pencarian</Link>
                    <Link to="/ShowUrutan">Hasil Pencarian</Link>
                  {/* A <Routes> looks through its children <Route>s and
                      renders the first one that matches the current URL. */}
                </div>
                    <Routes>
                        <Route exact path="/"/>
                        <Route exact path="/TambahkanPenyakit" element={<TambahkanPenyakit/>}/>
                        <Route exact path="/TesDNA" element={<TesDNA/>}/>
                        <Route exact path="/Pencarian" element={<Pencarian/>}/>
                        <Route exact path="/ShowUrutan" element={<ShowUrutan/>}/>
                    </Routes>
            </Router>
            /*
            <BrowserRouter>
                <Fragment>
                    <Route path="/" component={Menu} />
                    <Route path="/tambahkanpenyakit" component={TambahkanPenyakit} />
                    <Route path="/tesdna" component={TesDNA} />
                </Fragment>
            </BrowserRouter>
            */
        )
    }
}

export default Home;