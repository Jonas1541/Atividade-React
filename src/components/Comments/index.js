const commentarios = [{
    "filme": "Steins;Gate Movie - load region of deja vu", "comenatarios": [{
        "usuario": "mary",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom, gostei muito!"
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom, gostei!"
    }
    ]
},
{
    "filme": "Kuroshitsuji Book of Atlantic", "comenatarios": [{
        "usuario": "mary",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
},
{
    "filme": "Demon Slayer: Mugen Train", "comenatarios": [{
        "usuario": "mary",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "mary",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
}
]

export default function Comments({ filme }) {
    const comentariosFilme = commentarios.filter(f =>
        f.filme === filme
    );
    return (
        <div className="container text-center">
            {comentariosFilme[0].comenatarios.map((comment, i) => (
                <div className="row">
                    <div className="col-md-3" key={i.toString()}>
                        {comment.usuario}
                    </div>
                    <div className="col-md-9" key={i.toString()}>
                        {comment.comentario}
                    </div>
                </div>
            ))}
        </div>
    )
}