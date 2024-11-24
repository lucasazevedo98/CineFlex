import styled from "styled-components"
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"

export default function Header() {

    const navigate = useNavigate();


    return (
        <Topo>
                <img src={logo} onClick={() => navigate("/")} />
                <h1 onClick={() => navigate("/")}>Cineflex</h1>
        </Topo>
    )
}


const Topo = styled.div `
    width:100%;
    height:70px;
    background-color:#EE897F;
    display:flex;
    align-items:center;
    justify-content:center;

    img {
        width: 40px;
        height:40px;
        cursor:pointer;
    }

    h1 {
        font-size:34px;
        font-family:"Raleway";
        color:#FADBC5;
        font-weight:600;
        margin-left:10px;
        cursor:pointer;
    }



`


