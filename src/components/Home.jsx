import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { DivFlex, DivHome } from "../style/Styled";
import neymar from "../img/neymar.png";
import copa2022 from "../img/copa2022.png"
import copa2018 from "../img/copa2018.png"
import copa2014 from "../img/copa2014.jpg"
import copa2010 from "../img/copa2010.jpg"
import Footer from "./Footer";
import { useEffect } from "react";

export default function Home() {


    
    return(
        <DivHome>
            <DivFlex>

            <div className="principal">
            <h1>O Guia Oficial Panini das Figurinhas da Copa!</h1>
            <p>Somos um site que trás em primeira mão todas as informações relevantes para você completar seu album da copa do mundo! </p>
            <p>Trazemos em primeira mão toda a coleção de figurinhas dos maiores jogadores do mundo, e também suas edições passadas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ad enim consequatur omnis molestiae doloribus, vel doloremque laboriosam, consectetur sunt laudantium! Sed magni necessitatibus repellat reiciendis? Repudiandae accusantium necessitatibus molestiae.</p>
            <p>Veja só nosso guia!</p>
            <button>Guia de figurinhas</button>
            </div>

            <div className="imageNey">
                <img src={neymar} alt="" />
            </div>
            </DivFlex>

            <div className="alinhaCards">

            <div className="cards">
                <h2>Album da copa de 2022</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor necessitatibus cum magnam molestias fugit nemo sequi voluptate harum repellendus voluptatum accusamus provident vitae, deserunt voluptatibus sint at nobis iste.</p>
                <p><img src={copa2022} alt="" srcset="" /></p>
            </div>
            <div className="cards">
                <h2>Album da copa de 2018</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor necessitatibus cum magnam molestias fugit nemo sequi voluptate harum repellendus voluptatum accusamus provident vitae, deserunt voluptatibus sint at nobis iste.</p>
                <p><img src={copa2018} alt="" srcset="" /></p>
            </div>
            <div className="cards">
                <h2>Album da copa de 2014</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor necessitatibus cum magnam molestias fugit nemo sequi voluptate harum repellendus voluptatum accusamus provident vitae, deserunt voluptatibus sint at nobis iste.</p>
                <p><img src={copa2014} alt="" srcset="" /></p>
            </div>
            <div className="cards">
                <h2>Album da copa de 2010</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor necessitatibus cum magnam molestias fugit nemo sequi voluptate harum repellendus voluptatum accusamus provident vitae, deserunt voluptatibus sint at nobis iste.</p>
                <p><img src={copa2010} alt="" srcset="" /></p>
            </div>
            </div>



            </DivHome>
 
       

        
        )
}