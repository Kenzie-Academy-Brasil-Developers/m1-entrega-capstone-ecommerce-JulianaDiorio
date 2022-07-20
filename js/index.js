//CHAMAR BODY
const body = document.querySelector('body')

//CRIAR HEADER - filho body
const header = document.createElement('header')
body.appendChild(header)

//DIV CABECALHO - FILHO HEADER
const cabecalho = document.createElement('nav')
cabecalho.classList.add('cabecalho')
header.appendChild(cabecalho)

// IMG LOGO - FILHO CABECALHO
const logo = document.createElement('img')
logo.classList.add('logo')
logo.src = "./Projeto 1/Partum Logo - Original - 5000x5000.png"
logo.alt = "Logo Partum"
cabecalho.appendChild(logo)

//DIV MENU - FILHO CABECALHO
const menu = document.createElement('div')
menu.classList.add('menu')
cabecalho.appendChild(menu)

//ICONES NAVEGAÇÃO - FILHOS MENU
const catTodos = document.createElement('button')
catTodos.classList.add('catTodos')
catTodos.innerText = 'Todos'
const catAcessorios = document.createElement('button')
catAcessorios.classList.add('catAcessorios')
catAcessorios.innerText = 'Acessórios'
const catUtilidades = document.createElement('button')
catUtilidades.classList.add('catUtilidades')
catUtilidades.innerText = 'Utilidades'
const catCosmeticos = document.createElement('button')
catCosmeticos.classList.add('catCosmeticos')
catCosmeticos.innerText = 'Cosméticos'
menu.append(catTodos, catAcessorios, catUtilidades, catCosmeticos)

//EVENTO FILTRAR NAVEGADORES


//MAIN - FILHO BODY
const main = document.createElement('main')
body.appendChild(main)

//SECTION PRODUTOS - FILHO MAIN
const produtos = document.createElement('section')
produtos.classList.add('produtos')
main.appendChild(produtos)

//UL - FILHO PRODUTOS
const listagemProdutos = document.createElement('ul')
listagemProdutos.classList.add('listagemProdutos')
produtos.appendChild(listagemProdutos)





//SECTION CARRINHO
const carrinho = document.createElement('section')
carrinho.classList.add('carrinho')
main.appendChild(carrinho)

//DIV CAMPOPESQUISA - FILHO SECTION CARRINHO
const campoPesquisa = document.createElement('div')
campoPesquisa.classList.add('campoPesquisa')
carrinho.appendChild(campoPesquisa)

//INPUT - FILHO CAMPOPESQUISA
const input = document.createElement('input')
input.type = 'text'
input.placeholder = 'Digite aqui sua pesquisa'
campoPesquisa.appendChild(input)

//BUTTON PESQUISA - FILHO CAMPOPESQUISA
const botaoPesquisa = document.createElement('button')
botaoPesquisa.classList.add('botaoPesquisa')
botaoPesquisa.innerText = 'Pesquisar'
campoPesquisa.appendChild(botaoPesquisa)

//DIV CARRINHOCOMPRAS - FILHO CARRINHO
const carrinhoCompras = document.createElement('div')
carrinhoCompras.classList.add('carrinhoCompras')
carrinho.appendChild(carrinhoCompras)

//H3 TITULOCARRINHO - FILHO CARRINHOCOMPRAS
const tituloCarrinho = document.createElement('h3')
tituloCarrinho.classList.add('tituloCarrinho')
tituloCarrinho.innerText = 'Carrinho de compras'
carrinhoCompras.appendChild(tituloCarrinho)

//SECTION ITENSCARRINHO - FILHO CARRINHOCOMPRAS
const itensCarrinho = document.createElement('section')
itensCarrinho.classList.add('itensCarrinho')
carrinhoCompras.appendChild(itensCarrinho)

//UL COMPRASCARRINHO - FILHO CARRINHO COMPRAS
const comprasCarrinho = document.createElement('ul')
comprasCarrinho.classList.add('comprasCarrinho')
itensCarrinho.appendChild(comprasCarrinho)

// //H4 - FILHO ITENSCARRINHO
// const h4 = document.createElement('h4')
// h4.innerText = 'Carrinho vazio'
// itensCarrinho.appendChild(h4)

// //H5 - FILHO ITENSCARRINHO
// const h5 = document.createElement('h5')
// h5.innerText = 'Adicione itens'
// itensCarrinho.appendChild(h5)




//SECTION COMPRAS - FILHO CARRINHOCOMPRAS
const compras = document.createElement('section')
compras.classList.add('compras')
carrinhoCompras.appendChild(compras)

