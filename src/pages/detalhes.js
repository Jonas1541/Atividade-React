import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
import Comments from './../components/Comments/index';

const filmes = [{
    "nome": "Steins;Gate Movie - load region of deja vu",
    "genero": "Suspense psicológico/Nerd",
    "descricao": "Filme de ficção científica, spin off do anime",
    "nota": "El Psy Kongroo"
},
{
    "nome": "Kuroshitsuji Book of Atlantic",
    "genero": "Ação/Comédia obscura/Fantasia/Supernatural",
    "descricao": "Continuação do anime Kuroshitsuji/Black Butler",
    "nota": "Yes, My Lord"
},
{
    "nome": "Demon Slayer: Mugen Train",
    "genero": "Ação/Aventura",
    "descricao": "Continuação do anime Demon Slayer/Kimetsu no Yaiba",
    "nota": "UMAI!!"
}
]


function Detalhes() {
    const { filme } = useParams();

    const filmeEscolhido = filmes.filter(f =>
        f.nome === filme
    );

    return (
        <div>
            <Title
                title={"Detalhes"}
                text="" />
            <div className="container text-center">
                <p>Filme: {filmeEscolhido[0].nome}</p>
                <div>
                    <p>{filmeEscolhido[0].descricao}</p>
                    <p>{filmeEscolhido[0].genero}</p>
                </div>
                <Comments filme={filmeEscolhido[0].nome} />
            </div>
        </div>
    )
}

export default Detalhes;