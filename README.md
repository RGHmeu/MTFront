# Meu Front-end em React

Este é um projeto que faz parte dos requisitos para  aprovação na disciplina **Desenvolvimento Back-end Avançado**. 

O objetivo da aplicação é a divulgação de exercícios físicos.
Os exercícios são mostrados por meio de gifs animados apresentando um personagem virtual executando os movimentos, evitando assim problemas com direitos de imagem.
O acesso aos exercícios poderá ser feito sem necessidade do usuário se cadastrar, esperando-se que a renda venha de anúncios, como acontece nos joguinhos.
Mais tarde será permitido ao usuário se cadastrar para, eventualmente, sugerir novos movimentos que serão avaliados para possível inclusão no banco de dados da aplicação, tornando o uso do aplicativo mais atrativo.
O usuário poderá selecionar um subconjunto dos movimentos disponíveis para compor uma série de exercícios para seu uso. Futuramente, o aplicativo auxiliará o usuário na edição de suas séries de exercícios. 

Entretanto, este MVP assume que o usuário é o administrador e poderá, além de consultar, incluir e excluir movimentos, para cumprir os requisitos desta sprint.

![alt desenho](src/assets/Gráfico.png)

É utilizada uma API externa da Google que fornece a geolocalização. A latitude e a longitude, assim como o momento em que ocorreu o uso do aplicativo, são guardados num arquivo na base de dados para futuras estatísticas.

## Como executar o front

Será necessário ter uma api rodando, provendo as rotas necessárias para execução deste MVP.

Será necessário ter o [Nodejs, ou o npm,](https://nodejs.org/en/download/) instalado. 

É necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo.

```
$ npm install
```

Este comando instala as dependências/bibliotecas, descritas no arquivo `package.json`. Uma pasta chamada `node_modules` será criada.

Para executar a interface basta executar o comando: 

```
$ npm start
```

As telas aparecerão no navegador:
    [http://localhost:3000/#/](http://localhost:3000/#/).

## Como executar através do Docker

Certifique-se de ter o Docker instalado e em execução na sua máquina
Navegue até o diretório que contém o Dockerfile no terminal. Execute, como administrador, o seguinte comando para construir a imagem Docker:

$ docker build -t front .

Uma vez criada a imagem, para executar o conteiner basta executar, como administrador, o seguinte comando:

$ docker run -p 80:80 front

Uma vez executando, basta abrir o http://localhost:80/#/ no navegador.

Alguns comandos úteis:

Para verificar se a imagem foi criada você pode executar o seguinte comando:

$ docker images

$ docker ps -a
