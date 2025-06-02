import { useState } from 'react'
import './App.css'
import bebidasData from './bebidas.json'

function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState(bebidasData.categorias[0].nome);

  return (
    <div className="app-container">
      <header>
        <h1>Sessão de Bebidas</h1>
        <p>Escolha sua bebida favorita</p>
      </header>

      <main>
        <div className="categorias-container">
          {bebidasData.categorias.map((categoria) => (
            <button
              key={categoria.nome}
              className={`categoria-btn ${categoriaAtiva === categoria.nome ? 'ativo' : ''}`}
              onClick={() => setCategoriaAtiva(categoria.nome)}
            >
              {categoria.nome}
            </button>
          ))}
        </div>

        <div className="bebidas-container">
          {bebidasData.categorias
            .find((cat) => cat.nome === categoriaAtiva)
            .opcoes.map((bebida) => (
              <div className="card-bebida" key={bebida.nome}>
                <h3>{bebida.nome}</h3>
                <div className="preco">R$ {bebida.preco.toFixed(2)}</div>
                <button className="btn-adicionar">Adicionar</button>
              </div>
            ))}
        </div>
      </main>

      <footer>
        <p>© 2025 Sessão de Bebidas - Todos os direitos reservados</p>
      </footer>
    </div>
  )
}

export default App
