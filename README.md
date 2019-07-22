# Desafio Frontend Barato Coletivo 2019

Oi! Quer fazer parte do nosso time **Barato Coletivo**? Se você deseja participar do nosso processo seletivo, siga as instruções desse desafio e nos mande sua resolução em um *pull request* nesse repositório do Github.


# Sobre o Barato
Somos uma empresa a 10 anos no mercado. O maior e-commerce de serviços e oportunidades do nordeste. Nosso grande desafio é continuar crescendo e acompanhando o mercado cada vez mais competitivo. 

## Nossa stack:
- App: Ionic1, Ionic 4 / React Native
- Site: Laravel / Zend Framework / Code Igniter
- Outras tecnologias utilizadas: Linux / Nodejs / Vuejs / MySQL / Postgresql / Docker / AWS


# Vagas disponíveis
 - Desenvolvedor Estágio Frontend (Limite para envio do desafio: 29/07/2019)
 - Desenvolvedor CLT Frontend (Jr/Pleno) (Limite para envio do desafio: 29/07/2019)


# Conhecimentos necessários para Frontend Pleno

Nesse desafio você deve ser capaz de consumir uma API REST e criar um design responsivo e usual para exibir as informações. Também será necessário desenvolver algumas lógicas de busca / filtro e listagens. Esses são os conhecimentos básicos que desejamos que você tenha para fazer parte do time Frontend.

## O desafio
Você será responsável por criar a nova tela inicial das nossas ofertas. 
Para isso, vai consumir uma API rest que retorna uma lista de ofertas e irá desenvolver um frontend legal com a listagem inicial das ofertas, agrupadas por categoria em blocos ou listas.
Cada oferta na API possui o campo categoria, mas elas não vem organizadas. Você terá de organizar as ofertas por categoria na lista.


### Tela inicial

Agrupe as ofertas por categoria, você precisa exibir um card com pelo menos a Imagem, Titulo, Preço e um botão de Comprar que deve redirecionar para uma outra URL.
Faça o possível para agrupar as ofertas por categoria.
Fique a vontade para implementar melhorias nessa página (Como sliders, passadores, uma busca, filtros, etc).


### Tela de oferta

Ao clicar numa oferta você deve implementar uma nova tela para exibir as informações da oferta, ou seja a página da oferta.
Exibir os detalhes e um slide com as imagens.
Essa tela deve ter um botão Pagar. Esse botão vai para uma nova tela, a de checkout

###### Sugestão de melhorias: Slide nas imagens.

### Tela de Checkout

Após a tela da oferta, ao clicar em pagar o site deve redirecionar para a página de pagamento. 
Nessa página deve ser mostrado um resumo do pedido (Oferta que ele comprou) e um formulário de cartão de crédito. Esse formulário não precisa ter ação, apenas marcação dos inputs.


### Requisitos do projeto

 - Os dados da API devem ser requisitados em tempo real do servidor (Usando axios, fetch ou sua biblioteca de preferëncia)
 - Design precisa ser responsivo
 - Atentar para criar um design limpo e organizado.
 - Você pode usar a Lib de UI que preferir (Bootstrap, Foundation, Material, etc) fique a vontade.

### Diferenciais

 - Mobile First
 - Código limpo, organizado e documentado (quando necessário)
 - Carrinho de compras (Poder ir para a tela de pagamento com mais de uma oferta)
 - Em conformidade com o padrão PWA


# Métodos da API


|Método                |URL GET                         
|----------------|------------------------------------------------------------|
|Listar ofertas|`https://playground.barato.com.br/desafio-front/api/offers` |
|Listar oferta|`https://playground.barato.com.br/desafio-front/api/offer/{id}`



### Parâmetros da API
|Parâmetro                |Valor                         
|----------------|------------------------------------------------------------|
|{id}|ID da oferta (Obtido pelo campo id no método de Listar ofertas |



### MOCKUP DAS TELAS
Veja o mockup e use como base para as telas. Lembre-se: O design precisa ser responsivo.


|Tela inicial|Tela da oferta|Tela de pagamento
|-------------|------------------------|----------------------|
| ![tela home mockup](https://ws2.baratocoletivo.com.br/assets/mockups/Home.png)| ![tela oferta mockup](https://ws2.baratocoletivo.com.br/assets/mockups/Oferta.png)| ![tela pagamento mockup](https://ws2.baratocoletivo.com.br/assets/mockups/Pagamento.png)|


### Como nos enviar a resolução

Adicione um Pull request com sua solução para o problema ou compacte um ZIP do seu código e envie para:
`joaoneto[a]baratocoletivo.com.br`
Não esqueça de criar um README com instruções de como fazer seu código funcionar.

Você também pode enviar um link público da solução para meu email (Seja Heroku, GCloud, Aws ou o provedor de sua preferência, desde que o código fonte não esteja criptografado)
(Codepen também vale)
