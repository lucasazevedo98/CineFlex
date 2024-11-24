import { Link,useLocation } from "react-router-dom";
import { Conteudo } from "./Catalog";
import styled from "styled-components";



export default function Sucess() {
    const location = useLocation();
    const { filme, dataHora, nome, cpf,cadeira } = location.state;

    return(
        <Conteudo>
            <Titulo>Pedido finalizado!</Titulo>
            <Pedido>
                <h2>Filme e sessão</h2>

                <Separador />

                <p>{filme}</p>
                <p>{dataHora}</p>



                <h2>Ingressos</h2>

                <Separador />

                {cadeira.map((e,i)=>(
                    <p key={i}>Assento {e}</p>
                    ))}
                    

                <h2>Comprador(a)</h2>

                <Separador />

                    <p>Nome: {nome}</p>
                    <p>CPF: {cpf}</p>
            </Pedido>

            <Button to="/">Voltar para tela inicial</Button>
            
        </Conteudo>
    )
}

const Pedido = styled.div`
    width:340px;
    height:100%;
    background-color:#2B2D36;
    margin-top:20px;
    padding:10px;
    display:flex;
    flex-direction:column;
    border-radius:8px;

    h2 {
        font-size:22px;
        font-family:"Sarala";
        font-weight:700;
        color:#EE897F;
        margin-top:25px;
    }
    
    p{
        font-size:20px;
        color:white;
        font-family:"Sarala";
        margin-top:10px;
    }



`

const Separador = styled.div`
    width:90%;
    height:2px;
    background-color:#4E5A65;
    margin-top:10px;
    margin-bottom:10px;


`
const Titulo = styled.h2`

    color:#9DB899;
    font-size:30px;
    margin-top:10px;
    font-family:"Sarala";


`

const Button = styled(Link)`
    
    margin-top:30px;
    margin-bottom:30px;
    width:300px;
    padding: 10px 20px;
    background-color: #EE897F;
    display:flex;
    text-decoration:none;
    align-items:center;
    justify-content:center;
    font-family:"Sarala";
    color:#2B2D36;
    font-weight:700;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #F28C59;
    }




`
