import './App.css'

function App() {
  return (
    <div className="form-container">
      <span className="ask-title">
        Descubra os melhores planos e ofertas para sua Empresa
      </span>
      <span className="ask-subtitle">
        Com poucas informações você receberá serviços da Vivo selecionados
        exclusivamente.
      </span>
      <div className="button-container">
        <button className="button-base button-small light-outline">
          {'<'}
        </button>
        <button className="button-base button-large light-outline">
          Avançar
        </button>
      </div>
    </div>
  )
}

export default App
