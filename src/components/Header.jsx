
import React from "react";
import { Link } from "react-router-dom";
import { DivBody, DivFoooter, DivHeader, Divzero } from "../style/Styled";

export default function Header() {

    const logout = ()=>{
    sessionStorage.removeItem("usuario-validado")
    window.location = "/"
    }

    const verificar = sessionStorage.getItem("usuario-validado")

    return(
        <DivBody>        
        <DivHeader>
            <Link to="/"><h1>FIAP na <span>Copa</span> </h1></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/figurinhasNacionais">Figurinhas Nacionais</Link></li>
                <li><Link to="/figurinhasInternacionais">Figurinhas Internacionais</Link></li>
                <li className="liLogin"><Link to="/login" className="login">Login</Link></li>
                <li><button style={verificar ? {display:"inline"}: {display:"none"}} onClick={logout}> Sair </button></li>
            </ul>
       </DivHeader>
        </DivBody>
       
        
   
      


  
        

    )
}
