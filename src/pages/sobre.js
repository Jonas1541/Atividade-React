import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';



function Sobre() {
    const { name } = useParams();
    
    return (
        <div>  
            <Title
                title={"The Organization"}
                text={"Bem vindo à dominação mundial. Do entretenimento, é claro."} />
            <div class='container'>
                <div class="row">
                    <div class="col-md-6">
                        <p>Bem-vindo à "The Organization - Streaming de Filmes". Somos uma plataforma de streaming de filmes dedicada a oferecer uma experiência única de entretenimento para nossos assinantes.

Nossa equipe de roteiristas, diretores e produtores são todos especializados em criar filmes inovadores, que desafiam as convenções e oferecem uma nova perspectiva sobre o mundo do cinema. Nós nos orgulhamos de ser uma empresa que busca sempre a inovação e a originalidade em tudo o que fazemos.

Embora nossa empresa possa ser um pouco diferente das outras plataformas de streaming, acreditamos que é isso que nos torna especiais. Buscamos oferecer um conteúdo que vá além do que a maioria das pessoas pode imaginar, e estamos sempre buscando novas formas de surpreender e impressionar nossos assinantes.

Nossa visão é ser uma das principais empresas de entretenimento do mundo, e estamos trabalhando incansavelmente para alcançar esse objetivo. Acreditamos que, ao fornecer conteúdo inovador e surpreendente para nossos assinantes, estamos criando um movimento que se estenderá além do mundo do entretenimento.

Queremos ser um exemplo para outras empresas, mostrando que é possível ter sucesso sem seguir as regras pré-estabelecidas. Acreditamos que nossa abordagem inovadora e fora da caixa é o que nos tornará líderes em nosso setor.

No futuro, esperamos expandir nossas operações e nos tornar uma das principais empresas de entretenimento do mundo. Nosso objetivo é criar uma cultura de inovação e criatividade, e com tempo, isso nos levará à dominação mundial completa. Junte-se a nós ou seja erradicado.

Agradecemos por visitar nosso site, e esperamos que você encontre em nossos filmes algo que mexa com seus sentidos e ofereça uma nova perspectiva sobre o mundo do cinema.</p>
                    </div>
                    <div class="col-md-6">
                    <img src='/assets/images/Badge.png' alt="imagem" className="card-img-top" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sobre;