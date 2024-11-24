import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importar o hook useNavigate
import axios from "axios";
import { Conteudo } from "./Catalog";
import styled from "styled-components";

export default function Seats() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [assentos, setAssentos] = useState([]);
    const [selecionado, setSelecionado] = useState([]);
    const [cadeira, setCadeira] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [filme,setFilme] = useState("");
    const [dataHora,setDataHora] = useState("");

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`)
            .then((e) => {
                setAssentos(e.data.seats)
                setFilme(e.data.movie.title)
                setDataHora(`${e.data.day.date} às ${e.data.name}`)

            });
    }, []);

    function selecionarAssento(assento, isAvailable,a) {
        if (!isAvailable) {
            alert("Esse assento já foi reservado!");
            return;
        }
        if (selecionado.includes(assento)) {
            setSelecionado(selecionado.filter(item => item !== assento));
        } else {
            setSelecionado([...selecionado, assento]);
            setCadeira([...cadeira, a]);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (nome && cpf && selecionado.length > 0) {
            axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
                ids: selecionado,
                name: nome,
                cpf: cpf
            }).then(navigate("/sucesso",{
                state: {
                    filme,
                    dataHora,
                    nome,
                    cpf,
                    cadeira
                }
            })).
                catch(e => console.log(e))
        } else {
            alert("Por favor, preencha todos os campos e selecione pelo menos um assento.");
        }
    }

    return (
        <Conteudo>
            <h1>Selecione o(s) assento(s)</h1>
            <Assentos>
                {assentos.map((e, i) => (
                    <Num
                        key={i}
                        $isavailable={e.isAvailable}
                        $selecionado={selecionado.includes(e.id)}
                        onClick={() => selecionarAssento(e.id, e.isAvailable,e.name)}>
                        {e.name}
                    </Num>
                ))}
            </Assentos>

            <Divisoria />

            <Form onSubmit={handleSubmit}>
                <label>Nome do comprador(a)</label>
                <Input
                    type="text"
                    placeholder="Digite seu nome..."
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <label>CPF do comprador(a)</label>
                <Input
                    type="text"
                    placeholder="Digite seu CPF..."
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                <Button type="submit">Reservar assento(s)</Button>
            </Form>
        </Conteudo>
    );
}

const Assentos = styled.div`
    height: 300px;
    width: 350px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const Num = styled.div`
    width: 26px;
    height: 26px;
    background-color: ${(props) =>
        !props.$isavailable ? "#2B2D36" : props.$selecionado ? "#FADBC5" : "#9DB899"};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
    color: ${(props) => (props.$isavailable ? "black" : "#2B2D36")};
    font-family: "Roboto";
    font-size: 11px;
    cursor: ${(props) => (props.$isavailable ? "pointer" : "not-allowed")};

    border: ${(props) => !props.$isavailable ? "2px solid #2B2D36" : props.$selecionado ? "2px solid #EE897F" : "2px solid #2B2D36"};
`;

const Form = styled.form`
    margin-top: 20px;
    width: 350px;
    display: flex;
    flex-direction: column;

    label{
        font-size:16px;
        margin-bottom:2px;
        color:white;
        font-family:"Sarala";
    }

`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    width: 93%;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

const Button = styled.button`
    width:100%;
    padding: 10px 20px;
    background-color: #EE897F;
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
`;

const Divisoria = styled.div`
    width: 300px;
    height:2px;
    background-color:#4E5A65;
`