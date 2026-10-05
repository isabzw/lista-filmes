import React from 'react';

function FilmeCard({ titulo, genero, ano, assistido, capa, avaliacao, tag, onAlternarStatus }) {
  return (
    <div className={`filme-card ${assistido ? 'card-assistido' : 'card-pendente'}`}>
      {/* Pôster com scrim escuro */}
      <div 
        className="card-poster"
        style={{ backgroundImage: `url(${capa})` }}
      >
        <div className="card-scrim" />
      </div>

      {/* Topo do Pôster: Tag e Avaliação no estilo da referência */}
      <div className="card-header-top">
        <span className="streaming-badge">{tag || 'CINEMA'}</span>
        <div className="rating-badge">
          <span className="rating-num">{avaliacao || '8.0'}</span>
          <span className="rating-star">★</span>
        </div>
      </div>

      {/* Conteúdo inferior */}
      <div className="card-footer-content">
        <div className="card-meta-top">
          {assistido ? (
            <span className="status-pill status-assistido">✓ Assistido</span>
          ) : (
            <span className="status-pill status-pendente">Pendente</span>
          )}
        </div>

        <h3 className="filme-titulo">{titulo}</h3>
        
        <p className="filme-detalhes">
          <span>{ano}</span>
          <span className="divisor">&bull;</span>
          <span>{genero}</span>
        </p>

        <button 
          type="button" 
          className={`btn-toggle-status ${assistido ? 'btn-assistido' : 'btn-pendente'}`}
          onClick={onAlternarStatus}
        >
          {assistido ? '✓ Já assisti' : 'Ainda não assisti'}
        </button>
      </div>
    </div>
  );
}

export default FilmeCard;
