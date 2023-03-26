# Desafio de processo seletivo - Desenvolvedor Front-End Júnior

Este é o desafio proposto para avaliar as habilidades de desenvolvimento front-end de candidatos à vaga de desenvolvedor front-end júnior. O objetivo é criar o front-end de uma loja de quadrinhos virtual utilizando React, com uma listagem paginada das HQs, uma página de visualização individual de cada HQ e um carrinho de compras.

## Como acessar a aplicação
A aplicação pode ser acessada através de um navegador web, no seguinte endereço: https://marvel-9aij-r9obawuo3-30emanuel.vercel.app

## Funcionalidades
- Listagem paginada das HQs: a página principal da aplicação apresenta uma listagem paginada das HQs disponíveis para compra. Cada item da lista exibe a imagem da capa da HQ, o título e o preço.

- Página de visualização individual de cada HQ: ao clicar em um item da lista de HQs, o usuário é direcionado para uma página de visualização individual da HQ, que apresenta informações detalhadas sobre a HQ, incluindo a sinopse e outras informações relevantes.

- Carrinho de compras: o usuário pode adicionar HQs ao carrinho de compras, que apresenta a listagem de todas as HQs adicionadas, o valor total da compra e um campo para aplicar cupons de desconto.

- Sistema de cupons: a aplicação conta com um sistema de cupons de desconto, que podem ser aplicados no carrinho de compras. Os cupons disponíveis e seus respectivos descontos são:

```
{ code: "50OFF", discount: 50, valid: "2023-12-31" },
{ code: "10OFF", discount: 10, valid: "2023-05-25" },
{ code: "20EXPIRADO", discount: 20, valid: "2023-03-25" }
```

Os cupons podem ser aplicados no campo "CUPOM" do carrinho de compras, e são válidos até a data indicada no campo "valid".
