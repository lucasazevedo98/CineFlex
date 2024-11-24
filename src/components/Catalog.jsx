import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

export default function Catalog() {

    const [filmes, setFilmes] = useState(null)

    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then(e => setFilmes(e.data))
            .catch(e => console.log(e))
    }, [])


    if (filmes===null) return <p>Carregando...</p>;

    return (
        <Conteudo>
            <h1>Em Cartaz</h1>
            <Filmes>
                {filmes.map((filme,i) => (
                    <Link to={`/sessao/${filme.id}`} key={i}>
                    <img src={filme.posterURL} title={filme.title} />
                    </Link>
                ))}
            </Filmes>

        </Conteudo>
    )
}


export const Conteudo = styled.div`
    height:100%;
    width:100%;
    background-color:#212226;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;


    h1{
        color:white;
        font-size:24px;
        font-family:"Sarala";
        margin-top:20px;
    }




`
const Filmes = styled.div`
        width:100%;
        height:100%;
        display:flex;
        flex-wrap:wrap;
        justify-content:center;

        img {
        width: 145px;
        height: 210px;
        margin:10px
    }

    @media (min-width: 869px) {
        width:700px;
}



`
