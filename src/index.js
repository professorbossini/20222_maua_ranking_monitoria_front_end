import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
// escolha o tema que desejar
// https://primefaces.org/primereact/showcase/#/setup
//escolhemos esse aqui
import 'primereact/resources/themes/md-light-indigo/theme.css'

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)