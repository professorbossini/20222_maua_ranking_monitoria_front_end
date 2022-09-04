import logo from '../imagens/logo.png'
const Navbar = props => {
  return (
    <div>
      <div className="flex grid justify-content-center">
        <div className="col-8">
          <img src={logo} alt="logo" width={150} />
        </div>
      </div>
      <div className="text-900 font-bold text-4xl mb-4 text-center">INSTITUTO MAUÁ DE TECNOLOGIA</div>
      <div className="text-700 text-xl mb-6 text-center line-height-3">Ranking do programa de monitoria</div>
    </div>
  )
}

export default Navbar