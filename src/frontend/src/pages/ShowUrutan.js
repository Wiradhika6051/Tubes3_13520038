import styles from './ShowUrutan.module.css'
import "./TemplateUrutan"
import React, { Component, Fragment } from 'react'
import TemplateUrutan from './TemplateUrutan';
import axios from 'axios';

class ShowUrutan extends Component {

    state = {
        post: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((result)=> {
            this.setState({
                post : result.data
            })
        })
    }

    render() {
        return (
            <Fragment>
                <div className = {styles.postJudul}>
                    <div>13 April 2022</div>
                </div>
                <div>
                    {
                        this.state.post.map(post => {
                            return <TemplateUrutan nomor={post.id} waktu="13 April 2022" nama={post.name} penyakit="HIV" stat="True" />
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default ShowUrutan;