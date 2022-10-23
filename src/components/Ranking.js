import axios from 'axios'
import env from 'react-dotenv'
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import '../css/styles.css'

import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable';
import { ProgressBar } from 'primereact/progressbar';

const Ranking = () => {
  const [ranking, setRanking] = useState([])
  useEffect(() => {
    const url = `${env.BACKEND_URL}/${env.ENDPOINT_RANKING}`
    // console.log(url)
    axios.get(url)
    .then(res => {
      setRanking(res.data)
    })
  }, [])
  
  return (
    <div>
      <Navbar />
      <div className="grid flex justify-content-center">
        <div className="col-8">
          <DataTable 
            value={ranking} 
            emptyMessage={<ProgressBar mode="indeterminate" />}
            paginator
            rows={10}>
            {/* <Column sortable="true" field="ra" header="RA" /> */}
            <Column sortable="true" field="nome" header="Nome" />
            <Column sortable="true" field="pontos" header="Número de exercícios resolvidos" />
            <Column sortable="true" field="nota" header="Pontos que serão adicionados às atividades avaliativas (máximo 2)" />
          </DataTable>
        </div>
      </div>
    </div>
  )
  }
  export default Ranking
  // const funcoesDeBusca = {
    //   0: (index) => {
      //     setRanking([])
      //     setAbaAtiva(index)
  //     const url = `${env.BACKEND_URL}/${env.ENDPOINT_PREPROG}/ranking`
  //     console.log(url)
  //     axios.get(url)
  //       .then(res => {
  //         setRanking(res.data)
  //       })
  //   },
  //   1: (index) => {
  //     setRanking([])
  //     setAbaAtiva(index)
  //     const url = `${env.BACKEND_URL}/${env.ENDPOINT_TECHINORACLE}/ranking`
  //     console.log(url)
  //     axios.get(url)
  //       .then(res => {
  //         console.log(res.data)
  //         console.log(typeof (res.data))
  //         setRanking(res.data.map(item => {
  //           return {
  //             ies: item.ies, nome: item.nome, pontos: item.pontos + '%'
  //           }
  //         }))
  //       })
  //   },
  // }
