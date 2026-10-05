import { useState } from 'react';
import FilmeCard from './components/FilmeCard';
import './App.css';

const FILMES_INICIAIS = [
  {
    id: 1,
    titulo: 'The Last of Us',
    genero: 'Drama / Sobrevivência',
    ano: 2023,
    avaliacao: '7.3',
    tag: 'HBO',
    capa: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    assistido: true
  },
  {
    id: 2,
    titulo: 'Ted Lasso',
    genero: 'Comédia / Esporte',
    ano: 2020,
    avaliacao: '7.8',
    tag: 'NETFLIX',
    capa: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    assistido: false
  },
  {
    id: 3,
    titulo: 'Ant-Man and the Wasp',
    genero: 'Ação / Ficção',
    ano: 2023,
    avaliacao: '7.3',
    tag: 'HBO',
    capa: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=800&auto=format&fit=crop',
    assistido: false
  },
  {
    id: 4,
    titulo: 'Interestelar',
    genero: 'Ficção Científica',
    ano: 2014,
    avaliacao: '8.7',
    tag: 'NETFLIX',
    capa: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    assistido: true
  },
  {
    id: 5,
    titulo: 'A Origem',
    genero: 'Suspense / Ficção',
    ano: 2010,
    avaliacao: '8.8',
    tag: 'WARNER',
    capa: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop',
    assistido: false
  }
];

function App() {
  const [filmes, setFilmes] = useState(FILMES_INICIAIS);

  // Alterna status do filme
  const alternarStatusFilme = (id) => {
    setFilmes((prevFilmes) =>
      prevFilmes.map((filme) =>
        filme.id === id ? { ...filme, assistido: !filme.assistido } : filme
      )
    );
  };

  // Contadores
  const totalFilmes = filmes.length;
  const assistidos = filmes.filter((filme) => filme.assistido).length;
  const pendentes = totalFilmes - assistidos;

  return (
    <div className="cinema-viewport">
      {/* Luz ambiente avermelhada sutil (igual à imagem de referência) */}
      <div className="ambient-glow" />

      <div className="cinema-wrapper">
        <header className="cinema-header">
          <h1 className="main-title">Minha Lista de Filmes</h1>
          <p className="main-subtitle">Catálogo cinematográfico pessoal</p>

          <div className="counters-container">
            <div className="counter-pill">
              <span className="counter-label">Total</span>
              <span className="counter-value">{totalFilmes}</span>
            </div>
            <div className="counter-pill counter-assistidos">
              <span className="counter-label">Assistidos</span>
              <span className="counter-value">{assistidos}</span>
            </div>
            <div className="counter-pill counter-pendentes">
              <span className="counter-label">Pendentes</span>
              <span className="counter-value">{pendentes}</span>
            </div>
          </div>
        </header>

        {/* Vitrine de pôsteres com rolagem e foco */}
        <main className="cards-showcase">
          <div className="cards-track">
            {filmes.map((filme) => (
              <FilmeCard
                key={filme.id}
                titulo={filme.titulo}
                genero={filme.genero}
                ano={filme.ano}
                assistido={filme.assistido}
                capa={filme.capa}
                avaliacao={filme.avaliacao}
                tag={filme.tag}
                onAlternarStatus={() => alternarStatusFilme(filme.id)}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
