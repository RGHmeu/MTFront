import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
import { VIDEOS_TYPES } from "./constGifs";
import { Link } from "react-router-dom";
import { useNavigate} from 'react-router-dom';
import julia from "../assets/Julia.png";
import contexto from "./myContext.js"

console.log("dentro do Item.js")
console.log("contexto"+contexto)

export default function Item(props) {
    const product = props.product
    const navigate = useNavigate()

    console.log("dentro do export do item.js")

    // Função para confirmar escolha do movimento
    const escolheMov = () => {
        if (window.confirm(`Movimento escolhido:`)) {
            alert('Movimento guardado com sucesso!')
        }
    }

    // Função para excluir movimento
    const deletar = () => {            
        alert('Movimento ' + product.nome + ' será excluído.')
            const item = product.id
    
            let url = 'http://127.0.0.1:5000/mov?id='+item;
            fetch(url, {
              method: 'DELETE',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
              }
            }).then(response => response.json())
            .then(data => {
                console.log(data);
                alert("Item excluído");
            });

            navigate('/menu')            
        }
    
     // Função para excluir movimento
    
    const excluiMov = () => {
        if (window.confirm(`Movimento a excluir: `+product.nome)) {
            console.log(product.nome)
            console.log(product.id)
            deletar()
        }
    }
/*
            useEffect(() => {
                const item = product.id
                axios.delete('http://127.0.0.1:5000/mov/nome?id='+item)
                    .then((response) => response.json())
                    .catch(error => console.log(error))
            })
        } 
    }
*/
        return (
        <article className="product">
            <img src={VIDEOS_TYPES[product.image]} alt={"julia"} />

            <Link to={`/products/${product.id}/${product.nome}`} state={{productInfo: product}}>
                <p className="name-product">{product.nome}</p>
            </Link>

            <p />
            <button className="botao" onClick={escolheMov}>Escolher</button>
            <button className="botao" onClick={excluiMov}>Excluir</button>
            <p />
            <button className="botao" onClick={() => 
                navigate('/menu')}>Voltar</button>

            <button className="botao" onClick={() => 
                navigate('/')}>Sair</button>

        </article>
    )
}