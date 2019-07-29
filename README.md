# Desafio Frontend Barato Coletivo 2019

## Ambiente
Resolvi criar uma aplicação como um todo, mesmo que seja algo só para o front-end. Utilizei o **Laravel** na última versão com o **preset do React.js**. Escolhi React.js ao invés do Vue.js (padrão do Laravel) pois tenho mais familiaridade com ele e também porque vi que utilizam React Native na stack. Então quis mesclar ferramentas de todos os ambientes (front-end, back-end, app), pois acredito que seja um profissional capaz de atuar (ou pelo menos ter noção) em todas essas frentes.
Utilizei o **Docker** para criar o ambiente PHP para executar a aplicação e também para ser mais fácil de replicarem quando forem testar. No ambiente também está configurado o MySQL, não estou usando, só para demonstrar que consigo configurar um ambiente com mais de um container.

## Executando o servidor
1. [Instalar o Docker](https://docs.docker.com/install/)
2. Na pasta raiz executar `docker-compose build` e depois `docker-compose up -d`. Isso irá instalar tudo necessário e levantará o servidor.
3. Vá ao endereço [http://localhost:8080](http://localhost:8080) para acessar a aplicação.

## Build do sistema
1. Primeiro precisa instalar as dependências do Laravel com o `composer install` na pasta `/src`.
2. Depois as dependências do Node.js por meio do `npm install` também na pasta `/src`.
3. Praticamente todo o código desenvolvido está na pasta `resources`, divididos nas pastas de acordo com a utilidade: `scss` para os estilos, `js` para os scrips e componentes do React.js. Como todo o layout foi criado usando React, não foi feito muitas coisas na pasta `views`.

- - -

É isto, espero que dê para executar legal.
