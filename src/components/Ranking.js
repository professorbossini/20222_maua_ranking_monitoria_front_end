import axios from 'axios'
import env from 'react-dotenv'
import React, { useState, useEffect } from 'react'

import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable';
import { TabView, TabPanel } from 'primereact/tabview';

const Ranking = () => {
    const [ranking, setRanking] = useState([])
    const [abaAtiva, setAbaAtiva] = useState(0)
    useEffect(() => {
        funcoesDeBusca[0](0)
    }, [])
    
    const funcoesDeBusca = {
        0: (index) => {
            setRanking([])
            setAbaAtiva(index)
            const url = `${env.BACKEND_URL}/${env.ENDPOINT_PREPROG}/ranking`
            console.log(url)
            axios.get(url)
                .then(res => {
                    setRanking(res.data)
                })
        },
        1: (index) => {
            setRanking([])
            setAbaAtiva(index)
            const url = `${env.BACKEND_URL}/${env.ENDPOINT_TECHINORACLE}/ranking`
            console.log(url)
            axios.get(url)
                .then(res => {
                    console.log(res.data)
                    console.log(typeof(res.data))
                    setRanking(res.data.map(item => {
                        return{
                            ies: item.ies, nome: item.nome, pontos: item.pontos+'%'
                        }
                    }))
                })
        },
    }
   
    return (
        <div className="grid flex justify-content-center">
            <div className="col-8">
                <TabView activeIndex={abaAtiva} onTabChange={e => funcoesDeBusca[e.index](e.index)}>
                    <TabPanel header="Pré Programação">
                        <DataTable value={ranking}>
                            <Column sortable="true" field="ies" header="IES" />
                            <Column sortable="true" field="nome" header="Nome" />
                            <Column sortable="true" field="pontos" header="Pontuação" />
                        </DataTable>
                    </TabPanel>
                    <TabPanel header="Tech in Oracle">
                    <DataTable value={ranking}>
                            <Column sortable="true" field="ies" header="IES" />
                            <Column sortable="true" field="nome" header="Nome" />
                            <Column sortable="true" field="pontos" header="Percentual" />
                        </DataTable>
                    </TabPanel>

                </TabView>
            </div>

        </div>
    )
}
export default Ranking