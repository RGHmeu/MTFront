import { useEffect, useState, useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Item from "../components/Item"
import banner from '../assets/banner.png'
import axios from 'axios'
import products from '../products.json'
import Menu from '../components/Menu.js'

export default function Products(props) {
  const [productList, setProductList] = useState([])
  const [menuList, setMenuList] = useState()
  const { state } = useLocation()
  const navigate = useNavigate()

/*
  --------------------------------------------------------------------------------------
  Função para inserir um movimento na base do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/

const incluiMov = () => {
  console.log("dentro do incluiMov");
  var nome = document.getElementById('newNome').value;
  var image = document.getElementById('newImage').value;
  var texto = document.getElementById('newTexto').value;
  var tipoTrab = document.getElementById('newTipoTrab').value;
  var ParteCorpo = document.getElementById('newParteCorpo').value;

   const formData = new FormData();
        formData.append('nome', nome);
        formData.append('image', image);
        formData.append('texto', texto);
        formData.append('tipoTrab',tipoTrab);
        formData.append('ParteCorpo', ParteCorpo);
  
        console.log("antes do POST");

        for (const [key, value] of formData) {
        console.log(formData.textContent += `${key}: ${value}\n`)
        }
        alert("Será incluído o seguinte movimento: " +
          "\n " + nome + "\n " + image + "\n " + tipoTrab + "\n " + ParteCorpo + "\n " + texto);    

//      axios.post('http://127.0.0.1:5000/mov', 
//      {formData})
//      alert("Eu sou o quinto alert!");
//  } 
   
    let url = 'http://127.0.0.1:5000/mov';
    fetch(url, {
      method: 'post',
      body: formData
    })

      .then((response) => {response.json() 
        alert("Incluído com sucesso")
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      navigate('/Menu')
  }

//  console.log(menuList.menuTab[0, 0]);
// Filtragem segundo o menu

  useEffect(() => {
//    setProductList(products.movs)
// ou

    axios.get('http://127.0.0.1:5000/movs')
      .then(res => setProductList(res.data.movs))
      .catch(error => console.log(error))
  }, [])


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
      <section className="newItem">
      {console.log("form dentro do export")}
      
      <form id="form" className="form-input-mov">
        <legend>Preencher com os dados do movimento a ser incluído na base: </legend>
        <input type="text" id="newNome" placeholder="nome" />
        <input type="text" id="newImage" placeholder="image" />
        <input type="text" id="newTipoTrab" placeholder="tipoTrab" />
        <input type="text" id="newParteCorpo" placeholder="ParteCorpo" />
        <input type="text" id="newTexto" placeholder="texto" />
        <button className="botaoIncluir" onClick={() => 
          incluiMov()} >Incluir</button>
      </form>
      
      </section>

      <section className="main-products">
        {productList.map((p, index) => (
          <Item key={index} product={p} 
          />
        ))}
        {console.log("lista")}
        {console.log({Item})}
      </section>
      <button className="botaoComprido" onClick={() => 
        navigate('/Menu') }>Voltar</button>
      <p></p>
      <button className="botaoComprido" onClick={() => 
        navigate('/') }>Sair</button>
      <p></p>
      <footer className="footer">
        <p>Estes exercícios foram criados para efeito de demonstração.
        Não nos responsabilizamos pelos possíveis efeitos derivados de sua prática.</p>
      <p></p>
      </footer>
    </div>
  )
}
