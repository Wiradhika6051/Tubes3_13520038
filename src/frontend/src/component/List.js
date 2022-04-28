import { React, useState,useEffect,Component } from 'react'
import data from './ListData.json'
import TemplateUrutan from '../pages/TemplateUrutan'
import axios from 'axios';
/*
class List extends Component 
 {
    getURL_(props){
        let url = 'https://localhost:8080/api/search'
        if(props.length>0){
            url = url + '/'+ props.replace(/\ /,"%20")
        }
        console.log("aaa")
        return url;
    }
    constructor(props){
        this.state = {
            query: props,
            result: [],
           // url: getURL_(props)
        };
        this.getData = this.getData.bind(this)
        this.getURL  = this.getURL_.bind(this)
    }
    getData = () => {
        axios.get(this.state.query).then(function(response){
            this.setState({
                result: response.message
            })
        });
    };
    //get request

    //create a new array by filtering the original array
    /*
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    componentDidMount(){
        this.getData();
    };
    render(){
    return (
        <ul>
            {this.state.result.map((item) => (
                <TemplateUrutan nomor={item.id_tes} waktu={item.tanggal_tes} nama={item.nama} penyakit={item.penyakit} stat={item.status} />
                //<li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
            }
}
export default List
*/
function List(props) {
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List