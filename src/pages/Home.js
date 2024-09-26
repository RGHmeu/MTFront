import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from "react"

import banner from '../assets/banner.png'
import camposFuturos from '../assets/camposFuturos.png'

 
export default function Home() {
    const navigate = useNavigate()
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

/*
  --------------------------------------------------------------------------------------
  Função para guardar o momento do uso e a geolocaliazação do usuário
  --------------------------------------------------------------------------------------
*/

geoloc(latitude,longitude)
salvarLocalizacao()

function geoloc(latitude,longitude){
    if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition(function(position){
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)

            console.log("dentro do geoloc")
            console.log("latitude = "+latitude)
            console.log("longitude = "+longitude)
            
        }, function(error){
               console.log(error)
        })
    }else{
        alert('geolocalização: tem não');
    }
}

function salvarLocalizacao() {
    let tempo = new Date().getTime();
    console.log("tempo = "+tempo)
    // Definir o conteúdo
    const formData = new FormData();
    formData.append('tempo', tempo);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    
    let url = 'http://127.0.0.1:5000/secao';
    fetch(url, {
      method: 'post',
      body: formData
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error:', error);
      });

}

    return (
        <div className="content-product">
            <header>
                <div className="user">
                    <span>Usuário</span>
                </div>
            </header>

            <section className="banner">
                <img src={banner} alt="Banner" />
            </section>
            <section>
                <div className="menu">
                    <button className='botaoComprido' onClick={() => 
                        navigate('/menu')}>Entrar</button>
                </div>
            </section>
            
            <section className="camposFuturos">
                
                <img src={camposFuturos} alt="Futuros campos" />
                <p></p>
            </section>
            <footer className="footer">
            <p>Em futuro próximo, o cadastramento poderá ser feito, 
            caso o usuário queira sugerir novos movimentos.</p>
            <p></p>
            </footer>
        </div>

    )

}