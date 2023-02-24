import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { DivForm } from "../style/Styled";
import FigurinhasInt from "./FigurinhasInt";
import FigurinhasNac from "./FigurinhasNac";


export default function LoginForm() {

    const [usuario, setUsuario] = useState({
        login: "",
        senha: ""

    })

    const handleChange = e => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }
    /*useEffect(()=> {
        const getResponse = await fetch(
            "http://localhost:8080/CopaApp/rest/login".then((resp)=>{
                return resp.json();
            }).then((resp)=> {
                setUsuario(resp)
                console.log(resp)
            }).catch((error)=> {
                console.log(error)
            })

    }, [])*/



    const logar = async (e) => {
        e.preventDefault()
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(usuario)
        }
        const response = await fetch(
            "http://localhost:8080/CopaApp/rest/login",
            requestOptions
        )

        const data = await response.json()

        if (data.login) {
            sessionStorage.setItem("usuario-validado", data.login)
            sessionStorage.setItem("usuarioObject", JSON.stringify(data))
        }

        if (data) {
            window.location = "/figurinhasNacionais"
        } else {
            window.location = "/login"
            console.log("Login ou senha invalidos")
        }
    }
    return (

        <div>

            <DivForm>
                <form onSubmit={logar} >
                    <div className="formulario">
                        <div>
                            <label>E-mail
                                <input
                                    type="text"
                                    name="login"
                                    placeholder="   Insira seu Login cadastrado"
                                    value={usuario.login}
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div>
                            <label>Senha</label>
                            <input type="password"
                                name="senha"
                                placeholder="   Insira sua Senha"
                                value={usuario.senha}
                                onChange={handleChange} />
                        </div>
                        <div>
                            <button>Enviar</button>
                        </div>
                    </div>
                </form>
            </DivForm>
        </div>




    )
}