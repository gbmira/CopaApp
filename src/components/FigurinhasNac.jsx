import React, { useState } from "react";
import { useEffect } from "react";
import { DivFigurinhas } from "../style/Styled";
import ViniJr from "../img/figurinha-vinicius-jr..webp"
import Paqueta from "../img/paqueta.webp"
import Fneymar from "../img/figuneymar.webp"
import Alisson from "../img/alisson.jpg"
import Antony from "../img/antony.webp"
import Fred from "../img/fred.webp"
import Pedro from "../img/pedro.jpg"
import GabrielJesus from "../img/gabrieljesus.webp"
import ThiagoSilva from "../img/thiago.webp"
import Ederson from "../img/ederson.jpg"

const verificar = sessionStorage.getItem("usuario-validado")

export default function FigurinhasNac() {
    const verificar = sessionStorage.getItem("usuario-validado")
    const usuario = JSON.parse(sessionStorage.getItem("usuarioObject"))


    useEffect(() => {
        if (verificar == null) {
            alert("Você precisa estar logado para acessar!")
            window.location = "/"
        }
    }, [])

    return (
        <div>
            <DivFigurinhas>
                <h1>Olá <span>{usuario.nome}</span> seja bem vindo a sua area!</h1>
                <h3>Dados de login: {usuario.login}</h3>
                <h3>RM: {usuario.rm}</h3>
                <p>Nessa página você tem acesso as top 10º figurinhas Nacionais do album da copa 2022!</p>
                <div className="alinhaCards">
                    <div className="cards">
                        <p><img src={ViniJr} alt="" className="FiguViniJr"/></p>
                    </div>
                    <div className="cards">
                        <p><img src={Paqueta} alt="" /></p>
                    </div>
                    <div className="cards">
                        <p><img src={Fneymar} alt="" /></p>
                    </div>
                    <div className="cards">
                        <p><img src={Alisson} alt="" /></p>
                    </div>
                    <div className="cards">
                        <p><img src={Antony} alt="" /></p>
                    </div>
                    <div className="cards">
                        <p><img src={Fred} alt="" /></p>
                    </div>
                    <div className="cards">
                        <p><img src={Pedro} alt="" /></p>
                    </div>
                    <div className="cards">
                        <p><img src={GabrielJesus} alt="" /></p>
                    </div>
                    <div className="cards">
                        <p><img src={ThiagoSilva} alt="" /></p>
                    </div>
                    <div className="cards">
                        <p><img src={Ederson} alt="" /></p>
                    </div>
                </div>
            </DivFigurinhas>
        </div>



    )
}