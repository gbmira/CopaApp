import React, { useEffect, useState } from "react";
import { DivFigurinhas, DivFigurinhasInt, DivHome } from "../style/Styled";
import cr7 from "../img/cr7.jpg"
import messi from "../img/messi.jpg"
import phil from "../img/phil.webp"
import seila from "../img/seila.jpg"
import messiExtra from "../img/messiExtra.jpg"
import kamal from "../img/kamal.jpg"
import hasan from "../img/hasan.jpg"
import mbappe from "../img/mbappe.jpeg"
import heung from "../img/heung.jpg"
import kevinBryune from "../img/kevinBryune.webp"




export default function FigurinhasInt() {
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
            <DivFigurinhasInt>
                <h1>Olá <span>{usuario.nome}</span> seja bem vindo a sua area!</h1>
                <h3>Dados de login: {usuario.login}</h3>
                <h3>RM: {usuario.rm}</h3>
                <p>Nessa página você tem acesso as top 10º figurinhas Internacionais do album da copa 2022!</p>


                <div className="alinhaCards">
                    <div className="cards">
                        <p><img src={cr7} alt="" className="figCr7"/></p>
                    </div>
                    <div className="cards">
                        <p><img src={messi} alt="" /></p>
                    </div>
                    <div className="cards">
                        <p><img src={phil} alt=""  /></p>
                    </div>
                    <div className="cards">
                        <p><img src={seila} alt=""  /></p>
                    </div>
                    <div className="cards">
                        <p><img src={messiExtra} alt=""  /></p>
                    </div>
                    <div className="cards">
                        <p><img src={kamal} alt=""  /></p>
                    </div>
                    <div className="cards">
                        <p><img src={hasan} alt=""  /></p>
                    </div>
                    <div className="cards">
                        <p><img src={mbappe} alt=""  /></p>
                    </div>
                    <div className="cards">
                        <p><img src={heung} alt=""  /></p>
                    </div>
                    <div className="cards">
                        <p><img src={kevinBryune} alt=""  /></p>
                    </div>
                </div>
            </DivFigurinhasInt>
        </div>
    )
}