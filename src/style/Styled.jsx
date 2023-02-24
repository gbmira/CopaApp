import React from "react";
import styled from "styled-components";

export const DivFigurinhas = styled.div`

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
padding: 30px;
padding-top: 60px;
h1 {
   font-size: 60px;
   color: #FFF915;
   max-width: 50%;

}
h3{
   color: white;
}
span {
   color: white;
   font-style: italic;
   
}
p{
   font-size: 35px;
   color: white;
   max-width: 50%;
}

.alinhaCards {
   display: flex;
   background-color: #383838;
   color: black;
   margin-top: 30px;
   flex-wrap: wrap;
   max-width: 90%;
}
.cards{
   background-color: #FFF915;
   padding-bottom: 20px;
   padding-left: 20px;
   padding-right: 20px;
   margin: 15px;
   border-radius: 5px;
   p{
      font-size: 25px;
      color: black;
   }

   img{
      padding-top: 20px;
      max-width: 300px;
      margin: 0 auto;
      padding-bottom: 0px;
      max-height: 300px;
   }
}

`

export const DivFigurinhasInt = styled.div`

font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
padding: 30px;
padding-top: 60px;
h1 {
   font-size: 60px;
   color: #FFF915;
   max-width: 50%;

}
h3{
   color: white;
}
span {
   color: white;
   font-style: italic;
   
}
p{
   font-size: 35px;
   color: white;
   max-width: 50%;
}

.alinhaCards {
   display: flex;
   background-color: #383838;
   color: black;
   margin-top: 30px;
   flex-wrap: wrap;
   max-width: 90%;
}
.cards{
   background-color: #540b11;
   padding-bottom: 20px;
   padding-left: 20px;
   padding-right: 20px;
   margin: 15px;
   border-radius: 5px;
   p{
      font-size: 25px;
      color: black;
   }

   img{
      padding-top: 20px;
      max-width: 300px;
      margin: 0 auto;
      padding-bottom: 0px;
      max-height: 300px;
   }
}

`



export const DivFlex = styled.div`
display: flex;

img {
   width: 600px;
   margin-left: 100px;
}
`
export const DivHome = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
background-color: #383838;
color: white;
.principal{
   font-size: 20px;
   max-width: 45%;
   padding-top: 150px;
   margin-left: 100px;
   max-height: 100px;
   margin-top: 120px;

}
.principal button {
   color: black;
   padding: 15px;
   font-style: bold;
   font-size: 20px;
   background-color: #FFF915;
   border-radius: 10px;
   margin: 5px;
   border: 10px;
   margin-top: 30px;
}

.principal p {
   padding-top: 20px;
   font-size: 20px;
   margin-bottom: 10px;
   
}
.principal h1{
   color: #FFF915;
}
.alinhaCards {
   display: flex;
   background-color: #126E51;
   padding: 100px;
   border-radius: 10px;
   color: black;
}
.cards{
   h2{
      text-align: center;
      padding-top: 20px;
      padding-bottom:20px ;
   }
   background-color: #FFF915;
   padding-left: 10px;
   margin: 15px;
   border-radius: 5px;
   border-color: green;

   img{
      padding-top: 30px;
      max-width: 300px;
      margin: 0 auto;
      margin-left: 50px;
      padding-bottom: 40px;

   }


   
}

`




export const Config = styled.html`
*{
   margin: 0;
   padding: 0;
   border: 0;
}
`

export const DivBody = styled.body`
*{
   margin: 0;
   padding: 0;
   border: 0em;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

`
export const DivForm = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
display: block;
width: 1000px;
justify-content: end;
margin-left: 47%;
color: white;


form{
   width: 1015px;
   background-color: #3d53e3;
   padding-bottom: 324px;
   
}

.formulario {
   font-size: 40px;
   font-weight: bold;
   padding-left: 250px;
   padding-top: 200px;

   input{
      size: 40px;
      width: 600px;
      height:60px;
      display: block;  
      margin-top: 10px;
   }
   button{
      margin-top: 30px;
      font-weight: bold;
      width: 600px;
      height: 60px;
      border-radius: 30px;
      background-color: #FFF915;
      box-shadow: none;
      font-size: 25px;
    
   }

}

`

export const DivFooter = styled.footer`

font-size: 20px;
padding-bottom: 0px;
background-color: #383838;
color: white;
border-color: black;

div {
   padding-left: 3rem;
   
}

h1 {
   margin-top: 25px;
}

p {
   width: 30%;
   padding-top: 20px;
   

}
.direitos {
   bottom: 10px;
   width: 100%;
   text-align: center;
   padding-bottom: 0;

   
}

`

export const DivHeader = styled.header`
   padding: 20px;
   font-size: 1.5rem;
   background-color: #126E51 ;
   color: white;
   display: flex;
   justify-content: space-between;
   list-style: none;


   span{
      color: #FFF915;
   }

    ul{
      display: flex;
      
    }

    li {
      position: relative;
      display: inline;
      margin: 10px 20px 0 15px;

    button {
      color: black;
      background-color: #FFF915;
      border-radius: 3px;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 2px;
      padding-bottom: 2px;
      font-size: 25px;
   }
     
      
    }
     a {
      color: white;
      display: flex;
      justify-content: space-aroud;
      font-size: 25px;
      text-decoration: none;
    }
    .login {
      color: black;
      background-color: #FFF915;
      border-radius: 3px;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 2px;
      padding-bottom: 2px;
    }   
`


