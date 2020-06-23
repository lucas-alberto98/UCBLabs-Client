import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import TopBar from './../Teamplate/TopBar'

import { relatorioResumo, graficoManutencao, graficoAvisos, graficoPedidos } from '../Service'
import { Card, CardHeader, CardBody } from 'reactstrap';

class Relatorio extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            resumo : null,
            grafico_manutencao : null,
            grafico_avisos : null,
            grafico_pedidos : null
        }
    }

    componentDidMount(){
        relatorioResumo(data =>{
            this.setState({resumo : data.dados})
        })

        graficoManutencao(data =>{
            console.log(data)
            this.setState({grafico_manutencao : data})
        })

        graficoAvisos(data =>{
            console.log(data)
            this.setState({grafico_avisos : data})
        })

        graficoPedidos(data =>{
            console.log(data)
            this.setState({grafico_pedidos : data})
        })
    }

    render(){
        
        return(
            <div className="home">
                <TopBar />

                <div className="container corpo">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box">
                                <div className="page-title-right">
                                    
                                </div>
                                <h4 className="page-title">Relatorios</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.resumo !== null &&
                            <>
                            <div className="col-3">
                                <div className="card tilebox-one shadow ">
                                    <div className="card-body">
                                        <i className="mdi mdi-book mdi-48px float-right" />
                                        <h6 className="text-uppercase mt-0">Total de Disciplinas</h6>
                                        <h2 className="my-2">{this.state.resumo.qtd_disciplinas}</h2>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card tilebox-one shadow ">
                                    <div className="card-body">
                                        <i className="mdi mdi-file-table-box mdi-48px float-right" />
                                        <h6 className="text-uppercase mt-0">Total de Equipamentos</h6>
                                        <h2 className="my-2">{this.state.resumo.qtd_equipamentos}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card tilebox-one shadow ">
                                    <div className="card-body">
                                        <i className="mdi mdi-cog-box mdi-48px float-right" />
                                        <h6 className="text-uppercase mt-0">Total de Manutenções</h6>
                                        <h2 className="my-2">{this.state.resumo.qtd_manutencao}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card tilebox-one shadow ">
                                    <div className="card-body">
                                        <i className="mdi mdi-chat-alert mdi-48px float-right" />
                                        <h6 className="text-uppercase mt-0">Total de Pedidos Realizado</h6>
                                        <h2 className="my-2">{this.state.resumo.qtd_pedidos}</h2>
                                    </div>
                                </div>
                            </div>
                           </>
                        }
                     
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <Card className="shadow">
                                <CardHeader>Manutenções ao longo do tempo</CardHeader>
                                <CardBody>
                                    <LineChart
                                        width={window.innerWidth *0.38}
                                        height={250}
                                        data={this.state.grafico_manutencao}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="date" />
                                        <YAxis  />
                                        <Tooltip />
                                        <Legend  />
                                        <Line type="monotone" dataKey="qtd" name="Quantidade de manutenção" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    </LineChart>
                                </CardBody>
                            </Card>
                            
                        </div>
                        <div className="col-6">
                            <Card className="shadow">
                                <CardHeader>Criação de avisos ao longo do tempo</CardHeader>
                                <CardBody>
                                    <LineChart
                                        width={window.innerWidth *0.38}
                                        height={250}
                                        data={this.state.grafico_avisos}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="date" />
                                        <YAxis  />
                                        <Tooltip />
                                        <Legend  />
                                        <Line type="monotone" dataKey="qtd" name="Quantidade de avisos criados" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    </LineChart>
                                </CardBody>
                            </Card>
                            
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <Card className="shadow">
                                <CardHeader>Pedidos Realizados</CardHeader>
                                <CardBody>
                                    <LineChart
                                        width={window.innerWidth *0.8}
                                        height={250}
                                        data={this.state.grafico_pedidos}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="date" />
                                        <YAxis  />
                                        <Tooltip />
                                        <Legend  />
                                        <Line type="monotone" dataKey="qtd" name="Quantidade de pedidos realizados" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    </LineChart>
                                </CardBody>
                            </Card>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Relatorio;