import React, { useEffect, useState } from "react";
import Menu from '../../Components/Menu';
import Panel from "../../Components/Panel";
import Table from "../../Components/Table";
import $ from 'jquery';
import axios from "axios";
import './style.css';

export default function Dashboard(){
    const [ data, setData ] = useState([])
    const baseURL = 'https://api.tot.apigbmtech.com/api/selective-process/wagons?authorization=67c9d5c3887b64c33671bb25f681753a'

    function handleTable(){
        $('#table').show(1000)
    }

    useEffect(() => {
        $('#table').hide();
        axios.get(baseURL).then((response) => {
            setData(response.data)
            console.log(response.data);
        })
    }, [])

    return(
        <div id="dashboard">
            <Menu/>
            <div className="content-dashboard" >
                <Panel/>
                <section className="panel-dashboard">
                    <h3 className="title-dashboard">Vagões Cadastrados</h3>
                    <button onClick={handleTable} className="button-search">Buscar Vagões API</button>
                </section>    
                <section id="table" className="table-dashboard">
                    <Table data={data}/>
                </section>
            </div>
        </div>
    )
}