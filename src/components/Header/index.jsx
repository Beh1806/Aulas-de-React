import React from "react"
import {Frete, Informacoes, Logo, Busca, CampoBusca, Dados,
Name, Tel, Names} from "./style";
import Logoimg from "../../assets/giuliana-logo.png"

//ícones
import {FiSearch, FiPhone, FiHelpCircle, FiUser, FiShoppingBag} from "react-icons/fi";

export default function Header({name}){

    return(
        <>
            <Frete>AGENDE HOJE SUA ENTREGA PARA O DIA DA MULHER E GANHE FRETE GRÁTIS</Frete>
            <Informacoes>
                <Logo src={Logoimg}/>
                <Busca>
                    <CampoBusca type="text" placeholder="Digite o produto ou a cidade que deseja procurar"/>
                    <FiSearch style={{fontSize:'1.5em', borderBottom:'1px solid', height:'98%'}}/>
                </Busca>
                <Dados>
                    <Tel title="Telefone">
                        <FiPhone style={{fontSize:'2em'}}/>
                        <Names>
                            <Name>TELEVENDAS</Name>
                            <Name style={{fontWeight:'bold'}}>11 33831700</Name>
                        </Names>
                    </Tel>
                    
                    
                </Dados>
            </Informacoes>
        </>
    )
}