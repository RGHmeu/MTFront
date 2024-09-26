import { useLocation, useNavigate } from "react-router-dom"
import{useState} from 'react'
import { VIDEOS_TYPES } from "../components/constGifs";
import banner from '../assets/banner.png'
import julia from '../assets/Julia.png'
import axios from 'axios'

export default function ProductDetails() {
    const { state } = useLocation()
    const navigate = useNavigate()

    var nome = state.productInfo.nome
    var image = state.productInfo.image
    var texto = state.productInfo.texto
    var tipoTrab = state.productInfo.tipoTrab
    var ParteCorpo = state.productInfo.ParteCorpo
  
/*
  --------------------------------------------------------------------------------------
  Função para alterar um movimento na base do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/

const alteraMov = () => {

    nome = document.getElementById('newNome').value;
    image = document.getElementById('newImage').value;
    texto = document.getElementById('newTexto').value;
    tipoTrab = document.getElementById('newTipoTrab').value;
    ParteCorpo = document.getElementById('newParteCorpo').value;
  
    const formData = new FormData();
          formData.append('nome', nome);
          formData.append('image', image);
          formData.append('texto', texto);
          formData.append('tipoTrab', tipoTrab);
          formData.append('ParteCorpo', ParteCorpo);
    
          console.log("antes do PUT");
          for (const [key, value] of formData) {
          console.log(formData.textContent += `${key}: ${value}\n`)
          }

          alert("Será alterado o seguinte movimento: " +
            "\n " + nome + "\n " + "Para:" + "\n " + image + "\n " + tipoTrab + "\n " + ParteCorpo + "\n " + texto);    
/*  
        axios.put('http://127.0.0.1:5000/mov', 
        {formData})
        .then(resposta => {
            console.log(O put funcionou direito)   
        })
        .catch(error => {
            console.log(O put não funcionou)   
        })
        navigate('/Menu')
    } 
  */   
      let url = 'http://127.0.0.1:5000/mov';
      fetch(url, {
        method: 'PUT',
        body: formData
      })
        .then((response) => {response.json()
            alert("Alterado com sucesso")
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        navigate('/Menu')
    }

    return(
        <div className="content-products">
            <header>
                <div className="user">
                    <span>Usuário</span>
                </div>
            </header>

            <section className="banner">
                <img src={banner} alt="Banner" />
            </section>

            <div className="imagem">
                <img src={VIDEOS_TYPES[image] } alt={'julia'} />
                <br></br>
                {' IMAGEM '} 
            </div>
            <div className="imagem"> 
                <h2>{nome}</h2>
                <p>{texto}</p>
            </div>
            <div>
            <section className="newItem">
      {console.log("form dentro do return")}
      
      <form id="form" className="form-input-mov">
        <legend>Preencher com os dados do movimento a ser alterado na base: </legend>
        <input type="text" id="newNome" placeholder="nome" />
        <input type="text" id="newImage" placeholder="image" />
        <input type="text" id="newTipoTrab" placeholder="tipoTrab" />
        <input type="text" id="newParteCorpo" placeholder="ParteCorpo" />
        <input type="text" id="newTexto" placeholder="texto" />
        <button className="botaoIncluir" onClick={() => 
          alteraMov()} >Alterar</button>
      </form>
      
      </section>
            </div>
            <div>
            <button className="botaoComprido" onClick={() => 
                navigate('/products/') }>Voltar</button>
            <p></p>
            <button className="botaoComprido" onClick={() => 
                navigate('/') }>Sair</button>
            </div>
        </div>
    )
}