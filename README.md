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
Você será responsável por criar a nova tela inicial das nossas ofertas. Vai consumir uma API rest que retorna as ofertas e irá desenvolver todo o frontend com a listagem inicial das ofertas, listagem das categorias, exibição de oferta e adicionar ao carrinho.

### Tela inicial

Você vai implementar a tela inicial, atentar para agrupar as ofertas por categoria.
Cada oferta no JSON tem descrito Titulo, descrição, Preço De, Preço Por e Categoria.

###### Sugestão de melhorias: Exibir o bloco como slide, busca, Carrinho via ajax, fique a vontade para criar melhorias no layout.

### Tela de oferta

Ao clicar em comprar em alguma oferta o site deve redirecionar para uma página que exibe a oferta completa.
A oferta completa exibe uma galeria de imagens, a descrição completa e um botão de pagar.
###### Sugestão de melhorias: Slide nas imagens.

### Tela de pagamento

Após a tela da oferta, ao clicar em pagar o site deve redirecionar para a página de pagamento. Nessa página deve ser mostrado um resumo do pedido (Oferta que ele comprou) e um formulário de cartão de crédito. Esse formulário não precisa ter ação, apenas marcação dos inputs.

###### Sugestão de melhorias: Validar formulário, verificar a bandeira do cartão, mascaras, miniatura do cartão.

### Requisitos do projeto

 - Para o desenvolvedor Jr/Pleno: Usar React / Vuejs, Angular ou a lib de Webcomponents de sua preferência para desenvolver o projeto
 - Para o estágio: Fique a vontade para fazer com sua arquitetura preferida (Usar webcomponents é um grande diferencial)
 - Os dados da API devem ser requisitados em tempo real do servidor
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
|Listar ofertas|`https://playground.barato.com.b/desafiofront/api/offers` |
|Listar oferta|`https://playground.barato.com.b/desafiofront/api/offer/{id}`



### Parâmetros da API
|Parâmetro                |Valor                         
|----------------|------------------------------------------------------------|
|{id}|ID da oferta (Obtido pelo campo id no método de Listar ofertas |



### MOCKUP DAS TELAS
Veja o mockup e use como base para as telas. Lembre-se: O design precisa ser responsivo. 