//SPAN QUANTIDADECOMPRA - FILHO COMPRAS
const quantidadeCompra = document.createElement('span')
quantidadeCompra.classList.add('quantidadeCompra')
compras.appendChild(quantidadeCompra)

//SPAN QUANTIDADE - FILHO QUANTIDADECOMPRA
const quantidade = document.createElement('span')
quantidade.classList.add('quantidade')
quantidade.innerText = 'Quantidade: '
quantidadeCompra.appendChild(quantidade)

//FUNÇÃO PARA CALCULAR QUANTIDADE DE ITENS








//SPAN TOTALCOMPRA - FILHO COMPRAS
const totalCompra = document.createElement('span')
totalCompra.classList.add('totalCompra')
compras.appendChild(totalCompra)

//SPAN TOTAL - FILHO TOTALCOMPRA
const total = document.createElement('span')
total.classList.add('total')
total.innerText = 'Total:'
totalCompra.appendChild(total)






//FUNCTION LER ITENS DO OBJETO
function listarprodutos(listaprodutos, listagemProdutos){

    listagemProdutos.innerHTML = ''

    for(let i = 0; i <listaprodutos.length; i++){
        let produtosLista = listaprodutos[i]
        let cardProdutos = criarCardProdutos(produtosLista)
        listagemProdutos.appendChild(cardProdutos)
    }
}
//listarprodutos(products, listagemProdutos)

//FUNCTION CRIAR CARDS
function criarCardProdutos(produtosLista){
    let imagemProduto = produtosLista.imagem 
    let categoriaProduto = produtosLista.categoria 
    let nomeProduto = produtosLista.nome
    let descricaoProduto = produtosLista.descricao
    let precoProduto = produtosLista.preco 
    let idProduto = produtosLista.id 

    let liProduto = document.createElement('li')
    let tagImagem = document.createElement('img')
    let caracteristicasProdutos = document.createElement('div')
    let span = document.createElement('span')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    let strong = document.createElement('strong')
    let addCarrinho = document.createElement('button')

    //DEFININDO ID NO BUTTON
    if(idProduto != undefined){
        addCarrinho.setAttribute('idProduto', idProduto)
    }

    liProduto.classList.add('liProduto')
    tagImagem.classList.add('produtoImagem')
    caracteristicasProdutos.classList.add('caracteristicasProdutos')
    addCarrinho.classList.add('addCarrinho')

    tagImagem.src = imagemProduto
    tagImagem.alt = nomeProduto
    span.innerText = categoriaProduto
    h2.innerText = nomeProduto
    p.innerText = descricaoProduto
    strong.innerText = `R$ ${precoProduto}`.replace('.',',')
    addCarrinho.innerText = `Adicionar ao carrinho`

    liProduto.append(tagImagem, caracteristicasProdutos)
    caracteristicasProdutos.append(span, h2, p, strong, addCarrinho)



    addCarrinho.addEventListener("click", verificarCarrinho)


    function verificarCarrinho(evento){

        let buttonComprar = evento.target
    
        //VERIFICANDO SE O CLIQUE FOI EM UM BOTÃO
        if(buttonComprar.tagName === "BUTTON"){
            // let produto = buttonComprar.closest("li").cloneNode(true)
            // comprasCarrinho.appendChild(produto)
            let idCompra = buttonComprar.idProduto

            let verProduto = products.find(function(product){
                if(product.idProduto == idCompra){
                    return product
                }
            })

            adicionarCarrinho(verProduto)
        }
    }
    let fechamentoCarrinho = []

    function adicionarCarrinho(verProduto){

        for(let i = 0; i < fechamentoCarrinho.length; i++){
        if(fechamentoCarrinho[i].id === verProduto.id){
            return
        }
        //listarprodutos(fechamentoCarrinho, comprasCarrinho)
        }
        fechamentoCarrinho.push(verProduto)
    }
}
            //FUNÇÃO CALCULAR VALOR TOTAL - erradooooooooooooooooooooo
//             let precoTotal  = 0
//             function precoCompra(){

//         for(let i = 0; i < fechamentoCarrinho.length; i++){

//             precoTotal += fechamentoCarrinho.preco[i]
//             const valorTotal = document.createElement('span')
//             valorTotal.classList.add('valorTotal')
//             valorTotal.innerText = `R$ ${precoTotal}`.replace('.',',')
//             totalCompra.appendChild(valorTotal)
//             }
//             return precoTotal
//         }
//     }
//     return liProduto
// }

// // function quantidadeTotal()