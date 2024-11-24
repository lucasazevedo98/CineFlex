import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import { Conteudo } from "./Catalog";
import { Link } from "react-router-dom";




export default function Session() {
    const { id } = useParams();
    const [sessao, setSessao] = useState([])




    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`)
            .then(e => setSessao(e.data.days))
            .catch(e => console.log(e))


    }, [])



    return (
        <Conteudo>
            <Titulo>Selecione o horário</Titulo>
            {sessao.map((e, i) => (
                <Horarios key={i}>
                    <h2>{e.weekday}, {e.date}</h2>
                    <Divisoria />
                    <Botoes>
                        {e.showtimes.map((e) => (
                            <Link to={`/assentos/${e.id}`}>
                                <Botao>{e.name}</Botao>
                            </Link>
                        ))}
                    </Botoes>
                </Horarios>
            ))}

        </Conteudo>
    )
}

const Titulo = styled.div`
    font-size:30px;
    color:white;
    margin-bottom:20px;
    margin-top:20px;
`
const Horarios = styled.div`
    width:340px;
    height:130px;
    margin-top:50px;
    padding:30px 0px 5px 10px;
    background-color:#2B2D36;
    border-radius:8px;
    color:white;
    margin-top:5px;
    display:flex;
    flex-direction:column; 

    h2{
        font-size:20px;
        font-family:"Sarala"
    }
`
const Divisoria = styled.div`
    width:90%;
    height:1px;
    background-color:#4E5A65;
    margin-top:10px;
`
const Botoes = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const Botao = styled.button`
    
    background-color:#2B2D36;
    border:2px solid #EE897F;
    border-radius:4px;
    color:#EE897F;
    width:84px;
    height:40px;
    cursor:pointer;


    &:hover {
        background-color:#EE897F;
        color:#2B2D36;
    }




`


