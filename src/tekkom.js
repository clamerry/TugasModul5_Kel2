import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";
export default class tekkom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tekkom: [],
            visible: false,
            product: "",
            price: "",
            description: "",
        };
    }
    
    componentDidMount() {
        axios({
            method: "get",
            url: "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline",
            headers: {
                accept: "*/*",
            },
        })
        .then((data) => {
            console.log(data.data);
            this.setState({
                tekkom: data.data,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <div className="boxWhite">
                    <center>
                        <h1 style={{fontFamily:"Georgia"}}>List of Maybelline Products</h1>
                        <p style={{fontFamily:"Gabriolla", fontSize:"20px"}}>by: Kelompok 2</p>
                    </center>
                    
                    <Modal>
                        <div style={{ textAlign: "center" }}>

                        </div>
                    </Modal>

                    {this.state.tekkom.map((results, index) => {
                        return (
                            <div className="card" key={results.id}>
                            <center>
                            
                                <p style={{fontFamily:"Gabriolla", fontSize:"25px"}}>Name: {results.name}</p>
                                <img src={results.image_link}></img>
                                <p style={{fontFamily:"Gabriolla", fontSize:"25px"}}>Price: {results.price}</p>
                               
                                <p style={{textAlign:"justify", marginLeft:"300px", marginRight:"300px", fontFamily:"Gabriolla", fontSize:"15px"}}>{results.description}</p>
                            
                            </center>
                            </div>
                            
                        );
                    })}
                </div>
            </div>
        );
    }
}
