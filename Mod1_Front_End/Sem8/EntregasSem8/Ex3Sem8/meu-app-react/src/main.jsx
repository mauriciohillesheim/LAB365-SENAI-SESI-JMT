/**
 * Arquivo principal de inicialização da aplicação React
 * Responsável por renderizar o componente App no elemento root
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Componente para capturar erros durante a renderização
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Erro capturado pela ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Algo deu errado.</h2>
          <p>Por favor, recarregue a página ou tente novamente mais tarde.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Renderização do componente principal dentro de uma ErrorBoundary
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
