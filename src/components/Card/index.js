import {useLocation} from "react-router-dom";
import "./card.css";


const filmes = [{
  "nome": "Steins;Gate Movie - load region of deja vu",
  "duracao": "1H30",
  "foto": "Steins;Gate.jpeg",
  "ano": 2013,
  "assistido": true,
  "genero": "Suspense psicológico/Nerd",
  "descricao": "Filme de ficção científica, spin off do anime",
  "nota": 10
},
{
  "nome": "Kuroshitsuji Book of Atlantic",
  "duracao": "1H40",
  "foto": "Kuroshitsuji.webp",
  "ano": 2017,
  "assistido": true,
  "genero": "Ação/Comédia obscura/Fantasia/Supernatural",
  "descricao": "Continuação do anime Kuroshitsuji/Black Butler",
  "nota": 10
},
{
  "nome": "Demon Slayer: Mugen Train",
  "duracao": "1H59",
  "foto": "DemonSlayer.jpg",
  "ano": 2020,
  "assistido": true,
  "genero": "Ação/Aventura",
  "descricao": "Continuação do anime Demon Slayer/Kimetsu no Yaiba",
  "nota": 10
}
]

const planos = [
  {
    nome: "Plano A",
    preco: "R$ 15,99/MÊS",
    detalhes: "Plano básico. Até duas telas simultâneas."
  },

  {
    nome: "Plano B",
    preco: "30,99/MÊS",
    detalhes: "Plano familiar. Até 4 telas simultâneas."
  },

  {
    nome: "Plano C",
    preco: "50,00/MÊS",
    detalhes: "Plano árvore genealógica. Até 10 telas simultâneas."
  },
];

function Assitido({ javisto }) {
  if (javisto) {
    return <p>Assistido ✔</p>;
  }
  return <p className="item">Não assistido</p>;
}

export default function Card() {

  const url = useLocation();

  if(url.pathname==="/"){return (
    <div className="container text-center">
      <div className="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                <p>Sinopse</p>
                <p className="card-text">{filme.descricao}</p>
                <p>{filme.duracao}</p>
                <p>{filme.genero}</p>
                <p>{filme.nota}</p>
                <Assitido
                  javisto={filme.assistido}
                />
                <a
                  href={`/detalhes/${filme.nome}`}
                >
                  <div className="btn btn-primary">
                    Detalhes
                  </div>
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}
else if(url.pathname==="/planos"){
  return(
    <div>
      {
        <div className="container text-center">
          <div className="row">
            {planos.map((plano, i) => (
              <div className="col" key={i}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      {plano.nome} {" "}
                    </h5>
                    <p>{plano.preco}</p>
                    <p className="card-text">{plano.detalhes}</p>
                    <a href={`/detalhes/${plano.nome}`}>
                      <div className="btn btn-primary">Adquirir</div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  )
}
}