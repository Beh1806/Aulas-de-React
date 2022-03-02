import styled from "styled-components";

export const Frete = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #980236;
    width: 100%;
    height: 40px;
    color: #fff;
    padding: 15px;
    font-weight: bold;
`;

export const Informacoes = styled.div`
    width: 100%;
    display: flex;
`
export const Logo = styled.img`
    width: 20%;
    padding-left: 5%;
    padding-top: 5px;
`
export const Busca = styled.div`
    width: 45%;
    padding-left: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
`
export const CampoBusca = styled.input`
    width: 100%;
    border: 0;
    border-bottom: 1px solid;
    outline: none;
    padding: 10px;
    font-size: 1.1em;
    text-align: center;
`
export const Dados = styled.div`
    width: 30%;
    margin-left: 5%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 30px;
`
export const Tel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.6s;
    padding: 5px;

    &:hover{
        background-color: rgba(0, 0, 0, .1);
    }
`

export const Names = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Name = styled.span`
    color: #000;
    font-size: 14px;
`